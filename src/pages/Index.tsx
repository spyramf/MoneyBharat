
import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import OptimizedHeroSection from "@/components/OptimizedHeroSection";
import Footer from "@/components/Footer";

// Import critical above-the-fold sections directly
import ServicesSection from "@/components/home/ServicesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";

// Group related sections to reduce HTTP requests
const BelowFoldSections = lazy(() => import("@/components/home/BelowFoldSections"));

// Enhanced loading fallback with skeleton
const SectionLoader = () => (
  <div className="py-16">
    <div className="container mx-auto px-4">
      <div className="animate-pulse space-y-8">
        <div className="text-center space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-100 rounded-xl p-6 space-y-4">
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Money Bharat Finance - Best Mutual Funds, Insurance & Loans Platform India</title>
        <meta name="description" content="Money Bharat Finance offers zero-commission mutual funds, comprehensive insurance coverage, and instant loan approvals. Join 500K+ investors building wealth with India's most trusted fintech platform." />
        <meta name="keywords" content="mutual funds india, zero commission investing, health insurance, personal loans, SIP calculator, financial planning, Money Bharat Finance" />
        <link rel="canonical" href="https://moneybharat.co/" />
        
        {/* Enhanced Open Graph tags */}
        <meta property="og:title" content="Money Bharat Finance - India's Leading Fintech Platform" />
        <meta property="og:description" content="Join 500K+ investors with zero-commission mutual funds, insurance, and instant loans. Start your wealth journey today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moneybharat.co/" />
        <meta property="og:image" content="/lovable-uploads/92affb7c-7e35-42da-9aff-b0f55a689428.png" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Money Bharat Finance - Best Financial Platform" />
        <meta name="twitter:description" content="Zero-commission mutual funds, insurance & loans in India" />
        <meta name="twitter:image" content="/lovable-uploads/92affb7c-7e35-42da-9aff-b0f55a689428.png" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            "name": "Money Bharat Finance",
            "description": "India's leading fintech platform offering mutual funds, insurance, and loans",
            "url": "https://moneybharat.co",
            "logo": "https://moneybharat.co/lovable-uploads/92affb7c-7e35-42da-9aff-b0f55a689428.png",
            "sameAs": [
              "https://www.facebook.com/moneybharatfinance",
              "https://www.linkedin.com/company/money-bharat-finance"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Financial Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mutual Fund Investment",
                    "description": "Zero commission mutual fund investments with AI-powered recommendations"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Insurance Services",
                    "description": "Comprehensive health, life, and general insurance coverage"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Loan Services",
                    "description": "Instant personal, home, and business loan approvals"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Main content with semantic HTML */}
        <main role="main">
          <OptimizedHeroSection />
          
          {/* Critical above-the-fold sections */}
          <ServicesSection />
          <HowItWorksSection />
          
          {/* All below-the-fold sections grouped together with enhanced loading */}
          <Suspense fallback={<SectionLoader />}>
            <BelowFoldSections />
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
