import { useState, useEffect, useCallback } from 'react';
import { getOptimizedImageUrl, preloadCriticalImages } from '@/utils/imageOptimization';

export interface UseImageOptimizationOptions {
  preloadCritical?: string[];
  format?: 'webp' | 'avif' | 'auto';
  quality?: number;
}

/**
 * Hook for managing image optimization across the application
 */
export const useImageOptimization = (options: UseImageOptimizationOptions = {}) => {
  const { preloadCritical = [], format = 'auto', quality = 85 } = options;
  const [isPreloaded, setIsPreloaded] = useState(false);

  useEffect(() => {
    if (preloadCritical.length > 0 && !isPreloaded) {
      preloadCriticalImages(preloadCritical, format === 'auto' ? 'webp' : format);
      setIsPreloaded(true);
    }
  }, [preloadCritical, format, isPreloaded]);

  const getOptimizedUrl = useCallback(
    (url: string) => getOptimizedImageUrl(url, format, quality),
    [format, quality]
  );

  return {
    getOptimizedUrl,
    isPreloaded
  };
};

/**
 * Hook for lazy loading images with Intersection Observer
 */
export const useLazyImage = (ref: React.RefObject<HTMLElement>, options = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '100px 0px',
        threshold: 0.01,
        ...options
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, options]);

  return isVisible;
};
