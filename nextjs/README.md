# Next.js SDK Demo

This is a demo Next.js app (using app router) showcasing the [@flagsync/nextjs-sdk](https://github.com/flagsync/nextjs-sdk) for feature flag usage.

## ✨ Features

- Type-safe flag evaluation with the `flag` function
- Event tracking with the `track` function
- Real-time flag updates
- FlagSync CLI included ([@flagsync/cli](https://github.com/flagsync/cli))

## 🚀 Quick Start

1. Add your FlagSync SDK key to `.env`:
   ```dotenv
   FLAGSYNC_SDK_KEY=your-key-here
   ```
   > To find this, navigate to the desired workspace environment from the [Dashboard](https://www.flagsync.com/dashboard/settings/organization/workspaces/). Be sure to use a server-side SDK key.
2. Install dependencies and start the dev server:
   ```bash
   npm install
   npm run dev
   ```
3. Update the flag key in `lib/flagsync/flags.ts` to the flag you want to test:
   ```tsx
    export const killSwitchFlag = flag<boolean>({
      identify,
      adapter: adapterBool,
      defaultValue: false,
      key: 'my-first-kill-switch',
    });
   ```
4. Visit [http://localhost:3000/](http://localhost:3000/) to see the flag value and try out the examples.
5. Toggle the flag in the [Flags Dashboard](https://www.flagsync.com/dashboard/flags/) and see updates in the app on refresh.

## 🖥️ FlagSync CLI

> Optional, but highly recommended

Run the FlagSync CLI to get full type safety and autocompletion when accessing flags:

```bash
npm run generate
```

## 🔧 Example Usage

```tsx
export async function ExampleFlagServer() {
  const killswitch = await killswitchFlag();
  return <div>{killswitch ? 'Enabled' : 'Disabled'}</div>
}
```

## 📖 Documentation

For more detailed information about the SDK features and usage, visit:
- [Next.js SDK Documentation](https://docs.flagsync.com/sdks-server-side/nextjs)
