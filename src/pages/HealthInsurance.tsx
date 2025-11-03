
import React from "react";
import Navbar from "@/components/Navbar";
import SEOHead from "@/components/seo/SEOHead";
import StructuredData from "@/components/seo/StructuredData";

// Import refactored components
import HealthInsuranceHero from "@/components/health-insurance/HealthInsuranceHero";
import QuickQuoteCalculator from "@/components/health-insurance/QuickQuoteCalculator";
import PopularHealthPlans from "@/components/health-insurance/PopularHealthPlans";
import HealthInsuranceTypes from "@/components/health-insurance/HealthInsuranceTypes";
import FactorsToConsider from "@/components/health-insurance/FactorsToConsider";
import PremiumFactors from "@/components/health-insurance/PremiumFactors";
import KeyPolicyFeatures from "@/components/health-insurance/KeyPolicyFeatures";
import EligibilityCriteria from "@/components/health-insurance/EligibilityCriteria";
import RiderCovers from "@/components/health-insurance/RiderCovers";
import RequiredDocuments from "@/components/health-insurance/RequiredDocuments";
import HealthBenefits from "@/components/health-insurance/HealthBenefits";
import CoverageOptions from "@/components/health-insurance/CoverageOptions";
import ClaimsProcess from "@/components/health-insurance/ClaimsProcess";
import ClaimRejectionReasons from "@/components/health-insurance/ClaimRejectionReasons";
import CoverageTable from "@/components/health-insurance/CoverageTable";
import InsurancePortability from "@/components/health-insurance/InsurancePortability";
import NetworkHospitals from "@/components/health-insurance/NetworkHospitals";
import HealthFAQs from "@/components/health-insurance/HealthFAQs";
import HealthCTA from "@/components/health-insurance/HealthCTA";

const HealthInsurance = () => {
  const faqData = [
    {
      question: "What is the best health insurance plan in India?",
      answer: "The best health insurance plan depends on your age, family size, and medical history. Money Bharat helps you compare plans from top insurers like HDFC ERGO, ICICI Lombard, and Star Health to find the perfect coverage for your needs."
    },
    {
      question: "How much health insurance coverage do I need?",
      answer: "Experts recommend a minimum coverage of ₹5-10 lakhs for individuals and ₹10-25 lakhs for families. Consider your city's healthcare costs, existing medical conditions, and family medical history when choosing coverage."
    },
    {
      question: "Can I buy health insurance online?",
      answer: "Yes, you can easily compare and buy health insurance online through Money Bharat. Get instant quotes, compare plans from 15+ insurers, and purchase policies completely online with paperless documentation."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Best Health Insurance Plans in India 2024 - Compare & Buy Online | Money Bharat"
        description="Compare and buy best health insurance plans online from top insurers. Get comprehensive family health coverage, cashless hospitalization at 10,000+ network hospitals. Free premium calculator & instant policy issuance. Coverage from ₹5 Lakhs to ₹1 Crore."
        keywords="best health insurance India, health insurance plans, family health insurance, health insurance comparison, medical insurance online, cashless health insurance, health insurance premium calculator, individual health insurance, group health insurance"
      />
      
      <StructuredData 
        page="insurance" 
        faqData={faqData}
        productData={{
          name: "Health Insurance Plans",
          description: "Comprehensive health insurance coverage with cashless hospitalization and lifetime renewability",
          category: "Insurance",
          price: "5000"
        }}
      />
      
      <Navbar />
      <main>
        <HealthInsuranceHero />
        {/* <QuickQuoteCalculator /> */}
        {/* <PopularHealthPlans /> */}
        <HealthInsuranceTypes />
        <FactorsToConsider />
        <PremiumFactors />
        <KeyPolicyFeatures />
        <EligibilityCriteria />
        <RiderCovers />
        <RequiredDocuments />
        {/* <HealthBenefits /> */}
        {/* <CoverageOptions /> */}
        <ClaimsProcess />
        <ClaimRejectionReasons />
        <CoverageTable />
        <InsurancePortability />
        <NetworkHospitals />
        <HealthFAQs />
        <HealthCTA />
      </main>
    </div>
  );
};

export default HealthInsurance;
