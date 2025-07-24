export const FLAG_TSX = `import { killswitchFlag } from '@/lib/flagsync/flags';

export async function ExampleFlagServerSecond() {
  const killswitch = await killswitchFlag();
  return (
    <div>
      The <span className="font-mono">{killswitchFlag.key}</span> feature is{' '}
      <span className="font-mono">{killswitch ? 'enabled' : 'disabled'}</span>
    </div>
  );
}
`;

export const KILL_SWITCH_FLAG = `import { flag } from 'flags/next';
import { createAdapter } from '@flagsync/nextjs-sdk';

import { client, identify } from '@/lib/flagsync';

export const killswitchFlag = flag({
  identify,
  key: 'killswitch',
  // Specify the return type with a generic
  adapter: createAdapter(client)<boolean>(),
});
`;

export const INSTALL_COMMAND = `npm install @flagsync/nextjs-sdk`;

export const FLAGSYNC_CLIENT = `import { createClient, createIdentify } from '@flagsync/nextjs-sdk';
import { getContext } from '@/lib/flagsync/user-context';

export const client = createClient({
  sdkKey: process.env.FLAGSYNC_SDK_KEY!,
});

// Derive the user context for flag evaluation
export const identify = createIdentify(getContext);
`;

export const USER_CONTEXT = `import { dedupe } from 'flags/next';
import { ReadonlyHeaders, ReadonlyRequestCookies } from 'flags';
import { nanoid } from 'nanoid';
import type { NextRequest } from 'next/server';

const generateId = dedupe(async () => nanoid());

// Return the user context (FsUserContext)
export const getContext = async (params: {
  cookies: ReadonlyRequestCookies | NextRequest['cookies'];
  headers: ReadonlyHeaders | NextRequest['headers'];
}) => {
  const key = await getUserContextKey(params);
  
  return {
    key,
    attributes: {
      region: params.headers.get('x-region'),
    },
  };
};

// Every application will implement this differently, however the example 
// below uses cookies to get the logged-in user.
const getUserContextKey = async (params: {
  cookies: ReadonlyRequestCookies | NextRequest['cookies'];
  headers: ReadonlyHeaders | NextRequest['headers'];
}) => {
  const userId = params.cookies.get('user-id')?.value;
  if (userId) return userId;

  const visitorId = params.cookies.get('visitor-id')?.value;
  if (visitorId) return visitorId;

  return generateId();
};
`;
