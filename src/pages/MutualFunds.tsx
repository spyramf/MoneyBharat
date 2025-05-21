
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import MutualFundHero from "@/components/mutual-funds/MutualFundHero";
import SIPFeatures from "@/components/mutual-funds/SIPFeatures";
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
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <MutualFundHero />
      <SIPFeatures features={sipFeatures} />
      <DematAccountSteps steps={dematSteps} />
      <AdditionalFeatures features={additionalFeatures} />
      <MutualFundBenefits benefits={mutualFundBenefits} />
      <SIPAdvantages advantages={sipAdvantages} />
      <ChooseMutualFundsTips tips={choosingMutualFundsTips} />
      <MutualFundTerms terms={mutualFundTerms} />
      <FundCategories categories={fundCategories} />
      <TopPerformingFunds funds={topPerformingFunds} />
      <MutualFundFAQs items={faqItems} />
      <SipCalculator />
      <Footer />
    </div>
  );
};

export default MutualFunds;
