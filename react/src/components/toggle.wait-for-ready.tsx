import { Dispatch, SetStateAction } from 'react';
import { Info } from 'lucide-react';

import { StorageKey } from '@/constants.ts';

import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { TypographyInlineCode } from '@/components/ui/typography';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function ToggleWaitForReady({
  waitForReady,
  setWaitForReady,
}: {
  waitForReady: boolean;
  setWaitForReady: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="flex items-center space-x-2 justify-end">
      <Switch
        id="wait-for-ready"
        checked={waitForReady}
        onCheckedChange={() => {
          setWaitForReady((prev) => {
            const newValue = !prev;
            localStorage.setItem(
              StorageKey.Readiness,
              JSON.stringify(newValue),
            );
            window.location.reload();
            return newValue;
          });
        }}
      />
      <Label htmlFor="wait-for-ready">
        Wait for Ready
        <Tooltip>
          <TooltipTrigger>
            <Info className="size-4" />
          </TooltipTrigger>
          <TooltipContent className="max-w-xs text-sm">
            <p>
              Add <TypographyInlineCode>waitForReady</TypographyInlineCode> to{' '}
              <TypographyInlineCode>FlagSyncProvider</TypographyInlineCode> to
              delay app rendering until the SDK is ready, avoiding flag value
              flicker during initialization.
            </p>
          </TooltipContent>
        </Tooltip>
      </Label>
    </div>
  );
}
