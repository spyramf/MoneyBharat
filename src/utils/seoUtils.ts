import { getCanonicalUrl as getCanonicalUrlFromCanonicalizer } from "./urlCanonicalizer";

export const getCanonicalUrl = (path: string = ""): string => {
  // Use the enhanced canonicalizer for consistent URL generation
  return getCanonicalUrlFromCanonicalizer(path);
};

export const getPageTitle = (pageName: string, includeCompany: boolean = true): string => {
  const companyName = "Money Bharat Finance";

  if (!includeCompany) return pageName;

  return pageName === "Home" ? `${companyName} - Mutual Funds, Insurance & Loans` : `${pageName} | ${companyName}`;
};

export const getPageDescription = (page: string): string => {
  const descriptions: Record<string, string> = {
    home: "Grow your wealth with Money Bharat Finance - India's AI-powered platform for mutual funds, SIP investments, health & life insurance, and instant personal loans. Expert advisory with ₹5000Cr+ AUM.",
    "mutual-funds":
      "Invest in top-performing mutual funds with expert guidance. Professional advisory, SIP starting ₹500. Get 15%+ returns with Money Bharat's curated fund selection.",
    insurance:
      "Comprehensive insurance solutions - Health, Life, Term, Vehicle insurance with instant quotes. Compare plans from top insurers and get best coverage at competitive premiums.",
    loans:
      "Quick approval personal, home, business loans with competitive interest rates. Instant online application, minimal documentation, and flexible repayment options.",
    "health-insurance":
      "Family health insurance with cashless treatment, comprehensive coverage, and affordable premiums. Compare plans from leading insurers.",
    "term-insurance":
      "High coverage term life insurance plans with affordable premiums. Secure your family's financial future with trusted insurance providers.",
    "vehicle-insurance":
      "Motor and vehicle insurance with comprehensive coverage, instant quotes, and hassle-free claims. Protect your vehicle with the best insurance plans.",
    about:
      "Learn about Money Bharat Finance - India's trusted financial platform serving 50,000+ clients with expert advisory and innovative financial solutions.",
    contact:
      "Contact Money Bharat Finance for personalized financial advice on mutual funds, insurance, and loans. Call +91 9970735694 or email contact@moneybharatfinance.com. Free consultation available.",
    blog: "Financial insights, investment tips, and market analysis from Money Bharat's expert team. Stay updated with latest trends in mutual funds, insurance, and loans.",
    booking:
      "Book a free consultation with Money Bharat's certified financial advisors. Get personalized investment advice and financial planning guidance.",
  };

  return descriptions[page] || `${page.charAt(0).toUpperCase() + page.slice(1)} - Money Bharat Finance`;
};

/**
 * Validate URL canonicalization for SEO
 */
export const validateCanonicalUrl = (currentUrl: string, expectedPath: string): boolean => {
  const canonicalUrl = getCanonicalUrl(expectedPath);
  return currentUrl === canonicalUrl;
};

/**
 * Get SEO-friendly URL structure
 */
export const getSEOUrl = (path: string, params?: Record<string, string>): string => {
  let url = getCanonicalUrl(path);

  if (params && Object.keys(params).length > 0) {
    const searchParams = new URLSearchParams(params);
    url += `?${searchParams.toString()}`;
  }

  return url;
};
