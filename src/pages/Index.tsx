import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import { BackgroundPaths } from "@/components/ui/background-paths";
import StructuredData from "@/components/seo/StructuredData";
import SEOHead from "@/components/seo/SEOHead";
import BreadcrumbSEO from "@/components/seo/BreadcrumbSEO";
import URLRedirectHandler from "@/components/seo/URLRedirectHandler";
import FAQSchema from "@/components/seo/FAQSchema";

// Import critical above-the-fold sections directly
import ServicesTabSection from "@/components/home/ServicesTabSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";

// Keep lazy loading only for below-the-fold sections
const FeaturesSection = lazy(() => import("@/components/home/FeaturesSection"));
const FinancialToolsSection = lazy(() => import("@/components/home/FinancialToolsSection"));
const MutualFundSection = lazy(() => import("@/components/home/MutualFundSection"));
const InsuranceSection = lazy(() => import("@/components/home/InsuranceSection"));
const LoanSection = lazy(() => import("@/components/home/LoanSection"));
const TrustSecuritySection = lazy(() => import("@/components/home/TrustSecuritySection"));
const TestimonialsSection = lazy(() => import("@/components/home/TestimonialsSection"));
const FAQSection = lazy(() => import("@/components/home/FAQSection"));
const CTASection = lazy(() => import("@/components/home/CTASection"));

// Simplified loading fallback
const SectionLoader = () => (
  <div className="py-8">
    <div className="container mx-auto px-4">
      <div className="animate-pulse space-y-4">
        <div className="h-6 bg-gray-200 rounded w-1/4 mx-auto"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-32 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Index = () => {
  // FAQ data for structured markup
  // const homeFaqData = [
  //   {
  //     question: "What makes Money Bharat different from other financial platforms?",
  //     answer:
  //       "Money Bharat combines cutting-edge technology with personalized financial advice. We offer expert-guided mutual fund investments, comprehensive insurance coverage, and instant loan approvals through our AI-powered platform.",
  //   },
  //   {
  //     question: "How secure is Money Bharat for online financial transactions?",
  //     answer:
  //       "Money Bharat employs bank-grade 256-bit SSL encryption, multi-factor authentication, and follows RBI guidelines for financial security.",
  //   },
  //   {
  //     question: "What types of mutual funds can I invest in through Money Bharat?",
  //     answer:
  //       "We offer over 2,000+ mutual fund schemes including equity funds, debt funds, hybrid funds, ELSS tax-saving funds, international funds, and sectoral funds from top AMCs.",
  //   },
  // ];

  // // Review data for structured markup
  // const reviewData = [
  //   {
  //     name: "Rajesh Sharma",
  //     quote: "Money Bharat's mutual fund recommendations helped me achieve 18% returns in just one year.",
  //     rating: "5",
  //   },
  //   {
  //     name: "Priya Mehta",
  //     quote: "Money Bharat's experts guided me to a comprehensive insurance plan that saved us 30% on premiums.",
  //     rating: "5",
  //   },
  //   {
  //     name: "Vikram Singh",
  //     quote: "Getting a home loan through Money Bharat was incredibly fast and easy.",
  //     rating: "5",
  //   },
  // ];

  return (
    <div className="min-h-screen">
      {/* Handle URL canonicalization - only enable in production */}
      <URLRedirectHandler enableRedirect={import.meta.env.PROD} />

      <SEOHead
        title="Best Mutual Funds, Daily SIP in India | Money Bharat Finance"
        description="Start your wealth journey with Money Bharat Finance — India's trusted platform for mutual fund, Daily SIP, health insurance, and financial planning."
        keywords="best mutual funds for SIP, SIP investment online, money bharat, money bharat finance, top performing mutual funds, financial planning platform, moneybharat, tax saving ELSS funds, moneybharatfinance, home loan interest rates"
      />

      {/* <StructuredData page="home" faqData={homeFaqData} reviewData={reviewData} />
      <FAQSchema faqs={homeFaqData} /> */}

      <Navbar />
      <BreadcrumbSEO />

      {/* Critical above-the-fold content */}
      <BackgroundPaths
        title="Best Mutual Funds, SIP & Insurance Plans"
        subtitle="Expert guidance for wealth creation. Start SIP from ₹500, compare top mutual funds & insurance plans. AMFI registered with ₹5000Cr+ AUM."
        primaryButtonText="Start SIP Investment Now"
        primaryButtonLink="https://client.moneybharat.co/NewOnBoarding/SignUp"
      />

      {/* Load services section without Suspense (critical) */}
      <ServicesTabSection />

      {/* How it works section for content expansion */}
      <HowItWorksSection />

      <Suspense fallback={<SectionLoader />}>
        <FeaturesSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <MutualFundSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <InsuranceSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <LoanSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <FinancialToolsSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <TrustSecuritySection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <FAQSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <CTASection />
      </Suspense>
    </div>
  );
};

export default Index;
