
import { useState } from "react";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/seo/SEOHead";
import StructuredData from "@/components/seo/StructuredData";
import InsuranceHero from "@/components/insurance/InsuranceHero";
import ComprehensiveInsuranceSolutions from "@/components/insurance/ComprehensiveInsuranceSolutions";
import InsuranceCategories from "@/components/insurance/InsuranceCategories";
import InsurancePlans from "@/components/insurance/InsurancePlans";
import TopInsuranceProviders from "@/components/insurance/TopInsuranceProviders";
import KeyBenefits from "@/components/insurance/KeyBenefits";
import InsurancePremiumCalculator from "@/components/insurance/InsurancePremiumCalculator";
import InsuranceFAQs from "@/components/insurance/InsuranceFAQs";
import MoneyBharatBenefits from "@/components/insurance/MoneyBharatBenefits";
import HowItWorks from "@/components/insurance/HowItWorks";
import InsurancePartners from "@/components/insurance/InsurancePartners";
import WhyChooseUs from "@/components/insurance/WhyChooseUs";
import InsuranceCTA from "@/components/insurance/InsuranceCTA";
import { 
  insuranceCategories, 
  insuranceTypes, 
  topInsuranceProviders, 
  frequentlyAskedQuestions, 
  insuranceKeyBenefits,
  moneyBharatBenefits 
} from "@/data/insuranceData";

const InsurancePage = () => {
  const [selectedInsuranceType, setSelectedInsuranceType] = useState("health");
  const selectedType = insuranceTypes.find(type => type.id === selectedInsuranceType) || insuranceTypes[0];

  const faqData = frequentlyAskedQuestions.map(faq => ({
    question: faq.question,
    answer: faq.answer
  }));

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Insurance Plans in India - Health, Life, Term & Vehicle Insurance | Money Bharat"
        description="Compare and buy insurance online - Health, Life, Term, Vehicle & Travel insurance from 15+ top insurers. Get instant quotes, best premium rates, and hassle-free claims. Protect your family with comprehensive insurance coverage."
        keywords="insurance plans India, health insurance online, term insurance calculator, life insurance plans, vehicle insurance, best insurance companies, insurance comparison, insurance policy online, family insurance plans"
      />
      
      <StructuredData 
        page="insurance" 
        faqData={faqData}
        productData={{
          name: "Insurance Plans",
          description: "Comprehensive insurance solutions including health, life, term, and vehicle insurance",
          category: "Insurance",
          price: "3000"
        }}
      />
      
      <Navbar />
      
      <InsuranceHero />
      <ComprehensiveInsuranceSolutions />
      <InsuranceCategories 
        categories={insuranceCategories}
        selectedType={selectedInsuranceType}
        onSelectType={setSelectedInsuranceType}
      />
      <InsurancePlans selectedType={selectedType} />
      <TopInsuranceProviders providers={topInsuranceProviders} />
      <KeyBenefits benefits={insuranceKeyBenefits} />
      {/* <InsurancePremiumCalculator /> */}
      <MoneyBharatBenefits benefits={moneyBharatBenefits} />
      <HowItWorks />
      <WhyChooseUs />
      <InsurancePartners />
      <InsuranceFAQs faqs={frequentlyAskedQuestions} />
      <InsuranceCTA />
    </div>
  );
};

export default InsurancePage;
