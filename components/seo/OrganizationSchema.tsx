import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '@/constants/siteConfig';

/**
 * Organization and Financial Service Structured Data (JSON-LD)
 * Company: Spyra Exim Pvt Ltd
 * Domain: https://www.moneybharatfinance.com/
 */
export const OrganizationSchema = () => {
  const brandLogoUrl = `${SITE_CONFIG.url}${SITE_CONFIG.brand.logo}`;
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": "https://www.moneybharatfinance.com/#organization",
    "name": "Money Bharat Finance",
    "legalName": "Spyra Exim Pvt Ltd",
    "url": "https://www.moneybharatfinance.com/",
    "logo": {
      "@type": "ImageObject",
      "url": brandLogoUrl,
      "width": 512,
      "height": 512
    },
    "image": brandLogoUrl,
    "description": "Money Bharat Finance is India's AI-powered financial platform operated by Spyra Exim Pvt Ltd, offering mutual funds, SIP investments, health & life insurance, and instant personal loans with expert advisory services.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-9970735694",
        "contactType": "customer service",
        "email": "contact@moneybharatfinance.com",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      },
      {
        "@type": "ContactPoint",
        "email": "spyraexim@gmail.com",
        "contactType": "customer support",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      }
    ],
    "sameAs": [
      "https://www.facebook.com/moneybharat",
      "https://twitter.com/moneybharat",
      "https://www.linkedin.com/company/moneybharat"
    ],
    "founder": {
      "@type": "Organization",
      "name": "Spyra Exim Pvt Ltd"
    },
    "foundingDate": "2020",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "serviceType": [
      "Mutual Funds",
      "SIP Investment",
      "Health Insurance",
      "Life Insurance",
      "Term Insurance",
      "Vehicle Insurance",
      "Personal Loans",
      "Home Loans",
      "Education Loans",
      "Car Loans",
      "Business Loans",
      "Loan Against Mutual Funds"
    ],
    "brand": {
      "@type": "Brand",
      "name": "Money Bharat Finance"
    },
    "slogan": "Grow your wealth with India's AI-powered financial platform",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Financial Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "FinancialProduct",
            "name": "Mutual Funds & SIP",
            "description": "Invest in top-performing mutual funds with SIP starting ₹500",
            "url": "https://www.moneybharatfinance.com/mutual-funds"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "InsuranceProduct",
            "name": "Health Insurance",
            "description": "Comprehensive health insurance with cashless treatment",
            "url": "https://www.moneybharatfinance.com/health-insurance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "InsuranceProduct",
            "name": "Term Life Insurance",
            "description": "High coverage term insurance with affordable premiums",
            "url": "https://www.moneybharatfinance.com/term-insurance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "LoanOrCredit",
            "name": "Personal Loans",
            "description": "Quick approval personal loans with competitive rates",
            "url": "https://www.moneybharatfinance.com/personal-loan"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "LoanOrCredit",
            "name": "Home Loans",
            "description": "Affordable home loans with flexible repayment options",
            "url": "https://www.moneybharatfinance.com/home-loan"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "2500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.moneybharatfinance.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.moneybharatfinance.com/#localbusiness",
    "name": "Money Bharat Finance",
    "image": brandLogoUrl,
    "url": "https://www.moneybharatfinance.com/",
    "telephone": "+91-9970735694",
    "email": "contact@moneybharatfinance.com",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.moneybharatfinance.com/#website",
    "url": "https://www.moneybharatfinance.com/",
    "name": "Money Bharat Finance",
    "description": "India's AI-powered financial platform for mutual funds, insurance, and loans",
    "publisher": {
      "@id": "https://www.moneybharatfinance.com/#organization"
    },
    "inLanguage": ["en-IN", "hi-IN"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.moneybharatfinance.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
};
