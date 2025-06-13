import { Dispatch, SetStateAction } from 'react';

import { ToggleWaitForReady } from '@/components/toggle.wait-for-ready';
import { ExampleCodeSamples } from '@/sdk-examples/example.code-samples';
import { ExampleUseFlag } from '@/sdk-examples/example.use-flag';
import { ExampleUseTrack } from '@/sdk-examples/example.use-track';
import { CardSdkStatus } from '@/components/card.sdk-status';
import { CardDocumentation } from '@/components/card.documentation';
import { CardLogViewer } from '@/components/card.log-viewer';

export function ExampleApp({
  waitForReady,
  setWaitForReady,
}: {
  waitForReady: boolean;
  setWaitForReady: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <>
      <ToggleWaitForReady
        waitForReady={waitForReady}
        setWaitForReady={setWaitForReady}
      />
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4 flex flex-col gap-4">
          <ExampleCodeSamples />
          <ExampleUseFlag />
          <ExampleUseTrack />
        </div>
        <div className="col-span-2 flex flex-col gap-4">
          <CardSdkStatus />
          <CardDocumentation />
        </div>
      </div>
      <CardLogViewer />
    </>
  );
}
