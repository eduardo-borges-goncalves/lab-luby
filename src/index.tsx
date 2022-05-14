import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { AuthenticationProvider } from './context/Authentication';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthenticationProvider>
      <App />
    </AuthenticationProvider>
  </React.StrictMode>
);

