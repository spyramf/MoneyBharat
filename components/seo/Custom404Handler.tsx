import { useEffect } from "react";
import { useRouter } from "next/router";

const Custom404Handler = () => {
  const router = useRouter();
  const pathname = (router.asPath || router.pathname || "/").split("?")[0];

  useEffect(() => {
    const currentPath = pathname;

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

    const isBlogPost = currentPath.startsWith("/blog/") && currentPath !== "/blog";
    const isAdminEdit = currentPath.startsWith("/admin/blogs/edit/");
    const isKnownRoute = knownRoutes.includes(currentPath) || isBlogPost || isAdminEdit;

    if (!isKnownRoute) {
      console.log("404 Error detected:", {
        path: currentPath,
        timestamp: new Date().toISOString(),
        referrer: document.referrer || "Direct access",
        userAgent: navigator.userAgent,
      });

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

      document.title = "404 - Page Not Found | Money Bharat Finance";

      const updateMetaTag = (name: string, content: string) => {
        let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
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

      let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!canonicalLink) {
        canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = "https://moneybharatfinance.com/404";

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

      console.warn(
        [
          "SEO Tool Detection: 404 Error",
          `Path: ${currentPath}`,
          "Expected: Custom 404 page should be detected",
          "Status: 404 (Page Not Found)",
          `Canonical: https://moneybharatfinance.com/404`,
          `Time: ${new Date().toISOString()}`,
        ].join("\n"),
      );

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
      const robotsTag = document.querySelector('meta[name="robots"][content="noindex, nofollow"]');
      if (robotsTag && !currentPath.startsWith("/admin/")) {
        robotsTag.remove();
      }

      const script404 = document.querySelector('script[data-404="true"]');
      if (script404) {
        script404.remove();
      }
    }
  }, [pathname]);

  return null;
};

export default Custom404Handler;
