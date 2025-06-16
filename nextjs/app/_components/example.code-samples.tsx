import {
  FLAG_TSX,
  FLAGSYNC_CLIENT,
  INSTALL_COMMAND,
  KILL_SWITCH_FLAG,
} from '@/app/constants';
import { CodeGroup } from '@/components/ui/code-group';

export function ExampleCodeSamples() {
  return (
    <CodeGroup
      language="tsx"
      files={[
        {
          filename: 'npm',
          content: INSTALL_COMMAND,
          language: 'bash',
        },
        {
          filename: 'page.tsx',
          content: FLAG_TSX,
        },
        {
          filename: '@lib/flagsync/flags.tsx',
          content: KILL_SWITCH_FLAG,
        },
        {
          filename: '@lib/flagsync/index.tsx',
          content: FLAGSYNC_CLIENT,
        },
      ]}
    />
  );
}
