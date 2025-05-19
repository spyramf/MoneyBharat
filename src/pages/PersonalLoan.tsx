
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import Footer from '@/components/Footer';
import { CheckCircle, Shield, Clock, ArrowRight, Banknote, BadgeDollarSign, PiggyBank } from 'lucide-react';

const PersonalLoan = () => {
  const [loanAmount, setLoanAmount] = useState<number>(300000);
  const [loanTenure, setLoanTenure] = useState<number>(24);
  const [interestRate, setInterestRate] = useState<number>(10.99);

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

  const features = [
    {
      title: "Quick Approval",
      description: "Get your loan approved within 24 hours with minimal documentation",
      icon: <Clock className="h-6 w-6 text-fintech-purple" />
    },
    {
      title: "Flexible Tenure",
      description: "Choose loan tenure from 12 to 60 months based on your repayment capacity",
      icon: <PiggyBank className="h-6 w-6 text-fintech-purple" />
    },
    {
      title: "No Hidden Charges",
      description: "Transparent fee structure with no hidden costs or prepayment penalties",
      icon: <BadgeDollarSign className="h-6 w-6 text-fintech-purple" />
    },
    {
      title: "Secure Processing",
      description: "Your data is protected with bank-grade security and encryption",
      icon: <Shield className="h-6 w-6 text-fintech-purple" />
    }
  ];

  const eligibilityCriteria = [
    "Age between 23 and 58 years",
    "Minimum monthly income of ₹25,000",
    "Salaried employees with at least 6 months in current job",
    "Credit score of 700 or above",
    "Indian citizen with valid KYC documents"
  ];

  const requiredDocuments = [
    "Identity Proof (Aadhaar, PAN, Passport, Voter ID)",
    "Address Proof (Utility bill, Rental agreement)",
    "Income Proof (Salary slips for last 3 months)",
    "Bank statements for the last 6 months",
    "Passport-size photographs"
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-fintech-purple to-fintech-blue py-16 md:py-24 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Personal Loan
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Quick unsecured loans for your personal needs with competitive interest rates
            </p>
            <Button size="lg" className="bg-white text-fintech-purple hover:bg-white/90">
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Personal Loan</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Designed to meet all your financial needs with flexible and affordable options
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
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
                    min={50000} 
                    max={1500000} 
                    step={10000}
                    onValueChange={(value) => setLoanAmount(value[0])}
                    className="mt-4" 
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>₹50K</span>
                    <span>₹15L</span>
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
                    min={9} 
                    max={18} 
                    step={0.1}
                    onValueChange={(value) => setInterestRate(value[0])}
                    className="mt-4" 
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>9%</span>
                    <span>18%</span>
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

      {/* Eligibility & Documents Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="eligibility" className="w-full">
              <div className="text-center mb-8">
                <TabsList className="inline-flex">
                  <TabsTrigger value="eligibility" className="text-lg px-6">Eligibility Criteria</TabsTrigger>
                  <TabsTrigger value="documents" className="text-lg px-6">Required Documents</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="eligibility" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Eligibility Criteria</CardTitle>
                    <CardDescription>Check if you're eligible for our personal loan</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {eligibilityCriteria.map((criterion, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span>{criterion}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="documents" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Required Documents</CardTitle>
                    <CardDescription>Documents needed for loan application</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {requiredDocuments.map((document, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span>{document}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple 3-step process to get your personal loan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-fintech-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-fintech-purple">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Apply Online</h3>
              <p className="text-gray-600">Fill out our simple online application form with your details</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-fintech-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-fintech-purple">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Verification</h3>
              <p className="text-gray-600">Our team will verify your documents and check eligibility</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-fintech-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-fintech-purple">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Get Disbursement</h3>
              <p className="text-gray-600">Upon approval, the loan amount is disbursed to your bank account</p>
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
              Find answers to common questions about our personal loans
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">What is the maximum loan amount I can get?</h3>
              <p className="text-gray-600">You can apply for a personal loan of up to ₹15 lakhs depending on your income, credit score, and repayment capacity.</p>
              <Separator className="mt-6" />
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">How long does the approval process take?</h3>
              <p className="text-gray-600">Our approval process is quick and typically takes 24-48 hours once all required documents are submitted.</p>
              <Separator className="mt-6" />
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Are there any prepayment charges?</h3>
              <p className="text-gray-600">We do not charge any prepayment penalties if you wish to repay your loan before the end of the tenure.</p>
              <Separator className="mt-6" />
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">What can I use a personal loan for?</h3>
              <p className="text-gray-600">Our personal loans can be used for various purposes including medical emergencies, education, home renovation, wedding expenses, travel, or debt consolidation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Now CTA */}
      <section className="py-16 bg-gradient-to-r from-fintech-purple to-fintech-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Apply now and get your personal loan approved within 24 hours
            </p>
            <Button size="lg" className="bg-white text-fintech-purple hover:bg-white/90">
              Apply for a Personal Loan
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PersonalLoan;
