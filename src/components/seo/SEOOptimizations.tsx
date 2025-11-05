import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEOOptimizations = () => {
  const location = useLocation();

  useEffect(() => {
    // Add performance optimizations and SEO meta tags dynamically
    
    // 1. Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical images
      const criticalImages = [
        '/lovable-uploads/92affb7c-7e35-42da-9aff-b0f55a689428.png',
        '/lovable-uploads/91d78f6e-991f-4f65-883d-f9962eb33219.png'
      ];
      
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    // 2. Add security headers meta tags
    const addSecurityHeaders = () => {
      const securityMeta = [
        { httpEquiv: 'X-Content-Type-Options', content: 'nosniff' },
        { httpEquiv: 'X-Frame-Options', content: 'DENY' },
        { httpEquiv: 'X-XSS-Protection', content: '1; mode=block' },
        { httpEquiv: 'Referrer-Policy', content: 'strict-origin-when-cross-origin' },
        { httpEquiv: 'Permissions-Policy', content: 'camera=(), microphone=(), geolocation=()' }
      ];

      securityMeta.forEach(meta => {
        const existing = document.querySelector(`meta[http-equiv="${meta.httpEquiv}"]`);
        if (!existing) {
          const metaTag = document.createElement('meta');
          metaTag.httpEquiv = meta.httpEquiv;
          metaTag.content = meta.content;
          document.head.appendChild(metaTag);
        }
      });
    };

    // 3. Add mobile optimization meta tags
    const addMobileOptimization = () => {
      const mobileMeta = [
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
        { name: 'apple-mobile-web-app-title', content: 'Money Bharat' },
        { name: 'application-name', content: 'Money Bharat Finance' },
        { name: 'msapplication-TileImage', content: '/lovable-uploads/92affb7c-7e35-42da-9aff-b0f55a689428.png' }
      ];

      mobileMeta.forEach(meta => {
        const existing = document.querySelector(`meta[name="${meta.name}"]`);
        if (!existing) {
          const metaTag = document.createElement('meta');
          metaTag.name = meta.name;
          metaTag.content = meta.content;
          document.head.appendChild(metaTag);
        }
      });
    };

    // 4. Add performance hints
    const addPerformanceHints = () => {
      const hints = [
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
        { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
      ];

      hints.forEach(hint => {
        const existing = document.querySelector(`link[rel="${hint.rel}"][href="${hint.href}"]`);
        if (!existing) {
          const link = document.createElement('link');
          link.rel = hint.rel;
          link.href = hint.href;
          if (hint.crossOrigin) link.crossOrigin = hint.crossOrigin;
          document.head.appendChild(link);
        }
      });
    };

    // 5. Add structured data for page type
    const addPageStructuredData = () => {
      const path = location.pathname;
      let schemaType = 'WebPage';
      let additionalProps = {};

      if (path.includes('/blog/')) {
        schemaType = 'Article';
        additionalProps = {
          '@type': 'Article',
          publisher: {
            '@type': 'Organization',
            name: 'Money Bharat Finance'
          },
          author: {
            '@type': 'Organization',
            name: 'Money Bharat Finance'
          }
        };
      } else if (path === '/') {
        additionalProps = {
          '@type': 'WebSite',
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://moneybharatfinance.com/blog?search={search_term_string}'
            },
            'query-input': 'required name=search_term_string'
          }
        };
      }

      const existingSchema = document.querySelector('script[data-page-schema="true"]');
      if (existingSchema) existingSchema.remove();

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-page-schema', 'true');
      script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': schemaType,
        url: `https://moneybharatfinance.com${path}`,
        name: document.title,
        description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
        isPartOf: {
          '@type': 'WebSite',
          name: 'Money Bharat Finance',
          url: 'https://moneybharatfinance.com'
        },
        ...additionalProps
      });
      document.head.appendChild(script);
    };

    // Execute optimizations
    preloadCriticalResources();
    addSecurityHeaders();
    addMobileOptimization();
    addPerformanceHints();
    addPageStructuredData();

    // 6. Optimize images with lazy loading and modern formats
    const optimizeImages = () => {
      const images = document.querySelectorAll('img:not([data-optimized])');
      images.forEach(img => {
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
        img.setAttribute('data-optimized', 'true');
      });
    };

    // Run image optimization after DOM updates
    const observer = new MutationObserver(() => {
      optimizeImages();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Initial optimization
    optimizeImages();

    return () => {
      observer.disconnect();
    };

  }, [location.pathname]);

  return null;
};

export default SEOOptimizations;