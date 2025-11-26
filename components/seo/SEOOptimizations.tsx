import { useEffect } from "react";
import { useRouter } from "next/router";
import { SITE_CONFIG } from "@/constants/siteConfig";

const SEOOptimizations = () => {
  const router = useRouter();
  const pathname = (router.asPath || router.pathname || "/").split("?")[0];

  useEffect(() => {
    const currentPath = pathname;

    const preloadCriticalResources = () => {
      const criticalImages = [SITE_CONFIG.brand.logo, SITE_CONFIG.brand.icon];

      criticalImages.forEach((src) => {
        if (document.querySelector(`link[rel="preload"][href="${src}"]`)) return;
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = src;
        link.crossOrigin = "anonymous";
        document.head.appendChild(link);
      });
    };

    const addSecurityHeaders = () => {
      const securityMeta = [
        { httpEquiv: "X-Content-Type-Options", content: "nosniff" },
        { httpEquiv: "X-Frame-Options", content: "DENY" },
        { httpEquiv: "X-XSS-Protection", content: "1; mode=block" },
        { httpEquiv: "Referrer-Policy", content: "strict-origin-when-cross-origin" },
        { httpEquiv: "Permissions-Policy", content: "camera=(), microphone=(), geolocation=()" },
      ];

      securityMeta.forEach((meta) => {
        const existing = document.querySelector(`meta[http-equiv="${meta.httpEquiv}"]`);
        if (existing) return;
        const metaTag = document.createElement("meta");
        metaTag.httpEquiv = meta.httpEquiv;
        metaTag.content = meta.content;
        document.head.appendChild(metaTag);
      });
    };

    const addMobileOptimization = () => {
      const mobileMeta = [
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "default" },
        { name: "apple-mobile-web-app-title", content: "Money Bharat" },
        { name: "application-name", content: "Money Bharat Finance" },
        { name: "msapplication-TileImage", content: SITE_CONFIG.brand.logo },
      ];

      mobileMeta.forEach((meta) => {
        const existing = document.querySelector(`meta[name="${meta.name}"]`);
        if (existing) return;
        const metaTag = document.createElement("meta");
        metaTag.name = meta.name;
        metaTag.content = meta.content;
        document.head.appendChild(metaTag);
      });
    };

    const addPerformanceHints = () => {
      const hints = [
        { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
        { rel: "dns-prefetch", href: "https://www.google-analytics.com" },
        { rel: "dns-prefetch", href: "https://www.googletagmanager.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      ];

      hints.forEach((hint) => {
        const existing = document.querySelector(`link[rel="${hint.rel}"][href="${hint.href}"]`);
        if (existing) return;
        const link = document.createElement("link");
        link.rel = hint.rel;
        link.href = hint.href;
        if (hint.crossOrigin) link.crossOrigin = hint.crossOrigin;
        document.head.appendChild(link);
      });
    };

    const addPageStructuredData = () => {
      let schemaType = "WebPage";
      let additionalProps: Record<string, unknown> = {};

      if (currentPath.includes("/blog/")) {
        schemaType = "Article";
        additionalProps = {
          "@type": "Article",
          publisher: {
            "@type": "Organization",
            name: "Money Bharat Finance",
          },
          author: {
            "@type": "Organization",
            name: "Money Bharat Finance",
          },
        };
      } else if (currentPath === "/") {
        additionalProps = {
          "@type": "WebSite",
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: "https://moneybharatfinance.com/blog?search={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        };
      }

      const existingSchema = document.querySelector('script[data-page-schema="true"]');
      if (existingSchema) existingSchema.remove();

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-page-schema", "true");
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": schemaType,
        url: `https://moneybharatfinance.com${currentPath}`,
        name: document.title,
        description: document.querySelector('meta[name="description"]')?.getAttribute("content") || "",
        isPartOf: {
          "@type": "WebSite",
          name: "Money Bharat Finance",
          url: "https://moneybharatfinance.com",
        },
        ...additionalProps,
      });
      document.head.appendChild(script);
    };

    const optimizeImages = () => {
      const images = document.querySelectorAll("img:not([data-optimized])");
      images.forEach((img) => {
        if (!img.hasAttribute("loading")) {
          img.setAttribute("loading", "lazy");
        }
        if (!img.hasAttribute("decoding")) {
          img.setAttribute("decoding", "async");
        }
        img.setAttribute("data-optimized", "true");
      });
    };

    preloadCriticalResources();
    addSecurityHeaders();
    addMobileOptimization();
    addPerformanceHints();
    addPageStructuredData();
    optimizeImages();

    const observer = new MutationObserver(() => {
      optimizeImages();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
};

export default SEOOptimizations;
