import type { FsClient, FsUserContext } from '@flagsync/node-sdk';

export class AppService {
  constructor(private client: FsClient) {}

  doWork(ctx: FsUserContext) {
    /**
     * Evaluate the feature flag using the user context.
     * More: https://docs.flagsync.com/sdks-server-side/nodejs#evaluate-flags
     */
    const isEnabled = this.client.flag<boolean>(ctx, 'my-first-kill-switch');

    // Uncomment if using the FlagSync CLI as the return type will be automatically inferred.
    // const isEnabled = this.client.flag(ctx, 'my-first-kill-switch');

    const flagInfo = {
      key: 'my-first-kill-switch',
      value: isEnabled,
    };

    /**
     * Track that the user hit this code path for experimentation/analytics.
     * More: https://docs.flagsync.com/sdks-server-side/nodejs#track-events
     */
    this.client.track(ctx, 'my-custom-event');

    if (isEnabled) {
      return {
        flag: flagInfo,
        algorithm: 'v2-collaborative-filtering',
        result: this.runV2RecommendationEngine(),
      };
    }

    return {
      flag: flagInfo,
      algorithm: 'v1-rules-based',
      result: this.runLegacyRecommendationEngine(),
    };
  }

  private runV2RecommendationEngine() {
    return ['itemA', 'itemB', 'itemC'];
  }

  private runLegacyRecommendationEngine() {
    return ['itemX', 'itemY', 'itemZ'];
  }
}
