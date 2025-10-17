
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { CheckIcon, CreditCard, BadgeCheck, ShieldCheck, Clock, Users, Building, Briefcase } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useToast } from "@/hooks/use-toast";

const BusinessLoan = () => {
  const [loanAmount, setLoanAmount] = useState<number>(1000000);
  const [loanTenure, setLoanTenure] = useState<number>(36);
  const [interestRate, setInterestRate] = useState<number>(16);
  const [businessType, setBusinessType] = useState<string>("registered");
  const { toast } = useToast();

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
  
  const handleApplyNow = () => {
    toast({
      title: "Application Submitted!",
      description: "We've received your business loan application. Our team will contact you shortly.",
    });
  };

  const businessTypes = [
    {
      id: "registered",
      name: "Registered Business",
      description: "For businesses registered as Private Limited, LLP, Partnership, or Proprietorship"
    },
    {
      id: "startup",
      name: "Startups",
      description: "For early-stage companies looking for growth capital"
    },
    {
      id: "selfemployed",
      name: "Self-Employed Professionals",
      description: "For doctors, CAs, architects, and other professionals"
    }
  ];

  const features = [
    {
      title: "Flexible Loan Amount",
      description: "Get business loans from ₹5 lakhs to ₹5 crores based on your business requirements"
    },
    {
      title: "Quick Disbursals",
      description: "Get funds in your account in as little as 3 business days"
    },
    {
      title: "Minimal Documentation",
      description: "Simple paperwork with GST returns and bank statements"
    },
    {
      title: "Competitive Interest Rates",
      description: "Starting from 14% per annum with transparent fee structure"
    },
    {
      title: "Flexible Tenure",
      description: "Choose repayment periods between 12 to 60 months"
    },
    {
      title: "No Hidden Charges",
      description: "Complete transparency with all fees disclosed upfront"
    }
  ];

  const eligibilityItems = [
    "Business operational for at least 2 years",
    "Minimum annual turnover of ₹50 lakhs",
    "Business should be profit-making for at least 1 year",
    "Valid GST registration (for applicable businesses)",
    "Good credit score of the business and promoters"
  ];

  const requiredDocuments = [
    "Business PAN and Proprietor/Partner/Director's PAN Card",
    "Address proof (Utility Bill/Rent Agreement)",
    "Bank statements for the last 6 months",
    "GST returns for the last 12 months (if applicable)",
    "Income Tax Returns for the last 2 years",
    "Business registration documents"
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Helmet>
        <title>Business Loan - MoneyBharat</title>
        <meta name="description" content="Get business loans at competitive interest rates with flexible tenure options for your growing business" />
      </Helmet>
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-fintech-purple to-fintech-blue py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Business Loans to Fuel Your Growth
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Access quick funding for your business needs with competitive rates and minimal documentation
            </p>
            <Button size="lg" className="bg-white text-fintech-purple hover:bg-white/90" onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}>
              Calculate Your EMI
            </Button>
          </div>
        </div>
      </section>

      {/* Business Type Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Business Loans for Every Business Type</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Customized funding solutions designed for different business structures
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {businessTypes.map((type) => (
              <Card key={type.id} className="hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 h-full">
                <CardHeader>
                  <CardTitle>{type.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{type.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Calculator Section */}
      <section id="calculator" className="py-16 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Business Loan Calculator</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Plan your business finances with our easy-to-use EMI calculator
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="mb-6">
                  <Label htmlFor="loan-amount">Loan Amount (₹)</Label>
                  <div className="flex items-center gap-4 mt-2">
                    <Input 
                      id="loan-amount"
                      type="number" 
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  <Slider 
                    value={[loanAmount]} 
                    min={500000} 
                    max={5000000} 
                    step={100000}
                    onValueChange={(value) => setLoanAmount(value[0])}
                    className="mt-4" 
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>₹5L</span>
                    <span>₹50L</span>
                  </div>
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
                    min={12} 
                    max={24} 
                    step={0.1}
                    onValueChange={(value) => setInterestRate(value[0])}
                    className="mt-4" 
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>12%</span>
                    <span>24%</span>
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
                    min={12} 
                    max={60} 
                    step={1}
                    onValueChange={(value) => setLoanTenure(value[0])}
                    className="mt-4" 
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>1 Year</span>
                    <span>5 Years</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-fintech-purple/20 to-fintech-blue/20 p-6 rounded-xl shadow-md flex flex-col">
                <h3 className="text-xl font-semibold mb-6">Loan Summary</h3>
                
                <div className="flex flex-col gap-6 flex-grow">
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
                    <Button className="w-full bg-gradient-to-r from-fintech-purple to-fintech-blue" onClick={handleApplyNow}>
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our business loans are designed to provide maximum flexibility and value
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardHeader>
                  <div className="rounded-full bg-fintech-purple/10 p-3 w-fit mb-4">
                    {index % 6 === 0 && <CreditCard className="h-6 w-6 text-fintech-purple" />}
                    {index % 6 === 1 && <Clock className="h-6 w-6 text-fintech-blue" />}
                    {index % 6 === 2 && <Briefcase className="h-6 w-6 text-fintech-orange" />}
                    {index % 6 === 3 && <BadgeCheck className="h-6 w-6 text-green-500" />}
                    {index % 6 === 4 && <ShieldCheck className="h-6 w-6 text-fintech-purple" />}
                    {index % 6 === 5 && <Building className="h-6 w-6 text-fintech-deep-purple" />}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Documents Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Eligibility & Documentation</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple requirements to qualify for a business loan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="rounded-full bg-fintech-purple/10 p-3 w-fit mb-4">
                  <Users className="h-6 w-6 text-fintech-purple" />
                </div>
                <CardTitle>Eligibility Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {eligibilityItems.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-1">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="rounded-full bg-fintech-blue/10 p-3 w-fit mb-4">
                  <Briefcase className="h-6 w-6 text-fintech-blue" />
                </div>
                <CardTitle>Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requiredDocuments.map((doc, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-1">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                      </span>
                      {doc}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick & Simple Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get your business loan in just 3 easy steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="rounded-full bg-fintech-purple/10 h-20 w-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-fintech-purple">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Apply Online</h3>
              <p className="text-gray-600">Fill our simple application form and submit your documents online</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full bg-fintech-blue/10 h-20 w-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-fintech-blue">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Verification</h3>
              <p className="text-gray-600">Our team verifies your application and documents promptly</p>
            </div>
            
            <div className="text-center">
              <div className="rounded-full bg-fintech-orange/10 h-20 w-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-fintech-orange">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Funded</h3>
              <p className="text-gray-600">Receive funds directly in your business account within 3 days</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our business loans
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="application">Application</TabsTrigger>
                <TabsTrigger value="repayment">Repayment</TabsTrigger>
              </TabsList>
              
              <TabsContent value="general" className="mt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">What is a Business Loan?</h3>
                    <p className="text-gray-600">A business loan is a financial product designed to provide funding for business operations, expansion, or other business-related expenses. It typically has a fixed tenure and interest rate.</p>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">What can I use a business loan for?</h3>
                    <p className="text-gray-600">Business loans can be used for various purposes including expansion, purchasing inventory or equipment, managing cash flow, hiring staff, or refinancing existing debt.</p>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">What types of businesses are eligible?</h3>
                    <p className="text-gray-600">We offer business loans to registered businesses including Private Limited Companies, LLPs, Partnerships, Proprietorships, and Self-Employed Professionals that have been operational for at least 2 years.</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="application" className="mt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">How long does the approval process take?</h3>
                    <p className="text-gray-600">Once you submit a complete application with all required documents, we typically process it within 2-3 business days. Disbursement happens within 1-2 days after approval.</p>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">What documents do I need to apply?</h3>
                    <p className="text-gray-600">You will need to provide business registration documents, PAN card, address proof, bank statements for the last 6 months, GST returns, and income tax returns for the last 2 years.</p>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Is collateral required for a business loan?</h3>
                    <p className="text-gray-600">We offer both secured and unsecured business loans. For loans up to ₹50 lakhs, collateral may not be required based on your business profile and credit history.</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="repayment" className="mt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">What are the repayment options?</h3>
                    <p className="text-gray-600">Repayments are typically made through monthly EMIs via ECS/NACH mandates from your business bank account. The tenure can range from 12 to 60 months.</p>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Can I prepay my business loan?</h3>
                    <p className="text-gray-600">Yes, you can prepay your business loan after completing 6 months of repayments. A prepayment charge of 2-4% may apply on the outstanding principal amount.</p>
                  </div>
                  <Separator />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">What happens if I miss an EMI payment?</h3>
                    <p className="text-gray-600">Missing EMI payments may result in late payment charges and could negatively impact your credit score. We recommend setting up auto-debit to avoid missed payments.</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Apply Now CTA */}
      <section className="py-16 bg-gradient-to-r from-fintech-purple to-fintech-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
            <p className="text-xl mb-8">
              Apply now and get quick funding to take your business to the next level
            </p>
            <Button size="lg" className="bg-white text-fintech-purple hover:bg-white/90" onClick={handleApplyNow}>
              Apply for a Business Loan
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessLoan;
