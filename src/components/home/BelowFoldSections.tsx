
import { lazy } from "react";

// Lazy load sections with better chunking strategy
const FeaturesSection = lazy(() => import("@/components/home/FeaturesSection"));
const MutualFundSection = lazy(() => import("@/components/home/MutualFundSection"));
const InsuranceSection = lazy(() => import("@/components/home/InsuranceSection"));
const LoanSection = lazy(() => import("@/components/home/LoanSection"));
const FinancialToolsSection = lazy(() => import("@/components/home/FinancialToolsSection"));
const TrustSecuritySection = lazy(() => import("@/components/home/TrustSecuritySection"));
const TestimonialsSection = lazy(() => import("@/components/home/TestimonialsSection"));
const FAQSection = lazy(() => import("@/components/home/FAQSection"));
const CTASection = lazy(() => import("@/components/home/CTASection"));

const BelowFoldSections = () => {
  return (
    <>
      <FeaturesSection />
      <MutualFundSection />
      <InsuranceSection />
      <LoanSection />
      <FinancialToolsSection />
      <TrustSecuritySection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default BelowFoldSections;
