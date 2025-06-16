export const FLAG_TSX = `import { killSwitchFlag } from '@/lib/flagsync/flags';

export async function ExampleFlagServerSecond() {
  const killSwitch = await killSwitchFlag();
  return (
    <div>
      The <span className="font-mono">{killSwitchFlag.key}</span> feature is{' '}
      <span className="font-mono">{killSwitch ? 'enabled' : 'disabled'}</span>
    </div>
  );
}
`;

export const KILL_SWITCH_FLAG = `import { createBoolFlagAdaptor } from '@flagsync/nextjs-sdk';
import { flag } from 'flags/next';

import { client, identify } from '@/lib/flagsync';

const adapterBool = createBoolFlagAdaptor(client);

export const killSwitchFlag = flag<boolean>({
  identify,
  adapter: adapterBool,
  defaultValue: false,
  key: 'my-first-kill-switch',
});
`;

export const INSTALL_COMMAND = `npm install @flagsync/nextjs-sdk`;

export const FLAGSYNC_CLIENT = `import { createFlagSyncClient } from '@flagsync/nextjs-sdk';

export const client = createFlagSyncClient({
  sdkKey: process.env.FLAGSYNC_SDK_KEY!,
});
`;
