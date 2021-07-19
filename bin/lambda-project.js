#!/usr/bin/env node
const cdk = require('@aws-cdk/core');
const { LambdaProjectStack } = require('../lib/lambda-project-stack');

const app = new cdk.App();
new LambdaProjectStack(app, 'LambdaProjectStack');
