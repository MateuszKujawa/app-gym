import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'


// Rejestracja Service Workera
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker zarejestrowany z zakresem:', registration.scope);
      })
      .catch((error) => {
        console.error('Rejestracja Service Workera nie powiodła się:', error);
      });
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
