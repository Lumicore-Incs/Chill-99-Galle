import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// PrimeReact global styles (theme + core)
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-green/theme.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
