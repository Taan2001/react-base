import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import './styles/index.css';
import './styles/global.css';
import App from './App.tsx';

const app = document.getElementById('root');

if (!app) {
  throw new Error('Root element not found');
}

createRoot(app).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
