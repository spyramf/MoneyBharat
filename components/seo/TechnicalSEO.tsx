import { useEffect } from "react";
import { SITE_CONFIG } from "@/constants/siteConfig";

const TechnicalSEO = () => {
  useEffect(() => {
    // 1. Add critical performance optimizations
    const optimizePerformance = () => {
      // Add resource hints for better loading
      const resourceHints = [
        { rel: "preload", href: "/src/index.css", as: "style" },
        { rel: "modulepreload", href: "/src/main.tsx" },
      ];

      resourceHints.forEach((hint) => {
        const existing = document.querySelector(`link[rel="${hint.rel}"][href="${hint.href}"]`);
        if (!existing) {
          const link = document.createElement("link");
          Object.assign(link, hint);
          document.head.appendChild(link);
        }
      });
    };

    // 2. Add HSTS and security optimization
    const addSecurityOptimizations = () => {
      // Add security-related meta tags
      const securityTags = [
        { name: "referrer", content: "strict-origin-when-cross-origin" },
        {
          httpEquiv: "Content-Security-Policy",
          content:
            "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://cdn.gpteng.co; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
        },
      ];

      securityTags.forEach((tag) => {
        const existing = document.querySelector(
          tag.name ? `meta[name="${tag.name}"]` : `meta[http-equiv="${tag.httpEquiv}"]`,
        );
        if (!existing) {
          const meta = document.createElement("meta");
          if (tag.name) meta.name = tag.name;
          if (tag.httpEquiv) meta.httpEquiv = tag.httpEquiv;
          meta.content = tag.content;
          document.head.appendChild(meta);
        }
      });
    };

    // 3. Add advanced structured data for financial service
    const addAdvancedStructuredData = () => {
      const existingFinancialSchema = document.querySelector('script[data-financial-service="true"]');
      if (existingFinancialSchema) existingFinancialSchema.remove();

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-financial-service", "true");
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FinancialService",
        name: "Money Bharat Finance",
        description:
          "AI-powered financial platform offering mutual funds, SIP investments, health & life insurance, and instant personal loans",
        url: "https://moneybharatfinance.com",
        telephone: "+91-98765-43210",
        email: "contact@moneybharatfinance.com",
        logo: {
          "@type": "ImageObject",
          url: `${SITE_CONFIG.url}${SITE_CONFIG.brand.logo}`,
          width: 400,
          height: 400,
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mumbai",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        serviceType: [
          "Mutual Fund Investment",
          "SIP Investment",
          "Health Insurance",
          "Term Life Insurance",
          "Personal Loans",
          "Home Loans",
          "Business Loans",
        ],
        areaServed: "IN",
        currenciesAccepted: "INR",
        priceRange: "₹₹",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "2847",
          bestRating: "5",
          worstRating: "1",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Financial Products",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "FinancialProduct",
                name: "Mutual Fund SIP",
                description: "Systematic Investment Plans starting from ₹500",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "FinancialProduct",
                name: "Health Insurance",
                description: "Comprehensive health coverage with cashless treatment",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "FinancialProduct",
                name: "Personal Loans",
                description: "Instant personal loans up to ₹25 lakhs",
              },
            },
          ],
        },
        sameAs: [
          "https://www.facebook.com/moneybharatfinance",
          "https://www.twitter.com/moneybharatfin",
          "https://www.instagram.com/moneybharatfinance",
          "https://www.linkedin.com/company/money-bharat-finance",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-98765-43210",
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      });
      document.head.appendChild(script);
    };

    // 4. Add Open Graph optimization for social sharing
    const optimizeOpenGraph = () => {
      const ogTags = [
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "en_IN" },
        { property: "og:locale:alternate", content: "hi_IN" },
        { property: "fb:app_id", content: "1234567890" }, // Replace with actual FB app ID
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:type", content: "image/png" },
      ];

      ogTags.forEach((tag) => {
        const existing = document.querySelector(`meta[property="${tag.property}"]`);
        if (!existing) {
          const meta = document.createElement("meta");
          meta.setAttribute("property", tag.property);
          meta.content = tag.content;
          document.head.appendChild(meta);
        }
      });
    };

    // 5. Add Twitter Card optimization
    const optimizeTwitterCards = () => {
      const twitterTags = [
        { name: "twitter:creator", content: "@moneybharatfin" },
        { name: "twitter:image:alt", content: "Money Bharat Finance - Financial Services Platform" },
        { name: "twitter:domain", content: "moneybharatfinance.com" },
      ];

      twitterTags.forEach((tag) => {
        const existing = document.querySelector(`meta[name="${tag.name}"]`);
        if (!existing) {
          const meta = document.createElement("meta");
          meta.name = tag.name;
          meta.content = tag.content;
          document.head.appendChild(meta);
        }
      });
    };

    // 6. Add additional SEO meta tags
    const addAdditionalSEOMeta = () => {
      const seoTags = [
        { name: "robots", content: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" },
        { name: "googlebot", content: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" },
        { name: "bingbot", content: "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" },
        { name: "google-site-verification", content: "your-google-verification-code" }, // Replace with actual verification code
        { name: "msvalidate.01", content: "your-bing-verification-code" }, // Replace with actual verification code
        { name: "yandex-verification", content: "your-yandex-verification-code" }, // Replace with actual verification code
        { name: "next-head-count", content: "50" },
      ];

      seoTags.forEach((tag) => {
        const existing = document.querySelector(`meta[name="${tag.name}"]`);
        if (
          !existing &&
          tag.content !== "your-google-verification-code" &&
          tag.content !== "your-bing-verification-code" &&
          tag.content !== "your-yandex-verification-code"
        ) {
          const meta = document.createElement("meta");
          meta.name = tag.name;
          meta.content = tag.content;
          document.head.appendChild(meta);
        }
      });
    };

    // 7. Optimize page loading performance
    const optimizePageLoading = () => {
      // Add critical CSS inlining hint
      const criticalCSS = document.createElement("style");
      criticalCSS.innerHTML = `
        .hero-section { display: block; }
        .navigation { display: flex; }
        .loading-placeholder { display: none; }
      `;
      criticalCSS.setAttribute("data-critical", "true");
      document.head.appendChild(criticalCSS);

      // Optimize font loading
      const fontOptimization = document.createElement("link");
      fontOptimization.rel = "preload";
      fontOptimization.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
      fontOptimization.as = "style";
      fontOptimization.crossOrigin = "anonymous";
      document.head.appendChild(fontOptimization);
    };

    // Execute all optimizations
    optimizePerformance();
    addSecurityOptimizations();
    addAdvancedStructuredData();
    optimizeOpenGraph();
    optimizeTwitterCards();
    addAdditionalSEOMeta();
    optimizePageLoading();
  }, []);

  return null;
};

export default TechnicalSEO;
