
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import OptimizedHeroSection from "@/components/OptimizedHeroSection";
import Footer from "@/components/Footer";

// Import critical above-the-fold sections directly
import ServicesSection from "@/components/home/ServicesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";

// Group related sections to reduce HTTP requests
const BelowFoldSections = lazy(() => import("@/components/home/BelowFoldSections"));

// Simplified loading fallback
const SectionLoader = () => (
  <div className="py-8">
    <div className="container mx-auto px-4">
      <div className="animate-pulse space-y-4">
        <div className="h-6 bg-gray-200 rounded w-1/4 mx-auto"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
        <div className="h-32 bg-gray-200 rounded mt-8"></div>
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
