export const StorageKey = {
  Readiness: 'flagsync::sdk-demo::waitForReady',
  SdkKey: 'flagsync::sdk-demo::sdkKey',
};

export const APP_TSX = `import { createRoot } from 'react-dom/client';
import { FlagSyncProvider } from '@flagsync/react-sdk';

import MyComponent from './my-component.tsx';

createRoot(document.getElementById('root')!).render(
  <FlagSyncProvider 
    waitForReady 
    config={{
      sdkKey: import.meta.env.VITE_FLAGSYNC_SDK_KEY,
      core: {
        key: 'user-123'
      }
    }}>
      <MyComponent />
  </FlagSyncProvider>,
);
`;

export const MY_COMPONENT_TSX = `import { useFlag, useTrack } from '@flagsync/react-sdk';

function MyComponent() {
  const welcomeMessage = useFlag('welcome-message', 'Default welcome message');
  const showPremium = useFlag('show-premium-features', false);
  
  const track = useTrack();  
  
  if (!welcomeMessage.isReady) {
    return <Loading />;
  }
  
  return (
    <div>
      <h1>{welcomeMessage.value}</h1>
      {showPremium.value && <PremiumFeatures />}
      <button onClick={() => track('custom-event')}>Track Me</button>
    </div>
  );
}`;

export const INSTALL_COMMAND = `npm install @flagsync/react-sdk`;
