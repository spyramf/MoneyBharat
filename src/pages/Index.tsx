
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import EnhancedHeroSection from "@/components/EnhancedHeroSection";
import Footer from "@/components/Footer";

// Lazy load non-critical sections for better initial load
const FeaturesSection = lazy(() => import("@/components/home/FeaturesSection"));
const FinancialToolsSection = lazy(() => import("@/components/home/FinancialToolsSection"));
const MutualFundSection = lazy(() => import("@/components/home/MutualFundSection"));
const InsuranceSection = lazy(() => import("@/components/home/InsuranceSection"));
const LoanSection = lazy(() => import("@/components/home/LoanSection"));
const ServicesSection = lazy(() => import("@/components/home/ServicesSection"));
const TestimonialsSection = lazy(() => import("@/components/home/TestimonialsSection"));
const CTASection = lazy(() => import("@/components/home/CTASection"));

// Loading fallback component
const SectionLoader = () => (
  <div className="py-16">
    <div className="container mx-auto px-4">
      <div className="animate-pulse space-y-4">
        <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-48 bg-gray-200 rounded"></div>
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
      <EnhancedHeroSection />
      
      <Suspense fallback={<SectionLoader />}>
        <ServicesSection />
      </Suspense>
      
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
        <TestimonialsSection />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <CTASection />
      </Suspense>
      
      <Footer />
    </div>
  );
};

export default Index;
