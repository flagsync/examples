import logo from '/logo.svg'
import {FlagSyncFactory} from "@flagsync/js-sdk";

// Initialize the SDK
const factory = FlagSyncFactory({
  sdkKey: import.meta.env.VITE_FLAGSYNC_SDK_KEY,
  core: {
    key: 'user-123',
    attributes: {
      plan: 'premium',
      country: 'US'
    }
  }
});

// Get the client
const client = factory.client()

// Wait for SDK readiness
await client.waitForReady();

// Evaluate a flag
const isEnabled = client.flag('my-first-kill-switch');

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="flex items-center gap-2">
     <a href="https://www.flagsync.com" target="_blank">
      <img src="${logo}" class="size-12" alt="FlagSync logo" />
     </a>
     <h1 class="text-2xl font-bold">FlagSync JavaScript SDK Demo</h1>
    </div>   
    <p class="mt-10 text-lg">     
      The <span class="font-mono">my-first-kill-switch</span> feature is <span class="font-mono">${isEnabled === true ? 'enabled' : 'disabled'}</span>    
    </p>
    </p>
  </div>
`
