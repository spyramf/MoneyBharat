
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Performance monitoring in development only
if (import.meta.env.DEV) {
  import('./components/PerformanceMonitor').then(({ default: PerformanceMonitor }) => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = createRoot(container);
    root.render(<PerformanceMonitor />);
  }).catch(() => {
    // Silently fail if performance monitor can't load
  });
}

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
