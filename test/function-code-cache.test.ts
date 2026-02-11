import {
  Stack,
  App,
} from 'aws-cdk-lib';
import 'jest-cdk-snapshot';
import { Template } from 'aws-cdk-lib/assertions';
import {
  AzIdToNameMappingFunctionCodeCache,
} from '../src/index';

test('FunctionCodeCache with addOrgWideAccessPolicy', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  const cache = new AzIdToNameMappingFunctionCodeCache(stack, 'FunctionCodeCache', {});
  cache.addOrgWideAccessPolicy('o-123456789');

  const template = Template.fromStack(stack);

  // Remove some properties that are not stable and not important for the snapshot test
  const json = template.toJSON();
  const deletes = Object.assign({},
    template.findResources('Custom::CDKBucketDeployment'),
    template.findResources('AWS::Lambda::Function'),
  );
  const deleteKeys = Object.keys(deletes);
  deleteKeys.forEach((key) => {
    delete json.Resources[key].Properties.SourceObjectKeys;
    if (json.Resources[key].Properties.Code) {
      delete json.Resources[key].Properties.Code.S3Key;
    }
  });

  expect(json).toMatchSnapshot();
});

test('FunctionCodeCache with addAccountAccessPolicy without org ID', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  const cache = new AzIdToNameMappingFunctionCodeCache(stack, 'FunctionCodeCache', {});
  cache.addAccountAccessPolicy('123456789012');

  const template = Template.fromStack(stack);

  // Remove some properties that are not stable and not important for the snapshot test
  const json = template.toJSON();
  const deletes = Object.assign({},
    template.findResources('Custom::CDKBucketDeployment'),
    template.findResources('AWS::Lambda::Function'),
  );
  const deleteKeys = Object.keys(deletes);
  deleteKeys.forEach((key) => {
    delete json.Resources[key].Properties.SourceObjectKeys;
    if (json.Resources[key].Properties.Code) {
      delete json.Resources[key].Properties.Code.S3Key;
    }
  });

  expect(json).toMatchSnapshot();
});

test('FunctionCodeCache with addAccountAccessPolicy with org ID', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  const cache = new AzIdToNameMappingFunctionCodeCache(stack, 'FunctionCodeCache', {});
  cache.addAccountAccessPolicy('123456789012', 'o-123456789');

  const template = Template.fromStack(stack);

  // Remove some properties that are not stable and not important for the snapshot test
  const json = template.toJSON();
  const deletes = Object.assign({},
    template.findResources('Custom::CDKBucketDeployment'),
    template.findResources('AWS::Lambda::Function'),
  );
  const deleteKeys = Object.keys(deletes);
  deleteKeys.forEach((key) => {
    delete json.Resources[key].Properties.SourceObjectKeys;
    if (json.Resources[key].Properties.Code) {
      delete json.Resources[key].Properties.Code.S3Key;
    }
  });

  expect(json).toMatchSnapshot();
});

test('FunctionCodeCache with addOrgOuAccessPolicy', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  const cache = new AzIdToNameMappingFunctionCodeCache(stack, 'FunctionCodeCache', {});
  cache.addOrgOuAccessPolicy(['o-123456789/r-abc1/ou-abc1-11111111/', 'o-123456789/r-abc1/ou-abc1-22222222/']);

  const template = Template.fromStack(stack);

  // Remove some properties that are not stable and not important for the snapshot test
  const json = template.toJSON();
  const deletes = Object.assign({},
    template.findResources('Custom::CDKBucketDeployment'),
    template.findResources('AWS::Lambda::Function'),
  );
  const deleteKeys = Object.keys(deletes);
  deleteKeys.forEach((key) => {
    delete json.Resources[key].Properties.SourceObjectKeys;
    if (json.Resources[key].Properties.Code) {
      delete json.Resources[key].Properties.Code.S3Key;
    }
  });

  expect(json).toMatchSnapshot();
});
