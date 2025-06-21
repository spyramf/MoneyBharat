
import { useEffect } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  cls: number | null;
  fid: number | null;
}

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Performance monitoring
    const metrics: PerformanceMetrics = {
      fcp: null,
      lcp: null,
      cls: null,
      fid: null
    };

    // First Contentful Paint
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          metrics.fcp = entry.startTime;
          console.log('First Contentful Paint:', entry.startTime);
        }
      }
    });
    observer.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      metrics.lcp = lastEntry.startTime;
      console.log('Largest Contentful Paint:', lastEntry.startTime);
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      metrics.cls = clsValue;
      console.log('Cumulative Layout Shift:', clsValue);
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        metrics.fid = (entry as any).processingStart - entry.startTime;
        console.log('First Input Delay:', metrics.fid);
      }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Image lazy loading optimization
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    images.forEach(img => imageObserver.observe(img));

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/lovable-uploads/92affb7c-7e35-42da-9aff-b0f55a689428.png'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    preloadCriticalResources();

    // Cleanup
    return () => {
      observer.disconnect();
      lcpObserver.disconnect();
      clsObserver.disconnect();
      fidObserver.disconnect();
      imageObserver.disconnect();
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;
