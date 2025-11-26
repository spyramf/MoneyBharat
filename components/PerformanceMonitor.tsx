import React, { useEffect } from 'react';

// Lightweight, robust dev-only performance monitor
// - Avoids using import.meta.env to prevent runtime errors in Next/Turbopack
// - Uses process.env and globalThis checks
// - Guards Performance APIs and never runs on server

type PerfEntry = PerformanceEntry & { [key: string]: any };

const isDev = (() => {
  try {
    if (typeof process !== 'undefined' && typeof process.env !== 'undefined') {
      const nodeEnv = (process.env.NODE_ENV || process.env.NEXT_PUBLIC_NODE_ENV || '').toLowerCase();
      if (nodeEnv === 'development') return true;
    }
  } catch (e) {
    /* ignore */
  }

  try {
    // React Native and some bundlers set global __DEV__
    if (typeof globalThis !== 'undefined' && (globalThis as any).__DEV__) return true;
  } catch (e) {
    /* ignore */
  }

  return false;
})();

const safeLog = (...args: any[]) => {
  if (isDev) console.log('[Perf]', ...args);
};

export default function PerformanceMonitor(): null {
  // Do not run on server or in production
  useEffect(() => {
    if (!isDev) return;
    if (typeof window === 'undefined') return;
    if (typeof PerformanceObserver === 'undefined' || typeof window.performance === 'undefined') {
      safeLog('Performance APIs not available in this environment.');
      return;
    }

    let observer: PerformanceObserver | null = null;

    try {
      observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const e = entry as PerfEntry;
          switch (e.entryType) {
            case 'largest-contentful-paint':
              safeLog('LCP', Math.round((e as any).startTime || 0));
              break;
            case 'first-input':
              // first-input entries differ by browser; guard fields
              const processingStart = (e as any).processingStart;
              const startTime = (e as any).startTime;
              if (typeof processingStart === 'number' && typeof startTime === 'number') {
                safeLog('FID', Math.round(processingStart - startTime));
              }
              break;
            case 'layout-shift':
              // layout-shift entries may include 'value' and 'hadRecentInput'
              if (!(e as any).hadRecentInput) {
                safeLog('CLS', (e as any).value ?? 0);
              }
              break;
            default:
              break;
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] } as any);
    } catch (err) {
      safeLog('Perf observer failed to start:', err);
    }

    return () => {
      try {
        if (observer) observer.disconnect();
      } catch (e) {
        /* noop */
      }
    };
  }, []);

  return null;
}
