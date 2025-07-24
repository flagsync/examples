import {
  FLAG_TSX,
  FLAGSYNC_CLIENT,
  INSTALL_COMMAND,
  KILL_SWITCH_FLAG,
  USER_CONTEXT,
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
          filename: '@lib/flagsync/flags.ts',
          content: KILL_SWITCH_FLAG,
        },
        {
          filename: '@lib/flagsync',
          content: FLAGSYNC_CLIENT,
        },
        {
          filename: '@lib/flagsync/user-context.ts',
          content: USER_CONTEXT,
        },
      ]}
    />
  );
}
