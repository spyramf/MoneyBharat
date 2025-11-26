import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import StructuredData from "@/components/seo/StructuredData";
import SEOHead from "@/components/seo/SEOHead";
import { getSeoMetadata } from "@/constants/seoMetadata";
import MutualFundHero from "@/components/mutual-funds/MutualFundHero";
import SIPFeatures from "@/components/mutual-funds/SIPFeatures";
import NRIExcellence from "@/components/mutual-funds/NRIExcellence";
import DematAccountSteps from "@/components/mutual-funds/DematAccountSteps";
import AdditionalFeatures from "@/components/mutual-funds/AdditionalFeatures";
import MutualFundBenefits from "@/components/mutual-funds/MutualFundBenefits";
import SIPAdvantages from "@/components/mutual-funds/SIPAdvantages";
import FundCategories from "@/components/mutual-funds/FundCategories";
import TopPerformingFunds from "@/components/mutual-funds/TopPerformingFunds";
import MutualFundTerms from "@/components/mutual-funds/MutualFundTerms";
import ChooseMutualFundsTips from "@/components/mutual-funds/ChooseMutualFundsTips";
import MutualFundFAQs from "@/components/mutual-funds/MutualFundFAQs";
import SipCalculator from "@/components/mutual-funds/SipCalculator";
import { Case } from "@/components/ui/cases-with-infinite-scroll";

import {
  sipFeatures,
  dematSteps,
  additionalFeatures,
  mutualFundBenefits,
  sipAdvantages,
  fundCategories,
  topPerformingFunds,
  mutualFundTerms,
  choosingMutualFundsTips,
  faqItems
} from "@/components/mutual-funds/data/mutualFundData";

const MutualFunds = () => {
  const seo = getSeoMetadata("mutualFunds");
  // Convert FAQ items to structured data format
  const faqData = faqItems.map(faq => ({
    question: faq.question,
    answer: faq.answer
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead {...seo} />
      
      <StructuredData 
        page="mutual-funds" 
        faqData={faqData}
        productData={{
          name: "Mutual Fund Investment Plans",
          description: "Expert-guided mutual fund plans and SIP investments with professional advisory",
          category: "Investment",
          price: "500"
        }}
      />
      
      <MutualFundHero />
      <SIPFeatures features={sipFeatures} />
      <NRIExcellence />
      <DematAccountSteps steps={dematSteps} />
      <AdditionalFeatures features={additionalFeatures} />
      <MutualFundBenefits benefits={mutualFundBenefits} />
      <SIPAdvantages advantages={sipAdvantages} />
      <ChooseMutualFundsTips tips={choosingMutualFundsTips} />
      <MutualFundTerms terms={mutualFundTerms} />
      <FundCategories categories={fundCategories} />
      <TopPerformingFunds funds={topPerformingFunds} />
      <Case />
      <MutualFundFAQs items={faqItems} />
      {/* <SipCalculator /> */}
    </div>
  );
};

export default MutualFunds;
