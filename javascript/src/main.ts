import logo from '/logo.svg'
import {FlagSyncFactory} from "@flagsync/js-sdk";

if (!import.meta.env.VITE_FLAGSYNC_SDK_KEY) {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = App('Missing required SDK key')
}

// Initialize the SDK
const factory = FlagSyncFactory({
  sdkKey: import.meta.env.VITE_FLAGSYNC_SDK_KEY,
  logLevel: 'DEBUG',
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
const isEnabled = client.flag<boolean>('my-first-kill-switch');

client.track('my-custom-event')

// NOTE: FlagSync CLI users: uncomment the below since the return type will be automatically inferred.
// const isEnabled = client.flag('my-first-kill-switch');

document.querySelector<HTMLDivElement>('#app')!.innerHTML = App(`
  The <span class="font-mono">my-first-kill-switch</span> feature is 
  <span class="font-mono">${isEnabled === true ? 'enabled' : 'disabled'}</span>
`)

/**
 * Tiny wrapper component
 * @param children
 * @constructor
 */
function App(children: string) {
  return `
    <div>
      <div class="flex items-center gap-2">
        <a href="https://www.flagsync.com" target="_blank">
          <img src="${logo}" class="size-12" alt="FlagSync logo" />
        </a>
        <h1 class="text-2xl font-bold">FlagSync JavaScript SDK Demo</h1>
      </div>   
      <p class="mt-10 text-lg">     
        ${children}
      </p>
    </div>
`
}
