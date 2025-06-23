
export const getCanonicalUrl = (path: string = ''): string => {
  const baseUrl = 'https://moneybharat.co';
  
  // Normalize the path
  let normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Remove trailing slash except for root
  if (normalizedPath !== '/' && normalizedPath.endsWith('/')) {
    normalizedPath = normalizedPath.slice(0, -1);
  }
  
  // Ensure lowercase
  normalizedPath = normalizedPath.toLowerCase();
  
  return `${baseUrl}${normalizedPath}`;
};

export const getPageTitle = (pageName: string, includeCompany: boolean = true): string => {
  const companyName = 'Money Bharat Finance';
  
  if (!includeCompany) return pageName;
  
  return pageName === 'Home' 
    ? `${companyName} - Mutual Funds, Insurance & Loans`
    : `${pageName} | ${companyName}`;
};

export const getPageDescription = (page: string): string => {
  const descriptions: Record<string, string> = {
    'home': 'Grow your wealth with Money Bharat Finance - India\'s AI-powered platform for mutual funds, SIP investments, health & life insurance, and instant personal loans. Expert advisory with ₹5000Cr+ AUM.',
    'mutual-funds': 'Invest in top-performing mutual funds with expert guidance. Direct plans, zero commission, SIP starting ₹500. Get 15%+ returns with Money Bharat\'s curated fund selection.',
    'insurance': 'Comprehensive insurance solutions - Health, Life, Term, Vehicle insurance with instant quotes. Compare plans from top insurers and get best coverage at competitive premiums.',
    'loans': 'Quick approval personal, home, business loans with competitive interest rates. Instant online application, minimal documentation, and flexible repayment options.',
    'health-insurance': 'Family health insurance with cashless treatment, comprehensive coverage, and affordable premiums. Compare plans from leading insurers.',
    'term-insurance': 'High coverage term life insurance plans with affordable premiums. Secure your family\'s financial future with trusted insurance providers.',
    'vehicle-insurance': 'Motor and vehicle insurance with comprehensive coverage, instant quotes, and hassle-free claims. Protect your vehicle with the best insurance plans.',
    'about': 'Learn about Money Bharat Finance - India\'s trusted financial platform serving 50,000+ clients with expert advisory and innovative financial solutions.',
    'blog': 'Financial insights, investment tips, and market analysis from Money Bharat\'s expert team. Stay updated with latest trends in mutual funds, insurance, and loans.',
    'booking': 'Book a free consultation with Money Bharat\'s certified financial advisors. Get personalized investment advice and financial planning guidance.',
  };
  
  return descriptions[page] || `${page.charAt(0).toUpperCase() + page.slice(1)} - Money Bharat Finance`;
};
