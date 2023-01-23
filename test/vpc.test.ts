import {
  Stack,
  App,
  aws_ec2 as ec2,
  aws_ssm as ssm,
} from 'aws-cdk-lib';
import 'jest-cdk-snapshot';
import {
  AzIdToNameMapping,
} from '../src/index';

test('Snapshot', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  const mapping = new AzIdToNameMapping(stack, 'AzIdToNameMapping', {});

  const vpc = new ec2.Vpc(stack, 'vpc', {
    cidr: '10.0.0.0/16',
    availabilityZones: [
      ssm.StringParameter.fromStringParameterName(stack, 'az1', '/az-mapping/az1').stringValue,
      ssm.StringParameter.fromStringParameterName(stack, 'az2', '/az-mapping/az2').stringValue,
    ],
  });

  vpc.node.addDependency(mapping);

  expect(stack).toMatchCdkSnapshot({
    ignoreAssets: true,
  });
});