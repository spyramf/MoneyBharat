import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Custom404Handler = () => {
  const location = useLocation();

  useEffect(() => {
    // Define all known routes (including dynamic patterns)
    const knownRoutes = [
      "/",
      "/mutual-funds",
      "/insurance",
      "/health-insurance",
      "/term-insurance",
      "/vehicle-insurance",
      "/loans",
      "/loans/personal",
      "/loans/business",
      "/loans/car",
      "/loans/home",
      "/loans/education",
      "/loans/mutual-funds",
      "/about",
      "/tools/sip-calculator",
      "/tools/emi-calculator",
      "/tools/tax-saving",
      "/blog",
      "/booking",
      "/privacy-policy",
      "/terms-of-service",
      "/sitemap",
      "/investor/login",
      "/investor/signup",
      "/investor/bank-account",
      "/investor/dashboard",
      "/investor/clients",
      "/admin/login",
      "/admin",
      "/admin/blogs",
      "/admin/blogs/new",
      "/admin/bookings",
    ];

    const currentPath = location.pathname;
    const isBlogPost = currentPath.startsWith("/blog/") && currentPath !== "/blog";
    const isAdminEdit = currentPath.startsWith("/admin/blogs/edit/");

    // Check if current path is a known route
    const isKnownRoute = knownRoutes.includes(currentPath) || isBlogPost || isAdminEdit;

    if (!isKnownRoute) {
      console.log("🚨 404 Error detected:", {
        path: currentPath,
        timestamp: new Date().toISOString(),
        referrer: document.referrer || "Direct access",
        userAgent: navigator.userAgent,
      });

      // Method 1: PostMessage for iframe/parent window communication
      if (typeof window !== "undefined" && window.parent && window.parent !== window) {
        window.parent.postMessage(
          {
            type: "SET_HTTP_STATUS",
            status: 404,
            path: currentPath,
            canonical: `https://moneybharatfinance.com${currentPath}`,
          },
          "*",
        );
      }

      // Method 2: Set document title for SEO tools
      document.title = "404 - Page Not Found | Money Bharat Finance";

      // Method 3: Add/update meta tags for proper SEO signaling
      const updateMetaTag = (name: string, content: string) => {
        let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
        if (!tag) {
          tag = document.createElement("meta");
          tag.name = name;
          document.head.appendChild(tag);
        }
        tag.content = content;
      };

      updateMetaTag("robots", "noindex, nofollow");
      updateMetaTag(
        "description",
        "The page you are looking for could not be found. Please check the URL or navigate to our homepage.",
      );

      // Method 4: Add canonical URL for the 404 page itself
      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = "https://moneybharatfinance.com/404";

      // Method 5: Custom response header simulation (for server-side detection)
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "page_not_found", {
          page_path: currentPath,
          page_title: "404 - Page Not Found",
          custom_parameters: {
            http_status: 404,
            error_type: "page_not_found",
          },
        });
      }

      // Method 6: Console warning for development and SEO tools
      console.warn(`
🔍 SEO Tool Detection: 404 Error
═══════════════════════════════════
Path: ${currentPath}
Expected: Custom 404 page should be detected
Status: 404 (Page Not Found)
Canonical: https://moneybharatfinance.com/404
Time: ${new Date().toISOString()}
═══════════════════════════════════
      `);

      // Method 7: Add structured data for 404 error
      const addStructuredData = () => {
        const existingScript = document.querySelector('script[type="application/ld+json"][data-404="true"]');
        if (existingScript) {
          existingScript.remove();
        }

        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-404", "true");
        script.textContent = JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "404 - Page Not Found",
          description: "The requested page could not be found.",
          url: `https://moneybharatfinance.com${currentPath}`,
          mainEntity: {
            "@type": "ErrorPage",
            name: "404 Error",
            description: "Page not found error",
            statusCode: 404,
          },
          isPartOf: {
            "@type": "WebSite",
            name: "Money Bharat Finance",
            url: "https://moneybharatfinance.com",
          },
        });
        document.head.appendChild(script);
      };

      addStructuredData();
    } else {
      // Clean up 404-specific meta tags for valid pages
      const robotsTag = document.querySelector('meta[name="robots"][content="noindex, nofollow"]');
      if (robotsTag && !currentPath.startsWith("/admin/")) {
        robotsTag.remove();
      }

      // Remove 404 structured data
      const script404 = document.querySelector('script[data-404="true"]');
      if (script404) {
        script404.remove();
      }
    }
  }, [location.pathname]);

  return null;
};

export default Custom404Handler;
