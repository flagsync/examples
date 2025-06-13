import { APP_TSX, INSTALL_COMMAND, MY_COMPONENT_TSX } from '@/constants';
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
          filename: 'app.tsx',
          content: APP_TSX,
        },
        {
          filename: 'my-component.tsx',
          content: MY_COMPONENT_TSX,
        },
      ]}
    />
  );
}
