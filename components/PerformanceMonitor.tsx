
import React, { useEffect } from 'react';

// Type definitions for Web Performance API
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
}

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

// Safe logging function for production
const safeLog = (message: string, value?: number) => {
  if (import.meta.env.DEV) {
    console.log(message, value);
  }
};

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Monitor Core Web Vitals in development only
    if (typeof window !== 'undefined' && 'performance' in window && import.meta.env.DEV) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            safeLog('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            const fidEntry = entry as PerformanceEventTiming;
            safeLog('FID:', fidEntry.processingStart - fidEntry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            const clsEntry = entry as LayoutShift;
            if (!clsEntry.hadRecentInput) {
              safeLog('CLS:', clsEntry.value);
            }
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      return () => observer.disconnect();
    }
  }, []);

  return null;
};

export default PerformanceMonitor;
