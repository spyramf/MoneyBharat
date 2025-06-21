
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import OptimizedHeroSection from "@/components/OptimizedHeroSection";
import Footer from "@/components/Footer";

// Import critical above-the-fold sections directly
import ServicesSection from "@/components/home/ServicesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";

// Group related sections to reduce HTTP requests
const BelowFoldSections = lazy(() => import("@/components/home/BelowFoldSections"));

// Optimized loading fallback
const SectionLoader = () => (
  <div className="py-4">
    <div className="container mx-auto px-4">
      <div className="animate-pulse space-y-2">
        <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2 mx-auto"></div>
        <div className="h-16 bg-gray-200 rounded mt-4"></div>
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
        
        {/* Critical above-the-fold sections */}
        <ServicesSection />
        <HowItWorksSection />
        
        {/* All below-the-fold sections grouped together */}
        <Suspense fallback={<SectionLoader />}>
          <BelowFoldSections />
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
