# FlagSync SDK Examples

This repository contains official example applications demonstrating the usage of FlagSync SDKs across different platforms and frameworks.

## Overview

FlagSync provides a comprehensive set of SDKs for feature management across various platforms:

### Client-Side SDKs
- [JavaScript SDK](./javascript) - For web applications
- [React SDK](./react) - For React applications

### Server-Side SDKs
- [Node.js SDK](./node) - For Node.js applications
- [Next.js SDK](./nextjs) - For Next.js applications
- [Nest.js SDK](./nestjs) - For Nest.js applications

## Getting Started

Each SDK directory contains a complete example application demonstrating:
- SDK initialization and configuration
- Feature flag evaluation
- User context management
- Event tracking
- Best practices and common patterns

## SDK Features

All FlagSync SDKs provide:

- **Feature Flag Management**: Evaluate feature flags with targeting rules and rollouts
- **User Context**: Define user attributes for targeted feature rollouts
- **Event Tracking**: Track user actions and metrics
- **Real-time Updates**: Receive flag updates via streaming or polling
- **Bootstrapping**: Initialize with default flag values
- **Storage Options**: Choose between memory and persistent storage
- **Error Handling**: Comprehensive error management and logging

## Documentation

For detailed documentation on each SDK, visit:

- [SDK Overview](https://docs.flagsync.com/sdks/overview)
- [JavaScript SDK](https://docs.flagsync.com/sdks-client-side/javascript)
- [React SDK](https://docs.flagsync.com/sdks-client-side/react)
- [Node.js SDK](https://docs.flagsync.com/sdks-server-side/nodejs)
- [Next.js SDK](https://docs.flagsync.com/sdks-server-side/nextjs)
- [Nest.js SDK](https://docs.flagsync.com/sdks-server-side/nestjs)

## Best Practices

1. **User Context**: Always provide a unique and persistent user key for accurate MAU tracking and consistent flag evaluations
2. **SDK Readiness**: Wait for SDK initialization before evaluating flags
3. **Error Handling**: Implement proper error handling for SDK operations
4. **Storage Strategy**: Choose appropriate storage type based on your needs
5. **Sync Strategy**: Select the right sync strategy (stream/poll/off) for your use case

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the terms of the license included in the repository.
