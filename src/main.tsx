import 'normalize.css';
import './styles/index.scss';
import 'react-loading-skeleton/dist/skeleton.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './shared/api/queryClient';
import { SkeletonTheme } from 'react-loading-skeleton';

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SkeletonTheme baseColor='#ccd7efff' highlightColor='#d1caf7ff' borderRadius='0.75rem'>
        <App />
      </SkeletonTheme>
    </QueryClientProvider>
  </React.StrictMode>,
);
