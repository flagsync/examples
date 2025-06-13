import type { FsClient, FsUserContext } from '@flagsync/node-sdk';

const FLAG_KEY = 'my-first-kill-switch';

export class AppService {
  constructor(private client: FsClient) {}

  doWork(ctx: FsUserContext) {
    // Evaluate the feature flag using the user context.
    // This will apply audience targeting, rollout %, and default logic.
    // More: https://docs.flagsync.com/sdks-server-side/nodejs#evaluate-flags
    const isEnabled = this.client.flag<boolean>(ctx, FLAG_KEY);

    // Track that the user hit this code path for experimentation/analytics.
    // More: https://docs.flagsync.com/sdks-server-side/nodejs#track-events
    this.client.track(ctx, 'my-custom-event');

    const flagInfo = {
      key: FLAG_KEY,
      value: isEnabled,
    };

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
