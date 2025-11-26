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
    home: "Money Bharat Finance - India's trusted platform for mutual funds, SIP investments, health & life insurance, and instant loans. Money Bharat offers expert financial advisory with Rs 15000Cr+ AUM.",
    "mutual-funds":
      "Money Bharat mutual funds - Invest in top-performing funds with expert guidance. Money Bharat Finance offers professional SIP advisory starting Rs 1500 with 15%+ returns.",
    insurance:
      "Money Bharat insurance solutions - Health, Life, Term, Vehicle insurance with instant quotes. Money Bharat Finance helps you compare plans from top insurers.",
    loans:
      "Money Bharat loans - Quick approval for personal, home, business loans with competitive rates. Money Bharat Finance offers instant online application with minimal documentation.",
    "health-insurance":
      "Money Bharat health insurance - Family coverage with cashless treatment and affordable premiums. Compare leading health insurance plans at Money Bharat Finance.",
    "term-insurance":
      "Money Bharat term insurance - High coverage life insurance plans with affordable premiums. Secure your family's future with Money Bharat Finance.",
    "vehicle-insurance":
      "Money Bharat vehicle insurance - Comprehensive motor insurance with instant quotes and hassle-free claims. Get the best vehicle insurance at Money Bharat Finance.",
    about:
      "About Money Bharat Finance - India's trusted financial platform serving 50,000+ clients. Learn how Money Bharat delivers expert advisory and innovative solutions.",
    contact:
      "Contact Money Bharat Finance for personalized financial advice. Call Money Bharat at +91 9970735694 or email for free consultation on mutual funds, insurance, and loans.",
    blog: "Money Bharat Finance blog - Financial insights, investment tips, and market analysis. Stay updated with Money Bharat's expert guidance on mutual funds, insurance, and loans.",
    booking:
      "Book consultation with Money Bharat Finance - Free session with certified financial advisors. Get personalized investment advice from Money Bharat's experts.",
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
