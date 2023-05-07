import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HangmanProvider } from './context/hangmanContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HangmanProvider>
      <App />
    </HangmanProvider>
  </React.StrictMode>
);
