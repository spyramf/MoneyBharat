
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import OptimizedHeroSection from "@/components/OptimizedHeroSection";
import Footer from "@/components/Footer";

// Import critical above-the-fold sections directly
import ServicesSection from "@/components/home/ServicesSection";
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
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Main heading and hero content */}
      <main>
        <OptimizedHeroSection />
        
        {/* Navigation breadcrumbs for SEO */}
        <nav aria-label="Site navigation" className="hidden">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/mutual-funds">Mutual Funds</a></li>
            <li><a href="/insurance">Insurance</a></li>
            <li><a href="/loans">Loans</a></li>
            <li><a href="/tools/sip-calculator">SIP Calculator</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </nav>
        
        {/* Services section with internal links */}
        <ServicesSection />
        
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
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
