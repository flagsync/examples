import { Check, ClipboardCopy } from 'lucide-react';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const CopyToClipboardWithValue = ({
  value,
  className,
  onCopy,
}: {
  value: string;
  className?: string;
  onCopy?: () => void;
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      if (onCopy) onCopy();
      setTimeout(() => {
        setCopied(false);
      }, 1200);
    } catch {
      // Do nothing
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn('group hover:bg-transparent', className)}
      onClick={async (e) => {
        e.preventDefault();
        await copyToClipboard(value);
      }}
    >
      <span
        aria-hidden={copied}
        className={cn(
          'pointer-events-none flex items-center gap-0.5 text-muted-foreground transition duration-300',
          copied && '-translate-y-1.5 opacity-0',
        )}
      >
        <ClipboardCopy className="h-4 w-4 text-muted-foreground group-hover:text-muted-foreground/75" />
      </span>
      <span
        aria-hidden={copied}
        className={cn(
          'pointer-events-none absolute flex items-center gap-0.5 text-muted-foreground transition duration-300',
          !copied && 'translate-y-1.5 opacity-0',
        )}
      >
        <Check className="h-4 w-4 fill-emerald-500/20 stroke-emerald-500 transition-colors group-hover/button:stroke-emerald-500/70" />
      </span>
    </Button>
  );
};
