import { Code2 } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { LinkStyled } from './link.styled';

export function CardDocumentation() {
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
