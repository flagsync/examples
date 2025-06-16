'use client';

import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ghcolors } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { toast } from 'sonner';

import { CopyToClipboardWithValue } from '@/components/ui/copy-to-clipboard';
import { cn } from '@/lib/utils';

interface CodeFile {
  filename: string;
  content: string;
  language?: string;
}

interface CodeGroupProps {
  files: CodeFile[];
  language: string;
  className?: string;
}

export function CodeGroup({ files, language, className }: CodeGroupProps) {
  const [activeTab, setActiveTab] = useState(0);

  const activeFile = files[activeTab];

  return (
    <div className={cn('rounded-lg border overflow-hidden', className)}>
      <div className="flex border-b">
        {files.map((file, index) => (
          <button
            key={file.filename}
            onClick={() => setActiveTab(index)}
            className={cn(
              'px-4 py-2 text-xs font-medium transition-colors focus:outline-none border-b-2 border-transparent',
              {
                'cursor-pointer': files.length > 1,
                'border-b-2 border-primary text-emerald-600':
                  activeTab === index,
                'text-muted-foreground hover:text-muted-foreground/80':
                  activeTab !== index,
              },
            )}
          >
            {file.filename}
          </button>
        ))}
        <div className="ml-auto pr-2 flex items-center">
          <CopyToClipboardWithValue
            value={activeFile.content}
            onCopy={() => {
              toast.success('Copied!', {
                description: 'Code snippet has been copied to your clipboard.',
              });
            }}
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <SyntaxHighlighter
          language={activeFile.language ?? language}
          style={ghcolors}
          customStyle={{
            margin: 0,
            padding: '1rem',
            borderRadius: 0,
            border: 'none',
          }}
        >
          {activeFile?.content || ''}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
