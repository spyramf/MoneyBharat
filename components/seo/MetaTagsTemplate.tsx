import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '@/constants/siteConfig';

interface MetaTagsTemplateProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
  url?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  article?: {
    section?: string;
    tags?: string[];
  };
}

/**
 * Complete Meta Tags Template for SEO
 * Optimized for https://www.moneybharatfinance.com/
 * Company: Spyra Exim Pvt Ltd
 */
export const MetaTagsTemplate = ({
  title = SITE_CONFIG.title,
  description = SITE_CONFIG.description,
  keywords = SITE_CONFIG.keywords,
  image = `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
  type = 'website',
  url = SITE_CONFIG.url,
  publishedTime,
  modifiedTime,
  author = 'Money Bharat Finance Team',
  article,
}: MetaTagsTemplateProps) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Canonical URL - Always use www */}
      <link rel="canonical" href={url} />
      
      {/* Robots Meta */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="hi_IN" />
      <meta property="og:site_name" content="Money Bharat Finance" />
      
      {/* Article-specific OG tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {type === 'article' && article?.section && (
        <meta property="article:section" content={article.section} />
      )}
      {type === 'article' && article?.tags && article.tags.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:creator" content="@moneybharat" />
      <meta name="twitter:site" content="@moneybharat" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="language" content="English, Hindi" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Money Bharat" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#2EB883" />
      <meta name="msapplication-TileColor" content="#2EB883" />
      
      {/* Business Information */}
      <meta name="company" content="Spyra Exim Pvt Ltd" />
      <meta name="contact" content="contact@moneybharatfinance.com" />
      
      {/* Hreflang for International */}
      <link rel="alternate" hrefLang="en-in" href={url} />
      <link rel="alternate" hrefLang="hi-in" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://www.moneybharatfinance.com" />
      <link rel="dns-prefetch" href="https://www.moneybharatfinance.com" />
    </Helmet>
  );
};
