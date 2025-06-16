import { createBoolFlagAdaptor } from '@flagsync/nextjs-sdk';
import { flag } from 'flags/next';

import { client, identify } from '@/lib/flagsync';

const adapterBool = createBoolFlagAdaptor(client);

export const killSwitchFlag = flag<boolean>({
  identify,
  adapter: adapterBool,
  defaultValue: false,
  key: 'my-first-kill-switch',
});
