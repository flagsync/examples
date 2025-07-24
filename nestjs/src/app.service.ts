import { Injectable } from '@nestjs/common';
import { FsClient, InjectFlagSync } from '@flagsync/nestjs-sdk';
import { UserContext } from './context.decorator';

@Injectable()
export class AppService {
  constructor(@InjectFlagSync() private client: FsClient) {}

  doWork(@UserContext() ctx) {
    /**
     * Evaluate the feature flag using the user context.
     * More: https://docs.flagsync.com/sdks-server-side/nestjs#evaluate-flags
     */
    const isEnabled = this.client.flag<boolean>(ctx, 'my-first-kill-switch');

    // NOTE: Uncomment the line below if using the FlagSync CLI as the return type will be automatically inferred.
    // const isEnabled = this.client.flag(ctx, 'my-first-kill-switch');

    const flagInfo = {
      key: 'my-first-kill-switch',
      value: isEnabled,
    };

    /**
     * Track that the user hit this code path for experimentation/analytics.
     * More: https://docs.flagsync.com/sdks-server-side/nestjs#track-events
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
    // Imagine some complex logic or service call here
    return ['itemA', 'itemB', 'itemC'];
  }

  private runLegacyRecommendationEngine() {
    // Legacy recommendation logic
    return ['itemX', 'itemY', 'itemZ'];
  }
}
