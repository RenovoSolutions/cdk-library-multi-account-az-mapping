import * as path from 'path';
import {
  aws_lambda as lambda,
  Duration,
  aws_logs as logs,
  CustomResource,
  aws_iam as iam,
  aws_s3 as s3,
  RemovalPolicy,
  aws_s3_deployment as s3Deploy,
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
  /**
   * The lambda function code to use for the custom resource.
   *
   * For most use cases this should be left as the default, but
   * in cases where the custom resource needs to be deployed through
   * something like CloudFormation StackSets you may need to source
   * the lambda function code from S3 or some other location because
   * the CDK cant upload the local code to the correct asset location
   * for the StackSet target accounts.
   *
   * You can use the included `AzIdToNameMappingFunctionCodeCache` class to
   * cache the lambda function code in S3 and create a cross
   * account access policy to allow the StackSet target accounts
   * to access the code.
   *
   * @default - default lambda function code
   */
  readonly lambdaCode?: lambda.Code;
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

    const bundlingCmds = [
      'mkdir -p /asset-output',
      'pip install -r /asset-input/requirements.txt -t /asset-output',
      'cp index.py /asset-output/index.py',
    ];

    const onEventHandler = new lambda.Function(this, 'handler', {
      runtime: lambda.Runtime.PYTHON_3_13,
      code: props.lambdaCode ?? lambda.Code.fromAsset(path.join(__dirname, '../lambda'), {
        bundling: {
          image: lambda.Runtime.PYTHON_3_13.bundlingImage,
          command: [
            'bash', '-c', bundlingCmds.join(' && '),
          ],
        },
      }),
      handler: 'index.handler',
      description: 'Stores VPC mappings into parameter store',
      timeout: Duration.seconds(5),
      role,
    });

    new logs.LogGroup(this, 'logGroup', {
      logGroupName: `/aws/lambda/${onEventHandler.functionName}`,
      retention: props.logRetention ?? logs.RetentionDays.ONE_MONTH,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    const mapping = new CustomResource(this, 'mapping', {
      serviceToken: onEventHandler.functionArn,
      properties: {
        azIds: props.azIds || ['use1-az2', 'use1-az4', 'use1-az6'],
        prefix: props.ssmParameterPrefix || '/az-mapping/',
      },
    });

    this.mapping = mapping.getAtt('azIds').toString();
  }
}

export interface AzIdToNameMappingFunctionCodeCacheProps extends s3.BucketProps {}

export class AzIdToNameMappingFunctionCodeCache extends s3.Bucket {
  /**
   * The lambda.Code object that represents the contents of the bucket.
   */
  public readonly lambdaCode: lambda.Code;

  constructor(scope: Construct, id: string, props: AzIdToNameMappingFunctionCodeCacheProps) {
    const removalPolicy = props.removalPolicy ?? RemovalPolicy.DESTROY;
    const autoDeleteObjects = removalPolicy === RemovalPolicy.DESTROY;
    super(scope, id, {
      removalPolicy,
      autoDeleteObjects,
      ...props,
    });

    /** Force the final unzipped asset to be a zip by nesting zips */
    const bundlingCmds = [
      'mkdir -p /asset-output',
      'mkdir -p temp',
      'pip install -r /asset-input/requirements.txt -t /asset-input/temp',
      'cp index.py /asset-input/temp/index.py',
      'cd temp',
      'zip -r lambda.zip .',
      'zip -r /asset-output/temp.zip lambda.zip',
      'cd ..',
      'rm -rf ./temp',
    ];

    new s3Deploy.BucketDeployment(this, 'Deployment', {
      sources: [s3Deploy.Source.asset(path.join(__dirname, '../lambda'), {
        bundling: {
          image: lambda.Runtime.PYTHON_3_13.bundlingImage,
          command: [
            'bash', '-c', bundlingCmds.join(' && '),
          ],
        },
      })],
      destinationBucket: this,
      exclude: ['__pycache__/*', '*.pyc'],
      include: ['*.py'],
    });

    this.lambdaCode = lambda.Code.fromBucket(this, 'index.py');
  }

  /**
   * Add access to the whole organization to get
   * the lambda function code from the bucket.
   *
   * @param principalOrgId The organization ID to require for any accounts accessing the bucket.
   */
  public addOrgWideAccessPolicy(principalOrgId: string): iam.AddToResourcePolicyResult {
    return this.addToResourcePolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      principals: [new iam.StarPrincipal],
      actions: [
        's3:GetObject',
      ],
      resources: [this.arnForObjects('*')],
      conditions: {
        StringEquals: {
          'aws:PrincipalOrgID': principalOrgId,
        },
      },
    }));
  };

  /**
   * Add access to the specified accounts to get
   * the lambda function code from the bucket.
   *
   * @param principalAccountId The account ID to add access for.
   * @param principalOrgId (Optional) The organization ID to require for the account accessing the bucket.
   */
  public addAccountAccessPolicy(principalAccountId: string, principalOrgId?: string): iam.AddToResourcePolicyResult {
    return this.addToResourcePolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      principals: [new iam.AccountPrincipal(principalAccountId)],
      actions: ['s3:GetObject'],
      resources: [this.arnForObjects('*')],
      conditions: principalOrgId === undefined ? undefined : {
        StringEquals: {
          'aws:PrincipalOrgID': principalOrgId,
        },
      },
    }));
  };

  /**
   * Add access to the specified organizational units to get
   * the lambda function code from the bucket.
   *
   * @param principalOrgPaths The organizational unit paths to add access for.
   */
  public addOrgOuAccessPolicy(principalOrgPaths: string[]): iam.AddToResourcePolicyResult {
    return this.addToResourcePolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      principals: [new iam.StarPrincipal],
      actions: ['s3:GetObject'],
      resources: [this.arnForObjects('*')],
      conditions: {
        StringLike: {
          'aws:PrincipalOrgPaths': principalOrgPaths,
        },
      },
    }));
  }
};
