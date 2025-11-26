import Head from "next/head";
import { SITE_CONFIG } from "@/constants/siteConfig";

interface SchemaMarkupProps {
  type?: "organization" | "financial-service" | "faq" | "product" | "review";
  data?: any;
}

const SchemaMarkup = ({ type = "organization", data }: SchemaMarkupProps) => {
  const schema = buildSchema(type, data);

  if (!schema) return null;

  return (
    <Head>
      <script
        key={`schema-${type}`}
        id={`schema-${type}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </Head>
  );
};

const buildSchema = (type: string, data?: any) => {
  switch (type) {
    case "organization":
      return getOrganizationSchema();
    case "financial-service":
      return getFinancialServiceSchema(data);
    case "faq":
      return getFAQSchema(data);
    case "product":
      return getProductSchema(data);
    case "review":
      return getReviewSchema(data);
    default:
      return null;
  }
};

const BRAND_LOGO_URL = `${SITE_CONFIG.url}${SITE_CONFIG.brand.logo}`;

const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Money Bharat Finance",
  alternateName: "Money Bharat",
  description:
    "AI-powered financial platform offering mutual funds, SIP investments, health & life insurance, and instant personal loans with expert advisory services.",
  url: "https://moneybharatfinance.com",
  logo: {
    "@type": "ImageObject",
    url: BRAND_LOGO_URL,
    width: 400,
    height: 400,
  },
  image: BRAND_LOGO_URL,
  telephone: "+91 98765 43210",
  email: "contact@moneybharatfinance.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/moneybharatfinance",
    "https://www.twitter.com/moneybharatfin",
    "https://www.instagram.com/moneybharatfinance",
    "https://www.linkedin.com/company/money-bharat-finance",
  ],
  serviceType: [
    "Mutual Fund Investment",
    "SIP Investment",
    "Health Insurance",
    "Term Life Insurance",
    "Personal Loans",
    "Home Loans",
    "Business Loans",
    "Financial Planning",
  ],
  areaServed: "IN",
  currenciesAccepted: "INR",
  priceRange: "Rs 1 - 1",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "2847",
    bestRating: "5",
    worstRating: "1",
  },
  foundingDate: "2020",
  founder: {
    "@type": "Person",
    name: "Money Bharat Team",
  },
  employee: {
    "@type": "Person",
    name: "Expert Financial Advisors",
  },
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "FinancialProduct",
        name: "Mutual Fund SIP",
        description: "Systematic Investment Plans starting from Rs 1500",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "FinancialProduct",
        name: "Health Insurance",
        description: "Comprehensive health coverage with cashless treatment",
      },
    },
  ],
});

const getFinancialServiceSchema = (data: any) => ({
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: data?.name || "Money Bharat Financial Services",
  description: data?.description || "Comprehensive financial solutions",
  provider: {
    "@type": "Organization",
    name: "Money Bharat Finance",
  },
  serviceType: data?.serviceType || "Financial Planning",
  areaServed: "IN",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Financial Products",
    itemListElement: data?.products || [],
  },
});

const getFAQSchema = (faqs: any[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity:
    faqs?.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })) || [],
});

const getProductSchema = (product: any) => ({
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  name: product?.name,
  description: product?.description,
  provider: {
    "@type": "Organization",
    name: "Money Bharat Finance",
  },
  category: product?.category,
  offers: {
    "@type": "Offer",
    price: product?.price || "0",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
  },
});

const getReviewSchema = (reviews: any[]) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Money Bharat Finance",
  review:
    reviews?.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.name,
      },
      reviewBody: review.quote,
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating || "5",
        bestRating: "5",
      },
    })) || [],
});

export default SchemaMarkup;
