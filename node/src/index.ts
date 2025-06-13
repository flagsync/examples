import express from 'express';
import dotenv from 'dotenv';
import { FlagSyncFactory } from '@flagsync/node-sdk';

import { AppService } from './app.service.js';
import { getUserContext } from './utils/user-context.js';
import { userContextMiddleware } from './utils/user-context.middleware.js';

dotenv.config();

const sdkKey = process.env.FLAGSYNC_SDK_KEY!;

const app = express();
const port = 3000;

// Initialize the SDK
const factory = FlagSyncFactory({ sdkKey, logLevel: 'DEBUG' });

// Get the client
const client = factory.client();

// Wait for readiness
await client.waitForReady();

const appService = new AppService(client);

app.use(userContextMiddleware);

app.get('/', async (req, res) => {
  const ctx = getUserContext(req);
  const result = appService.doWork(ctx);
  res.json(result);
});

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

process.on('SIGINT', function () {
  console.log('\nGracefully shutting down from SIGINT (Ctrl-C)');
  server.close();
  process.exit(1);
});
