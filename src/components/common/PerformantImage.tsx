import React, { useState, useEffect, useRef } from 'react';
import { 
  getOptimizedImageUrl, 
  getResponsiveSrcSet, 
  getLoadingAttribute, 
  getDecodingAttribute,
  calculateAspectRatioDimensions,
  getImageSizes
} from '@/utils/imageOptimization';

interface PerformantImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'loading'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  isCritical?: boolean;
  quality?: number;
  formats?: ('webp' | 'avif')[];
  breakpoints?: number[];
  sizes?: string;
  aspectRatio?: number;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * High-performance image component with automatic optimization
 * Features:
 * - Next-gen format support (WebP/AVIF)
 * - Lazy loading with Intersection Observer
 * - Responsive srcsets
 * - Automatic aspect ratio preservation
 * - SEO-friendly attributes
 * - Layout shift prevention
 */
export const PerformantImage: React.FC<PerformantImageProps> = ({
  src,
  alt,
  width,
  height,
  isCritical = false,
  quality = 85,
  formats = ['avif', 'webp'],
  breakpoints = [320, 640, 960, 1280, 1920],
  sizes,
  aspectRatio,
  className = '',
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const [shouldLoad, setShouldLoad] = useState(isCritical);

  // Calculate dimensions if aspect ratio is provided
  const calculatedDimensions = aspectRatio && width && !height
    ? { width, height: Math.round(width / aspectRatio) }
    : aspectRatio && height && !width
    ? { width: Math.round(height * aspectRatio), height }
    : { width, height };

  // Lazy loading with Intersection Observer
  useEffect(() => {
    if (isCritical || shouldLoad) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { 
        rootMargin: '100px 0px',
        threshold: 0.01 
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [isCritical, shouldLoad]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate optimized sources
  const avifSrcSet = formats.includes('avif') 
    ? getResponsiveSrcSet(src, breakpoints, 'avif', quality)
    : '';
  
  const webpSrcSet = formats.includes('webp')
    ? getResponsiveSrcSet(src, breakpoints, 'webp', quality)
    : '';

  // Fallback image URL
  const fallbackSrc = getOptimizedImageUrl(src, 'webp', quality);

  // Default sizes if not provided
  const imageSizes = sizes || '100vw';

  return (
    <picture>
      {/* AVIF source (best compression) */}
      {formats.includes('avif') && shouldLoad && (
        <source
          type="image/avif"
          srcSet={avifSrcSet || getOptimizedImageUrl(src, 'avif', quality)}
          sizes={imageSizes}
        />
      )}
      
      {/* WebP source (good compression + wide support) */}
      {formats.includes('webp') && shouldLoad && (
        <source
          type="image/webp"
          srcSet={webpSrcSet || getOptimizedImageUrl(src, 'webp', quality)}
          sizes={imageSizes}
        />
      )}
      
      {/* Fallback img element */}
      <img
        ref={imgRef}
        src={shouldLoad ? fallbackSrc : undefined}
        alt={alt}
        width={calculatedDimensions.width}
        height={calculatedDimensions.height}
        loading={getLoadingAttribute(isCritical)}
        decoding={getDecodingAttribute()}
        className={`${className} transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${hasError ? 'hidden' : ''}`}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
      
      {/* Placeholder for lazy-loaded images */}
      {!isCritical && !isLoaded && (
        <div 
          className="absolute inset-0 bg-muted/10 animate-pulse"
          style={{
            width: calculatedDimensions.width,
            height: calculatedDimensions.height
          }}
        />
      )}
    </picture>
  );
};

export default PerformantImage;
