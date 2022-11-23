import * as path from 'path';
import {
  aws_lambda as lambda,
  Duration,
  aws_logs as logs,
  custom_resources as cr,
  CustomResource,
  aws_iam as iam,
} from 'aws-cdk-lib';
import { Construct } from 'constructs';

/**
 * The properties of a new AZ ID to name mapping
 */
export interface AzIdToNameMappingProps {
  /**
   * The target AZ IDs for mapping. Defaults to values for 3 zones in us-east-1.
   *
   * @default ['use1-az2', 'use1-az4', 'use1-az6']
   */
  readonly azIds?: string[];
  /**
   * The prefix to use for the SSM parameter names. Defaults to `/az-mapping/`.
   *
   * @default '/az-mapping/'
   */
  readonly ssmParameterPrefix?: string;
  /**
   * The number of days to retain log events in CloudWatch logs. Defaults to 30 days.
   *
   * @default logs.RetentionDays.ONE_MONTH
   */
  readonly logRetention?: logs.RetentionDays;
}

export class AzIdToNameMapping extends Construct {
  /**
   * The resulting mapping of AZ IDs to names
   */
  public readonly mapping: string;

  constructor(scope: Construct, id: string, props: AzIdToNameMappingProps) {
    super (scope, id);

    const handlerPolicy = new iam.ManagedPolicy(this, 'handlerPolicy', {
      statements: [
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          sid: 'AllowSSMParameterEdit',
          actions: [
            'ssm:PutParameter',
            'ssm:DeleteParameter',
            'ssm:AddTagsToResource',
          ],
          resources: [
            '*',
          ],
          conditions: {
            StringEquals: {
              'aws:ResourceTag/CdkAzMappingParameter': 'True',
            },
          },
        }),
        new iam.PolicyStatement({
          effect: iam.Effect.ALLOW,
          sid: 'AllowDescribeAZs',
          actions: [
            'ec2:DescribeAvailabilityZones',
          ],
          resources: [
            '*',
          ],
        }),
      ],
    });

    const role = new iam.Role(this, 'handlerRole', {
      assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
      managedPolicies: [
        handlerPolicy,
      ],
    });

    const onEventHandler = new lambda.Function(this, 'handler', {
      runtime: lambda.Runtime.PYTHON_3_8,
      code: lambda.Code.fromAsset(path.join(__dirname, '../lambda')),
      handler: 'index.handler',
      description: 'Stores VPC mappings into parameter store',
      timeout: Duration.seconds(5),
      logRetention: props.logRetention ?? logs.RetentionDays.ONE_MONTH,
      role,
    });

    const provider = new cr.Provider(this, 'provider', {
      onEventHandler,
      logRetention: props.logRetention ?? logs.RetentionDays.ONE_MONTH,
    });

    const mapping = new CustomResource(this, 'mapping', {
      serviceToken: provider.serviceToken,
      properties: {
        azIds: props.azIds || ['use1-az2', 'use1-az4', 'use1-az6'],
        prefix: props.ssmParameterPrefix || '/az-mapping/',
      },
    });

    this.mapping = mapping.getAtt('azIds').toString();
  }
}