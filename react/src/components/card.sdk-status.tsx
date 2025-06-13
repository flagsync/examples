import { useFlagSyncClient } from '@flagsync/react-sdk';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';

import { Activity, CheckCircle, Loader, TriangleAlert } from 'lucide-react';

export function CardSdkStatus() {
  const { isError, isReady, isReadyFromStore } = useFlagSyncClient();

  const hasSdkKey = !!import.meta.env.VITE_FLAGSYNC_SDK_KEY;

  let statusMessage = '';
  let statusIcon = null;
  let statusColor = '';

  if (isError) {
    statusMessage = 'SDK initialization error';
    statusIcon = <TriangleAlert className="size-4 text-rose-500" />;
    statusColor = 'text-rose-500';
  } else if (!isReady || !isReadyFromStore) {
    statusMessage = 'Loading SDK...';
    statusIcon = <Loader className="size-4 text-blue-500 animate-spin" />;
    statusColor = 'text-blue-500';
  } else if (isReady && isReadyFromStore) {
    statusMessage = 'SDK ready';
    statusIcon = <CheckCircle className="size-4 text-emerald-500" />;
    statusColor = 'text-emerald-500';
  }

  return (
    <Card className="gap-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="text-emerald-400" />
          <span className="font-mono">Status</span>
        </CardTitle>
        <CardDescription>FlagSync SDK health check</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="ml-2 [&>div]:mt-1">
          <div className="flex items-center gap-2 text-sm">
            {hasSdkKey ? (
              <>
                <CheckCircle className="size-4 text-emerald-500" />
                <span className="text-emerald-500 font-medium">
                  SDK key found
                </span>
              </>
            ) : (
              <>
                <TriangleAlert className="size-4 text-rose-500" />
                <span className="text-rose-500 font-medium">
                  Missing SDK key
                </span>
              </>
            )}
          </div>
          <div className="flex items-center gap-2 text-sm">
            {statusIcon}
            <span className={`${statusColor} font-medium`}>
              {statusMessage}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
