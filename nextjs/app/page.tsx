import { Suspense } from 'react';

import { AppHeader } from '@/components/app.header';
import { CardDocumentation } from '@/components/card.documentation';

import { ExampleCodeSamples } from '@/app/_components/example.code-samples';
import { ExampleFlagServer } from '@/app/_components/example.flag.server';

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
            <CardDocumentation />
          </div>
        </div>
      </div>
    </div>
  );
}
