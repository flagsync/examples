import { useFlag } from '@flagsync/react-sdk';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

import { Code2, Lightbulb } from 'lucide-react';
import { DataTable } from '@/components/ui/data-table';
import { tableColumns } from '@/components/table.columns';
import { LinkStyled } from '@/components/link.styled.tsx';

const FLAG_KEY = 'my-first-kill-switch';

/**
 * Check out the documentation below to learn more about SDK hooks:
 * https://docs.flagsync.com/sdks-client-side/react#hooks
 * @constructor
 */
export function ExampleUseFlag() {
  /**
   * Call the use flag hook to get the value of a single flag. Returns:
   *    1) Flag key ('my-first-kill-switch')
   *    2) Flag value (true / false)
   *    3) isReady (boolean)
   *    4) isReadyFromStore (boolean)
   *
   *  Optionally call with a default value (used when the SDK is not ready).
   *    - useFlag<boolean>('my-first-kill-switch', false)
   */
  const { key, value, isReady, isReadyFromStore } = useFlag<boolean>(
    FLAG_KEY,
    false,
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code2 className="text-emerald-400" />
          <span className="font-mono">useFlag()</span>
        </CardTitle>
        <CardDescription>
          Single flag retrieval with loading states and type safety
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <DataTable
          columns={tableColumns}
          data={[{ key, value, isReady, isReadyFromStore }]}
        />
        <Alert variant="default">
          <Lightbulb />
          <AlertTitle>Next Steps</AlertTitle>
          <AlertDescription className="inline">
            Head to the{' '}
            <LinkStyled href="https://www.flagsync.com/dashboard/flags/">
              Flags Dashboard
            </LinkStyled>
            , flip the switch on the flag, and see the change reflected here in
            real-time.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
}
