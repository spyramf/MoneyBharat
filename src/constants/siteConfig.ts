
// Dynamic base URL - works in both dev and production
const getBaseUrl = () => {
  if (typeof window !== 'undefined') {
    // In browser, use current origin for development
    if (window.location.hostname === 'localhost' || 
        window.location.hostname.includes('lovable.app') ||
        window.location.hostname.includes('netlify.app') ||
        window.location.hostname.includes('vercel.app')) {
      return window.location.origin;
    }
  }
  // Production domain
  return 'https://moneybharatfinance.com';
};

export const SITE_CONFIG = {
  name: 'Money Bharat Finance',
  title: 'Money Bharat Finance - Mutual Funds, Insurance & Loans',
  description: 'Grow your wealth with Money Bharat Finance - India\'s AI-powered platform for mutual funds, SIP investments, health & life insurance, and instant personal loans.',
  url: getBaseUrl(),
  canonicalDomain: 'moneybharatfinance.com',
  protocol: 'https',
  ogImage: '/images/og-image.jpg',
  
  // SEO Keywords - Comprehensive list for ranking
  keywords: 'mutual funds India, best mutual funds for SIP, SIP investment online, top performing mutual funds India, mutual fund investment, health insurance plans, best health insurance India, family health insurance, term insurance calculator, term life insurance online, personal loan online, instant personal loan approval, home loan interest rates India, education loan for students, financial planning India, investment advisory services, Money Bharat Finance, wealth management platform, tax saving mutual funds, ELSS funds India, health insurance comparison, mutual fund distributor, SIP calculator India, loan against property, vehicle insurance online, retirement planning India, investment tips India, mutual fund returns, insurance policy comparison, quick loan approval, financial advisor online',
  
  // Contact Information
  contact: {
    email: 'spyraexim@gmail.com',
    phone: '+91-XXXXXXXXXX',
    address: 'India'
  },
  
  // Social Links
  social: {
    twitter: 'https://twitter.com/moneybharat',
    facebook: 'https://facebook.com/moneybharat',
    linkedin: 'https://linkedin.com/company/moneybharat'
  }
} as const;
