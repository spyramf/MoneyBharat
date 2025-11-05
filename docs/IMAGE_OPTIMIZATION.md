# Image Optimization Guide

## Overview
This document outlines the comprehensive image optimization system implemented for Money Bharat Finance to achieve superior performance scores on Google PageSpeed Insights.

## Features Implemented

### 1. Next-Gen Image Formats
- **AVIF Support**: Best compression ratio, modern browsers
- **WebP Support**: Excellent compression, wide browser support
- **Automatic Fallback**: Falls back to original format for older browsers

### 2. Responsive Images
- Responsive srcsets with multiple breakpoints (320px, 640px, 960px, 1280px, 1920px)
- Automatic size selection based on viewport
- Proper `sizes` attribute for optimal loading

### 3. Lazy Loading
- Intersection Observer-based lazy loading
- 100px rootMargin for smooth loading before images enter viewport
- Critical images loaded immediately (hero images, above-the-fold content)

### 4. Layout Shift Prevention
- Explicit width and height attributes on all images
- Aspect ratio preservation
- Placeholder elements during loading

### 5. Image Compression
- Default quality: 85% (optimal balance between quality and size)
- Automatic metadata removal (EXIF, GPS, camera info)
- Target file size: <100KB for most images

### 6. Caching Strategy
- 1-year cache policy for all image assets
- Immutable cache headers for versioned assets
- Vary: Accept header for format negotiation

### 7. SEO Optimization
- Descriptive alt attributes on all images
- SEO-friendly filename generation
- Proper schema markup for images

## Components

### PerformantImage
The main image component with full optimization features.

```tsx
import { PerformantImage } from '@/components/common/PerformantImage';

<PerformantImage
  src="/path/to/image.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  isCritical={false} // Set true for above-fold images
  quality={85}
  formats={['avif', 'webp']}
  breakpoints={[320, 640, 960, 1280, 1920]}
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### OptimizedImageWrapper
Drop-in replacement for standard `<img>` tags.

```tsx
import { OptimizedImageWrapper } from '@/components/ui/OptimizedImageWrapper';

<OptimizedImageWrapper
  src="/image.jpg"
  alt="Description"
  isCritical={false}
/>
```

## Utility Functions

### getOptimizedImageUrl
Convert image URLs to optimized formats.

```ts
import { getOptimizedImageUrl } from '@/utils/imageOptimization';

const webpUrl = getOptimizedImageUrl('/image.jpg', 'webp', 85);
const avifUrl = getOptimizedImageUrl('/image.jpg', 'avif', 85);
```

### getResponsiveSrcSet
Generate responsive srcsets.

```ts
import { getResponsiveSrcSet } from '@/utils/imageOptimization';

const srcset = getResponsiveSrcSet(
  '/image.jpg',
  [320, 640, 960, 1280, 1920],
  'webp',
  85
);
```

### preloadCriticalImages
Preload above-fold images for faster LCP.

```ts
import { preloadCriticalImages } from '@/utils/imageOptimization';

useEffect(() => {
  preloadCriticalImages([
    '/hero-image.jpg',
    '/logo.png'
  ], 'avif');
}, []);
```

## Hooks

### useImageOptimization
Hook for managing image optimization.

```tsx
import { useImageOptimization } from '@/hooks/useImageOptimization';

const { getOptimizedUrl, isPreloaded } = useImageOptimization({
  preloadCritical: ['/hero.jpg', '/logo.png'],
  format: 'auto',
  quality: 85
});
```

### useLazyImage
Hook for lazy loading with Intersection Observer.

```tsx
import { useLazyImage } from '@/hooks/useImageOptimization';

const ref = useRef(null);
const isVisible = useLazyImage(ref);
```

## Best Practices

### Critical Images (Above-the-Fold)
```tsx
<PerformantImage
  src="/hero-image.jpg"
  alt="Hero image"
  width={1920}
  height={1080}
  isCritical={true} // Load immediately
  quality={90} // Higher quality for hero
/>
```

### Non-Critical Images (Below-the-Fold)
```tsx
<PerformantImage
  src="/content-image.jpg"
  alt="Content image"
  width={800}
  height={600}
  isCritical={false} // Lazy load
  quality={85}
/>
```

### Logo Images
```tsx
<PerformantImage
  src="/logo.png"
  alt="Company Logo"
  width={200}
  height={60}
  isCritical={true}
  formats={['avif', 'webp']}
/>
```

### Partner/Icon Images
```tsx
<PerformantImage
  src="/partner-logo.png"
  alt="Partner Name"
  width={150}
  height={150}
  isCritical={false}
  quality={80}
/>
```

## Performance Targets

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### PageSpeed Insights Scores
- **Mobile**: 90+ (green)
- **Desktop**: 95+ (green)

### Image Metrics
- **File Size**: < 100KB for most images
- **Format**: AVIF/WebP with fallback
- **Compression**: 85% quality default
- **Lazy Loading**: All non-critical images

## Caching Configuration

The `.htaccess` file includes:
```apache
# Aggressive caching for images
<FilesMatch "\.(png|jpg|jpeg|gif|webp|avif|svg|ico|bmp|tiff)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
    Header set Vary "Accept"
    Header append X-Content-Type-Options "nosniff"
</FilesMatch>
```

## CDN Recommendations

For production deployment:
1. Use Cloudflare for automatic image optimization
2. Enable auto WebP/AVIF conversion
3. Set up Polish (lossless/lossy compression)
4. Configure Mirage for adaptive image loading
5. Use Cloudflare's image resizing API

## Monitoring

Track these metrics:
- Image load times in Google Analytics
- Core Web Vitals in Search Console
- PageSpeed Insights scores (weekly)
- Image bandwidth usage
- Cache hit rates

## Migration Checklist

- [x] Install optimization utilities
- [x] Create PerformantImage component
- [x] Add lazy loading support
- [x] Implement responsive srcsets
- [x] Configure caching headers
- [x] Add AVIF/WebP support
- [x] Update all image references
- [x] Add width/height attributes
- [x] Optimize alt attributes
- [x] Test on PageSpeed Insights
- [x] Monitor Core Web Vitals

## Future Enhancements

1. **Automatic Image Conversion**: Build script to convert all images to WebP/AVIF
2. **Image CDN**: Integrate with dedicated image CDN (Cloudinary, Imgix)
3. **Blur Placeholders**: Generate LQIP (Low Quality Image Placeholders)
4. **Smart Cropping**: AI-based focal point detection
5. **Progressive JPEGs**: For better perceived performance
6. **Client Hints**: Use Accept-CH for optimal format selection

## Resources

- [Web.dev Image Optimization](https://web.dev/fast/#optimize-your-images)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Can I Use WebP](https://caniuse.com/webp)
- [Can I Use AVIF](https://caniuse.com/avif)
- [Image CDN Comparison](https://web.dev/image-cdns/)
