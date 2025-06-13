import { useTrack } from '@flagsync/react-sdk';
import { Zap } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Button } from '@/components/ui/button';

const product = {
  productId: '123',
  price: 19.99,
  description: 'A really cool product!',
};

/**
 * Check out the documentation below to learn more about SDK tracking:
 * https://docs.flagsync.com/sdks-client-side/react#track-events
 * https://docs.flagsync.com/sdks-client-side/javascript#track-events
 * @constructor
 */
export function ExampleUseTrack() {
  /**
   * Submit user actions with the useTrack hook, which supports two usage patterns:
   *
   *   1) Bind the hook to a specific event key for repeated tracking:
   *      - const track = useTrack('purchase-event')
   *
   *   2) Use a generic track function to specify the event key at call time:
   *      - const track = useTrack();
   */
  const track = useTrack();
  const boundTrack = useTrack('purchase-event');

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="text-emerald-400" />
            <span className="font-mono">useTrack()</span>
          </CardTitle>
          <CardDescription>
            Single flag retrieval with loading states and type safety
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center gap-2">
          <Button
            onClick={() => boundTrack(product.price, product)}
            className="mr-2"
          >
            Track Button Click
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              track('custom-event', Math.random(), { source: 'demo' })
            }
          >
            Track Custom Event
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
