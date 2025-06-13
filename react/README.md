# React SDK Demo

This is a demo React app showcasing the [@flagsync/react-sdk](https://github.com/flagsync/react-sdk) for feature flag management.

## ✨ Features

- Type-safe flag evaluation with the `useFlag` hook
- Event tracking with the `useTrack` hook
- Real-time flag updates
- SDK configuration options
- Debug logging

## 🚀 Quick Start

1. Add your FlagSync SDK key to `.env`:
   ```dotenv
   VITE_FLAGSYNC_SDK_KEY=your-key-here
   ```
   > To find this, navigate to the desired workspace environment from the [Dashboard](https://www.flagsync.com/dashboard/settings/organization/workspaces/). Be sure to use a client-side SDK key.
2. Install dependencies and start the dev server:
   ```bash
   npm install
   npm run dev
   ```
3. Update the flag key in `example.use-flag.tsx` to the flag you want to test:
   ```tsx
   const { value, isReady } = useFlag(<flagKey>, <defaultValue>);
   ```
4. Visit [http://localhost:5173/](http://localhost:5173/) to see the flag value and try out the examples.
5. Toggle the flag in the [Flags Dashboard](https://www.flagsync.com/dashboard/flags/) and see real-time updates in the app.

## Example Usage

```tsx
const { value, isReady } = useFlag('my-first-kill-switch', false);
```

## Documentation

For more detailed information about the SDK features and usage, visit:
- [React SDK Documentation](https://docs.flagsync.com/sdks-client-side/react)
