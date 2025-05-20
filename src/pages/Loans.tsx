import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import Footer from '@/components/Footer';
import { CreditCard, Calculator, Shield, ArrowDown, ArrowUp, Banknote, Percent, TrendingUp } from 'lucide-react';
import Home from '@/components/icons/Home';
import Car from '@/components/icons/Car';
import GraduationCap from '@/components/icons/GraduationCap';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
const Loans = () => {
  const [loanAmount, setLoanAmount] = useState<number>(500000);
  const [loanTenure, setLoanTenure] = useState<number>(36);
  const [interestRate, setInterestRate] = useState<number>(10.5);
  const [selectedLoanType, setSelectedLoanType] = useState<string>("personal");

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
  const loanTypes = [{
    id: "personal",
    name: "Personal Loan",
    icon: <Banknote className="h-10 w-10 text-fintech-purple" />,
    description: "Quick unsecured loans for your personal needs",
    path: "/loans/personal"
  }, {
    id: "business",
    name: "Business Loan",
    icon: <CreditCard className="h-10 w-10 text-fintech-orange" />,
    description: "Grow your business with flexible financing options",
    path: "/loans/business"
  }, {
    id: "home",
    name: "Home Loan",
    icon: <Home className="h-10 w-10 text-fintech-blue" />,
    description: "Affordable housing finance solutions",
    path: "/loans/home"
  }, {
    id: "car",
    name: "Car Loan",
    icon: <Car className="h-10 w-10 text-fintech-deep-purple" />,
    description: "Drive your dream car with competitive rates",
    path: "/loans/car"
  }, {
    id: "education",
    name: "Education Loan",
    icon: <GraduationCap className="h-10 w-10 text-green-500" />,
    description: "Invest in education with affordable student loans",
    path: "/loans/education"
  }, {
    id: "mutual-funds",
    name: "Loan Against Mutual Funds",
    icon: <TrendingUp className="h-10 w-10 text-yellow-500" />,
    description: "Quick loans against your mutual fund investments",
    path: "/loans/mutual-funds"
  }];
  const loanComparisons = [{
    bank: "HDFC Bank",
    interestRate: "10.50% - 18.00%",
    processingFee: "Up to 2.50%",
    prepaymentCharges: "Nil for floating rate loans"
  }, {
    bank: "ICICI Bank",
    interestRate: "10.75% - 18.49%",
    processingFee: "Up to 2.25% + GST",
    prepaymentCharges: "2% on outstanding amount"
  }, {
    bank: "SBI",
    interestRate: "9.60% - 16.40%",
    processingFee: "1.50% - 2.00% + GST",
    prepaymentCharges: "Nil after 12 months"
  }, {
    bank: "Axis Bank",
    interestRate: "10.49% - 18.00%",
    processingFee: "Up to 2.00% + GST",
    prepaymentCharges: "2% on outstanding amount"
  }, {
    bank: "Bajaj Finserv",
    interestRate: "11.00% - 16.00%",
    processingFee: "Up to 3.99% + GST",
    prepaymentCharges: "4% on outstanding amount"
  }];
  const faqs = [{
    question: "How do I apply for a loan?",
    answer: "You can apply for a loan by submitting an application through our website, visiting our branch, or contacting our customer service team. You'll need to provide personal information, income details, and any required documents."
  }, {
    question: "What documents are required for a loan application?",
    answer: "Typically, you'll need identity proof (Aadhaar, PAN card), address proof, income proof (salary slips, ITR), bank statements for the last 6 months, and employment details. Additional documents may be required based on the loan type."
  }, {
    question: "How long does the loan approval process take?",
    answer: "The approval process can take anywhere from a few hours to a few days depending on the loan type, amount, and verification process. Personal loans are typically processed faster than secured loans like home loans."
  }, {
    question: "Can I prepay my loan before the end of the tenure?",
    answer: "Yes, most loans can be prepaid before the end of the tenure. However, some lenders may charge a prepayment penalty, usually a percentage of the outstanding loan amount."
  }, {
    question: "How is my loan interest rate determined?",
    answer: "Your loan interest rate is determined based on various factors including your credit score, income, loan amount, tenure, employment status, and the lender's policies."
  }];
  return <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-fintech-purple/10 to-fintech-blue/10 py-16 bg-green-50 md:py-[100px]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-fintech-purple mb-6 gradient-text">
              Get the Best Loan Offers Tailored for You
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Compare loans from 50+ banks and find the perfect match for your financial needs
            </p>
            <Button size="lg" className="bg-fintech-purple hover:bg-fintech-deep-purple text-white">
              Check Your Eligibility
            </Button>
          </div>
        </div>
      </section>

      {/* Loan Types Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Loan Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect financial solution for your specific needs with our diverse range of loan options
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanTypes.map(loan => <Card key={loan.id} className="hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
                <CardHeader className="flex flex-row items-center gap-4">
                  {loan.icon}
                  <div>
                    <CardTitle>{loan.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{loan.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={loan.path}>Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Loan Calculator Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Loan Calculator</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Plan your finances better with our easy-to-use EMI calculator
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="mb-6">
                  <Label htmlFor="loan-amount">Loan Amount (₹)</Label>
                  <div className="flex items-center gap-4 mt-2">
                    <Input id="loan-amount" type="number" value={loanAmount} onChange={e => setLoanAmount(Number(e.target.value))} className="w-full" />
                  </div>
                  <Slider value={[loanAmount]} min={50000} max={5000000} step={10000} onValueChange={value => setLoanAmount(value[0])} className="mt-4" />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>₹50K</span>
                    <span>₹50L</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="interest-rate">Interest Rate (%)</Label>
                  <div className="flex items-center gap-4 mt-2">
                    <Input id="interest-rate" type="number" value={interestRate} onChange={e => setInterestRate(Number(e.target.value))} step="0.1" className="w-full" />
                  </div>
                  <Slider value={[interestRate]} min={5} max={20} step={0.1} onValueChange={value => setInterestRate(value[0])} className="mt-4" />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>5%</span>
                    <span>20%</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <Label htmlFor="loan-tenure">Loan Tenure (months)</Label>
                  <div className="flex items-center gap-4 mt-2">
                    <Input id="loan-tenure" type="number" value={loanTenure} onChange={e => setLoanTenure(Number(e.target.value))} className="w-full" />
                  </div>
                  <Slider value={[loanTenure]} min={12} max={84} step={1} onValueChange={value => setLoanTenure(value[0])} className="mt-4" />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>1 Year</span>
                    <span>7 Years</span>
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
                    <Button className="w-full bg-gradient-to-r from-fintech-green to-fintech-blue text-white bg-fintech-green text-center">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare Loan Options</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the best loan rates and terms from our partner banks
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-lg">
            <div className="bg-gradient-to-r from-fintech-purple/10 to-fintech-blue/10 p-8 rounded-t-2xl">
              <h3 className="text-2xl font-bold text-center text-fintech-purple">Compare Loan Options</h3>
              <p className="text-center text-gray-600 mt-2">Find the best loan rates and terms from our partner banks</p>
            </div>
            
            <div className="overflow-x-auto bg-white rounded-b-2xl">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">Bank / NBFC</th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">Interest Rate</th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">Processing Fee</th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-700">Prepayment Charges</th>
                  </tr>
                </thead>
                <tbody>
                  {loanComparisons.map((bank, index) => <tr key={index} className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                      <td className="py-4 px-6">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-fintech-purple/10 rounded-full flex items-center justify-center mr-3">
                            <span className="font-bold text-fintech-purple">{bank.bank.charAt(0)}</span>
                          </div>
                          <span className="font-medium">{bank.bank}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <Badge variant="rate">{bank.interestRate}</Badge>
                      </td>
                      <td className="py-4 px-6">
                        <Badge variant="fee">{bank.processingFee}</Badge>
                      </td>
                      <td className="py-4 px-6">
                        <Badge variant="charge">{bank.prepaymentCharges}</Badge>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
            
            <div className="bg-gray-50 p-4 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600">
                Rates and charges are indicative and may vary based on eligibility criteria and loan amount
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose MoneyBharat?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make getting a loan simpler, faster, and more transparent
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="rounded-full bg-fintech-purple/10 p-3 w-fit mb-4">
                  <Calculator className="h-6 w-6 text-fintech-purple" />
                </div>
                <CardTitle>Instantly Compare Offers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Compare multiple loan offers from 50+ banks and NBFCs to find the best deal for your needs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="rounded-full bg-fintech-blue/10 p-3 w-fit mb-4">
                  <Shield className="h-6 w-6 text-fintech-blue" />
                </div>
                <CardTitle>Safe & Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your data is protected with bank-grade security. We never share your information without permission.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="rounded-full bg-fintech-orange/10 p-3 w-fit mb-4">
                  <Percent className="h-6 w-6 text-fintech-orange" />
                </div>
                <CardTitle>Lowest Interest Rates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Get access to exclusive offers and the lowest interest rates available in the market.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our loans and application process
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => <div key={index} className="mb-6 last:mb-0">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
                {index < faqs.length - 1 && <Separator className="mt-6" />}
              </div>)}
          </div>
        </div>
      </section>

      {/* Apply Now CTA */}
      <section className="py-16 bg-gradient-to-r from-fintech-purple to-fintech-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
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
    </div>;
};
export default Loans;