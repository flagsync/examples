import { cookies, headers } from 'next/headers';
import { killswitchFlag } from '@/lib/flagsync/flags';
import { client } from '@/lib/flagsync';

import { ExampleFlag } from '@/app/_components/example.flag';
import { Button } from '@/components/ui/button';
import { getContext } from '@/lib/flagsync/user-context';

export async function ExampleFlagServer() {
  const killswitch = await killswitchFlag();
  return (
    <>
      <ExampleFlag name={killswitchFlag.key} value={killswitch} />
      <Button
        onClick={async () => {
          'use server';
          const ctx = await getContext({
            cookies: await cookies(),
            headers: await headers(),
          });
          client.track(ctx, 'my-custom-event');
        }}
      >
        Track me
      </Button>
    </>
  );
}
