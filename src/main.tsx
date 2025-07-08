import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ErrorBoundary from './components/ErrorBoundary'

// Remove loading indicator
const loadingElement = document.querySelector('.loading');
if (loadingElement) {
  loadingElement.remove();
}

try {
  const root = createRoot(document.getElementById('root')!);
  root.render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>
  );
} catch (error) {
  console.error('Failed to render app:', error);
  document.getElementById('root')!.innerHTML = `
    <div style="padding: 20px; text-align: center; font-family: -apple-system, BlinkMacSystemFont, sans-serif;">
      <h1>Ошибка загрузки</h1>
      <p>Попробуйте обновить страницу</p>
      <button onclick="window.location.reload()" style="padding: 10px 20px; background: #007AFF; color: white; border: none; border-radius: 8px;">
        Обновить
      </button>
    </div>
  `;
}