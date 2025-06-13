import { CellContext, ColumnDef } from '@tanstack/react-table';
import { TypographyInlineCode } from '@/components/ui/typography.tsx';

interface FlagData {
  key: string;
  value: string | number | boolean | object;
  isReady: boolean;
  isReadyFromStore: boolean;
}

export const tableColumns: ColumnDef<FlagData>[] = [
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
