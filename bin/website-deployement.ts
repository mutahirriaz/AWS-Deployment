#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { WebsiteDeployementStack } from '../lib/website-deployement-stack';

const app = new cdk.App();
new WebsiteDeployementStack(app, 'WebsiteDeployementStack');
