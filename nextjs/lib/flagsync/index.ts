import { createClient, createIdentify } from '@flagsync/nextjs-sdk';
import { getContext } from '@/lib/flagsync/user-context';

export const client = createClient({
  sdkKey: process.env.FLAGSYNC_SDK_KEY!,
});

export const identify = createIdentify(getContext);
