
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { ArrowRight, Calculator, Shield, Percent, PiggyBank, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LoanAgainstMutualFunds = () => {
  const [loanAmount, setLoanAmount] = useState<number>(500000);
  const [loanTenure, setLoanTenure] = useState<number>(12);
  const [interestRate, setInterestRate] = useState<number>(10.5);
  const [mutualFundValue, setMutualFundValue] = useState<number>(1000000);

  // Calculate EMI
  const calculateEmi = () => {
    const principal = loanAmount;
    const rateMonthly = interestRate / 12 / 100;
    const tenure = loanTenure;
    
    const emi = principal * rateMonthly * Math.pow(1 + rateMonthly, tenure) / (Math.pow(1 + rateMonthly, tenure) - 1);
    return Math.round(emi);
  };

  const emi = calculateEmi();
  const totalPayable = emi * loanTenure;
  const totalInterest = totalPayable - loanAmount;

  // Max loan amount (typically 60-80% of MF value)
  const maxLoanAmount = mutualFundValue * 0.7;

  const loanComparisons = [
    { 
      bank: "HDFC Bank", 
      interestRate: "10.50% - 12.00%",
      maxLTV: "Up to 70%",
      processingFee: "Up to 1.50%",
      prepaymentCharges: "Nil" 
    },
    { 
      bank: "ICICI Bank", 
      interestRate: "10.75% - 12.25%",
      maxLTV: "Up to 65%",
      processingFee: "Up to 1.00% + GST",
      prepaymentCharges: "Nil" 
    },
    { 
      bank: "Axis Bank", 
      interestRate: "10.49% - 12.00%",
      maxLTV: "Up to 75%",
      processingFee: "Up to 1.00% + GST",
      prepaymentCharges: "Nil" 
    },
    { 
      bank: "SBI", 
      interestRate: "9.60% - 11.40%",
      maxLTV: "Up to 60%",
      processingFee: "1.00% + GST",
      prepaymentCharges: "Nil" 
    },
    { 
      bank: "Bajaj Finserv", 
      interestRate: "11.00% - 13.00%",
      maxLTV: "Up to 80%",
      processingFee: "Up to 2.00% + GST",
      prepaymentCharges: "Nil" 
    }
  ];

  const faqs = [
    {
      question: "What is a loan against mutual funds?",
      answer: "A loan against mutual funds allows you to borrow money by pledging your mutual fund investments as collateral. You can get up to 80% of your mutual fund value as a loan, depending on the type of mutual funds and the lender's policies."
    },
    {
      question: "What are the benefits of taking a loan against mutual funds?",
      answer: "Benefits include lower interest rates compared to personal loans, minimal documentation, quick processing, no prepayment penalties, and the ability to retain your investments while accessing liquidity."
    },
    {
      question: "Which mutual funds can be pledged for a loan?",
      answer: "Typically, lenders accept equity, debt, and hybrid mutual funds that have been held for a minimum period (usually 6 months to 1 year). Liquid funds are the most preferred due to their stable nature, while ELSS funds may have restrictions due to the lock-in period."
    },
    {
      question: "How much loan can I get against my mutual funds?",
      answer: "Most lenders offer 60-80% of the current value of your mutual fund portfolio. The exact percentage depends on the type of mutual funds - with debt funds typically getting higher LTV (Loan-to-Value) ratios compared to equity funds."
    },
    {
      question: "Is there any impact on my mutual fund investment when I take a loan against it?",
      answer: "Your mutual funds remain invested and continue to earn returns. However, you cannot redeem, sell, or transfer the pledged units until you repay the loan. Dividends and other benefits continue to accrue to you."
    }
  ];

  const eligibilityRequirements = [
    "You must be at least 21 years old and not more than 65 years old at loan maturity",
    "Your mutual funds must have been held for a minimum of 6 months",
    "The minimum value of pledged mutual funds should be ₹2 lakhs or more",
    "The mutual funds must be from approved Asset Management Companies (AMCs)",
    "KYC compliance and bank account in your name",
    "Stable income source to ensure repayment capacity"
  ];

  const documents = [
    "KYC documents (PAN card, Aadhaar card, etc.)",
    "Latest mutual fund statements (not older than 15 days)",
    "Bank statements for the last 3 months",
    "Income proof (salary slips, ITR for self-employed)",
    "2 passport-sized photographs",
    "Application form and declaration form"
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-fintech-purple to-fintech-blue py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Loan Against Mutual Funds
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Unlock the value of your mutual fund investments without selling them
            </p>
            <Button size="lg" className="bg-white text-fintech-purple hover:bg-white/90">
              Check Your Eligibility
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Instant Funds Without Selling Your Investments</h2>
            <p className="text-lg text-gray-600">
              A loan against mutual funds lets you access funds by pledging your mutual fund units as collateral.
              Enjoy lower interest rates than personal loans while your investments continue to grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="rounded-full bg-fintech-purple/10 p-3 w-fit mb-4">
                  <PiggyBank className="h-6 w-6 text-fintech-purple" />
                </div>
                <CardTitle>No Need to Sell</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Keep your investments intact and continue to benefit from market growth and dividends.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="rounded-full bg-fintech-blue/10 p-3 w-fit mb-4">
                  <Percent className="h-6 w-6 text-fintech-blue" />
                </div>
                <CardTitle>Lower Interest Rates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enjoy significantly lower interest rates compared to personal loans or credit cards.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="rounded-full bg-fintech-orange/10 p-3 w-fit mb-4">
                  <TrendingUp className="h-6 w-6 text-fintech-orange" />
                </div>
                <CardTitle>Quick Approval</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Get your loan approved within 24-48 hours with minimal documentation required.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Loan Calculator Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Mutual Fund Loan Calculator</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Calculate your potential loan amount and EMI based on your mutual fund holdings
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="mb-6">
                  <Label htmlFor="mutual-fund-value">Mutual Fund Value (₹)</Label>
                  <div className="flex items-center gap-4 mt-2">
                    <Input 
                      id="mutual-fund-value"
                      type="number" 
                      value={mutualFundValue}
                      onChange={(e) => setMutualFundValue(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  <Slider 
                    value={[mutualFundValue]} 
                    min={100000} 
                    max={10000000} 
                    step={100000}
                    onValueChange={(value) => setMutualFundValue(value[0])}
                    className="mt-4" 
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>₹1L</span>
                    <span>₹1Cr</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="loan-amount">Loan Amount (₹)</Label>
                  <div className="flex items-center gap-4 mt-2">
                    <Input 
                      id="loan-amount"
                      type="number" 
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      max={maxLoanAmount}
                      className="w-full"
                    />
                  </div>
                  <Slider 
                    value={[loanAmount]} 
                    min={50000} 
                    max={maxLoanAmount} 
                    step={10000}
                    onValueChange={(value) => setLoanAmount(value[0])}
                    className="mt-4" 
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>₹50K</span>
                    <span>Max: ₹{(maxLoanAmount/100000).toFixed(1)}L</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Max loan amount: 70% of your mutual fund value
                  </p>
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="interest-rate">Interest Rate (%)</Label>
                  <div className="flex items-center gap-4 mt-2">
                    <Input 
                      id="interest-rate"
                      type="number" 
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      step="0.1"
                      className="w-full"
                    />
                  </div>
                  <Slider 
                    value={[interestRate]} 
                    min={9} 
                    max={15} 
                    step={0.1}
                    onValueChange={(value) => setInterestRate(value[0])}
                    className="mt-4" 
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>9%</span>
                    <span>15%</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="loan-tenure">Loan Tenure (months)</Label>
                  <div className="flex items-center gap-4 mt-2">
                    <Input 
                      id="loan-tenure"
                      type="number" 
                      value={loanTenure}
                      onChange={(e) => setLoanTenure(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  <Slider 
                    value={[loanTenure]} 
                    min={3} 
                    max={36} 
                    step={1}
                    onValueChange={(value) => setLoanTenure(value[0])}
                    className="mt-4" 
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>3 Months</span>
                    <span>36 Months</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-fintech-purple/20 to-fintech-blue/20 p-6 rounded-xl shadow-md flex flex-col">
                <h3 className="text-xl font-semibold mb-6">Loan Summary</h3>
                
                <div className="flex flex-col gap-6 flex-grow">
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Mutual Fund Value</span>
                    <span className="text-xl font-semibold">₹{mutualFundValue.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Maximum Loan Amount (70%)</span>
                    <span className="text-xl font-semibold">₹{maxLoanAmount.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Your Loan Amount</span>
                    <span className="text-2xl font-bold">₹{loanAmount.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Monthly EMI</span>
                    <span className="text-2xl font-bold">₹{emi.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Total Interest Payable</span>
                    <span className="text-xl font-semibold">₹{totalInterest.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Total Amount</span>
                    <span className="text-xl font-semibold">₹{totalPayable.toLocaleString()}</span>
                  </div>
                  
                  <div className="mt-auto">
                    <Button className="w-full bg-gradient-to-r from-fintech-purple to-fintech-blue">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Required Documents */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Eligibility & Documentation</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple eligibility criteria and minimal documentation for quick processing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Eligibility Criteria</CardTitle>
                <CardDescription>Requirements to qualify for a loan against mutual funds</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {eligibilityRequirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="rounded-full bg-fintech-purple/10 p-1 mt-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="#7E69AB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
                <CardDescription>Essential paperwork for your loan application</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {documents.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="rounded-full bg-fintech-blue/10 p-1 mt-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bank Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare Loan Options</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the best loan against mutual funds rates and terms from our partner banks
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Bank / NBFC</TableHead>
                  <TableHead>Interest Rate</TableHead>
                  <TableHead>Max LTV Ratio</TableHead>
                  <TableHead>Processing Fee</TableHead>
                  <TableHead>Prepayment Charges</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loanComparisons.map((bank, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{bank.bank}</TableCell>
                    <TableCell>{bank.interestRate}</TableCell>
                    <TableCell>{bank.maxLTV}</TableCell>
                    <TableCell>{bank.processingFee}</TableCell>
                    <TableCell>{bank.prepaymentCharges}</TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">Apply</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple 4-Step Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get your loan approved in as little as 24-48 hours
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6 relative">
              <div className="rounded-full bg-fintech-purple/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-fintech-purple">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Apply Online</h3>
              <p className="text-gray-600">Fill the simple application form and upload your mutual fund statements</p>
              
              {/* Arrow for desktop */}
              <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <ArrowRight className="h-6 w-6 text-gray-400" />
              </div>
            </div>
            
            <div className="text-center p-6 relative">
              <div className="rounded-full bg-fintech-blue/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-fintech-blue">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Verification</h3>
              <p className="text-gray-600">Our team verifies your documents and mutual fund holdings</p>
              
              {/* Arrow for desktop */}
              <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <ArrowRight className="h-6 w-6 text-gray-400" />
              </div>
            </div>
            
            <div className="text-center p-6 relative">
              <div className="rounded-full bg-fintech-orange/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-fintech-orange">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Approval & Pledge</h3>
              <p className="text-gray-600">Loan gets approved and units are pledged electronically</p>
              
              {/* Arrow for desktop */}
              <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <ArrowRight className="h-6 w-6 text-gray-400" />
              </div>
            </div>
            
            <div className="text-center p-6">
              <div className="rounded-full bg-green-100 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Disbursement</h3>
              <p className="text-gray-600">Loan amount is transferred directly to your bank account</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about loans against mutual funds
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6 last:mb-0">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
                {index < faqs.length - 1 && <Separator className="mt-6" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Now CTA */}
      <section className="py-16 bg-gradient-to-r from-fintech-purple to-fintech-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Unlock Your Investments?</h2>
            <p className="text-xl mb-8">
              Apply now and get instant approval on your loan application
            </p>
            <Button size="lg" className="bg-white text-fintech-purple hover:bg-white/90">
              Apply for a Loan
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LoanAgainstMutualFunds;
