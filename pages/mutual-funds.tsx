import Head from 'next/head';
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import StructuredData from "@/components/seo/StructuredData";
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
  // Convert FAQ items to structured data format
  const faqData = faqItems.map(faq => ({
    question: faq.question,
    answer: faq.answer
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Best Mutual Funds for SIP Investment Online in India 2024 | Money Bharat</title>
        <meta name="description" content="Invest in top performing mutual funds & start SIP online with expert guidance. Compare 2000+ mutual fund schemes, ELSS tax saving funds, equity & debt funds. Expert advisory with ₹5000Cr+ AUM. Start SIP from ₹500/month." />
        <meta name="keywords" content="best mutual funds for SIP, SIP investment online, top performing mutual funds India, mutual fund investment, mutual fund distributor, ELSS tax saving funds, equity mutual funds, debt funds India, SIP calculator, mutual fund returns, how to invest in mutual funds" />
      </Head>
      
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
