import React, { useState, useEffect, useRef } from 'react';
import { getOptimizedImageUrl, getResponsiveSrcSet, getLoadingAttribute, getDecodingAttribute } from '@/utils/imageOptimization';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  isCritical?: boolean;
  widths?: number[];
  className?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  isCritical = false,
  widths,
  className = '',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!isCritical && imgRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                if (img.dataset.srcset) {
                  img.srcset = img.dataset.srcset;
                }
                observer.unobserve(img);
              }
            }
          });
        },
        { rootMargin: '50px 0px', threshold: 0.01 }
      );

      observer.observe(imgRef.current);
      return () => observer.disconnect();
    }
  }, [isCritical]);

  const webpUrl = getOptimizedImageUrl(src, 'webp');
  const srcSet = widths ? getResponsiveSrcSet(src, widths) : undefined;

  if (isCritical) {
    return (
      <picture>
        <source type="image/webp" srcSet={srcSet || webpUrl} />
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={getLoadingAttribute(isCritical)}
          decoding={getDecodingAttribute()}
          className={`${className} ${isLoaded ? 'loaded' : ''}`}
          onLoad={() => setIsLoaded(true)}
          {...props}
        />
      </picture>
    );
  }

  return (
    <picture>
      <source type="image/webp" data-srcset={srcSet || webpUrl} />
      <img
        ref={imgRef}
        data-src={src}
        data-srcset={srcSet}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`${className} ${isLoaded ? 'loaded' : ''}`}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </picture>
  );
};
