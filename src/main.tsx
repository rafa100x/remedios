import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx';
import './index.css';
import ReactGA from 'react-ga4';
const gaMeasurementId = 'G-TH26DT24Y2';
ReactGA.initialize(gaMeasurementId);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
);
