import { cn } from '@/lib/utils.ts';

export const LinkStyled = ({
  className,
  children,
  ...rest
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      rel="noopener noreferrer"
      className={cn(
        'text-emerald-500 font-medium text-sm hover:text-emerald-500/70',
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
};
