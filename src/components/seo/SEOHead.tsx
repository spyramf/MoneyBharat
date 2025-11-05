
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getCanonicalUrl, getPageTitle, getPageDescription } from '@/utils/seoUtils';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  noIndex?: boolean;
}

const SEOHead = ({ 
  title,
  description,
  keywords = 'mutual funds, SIP investment, health insurance, personal loans, financial planning, Money Bharat',
  image = '/lovable-uploads/92affb7c-7e35-42da-9aff-b0f55a689428.png',
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  noIndex = false
}: SEOHeadProps) => {
  const location = useLocation();
  const canonicalUrl = getCanonicalUrl(location.pathname);
  
  // Auto-generate title and description if not provided
  const pageTitle = title || getPageTitle(getPageNameFromPath(location.pathname));
  const pageDescription = description || getPageDescription(getPageKeyFromPath(location.pathname));
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Enhanced Robots and Indexing */}
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"} />
      <meta name="googlebot" content={noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"} />
      <meta name="bingbot" content={noIndex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"} />
      
      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={`https://moneybharatfinance.com${image}`} />
      <meta property="og:site_name" content="Money Bharat Finance" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={`https://moneybharatfinance.com${image}`} />
      <meta name="twitter:site" content="@moneybharatfin" />
      
      {/* Article specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      
      {/* Additional SEO tags */}
      <meta name="author" content="Money Bharat Finance" />
      <meta name="copyright" content="Money Bharat Finance" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Geo targeting */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.country" content="India" />
      <meta name="geo.placename" content="India" />
      
      {/* Mobile and language optimization */}
      <meta name="format-detection" content="telephone=yes" />
      <meta name="theme-color" content="#2EB883" />
      <link rel="alternate" type="application/rss+xml" title="Money Bharat Finance Blog" href="https://moneybharatfinance.com/rss.xml" />
      
      {/* Hreflang for Indian market */}
      <link rel="alternate" hrefLang="en-in" href={canonicalUrl} />
      <link rel="alternate" hrefLang="hi-in" href={canonicalUrl} />
    </Helmet>
  );
};

// Helper functions
const getPageNameFromPath = (pathname: string): string => {
  const pathMap: Record<string, string> = {
    '/': 'Home',
    '/mutual-funds': 'Mutual Funds',
    '/insurance': 'Insurance', 
    '/health-insurance': 'Health Insurance',
    '/term-insurance': 'Term Insurance',
    '/vehicle-insurance': 'Vehicle Insurance',
    '/loans': 'Loans',
    '/loans/personal': 'Personal Loans',
    '/loans/business': 'Business Loans',
    '/loans/car': 'Car Loans',
    '/loans/home': 'Home Loans',
    '/loans/education': 'Education Loans',
    '/about': 'About Us',
    '/blog': 'Blog',
    '/booking': 'Book Consultation',
    '/tools/sip-calculator': 'SIP Calculator',
    '/tools/emi-calculator': 'EMI Calculator',
    '/tools/tax-saving': 'Tax Saving',
  };
  
  return pathMap[pathname] || 'Page';
};

const getPageKeyFromPath = (pathname: string): string => {
  const pathMap: Record<string, string> = {
    '/': 'home',
    '/mutual-funds': 'mutual-funds',
    '/insurance': 'insurance',
    '/health-insurance': 'health-insurance', 
    '/term-insurance': 'term-insurance',
    '/vehicle-insurance': 'vehicle-insurance',
    '/loans': 'loans',
    '/about': 'about',
    '/blog': 'blog',
    '/booking': 'booking',
  };
  
  return pathMap[pathname] || pathname.replace('/', '').replace(/\//g, '-');
};

export default SEOHead;
