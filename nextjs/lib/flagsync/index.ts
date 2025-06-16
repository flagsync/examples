import { createFlagSyncClient, createIdentify } from '@flagsync/nextjs-sdk';

import { getFlagSyncUserContext } from './flagsync.user-context';

export const client = createFlagSyncClient({
  sdkKey: process.env.FLAGSYNC_SDK_KEY!,
  logLevel: 'DEBUG',
});

export const identify = createIdentify(getFlagSyncUserContext);
