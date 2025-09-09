# Nest.js SDK Demo

This is a demo Nest.js app showcasing the [@flagsync/nestjs-sdk](https://github.com/flagsync/nestjs-sdk) for feature flag usage.

## ✨ Features

- Type-safe flag evaluation
- Event tracking
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
   npm run start:dev
   ```
3. Visit [http://localhost:3001/](http://localhost:3001/) to see the flag value.
4. Toggle the flag in the [Flags Dashboard](https://www.flagsync.com/dashboard/flags/) and refresh to see changes.

## 🖥️ FlagSync CLI

> Optional, but highly recommended

Run the FlagSync CLI to get full type safety and autocompletion when accessing flags:

```bash
npm run generate
```

## 🔧 Example Response

```json
{
  "flag": {
    "key": "my-first-kill-switch",
    "value": false
  },
  "algorithm": "v1-rules-based",
  "result": [
    "itemX",
    "itemY",
    "itemZ"
  ]
}
```

## 📖 Documentation

For more detailed information about the SDK features and usage, visit:
- [Nest.js SDK Documentation](https://docs.flagsync.com/sdks-server-side/nestjs)
