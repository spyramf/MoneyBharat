
import { useState } from "react";
import Navbar from "@/components/Navbar";
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

  return (
    <div className="min-h-screen bg-background">
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
