import { Suspense, SVGProps } from 'react';

import { ExampleCodeSamples } from '@/app/_components/example.code-samples';
import { ExampleFlagServer } from '@/app/_components/example.flag.server';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Code2 } from 'lucide-react';
import { LinkStyled } from '@/components/link.styled';

export default function Home() {
  return (
    <div className="min-h-screen">
      <AppHeader />
      <div className="max-w-6xl mx-auto py-6 gap-y-4 flex flex-col">
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-4 flex flex-col gap-4">
            <ExampleCodeSamples />
            <Suspense fallback="Loading...">
              <ExampleFlagServer />
            </Suspense>
          </div>
          <div className="col-span-2 flex flex-col gap-4">
            <Documentation />
          </div>
        </div>
      </div>
    </div>
  );
}

function AppHeader() {
  return (
    <header className="border-b px-6 py-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <Logo className="size-10" />
          <div>
            <h1 className="text-2xl font-bold">FlagSync Next.js SDK Demo</h1>
            <p className="text-muted-foreground">
              A simple showcase of <code>@flagsync/nextjs-sdk</code>.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

const Logo = ({ className, ...rest }: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 85 74"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn('aspect-85/74', className)}
    {...rest}
  >
    <path
      d="M0 62.0294C-8.05927e-07 55.4182 5.4351 50.0588 12.1396 50.0588C18.8442 50.0588 24.2793 55.4182 24.2793 62.0294C24.2793 68.6406 18.8442 74 12.1396 74C5.4351 74 8.05927e-07 68.6406 0 62.0294Z"
      fill="#1CEFA5"
    />
    <path
      d="M4.90842e-06 52.4554C3.82047 44.8079 9.50984 37.6422 15.8025 36.0941C23.8694 34.1095 29.2645 36.0491 34.9464 38.0918C39.2569 39.6414 43.7325 41.2504 49.665 41.2504C55.8699 41.2504 64.8837 34.6452 72.5531 24.51H4.90842e-06V52.4554Z"
      fill="#1CEFA5"
    />
    <path
      d="M84.6141 1.27632C84.8132 0.640089 84.3333 0 83.6666 0H1C0.44772 0 4.90842e-06 0.447714 4.90842e-06 0.999999V17.6883H77.1672C80.1858 12.6812 82.7829 7.1255 84.6141 1.27632Z"
      fill="#1CEFA5"
    />
  </svg>
);

function Documentation() {
  return (
    <Card className="gap-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code2 className="text-emerald-400" />
          <span className="font-mono">Docs</span>
        </CardTitle>
        <CardDescription>Check out the FlagSync docs!</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="ml-6 list-disc [&>li]:mt-1">
          <li>
            <LinkStyled
              href="https://docs.flagsync.com/quickstarts/overview"
              target="_blank"
            >
              Getting Started with FlagSync
            </LinkStyled>
          </li>
          <li>
            <LinkStyled
              href="https://docs.flagsync.com/sdks/overview"
              target="_blank"
            >
              SDKs Overview
            </LinkStyled>
          </li>
          <li>
            <LinkStyled
              href="https://docs.flagsync.com/sdks-server-side/nextjs"
              target="_blank"
            >
              Next.js SDK
            </LinkStyled>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
