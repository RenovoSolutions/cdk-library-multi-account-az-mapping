import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  projenrcTs: true,
  author: 'Renovo Solutions',
  authorAddress: 'webmaster+cdk@renovo1.com',
  cdkVersion: '2.202.0',
  jsiiVersion: '^5.8.0',
  defaultReleaseBranch: 'main',
  name: '@renovosolutions/cdk-library-multi-account-az-mapping',
  description: 'AWS CDK Construct Library to map zone-ids to zone-names to support multi-account zonal consistency for VPCs',
  repositoryUrl: 'https://github.com/RenovoSolutions/cdk-library-multi-account-az-mapping.git',
  keywords: [
    'cdk',
    'aws-cdk',
    'aws-cdk-construct',
    'projen',
  ],
  depsUpgrade: true,
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'deps-upgrade'],
    },
    exclude: ['projen'],
  },
  devDeps: [
    'jest-cdk-snapshot',
    '@aws-cdk/assert',
  ],
  githubOptions: {
    mergify: true,
    mergifyOptions: {
      rules: [
        {
          name: 'Automatically approve dependency upgrade PRs if they pass build',
          actions: {
            review: {
              type: 'APPROVE',
              message: 'Automatically approved dependency upgrade PR',
            },
          },
          conditions: [
            'label=auto-approve',
            'label=deps-upgrade',
            '-label~=(do-not-merge)',
            'status-success=build',
            'author=github-actions[bot]',
            'title="chore(deps): upgrade dependencies"',
          ],
        },
      ],
    },
    pullRequestLintOptions: {
      semanticTitle: true,
      semanticTitleOptions: {
        types: [
          'chore',
          'docs',
          'feat',
          'fix',
          'ci',
          'refactor',
          'test',
        ],
      },
    },
  },
  releaseToNpm: true,
  npmAccess: javascript.NpmAccess.PUBLIC,
  releaseWorkflow: true,
  docgen: true,
  eslint: true,
  publishToPypi: {
    distName: 'renovosolutions.aws-cdk-multi-account-az-mapping',
    module: 'renovosolutions_multi_account_az_mapping',
  },
  publishToNuget: {
    dotNetNamespace: 'renovosolutions',
    packageId: 'Renovo.AWSCDK.MultiAccountAzMapping',
  },
  gitignore: ['**/__pycache__/**'],
});

new javascript.UpgradeDependencies(project, {
  include: ['projen'],
  taskName: 'upgrade-projen',
  workflow: true,
  workflowOptions: {
    schedule: javascript.UpgradeDependenciesSchedule.expressions(['0 2 * * 1']),
  },
  pullRequestTitle: 'upgrade projen',
});

project.synth();