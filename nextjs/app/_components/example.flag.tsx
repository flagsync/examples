'use client';

import { CellContext, ColumnDef } from '@tanstack/react-table';
import { Code2, Lightbulb } from 'lucide-react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { DataTable } from '@/components/ui/data-table';

import { LinkStyled } from '@/components/link.styled';
import { TypographyInlineCode } from '@/components/ui/typography';

/**
 * Check out the documentation below to learn more about SDK hooks:
 * https://docs.flagsync.com/sdks-client-side/react#hooks
 * @constructor
 */
export function ExampleFlag({ name, value }: { name: string; value: boolean }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code2 className="text-emerald-400" />
          <span className="font-mono">flag()</span>
        </CardTitle>
        <CardDescription>Single server-side flag retrieval</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <DataTable columns={tableColumns} data={[{ key: name, value }]} />
        <Alert variant="default">
          <Lightbulb />
          <AlertTitle>Next Steps</AlertTitle>
          <AlertDescription className="inline">
            Head to the{' '}
            <LinkStyled href="https://www.flagsync.com/dashboard/flags/">
              Flags Dashboard
            </LinkStyled>
            , flip the switch on the flag, and see the change reflected here on
            refresh.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
}

interface FlagData {
  key: string;
  value: string | number | boolean | object;
}

const tableColumns: ColumnDef<FlagData>[] = [
  {
    accessorKey: 'key',
    header: 'Key',
    cell: ({ getValue }: CellContext<FlagData, unknown>) => {
      return (
        <TypographyInlineCode>{getValue() as string}</TypographyInlineCode>
      );
    },
  },
  {
    accessorKey: 'value',
    header: 'Value',
    cell: ({ getValue }: CellContext<FlagData, unknown>) => {
      return (
        <TypographyInlineCode>
          {JSON.stringify(getValue())}
        </TypographyInlineCode>
      );
    },
  },
];
