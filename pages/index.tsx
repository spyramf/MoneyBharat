import Head from 'next/head';
import { BackgroundPaths } from '@/components/ui/background-paths';
import StructuredData from '@/components/seo/StructuredData';
import BreadcrumbSEO from '@/components/seo/BreadcrumbSEO';
import FAQSchema from '@/components/seo/FAQSchema';
import ServicesTabSection from '@/components/home/ServicesTabSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import FinancialToolsSection from '@/components/home/FinancialToolsSection';
import MutualFundSection from '@/components/home/MutualFundSection';
import InsuranceSection from '@/components/home/InsuranceSection';
import LoanSection from '@/components/home/LoanSection';
import TrustSecuritySection from '@/components/home/TrustSecuritySection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FAQSection from '@/components/home/FAQSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  const homeFaqData = [
    {
      question: "What makes Money Bharat different from other financial platforms?",
      answer:
        "Money Bharat combines cutting-edge technology with personalized financial advice. We offer expert-guided mutual fund investments, comprehensive insurance coverage, and instant loan approvals through our AI-powered platform.",
    },
    {
      question: "How secure is Money Bharat for online financial transactions?",
      answer:
        "Money Bharat employs bank-grade 256-bit SSL encryption, multi-factor authentication, and follows RBI guidelines for financial security.",
    },
    {
      question: "What types of mutual funds can I invest in through Money Bharat?",
      answer:
        "We offer over 2,000+ mutual fund schemes including equity funds, debt funds, hybrid funds, ELSS tax-saving funds, international funds, and sectoral funds from top AMCs.",
    },
  ];

  const reviewData = [
    {
      name: "Rajesh Sharma",
      quote: "Money Bharat's mutual fund recommendations helped me achieve 18% returns in just one year.",
      rating: "5",
    },
    {
      name: "Priya Mehta",
      quote: "Money Bharat's experts guided me to a comprehensive insurance plan that saved us 30% on premiums.",
      rating: "5",
    },
    {
      name: "Vikram Singh",
      quote: "Getting a home loan through Money Bharat was incredibly fast and easy.",
      rating: "5",
    },
  ];

  return (
    <div className="min-h-screen">
      <Head>
        <title>Best Mutual Funds, Daily SIP in India | Money Bharat Finance</title>
        <meta name="description" content="Start your wealth journey with Money Bharat Finance — India's trusted platform for mutual fund, Daily SIP, health insurance, and financial planning." />
        <meta name="keywords" content="best mutual funds for SIP, SIP investment online, money bharat, money bharat finance, top performing mutual funds, financial planning platform, moneybharat, tax saving ELSS funds, moneybharatfinance, home loan interest rates" />
      </Head>

      <StructuredData page="home" faqData={homeFaqData} reviewData={reviewData} />
      <FAQSchema faqs={homeFaqData} />

      <BreadcrumbSEO />

      <BackgroundPaths
        title="Best Mutual Funds, SIP & Insurance Plans"
        subtitle="Expert guidance for wealth creation. Start SIP from ₹500, compare top mutual funds & insurance plans. AMFI registered with ₹5000Cr+ AUM."
        primaryButtonText="Start SIP Investment Now"
        primaryButtonLink="https://client.moneybharat.co/NewOnBoarding/SignUp"
      />

      <ServicesTabSection />
      <HowItWorksSection />
      <FeaturesSection />
      <MutualFundSection />
      <InsuranceSection />
      <LoanSection />
      <FinancialToolsSection />
      <TrustSecuritySection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Index;