import { killSwitchFlag } from '@/lib/flagsync/flags';
import { ExampleFlag } from '@/app/_components/example.flag';
import { Button } from '@/components/ui/button';
import { cookies, headers } from 'next/headers';
import { getFlagSyncUserContext } from '@/lib/flagsync/flagsync.user-context';
import { client } from '@/lib/flagsync';

export async function ExampleFlagServer() {
  const killSwitch = await killSwitchFlag();
  return (
    <>
      <ExampleFlag name={killSwitchFlag.key} value={killSwitch} />
      <Button
        onClick={async () => {
          'use server';
          const ctx = await getFlagSyncUserContext({
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
