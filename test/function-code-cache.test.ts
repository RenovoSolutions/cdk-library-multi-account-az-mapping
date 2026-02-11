import {
  Stack,
  App,
} from 'aws-cdk-lib';
import 'jest-cdk-snapshot';
import {
  AzIdToNameMappingFunctionCodeCache,
} from '../src/index';

test('FunctionCodeCache with addOrgWideAccessPolicy', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  const cache = new AzIdToNameMappingFunctionCodeCache(stack, 'FunctionCodeCache', {});
  cache.addOrgWideAccessPolicy('o-123456789');

  expect(stack).toMatchCdkSnapshot({
    ignoreAssets: true,
  });
});

test('FunctionCodeCache with addAccountAccessPolicy without org ID', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  const cache = new AzIdToNameMappingFunctionCodeCache(stack, 'FunctionCodeCache', {});
  cache.addAccountAccessPolicy('123456789012');

  expect(stack).toMatchCdkSnapshot({
    ignoreAssets: true,
  });
});

test('FunctionCodeCache with addAccountAccessPolicy with org ID', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  const cache = new AzIdToNameMappingFunctionCodeCache(stack, 'FunctionCodeCache', {});
  cache.addAccountAccessPolicy('123456789012', 'o-123456789');

  expect(stack).toMatchCdkSnapshot({
    ignoreAssets: true,
  });
});

test('FunctionCodeCache with addOrgOuAccessPolicy', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  const cache = new AzIdToNameMappingFunctionCodeCache(stack, 'FunctionCodeCache', {});
  cache.addOrgOuAccessPolicy(['o-123456789/r-abc1/ou-abc1-11111111/', 'o-123456789/r-abc1/ou-abc1-22222222/']);

  expect(stack).toMatchCdkSnapshot({
    ignoreAssets: true,
  });
});
