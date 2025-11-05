/**
 * Image optimization utilities for next-gen formats and lazy loading
 */

/**
 * Convert image URL to WebP or AVIF format if available
 */
export const getOptimizedImageUrl = (url: string, format: 'webp' | 'avif' = 'webp'): string => {
  if (!url) return url;
  
  // Check if it's an external URL that supports format transformation
  if (url.includes('unsplash.com')) {
    return `${url}&fm=${format}&q=80`;
  }
  
  // For local images, assume we have WebP/AVIF versions
  const ext = url.split('.').pop()?.toLowerCase();
  if (ext && ['jpg', 'jpeg', 'png'].includes(ext)) {
    return url.replace(/\.(jpg|jpeg|png)$/i, `.${format}`);
  }
  
  return url;
};

/**
 * Get srcset for responsive images
 */
export const getResponsiveSrcSet = (url: string, widths: number[] = [320, 640, 960, 1280, 1920]): string => {
  if (!url) return '';
  
  if (url.includes('unsplash.com')) {
    return widths
      .map(width => `${url}&w=${width}&fm=webp&q=80 ${width}w`)
      .join(', ');
  }
  
  return '';
};

/**
 * Lazy load images with Intersection Observer
 */
export const lazyLoadImage = (img: HTMLImageElement): void => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLImageElement;
          const src = target.dataset.src;
          const srcset = target.dataset.srcset;
          
          if (src) target.src = src;
          if (srcset) target.srcset = srcset;
          
          target.classList.add('loaded');
          observer.unobserve(target);
        }
      });
    },
    {
      rootMargin: '50px 0px',
      threshold: 0.01
    }
  );
  
  observer.observe(img);
};

/**
 * Preload critical images
 */
export const preloadCriticalImages = (urls: string[]): void => {
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
};

/**
 * Get image loading attribute based on position
 */
export const getLoadingAttribute = (isCritical: boolean): 'eager' | 'lazy' => {
  return isCritical ? 'eager' : 'lazy';
};

/**
 * Get decoding attribute for better performance
 */
export const getDecodingAttribute = (): 'async' | 'auto' => {
  return 'async';
};
