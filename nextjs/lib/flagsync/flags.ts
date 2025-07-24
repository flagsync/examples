import { flag } from 'flags/next';
import { createAdapter } from '@flagsync/nextjs-sdk';

import { client, identify } from '@/lib/flagsync';

export const killswitchFlag = flag({
  identify,
  key: 'my-first-kill-switch',
  adapter: createAdapter(client)<boolean>(),
});
