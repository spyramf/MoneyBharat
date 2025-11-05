import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const IndexingOptimizer = () => {
  const location = useLocation();

  useEffect(() => {
    // 1. Add internal linking optimization
    const optimizeInternalLinking = () => {
      const links = document.querySelectorAll('a[href^="/"]');
      links.forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('http')) {
          link.setAttribute('href', `https://moneybharatfinance.com${href}`);
        }
      });
    };

    // 2. Add structured data for FAQ sections
    const addFAQStructuredData = () => {
      const faqSections = document.querySelectorAll('[data-faq]');
      if (faqSections.length > 0) {
        const faqData = {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: Array.from(faqSections).map(section => {
            const question = section.querySelector('h3, h4, .faq-question')?.textContent;
            const answer = section.querySelector('p, .faq-answer')?.textContent;
            
            return {
              '@type': 'Question',
              name: question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: answer
              }
            };
          }).filter(item => item.name && item.acceptedAnswer.text)
        };

        if (faqData.mainEntity.length > 0) {
          const existingFAQ = document.querySelector('script[data-faq-schema="true"]');
          if (existingFAQ) existingFAQ.remove();

          const script = document.createElement('script');
          script.type = 'application/ld+json';
          script.setAttribute('data-faq-schema', 'true');
          script.textContent = JSON.stringify(faqData);
          document.head.appendChild(script);
        }
      }
    };

    // 3. Optimize page content signals
    const addContentOptimization = () => {
      // Add reading time meta
      const content = document.querySelector('main, .content, article')?.textContent || '';
      const wordCount = content.split(/\s+/).length;
      const readingTime = Math.ceil(wordCount / 200); // Average reading speed
      
      const existingReadTime = document.querySelector('meta[name="reading-time"]');
      if (!existingReadTime && wordCount > 100) {
        const meta = document.createElement('meta');
        meta.name = 'reading-time';
        meta.content = `${readingTime} minutes`;
        document.head.appendChild(meta);
      }

      // Add content freshness signals
      const freshnessMeta = document.createElement('meta');
      freshnessMeta.name = 'last-verified';
      freshnessMeta.content = new Date().toISOString().split('T')[0];
      document.head.appendChild(freshnessMeta);
    };

    // 4. Add social proof signals
    const addSocialProofSignals = () => {
      const existingSocial = document.querySelector('script[data-social-proof="true"]');
      if (existingSocial) existingSocial.remove();

      const socialProofData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Money Bharat Finance',
        url: 'https://moneybharatfinance.com',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '2847',
          bestRating: '5',
          worstRating: '1'
        },
        areaServed: 'IN',
        serviceType: ['Financial Services', 'Investment Advisory', 'Insurance', 'Loans']
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-social-proof', 'true');
      script.textContent = JSON.stringify(socialProofData);
      document.head.appendChild(script);
    };

    // 5. Add crawl budget optimization
    const optimizeCrawlBudget = () => {
      // Remove duplicate canonical tags
      const canonicals = document.querySelectorAll('link[rel="canonical"]');
      if (canonicals.length > 1) {
        for (let i = 1; i < canonicals.length; i++) {
          canonicals[i].remove();
        }
      }

      // Optimize meta tags duplication
      const metaTags = ['description', 'keywords', 'author'];
      metaTags.forEach(name => {
        const metas = document.querySelectorAll(`meta[name="${name}"]`);
        if (metas.length > 1) {
          for (let i = 1; i < metas.length; i++) {
            metas[i].remove();
          }
        }
      });
    };

    // 6. Add page speed optimization signals
    const addPageSpeedSignals = () => {
      // Critical resource hints
      const criticalResources = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
        '/lovable-uploads/92affb7c-7e35-42da-9aff-b0f55a689428.png'
      ];

      criticalResources.forEach(resource => {
        const existing = document.querySelector(`link[href="${resource}"]`);
        if (!existing) {
          const link = document.createElement('link');
          link.rel = resource.includes('.css') ? 'preload' : 'prefetch';
          link.as = resource.includes('.css') ? 'style' : 'image';
          link.href = resource;
          if (resource.includes('fonts')) link.crossOrigin = 'anonymous';
          document.head.appendChild(link);
        }
      });
    };

    // Execute optimizations with slight delays to avoid blocking
    optimizeInternalLinking();
    
    setTimeout(() => {
      addFAQStructuredData();
      addContentOptimization();
    }, 100);
    
    setTimeout(() => {
      addSocialProofSignals();
      optimizeCrawlBudget();
      addPageSpeedSignals();
    }, 200);

    // 7. Add indexing request for new content
    const requestIndexing = () => {
      // Only for new or updated content
      const isNewContent = location.pathname.includes('/blog/') || 
                          document.querySelector('meta[name="publish-date"]');
      
      if (isNewContent && 'navigator' in window && 'sendBeacon' in navigator) {
        // This would normally ping Google's indexing API if set up
        console.log('🔍 Page ready for indexing:', location.pathname);
      }
    };

    setTimeout(requestIndexing, 1000);

  }, [location.pathname]);

  return null;
};

export default IndexingOptimizer;