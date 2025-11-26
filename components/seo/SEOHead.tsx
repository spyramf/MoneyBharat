import Head from "next/head";
import { useRouter } from "next/router";
import { getCanonicalUrl, getPageTitle, getPageDescription } from "@/utils/seoUtils";
import { SITE_CONFIG } from "@/constants/siteConfig";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noIndex?: boolean;
}

const SEOHead = ({
  title,
  description,
  keywords = "Money Bharat, Money Bharat Finance, money bharat mutual funds, money bharat insurance, money bharat loans, mutual funds India, SIP investment, health insurance, personal loans, financial planning",
  image = SITE_CONFIG.brand.logo,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  noIndex = false,
}: SEOHeadProps) => {
  const router = useRouter();
  const currentPath = (router.asPath || router.pathname || "/").split("?")[0];
  const canonicalUrl = getCanonicalUrl(currentPath);
  const absoluteImageUrl = image?.startsWith("http") ? image : `${SITE_CONFIG.url}${image || ""}`;

  // Auto-generate title and description if not provided
  const pageTitle = title || getPageTitle(getPageNameFromPath(currentPath));
  const pageDescription = description || getPageDescription(getPageKeyFromPath(currentPath));

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      <meta
        name="robots"
        content={
          noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        }
      />
      <meta
        name="googlebot"
        content={
          noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        }
      />
      <meta
        name="bingbot"
        content={
          noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        }
      />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:site_name" content="Money Bharat Finance" />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:site" content="@moneybharatfin" />

      {type === "article" && publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {type === "article" && modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {type === "article" && author && <meta property="article:author" content={author} />}

      <meta name="author" content="Money Bharat Finance" />
      <meta name="copyright" content="Money Bharat Finance" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

      <meta name="geo.region" content="IN" />
      <meta name="geo.country" content="India" />
      <meta name="geo.placename" content="India" />

      <meta name="format-detection" content="telephone=yes" />
      <meta name="theme-color" content="#10b981" />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Money Bharat Finance Blog"
        href="https://www.moneybharatfinance.com/rss.xml"
      />

      <link rel="alternate" hrefLang="en-in" href={canonicalUrl} />
      <link rel="alternate" hrefLang="hi-in" href={canonicalUrl} />
    </Head>
  );
};

// Helper functions
const getPageNameFromPath = (pathname: string): string => {
  const pathMap: Record<string, string> = {
    "/": "Home",
    "/mutual-funds": "Mutual Funds",
    "/insurance": "Insurance",
    "/health-insurance": "Health Insurance",
    "/term-insurance": "Term Insurance",
    "/vehicle-insurance": "Vehicle Insurance",
    "/loans": "Loans",
    "/loans/personal": "Personal Loans",
    "/loans/business": "Business Loans",
    "/loans/car": "Car Loans",
    "/loans/home": "Home Loans",
    "/loans/education": "Education Loans",
    "/about": "About Us",
    "/blog": "Blog",
    "/booking": "Book Consultation",
    "/tools/sip-calculator": "SIP Calculator",
    "/tools/emi-calculator": "EMI Calculator",
    "/tools/tax-saving": "Tax Saving",
  };

  return pathMap[pathname] || "Page";
};

const getPageKeyFromPath = (pathname: string): string => {
  const pathMap: Record<string, string> = {
    "/": "home",
    "/mutual-funds": "mutual-funds",
    "/insurance": "insurance",
    "/health-insurance": "health-insurance",
    "/term-insurance": "term-insurance",
    "/vehicle-insurance": "vehicle-insurance",
    "/loans": "loans",
    "/about": "about",
    "/blog": "blog",
    "/booking": "booking",
  };

  return pathMap[pathname] || pathname.replace("/", "").replace(/\//g, "-");
};

export default SEOHead;
