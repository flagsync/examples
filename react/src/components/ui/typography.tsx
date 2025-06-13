import { ReactNode } from 'react';
import { cn } from '@/lib/utils.ts';

export function TypographyInlineCode({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <code
      className={cn(
        'bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        className,
      )}
    >
      {children}
    </code>
  );
}
