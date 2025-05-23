
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LoanCalculator from '@/components/loans/LoanCalculator';
import LoanHero from '@/components/loans/LoanHero';
import LoanFeatures from '@/components/loans/LoanFeatures';
import LoanEligibilityDocuments from '@/components/loans/LoanEligibilityDocuments';
import LoanProcess from '@/components/loans/LoanProcess';
import LoanFAQ from '@/components/loans/LoanFAQ';
import LoanCTA from '@/components/loans/LoanCTA';
import { 
  personalLoanFeatures, 
  personalLoanEligibilityCriteria, 
  personalLoanRequiredDocuments, 
  personalLoanProcess,
  personalLoanFAQs
} from '@/data/loanData';

const PersonalLoan = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <LoanHero
        title="Personal Loan"
        subtitle="Quick unsecured loans for your personal needs with competitive interest rates"
        gradientFrom="from-fintech-purple"
        gradientTo="to-fintech-blue"
        primaryButtonText="Apply Now"
        className="mt-16"
      />

      {/* Features Section */}
      <LoanFeatures
        title="Why Choose Our Personal Loan"
        subtitle="Designed to meet all your financial needs with flexible and affordable options"
        features={personalLoanFeatures}
      />

      {/* Loan Calculator Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Personal Loan EMI Calculator</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Plan your finances better with our easy-to-use Personal Loan EMI calculator
              </p>
            </div>
            
            <LoanCalculator
              initialLoanAmount={300000}
              initialInterestRate={10.99}
              initialLoanTenure={24}
              loanAmountMin={50000}
              loanAmountMax={1500000}
              interestRateMin={9}
              interestRateMax={18}
              tenureMin={12}
              tenureMax={60}
              onApply={() => {}}
            />
          </div>
        </div>
      </section>

      {/* Eligibility & Documents Section */}
      <LoanEligibilityDocuments
        title="Eligibility & Required Documents"
        subtitle="Check if you qualify and what documents you'll need"
        badgeText="Requirements"
        eligibilityCriteria={personalLoanEligibilityCriteria}
        requiredDocuments={personalLoanRequiredDocuments}
      />

      {/* How It Works Section */}
      <LoanProcess
        title="How It Works"
        subtitle="Simple 3-step process to get your personal loan"
        badgeText="Application Process"
        steps={personalLoanProcess}
        className="bg-gray-50"
      />

      {/* FAQ Section */}
      <LoanFAQ
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our personal loans"
        badgeText="Got Questions?"
        faqs={personalLoanFAQs}
        useAccordion={true}
      />

      {/* Apply Now CTA */}
      <LoanCTA
        title="Ready to Get Started?"
        subtitle="Apply now and get your personal loan approved within 24 hours"
        badgeText="Get Started Today"
        primaryButtonText="Apply for a Personal Loan"
        secondaryButtonText="Speak to an Advisor"
        gradientFrom="from-fintech-purple"
        gradientTo="to-fintech-blue"
      />

      <Footer />
    </div>
  );
};

export default PersonalLoan;
