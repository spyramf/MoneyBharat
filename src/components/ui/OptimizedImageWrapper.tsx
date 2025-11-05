import React from 'react';
import { PerformantImage } from '@/components/common/PerformantImage';

interface OptimizedImageWrapperProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  isCritical?: boolean;
  quality?: number;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'auto' | 'sync';
  sizes?: string;
  style?: React.CSSProperties;
}

/**
 * Wrapper component to easily replace standard img tags with optimized versions
 * Use this as a drop-in replacement for <img> tags throughout the application
 */
export const OptimizedImageWrapper: React.FC<OptimizedImageWrapperProps> = ({ 
  src, 
  alt = '', 
  width,
  height,
  className,
  isCritical = false, 
  quality = 85,
  sizes,
  style,
  ...props 
}) => {
  if (!src) return null;

  return (
    <PerformantImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      isCritical={isCritical}
      quality={quality}
      sizes={sizes}
      style={style}
      {...props}
    />
  );
};

export default OptimizedImageWrapper;
