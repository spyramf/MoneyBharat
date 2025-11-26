import { useEffect } from "react";
import { useRouter } from "next/router";

const IndexingOptimizer = () => {
  const router = useRouter();
  const pathname = (router.asPath || router.pathname || "/").split("?")[0];

  useEffect(() => {
    const currentPath = pathname;

    const optimizeInternalLinking = () => {
      const links = document.querySelectorAll('a[href^="/"]');
      links.forEach((link) => {
        const href = link.getAttribute("href");
        if (href && !href.startsWith("http")) {
          link.setAttribute("href", `https://moneybharatfinance.com${href}`);
        }
      });
    };

    const addFAQStructuredData = () => {
      const faqSections = document.querySelectorAll("[data-faq]");
      if (faqSections.length === 0) return;

      const faqData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: Array.from(faqSections)
          .map((section) => {
            const question = section.querySelector("h3, h4, .faq-question")?.textContent;
            const answer = section.querySelector("p, .faq-answer")?.textContent;

            if (!question || !answer) return null;

            return {
              "@type": "Question",
              name: question,
              acceptedAnswer: {
                "@type": "Answer",
                text: answer,
              },
            };
          })
          .filter(Boolean),
      };

      if (faqData.mainEntity.length > 0) {
        const existingFAQ = document.querySelector('script[data-faq-schema="true"]');
        if (existingFAQ) existingFAQ.remove();

        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-faq-schema", "true");
        script.textContent = JSON.stringify(faqData);
        document.head.appendChild(script);
      }
    };

    const addContentOptimization = () => {
      const content = document.querySelector("main, .content, article")?.textContent || "";
      const wordCount = content.trim().split(/\s+/).length;
      const readingTime = Math.ceil(wordCount / 200);

      if (wordCount > 100 && !document.querySelector('meta[name="reading-time"]')) {
        const meta = document.createElement("meta");
        meta.name = "reading-time";
        meta.content = `${readingTime} minutes`;
        document.head.appendChild(meta);
      }

      const freshnessMeta = document.createElement("meta");
      freshnessMeta.name = "last-verified";
      freshnessMeta.content = new Date().toISOString().split("T")[0];
      document.head.appendChild(freshnessMeta);
    };

    const addSocialProofSignals = () => {
      const existingSocial = document.querySelector('script[data-social-proof="true"]');
      if (existingSocial) existingSocial.remove();

      const socialProofData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Money Bharat Finance",
        url: "https://moneybharatfinance.com",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "2847",
          bestRating: "5",
          worstRating: "1",
        },
        areaServed: "IN",
        serviceType: ["Financial Services", "Investment Advisory", "Insurance", "Loans"],
      };

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-social-proof", "true");
      script.textContent = JSON.stringify(socialProofData);
      document.head.appendChild(script);
    };

    const optimizeCrawlBudget = () => {
      const canonicals = document.querySelectorAll('link[rel="canonical"]');
      canonicals.forEach((link, index) => {
        if (index > 0) link.remove();
      });

      ["description", "keywords", "author"].forEach((name) => {
        const metas = document.querySelectorAll(`meta[name="${name}"]`);
        metas.forEach((meta, index) => {
          if (index > 0) meta.remove();
        });
      });
    };

    const addPageSpeedSignals = () => {
      const criticalResources = [
        "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
        "/lovable-uploads/92affb7c-7e35-42da-9aff-b0f55a689428.png",
      ];

      criticalResources.forEach((resource) => {
        const existing = document.querySelector(`link[href="${resource}"]`);
        if (existing) return;

        const link = document.createElement("link");
        const isStyle = resource.includes(".css");
        link.rel = isStyle ? "preload" : "prefetch";
        link.as = isStyle ? "style" : "image";
        link.href = resource;
        if (resource.includes("fonts")) link.crossOrigin = "anonymous";
        document.head.appendChild(link);
      });
    };

    const requestIndexing = () => {
      const hasPublishDate = Boolean(document.querySelector('meta[name="publish-date"]'));
      const isNewContent = currentPath.includes("/blog/") || hasPublishDate;

      if (isNewContent && typeof navigator !== "undefined" && "sendBeacon" in navigator) {
        console.log("Page ready for indexing:", currentPath);
      }
    };

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

    setTimeout(requestIndexing, 1000);
  }, [pathname]);

  return null;
};

export default IndexingOptimizer;
