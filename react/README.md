# React SDK Demo

This repository serves as a demonstration and testing ground for the `@flagsync/react-sdk`. It showcases various features and capabilities of the SDK through practical examples.

## Features Demonstrated

- **Feature Flag Management**: Using the `useFlag` hook to get flags value with type safety and loading states
- **Event Tracking**: Implementation of the `useTrack` hook for user action tracking
- **SDK Configuration**: Examples of SDK setup with configuration options
- **Real-time Updates**: Demonstration of flag value changes and their effects
- **Debugging Tools**: Built-in logging for debug purposes

## Getting Started

1. Add the FlagSync SDK key for the target environment to `.env`:

> To find this, navigate to the desired Workspace Environment from the [Dashboard](https://www.flagsync.com/dashboard/settings/organization/workspaces/). Be sure to use a client-side SDK key.

```
VITE_FLAGSYNC_SDK_KEY=
```

2. Run the development server:

```bash
npm run dev
```

3. Navigate to `example.use-flag.tsx` to update the flag key from `my-first-kill-switch` to whatever flag you're testing:

```tsx
const { value, isReady } = useFlag(<flagKey>, <defaultValue>);
```

4. Navigate to http://localhost:5173/

5. Explore the different examples:
   - Feature flag usage with `useFlag`
   - Event tracking with `useTrack`
   - SDK configuration options
   - Real-time flag updates via flag changes in the Dashboard.
   - Debug logging

## Documentation

For more detailed information about the SDK features and usage, visit:
- [React SDK Documentation](https://docs.flagsync.com/sdks-client-side/react)
