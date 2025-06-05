
import Navbar from "@/components/Navbar";
import EnhancedHeroSection from "@/components/EnhancedHeroSection";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/home/FeaturesSection";
import FinancialToolsSection from "@/components/home/FinancialToolsSection";
import MutualFundSection from "@/components/home/MutualFundSection";
import InsuranceSection from "@/components/home/InsuranceSection";
import LoanSection from "@/components/home/LoanSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <EnhancedHeroSection />
      <ServicesSection />
      <FeaturesSection />
      <MutualFundSection />
      <InsuranceSection />
      <LoanSection />
      <FinancialToolsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
