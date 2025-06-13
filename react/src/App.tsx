import { useState } from 'react';
import { FlagSyncProvider, FsConfig } from '@flagsync/react-sdk';

import { StorageKey } from '@/constants.ts';
import { logger } from '@/lib/logger.ts';

import { AppHeader } from '@/components/app.header.tsx';
import { ExampleApp } from '@/sdk-examples/example.app.tsx';

function App() {
  const [waitForReady, setWaitForReady] = useState(() => {
    const storedValue = localStorage.getItem(StorageKey.Readiness);
    if (storedValue === null) return false;
    try {
      const parsed = JSON.parse(storedValue);
      return typeof parsed === 'boolean' ? parsed : false;
    } catch {
      return false;
    }
  });

  /**
   * Find the various FsConfig option here:
   * https://docs.flagsync.com/sdks-client-side/react#configuration
   */
  const config: FsConfig = {
    sdkKey: import.meta.env.VITE_FLAGSYNC_SDK_KEY,
    core: {
      key: 'userId-123',
    },
    logLevel: 'DEBUG',
    logger: logger,
  };

  return (
    <div className="min-h-screen">
      <AppHeader />
      <div className="max-w-6xl mx-auto py-6 gap-y-4 flex flex-col">
        <FlagSyncProvider waitForReady={waitForReady} config={config}>
          <ExampleApp
            waitForReady={waitForReady}
            setWaitForReady={setWaitForReady}
          />
        </FlagSyncProvider>
      </div>
    </div>
  );
}

export default App;
