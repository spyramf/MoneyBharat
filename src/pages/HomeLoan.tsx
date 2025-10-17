
import { useState } from 'react';
import { Home, Building, DollarSign, ArrowRight, Calculator } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import StructuredData from '@/components/seo/StructuredData';

import LoanHero from '@/components/loans/LoanHero';
import LoanCalculator from '@/components/loans/LoanCalculator';
import LoanFeatures from '@/components/loans/LoanFeatures';
import LoanBankComparison from '@/components/loans/LoanBankComparison';
import LoanEligibilityDocuments from '@/components/loans/LoanEligibilityDocuments';
import LoanBenefits from '@/components/loans/LoanBenefits';
import LoanFAQ from '@/components/loans/LoanFAQ';
import LoanCTA from '@/components/loans/LoanCTA';

import { 
  homeLoanFeatures, 
  homeLoanTypes, 
  homeLoanBankComparisons, 
  homeLoanFAQs,
  homeLoanEligibilityCriteria, 
  homeLoanRequiredDocuments 
} from '@/data/loanData';

const HomeLoan = () => {
  const [propertyValue, setPropertyValue] = useState<number>(4000000);

  const homeLoanBenefits = [
    {
      title: "Tax Benefits",
      description: "Get tax benefits under Section 80C for principal repayment (up to ₹1.5 lakhs) and Section 24(b) for interest payments (up to ₹2 lakhs) on your home loan.",
      icon: <DollarSign className="h-6 w-6 text-fintech-blue" />
    },
    {
      title: "Wealth Creation",
      description: "Build equity in your property over time as you pay down your loan and as property values appreciate, helping you create long-term wealth.",
      icon: <Calculator className="h-6 w-6 text-fintech-purple" />
    },
    {
      title: "Affordable EMIs",
      description: "Home loans come with longer tenures (up to 30 years), making EMIs affordable and helping you manage your monthly budget effectively.",
      icon: <Home className="h-6 w-6 text-fintech-orange" />
    }
  ];

  const handleCheckEligibility = () => {
    console.log("Checking eligibility");
    // Logic to handle eligibility check
  };

  const handleApply = (bank?: string) => {
    console.log(`Applying for home loan${bank ? ' from ' + bank : ''}`);
    // Logic to handle loan application
  };

  // Convert FAQ items to structured data format
  const faqData = homeLoanFAQs.map(faq => ({
    question: faq.question,
    answer: faq.answer
  }));

  return (
    <div className="flex min-h-screen flex-col">
      <StructuredData 
        page="loans" 
        faqData={faqData}
        productData={{
          name: "Home Loan",
          description: "Competitive home loans with lowest interest rates and flexible EMI options",
          category: "Loan",
          price: "8.5"
        }}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <LoanHero
        title="Home Loan"
        subtitle="Get the best home loan offers with competitive interest rates from 30+ banks and housing finance companies"
        primaryButtonText="Check Your Eligibility"
        gradientFrom="from-fintech-blue"
        gradientTo="to-fintech-purple"
        className="md:py-24"
      />

      {/* Home Loan Calculator Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Home Loan Calculator</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Plan your dream home purchase with our easy-to-use EMI calculator
              </p>
            </div>
            
            <LoanCalculator
              initialLoanAmount={3000000}
              initialInterestRate={8.5}
              initialLoanTenure={240}
              loanAmountMin={1000000}
              loanAmountMax={10000000}
              interestRateMin={7}
              interestRateMax={12}
              tenureMin={60}
              tenureMax={360}
              onApply={() => handleApply()}
            />
          </div>
        </div>
      </section>

      {/* Home Loan Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Types of Home Loans</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect home loan solution that matches your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {homeLoanTypes.map((loan, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center gap-4">
                  {loan.icon}
                  <div>
                    <CardTitle>{loan.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{loan.description}</CardDescription>
                  <ul className="list-disc pl-5 space-y-1">
                    {loan.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600">{feature}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Comparison */}
      <LoanBankComparison
        title="Compare Home Loan Options"
        subtitle="Find the best home loan rates and terms from our partner banks"
        loanComparisons={homeLoanBankComparisons}
        onApply={handleApply}
      />

      {/* Eligibility Section */}
      <LoanEligibilityDocuments
        title="Home Loan Eligibility"
        subtitle="Key factors that determine your home loan eligibility"
        eligibilityCriteria={homeLoanEligibilityCriteria}
        requiredDocuments={homeLoanRequiredDocuments}
        className="py-16 bg-gradient-to-r from-fintech-blue/10 to-fintech-purple/10"
      />

      {/* Benefits Section */}
      <LoanBenefits
        title="Benefits of Taking a Home Loan"
        subtitle="Discover the advantages of financing your dream home with a home loan"
        benefits={homeLoanBenefits}
      />

      {/* FAQ Section */}
      <LoanFAQ
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about home loans"
        faqs={homeLoanFAQs}
        className="py-16 bg-gray-50"
      />

      {/* Apply Now CTA */}
      <LoanCTA
        title="Ready to Own Your Dream Home?"
        subtitle="Apply now and get the best home loan offers from top banks"
        primaryButtonText="Apply for Home Loan"
        onPrimaryClick={() => handleApply()}
        gradientFrom="from-fintech-blue"
        gradientTo="to-fintech-purple"
      />
    </div>
  );
};

export default HomeLoan;
