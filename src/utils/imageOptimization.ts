/**
 * Advanced image optimization utilities for next-gen formats, lazy loading, and performance
 */

export interface ImageDimensions {
  width: number;
  height: number;
}

export interface OptimizedImageConfig {
  quality?: number;
  format?: 'webp' | 'avif' | 'auto';
  sizes?: string;
  breakpoints?: number[];
}

/**
 * Get optimal image format based on browser support
 */
export const getOptimalFormat = (): 'avif' | 'webp' | 'original' => {
  if (typeof window === 'undefined') return 'webp';
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  // Check AVIF support
  if (canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0) {
    return 'avif';
  }
  
  // Check WebP support
  if (canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0) {
    return 'webp';
  }
  
  return 'original';
};

/**
 * Convert image URL to WebP or AVIF format with optimization
 */
export const getOptimizedImageUrl = (
  url: string, 
  format: 'webp' | 'avif' | 'auto' = 'auto',
  quality: number = 85
): string => {
  if (!url) return url;
  
  const actualFormat = format === 'auto' ? getOptimalFormat() : format;
  if (actualFormat === 'original') return url;
  
  // Handle external URLs with transformation support
  if (url.includes('unsplash.com')) {
    return `${url}&fm=${actualFormat}&q=${quality}&auto=format,compress`;
  }
  
  if (url.includes('cloudinary.com')) {
    return url.replace(/\/upload\//, `/upload/f_${actualFormat},q_${quality}/`);
  }
  
  // For local images, convert extension
  const ext = url.split('.').pop()?.toLowerCase();
  if (ext && ['jpg', 'jpeg', 'png'].includes(ext)) {
    return url.replace(/\.(jpg|jpeg|png)$/i, `.${actualFormat}`);
  }
  
  return url;
};

/**
 * Generate responsive srcset with multiple breakpoints and formats
 */
export const getResponsiveSrcSet = (
  url: string, 
  widths: number[] = [320, 640, 960, 1280, 1920],
  format: 'webp' | 'avif' = 'webp',
  quality: number = 85
): string => {
  if (!url) return '';
  
  // Unsplash optimization
  if (url.includes('unsplash.com')) {
    return widths
      .map(width => `${url}&w=${width}&fm=${format}&q=${quality}&auto=format,compress ${width}w`)
      .join(', ');
  }
  
  // Cloudinary optimization
  if (url.includes('cloudinary.com')) {
    return widths
      .map(width => {
        const optimized = url.replace(/\/upload\//, `/upload/w_${width},f_${format},q_${quality}/`);
        return `${optimized} ${width}w`;
      })
      .join(', ');
  }
  
  // Local images with different sizes
  const ext = url.split('.').pop()?.toLowerCase();
  if (ext && ['jpg', 'jpeg', 'png', 'webp', 'avif'].includes(ext)) {
    return widths
      .map(width => {
        const baseName = url.replace(/\.(jpg|jpeg|png|webp|avif)$/i, '');
        return `${baseName}-${width}w.${format} ${width}w`;
      })
      .join(', ');
  }
  
  return '';
};

/**
 * Calculate image dimensions while maintaining aspect ratio
 */
export const calculateAspectRatioDimensions = (
  originalWidth: number,
  originalHeight: number,
  maxWidth: number,
  maxHeight?: number
): ImageDimensions => {
  const aspectRatio = originalWidth / originalHeight;
  
  let width = maxWidth;
  let height = Math.round(maxWidth / aspectRatio);
  
  if (maxHeight && height > maxHeight) {
    height = maxHeight;
    width = Math.round(maxHeight * aspectRatio);
  }
  
  return { width, height };
};

/**
 * Get sizes attribute for responsive images
 */
export const getImageSizes = (breakpoints: { [key: string]: string }): string => {
  return Object.entries(breakpoints)
    .map(([breakpoint, size]) => `(max-width: ${breakpoint}) ${size}`)
    .join(', ');
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
 * Preload critical images with format optimization
 */
export const preloadCriticalImages = (urls: string[], format: 'webp' | 'avif' = 'webp'): void => {
  const optimalFormat = getOptimalFormat();
  const actualFormat = optimalFormat !== 'original' ? optimalFormat : format;
  
  urls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.type = `image/${actualFormat}`;
    link.href = getOptimizedImageUrl(url, actualFormat);
    link.setAttribute('fetchpriority', 'high');
    document.head.appendChild(link);
  });
};

/**
 * Generate SEO-friendly image filename
 */
export const getSEOFriendlyFilename = (filename: string, alt?: string): string => {
  if (alt) {
    return alt
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  
  return filename
    .toLowerCase()
    .replace(/[^a-z0-9.]+/g, '-')
    .replace(/^-+|-+$/g, '');
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
