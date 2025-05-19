
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Footer from '@/components/Footer';
import { Building, Calculator, Home, Info, DollarSign, HelpCircle, ArrowRight } from 'lucide-react';

const HomeLoan = () => {
  const [loanAmount, setLoanAmount] = useState<number>(3000000);
  const [loanTenure, setLoanTenure] = useState<number>(240);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [propertyValue, setPropertyValue] = useState<number>(4000000);

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
  const ltvRatio = (loanAmount / propertyValue) * 100;

  const homeLoanTypes = [
    {
      name: "New Home Loan",
      description: "For purchasing a new property for residential purposes.",
      features: ["Competitive interest rates", "Up to 30 years tenure", "Up to 90% financing"],
      icon: <Home className="h-10 w-10 text-fintech-blue" />
    },
    {
      name: "Home Loan Balance Transfer",
      description: "Transfer your existing home loan and save on interest payments.",
      features: ["Lower interest rates", "Top-up loan facility", "Minimal documentation"],
      icon: <ArrowRight className="h-10 w-10 text-fintech-purple" />
    },
    {
      name: "Home Loan Top-up",
      description: "Additional loan amount over your existing home loan.",
      features: ["Lower interest than personal loan", "Flexible usage", "Extended repayment period"],
      icon: <DollarSign className="h-10 w-10 text-fintech-orange" />
    },
    {
      name: "Construction Loan",
      description: "For constructing a house on land already owned.",
      features: ["Disbursement in phases", "Pay interest only on disbursed amount", "Flexible drawdown schedule"],
      icon: <Building className="h-10 w-10 text-fintech-deep-purple" />
    }
  ];

  const homeLoanComparisons = [
    { 
      bank: "SBI", 
      interestRate: "8.40% - 9.10%",
      processingFee: "0.35% + GST (Min ₹2,000, Max ₹10,000)",
      maxLoanAmount: "Up to ₹10 crore" 
    },
    { 
      bank: "HDFC Bank", 
      interestRate: "8.50% - 9.25%",
      processingFee: "0.50% + GST (Min ₹3,000, Max ₹10,000)",
      maxLoanAmount: "Based on eligibility" 
    },
    { 
      bank: "ICICI Bank", 
      interestRate: "8.60% - 9.30%",
      processingFee: "0.50% + GST (Min ₹1,500, Max ₹10,000)",
      maxLoanAmount: "Based on eligibility" 
    },
    { 
      bank: "Axis Bank", 
      interestRate: "8.75% - 9.40%",
      processingFee: "1.00% + GST (Min ₹10,000)",
      maxLoanAmount: "Up to ₹15 crore" 
    },
    { 
      bank: "LIC Housing Finance", 
      interestRate: "8.50% - 9.10%",
      processingFee: "0.50% + GST (Max ₹10,000)",
      maxLoanAmount: "Up to ₹5 crore" 
    }
  ];

  const homeLoanFaqs = [
    {
      question: "What is the maximum loan amount I can get?",
      answer: "The maximum loan amount depends on your income, repayment capacity, property value, and the bank's policies. Generally, banks provide up to 75-90% of the property value as loan amount."
    },
    {
      question: "What is the typical home loan tenure?",
      answer: "Home loans can typically be taken for a tenure of 5 to 30 years. The longer the tenure, the lower your EMI but higher the total interest outgo."
    },
    {
      question: "What documents are required for a home loan?",
      answer: "Common documents include identity proof (Aadhaar, PAN card), address proof, income proof (salary slips, ITR for last 2-3 years), bank statements for 6 months, property documents, and employment details."
    },
    {
      question: "How is the home loan interest rate determined?",
      answer: "Home loan interest rates are determined based on the RBI's repo rate, your credit score, loan amount, tenure, and the bank's internal benchmarking system (usually RLLR or External Benchmark Lending Rate)."
    },
    {
      question: "Can I prepay my home loan?",
      answer: "Yes, most banks allow partial or full prepayment of home loans. For floating rate loans, there is usually no prepayment penalty. For fixed rate loans, some banks may charge a prepayment penalty."
    },
    {
      question: "What is PMAY and how can I benefit from it?",
      answer: "Pradhan Mantri Awas Yojana (PMAY) is a government scheme that provides interest subsidies to eligible home buyers from economically weaker sections, low and middle-income groups. Under this scheme, you can get an interest subsidy of up to ₹2.67 lakhs."
    }
  ];

  const eligibilityCriteria = [
    "Age: 21-65 years (at loan maturity)",
    "Income: Regular source of income (salaried or self-employed)",
    "Credit Score: Preferably 750+ for better interest rates",
    "Employment: Minimum 2 years of work experience",
    "Property: The property should have clear title and all approvals"
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-fintech-blue to-fintech-purple py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Realize Your Dream of Homeownership
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Get the best home loan offers with competitive interest rates from 30+ banks and housing finance companies
            </p>
            <Button size="lg" className="bg-white text-fintech-blue hover:bg-white/90">
              Check Your Eligibility
            </Button>
          </div>
        </div>
      </section>

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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="mb-6">
                  <Label htmlFor="property-value">Property Value (₹)</Label>
                  <div className="flex items-center gap-4 mt-2">
                    <Input 
                      id="property-value"
                      type="number" 
                      value={propertyValue}
                      onChange={(e) => setPropertyValue(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  <Slider 
                    value={[propertyValue]} 
                    min={1000000} 
                    max={10000000} 
                    step={100000}
                    onValueChange={(value) => setPropertyValue(value[0])}
                    className="mt-4" 
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>₹10L</span>
                    <span>₹1C</span>
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
                      className="w-full"
                    />
                  </div>
                  <Slider 
                    value={[loanAmount]} 
                    min={500000} 
                    max={7500000} 
                    step={100000}
                    onValueChange={(value) => setLoanAmount(value[0])}
                    className="mt-4" 
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>₹5L</span>
                    <span>₹75L</span>
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
                    min={7} 
                    max={12} 
                    step={0.1}
                    onValueChange={(value) => setInterestRate(value[0])}
                    className="mt-4" 
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>7%</span>
                    <span>12%</span>
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
                    min={60} 
                    max={360} 
                    step={12}
                    onValueChange={(value) => setLoanTenure(value[0])}
                    className="mt-4" 
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>5 Years</span>
                    <span>30 Years</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-fintech-blue/20 to-fintech-purple/20 p-6 rounded-xl shadow-md flex flex-col">
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
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-600">Loan to Value Ratio</span>
                    <span className="text-xl font-semibold">{ltvRatio.toFixed(1)}%</span>
                  </div>
                  
                  <div className="mt-auto">
                    <Button className="w-full bg-gradient-to-r from-fintech-blue to-fintech-purple">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
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
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare Home Loan Options</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the best home loan rates and terms from our partner banks
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Bank / HFC</TableHead>
                  <TableHead>Interest Rate</TableHead>
                  <TableHead>Processing Fee</TableHead>
                  <TableHead>Maximum Loan Amount</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {homeLoanComparisons.map((bank, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{bank.bank}</TableCell>
                    <TableCell>{bank.interestRate}</TableCell>
                    <TableCell>{bank.processingFee}</TableCell>
                    <TableCell>{bank.maxLoanAmount}</TableCell>
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

      {/* Eligibility Section */}
      <section className="py-16 bg-gradient-to-r from-fintech-blue/10 to-fintech-purple/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Home Loan Eligibility</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key factors that determine your home loan eligibility
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="h-6 w-6 text-fintech-blue" />
                  Eligibility Criteria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {eligibilityCriteria.map((criterion, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="rounded-full bg-fintech-blue/10 p-1 mt-1">
                        <ArrowRight className="h-4 w-4 text-fintech-blue" />
                      </div>
                      <span>{criterion}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-fintech-blue text-white">Check Your Eligibility Now</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Taking a Home Loan</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the advantages of financing your dream home with a home loan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="rounded-full bg-fintech-blue/10 p-3 w-fit mb-4">
                  <DollarSign className="h-6 w-6 text-fintech-blue" />
                </div>
                <CardTitle>Tax Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Get tax benefits under Section 80C for principal repayment (up to ₹1.5 lakhs) and Section 24(b) for interest payments (up to ₹2 lakhs) on your home loan.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="rounded-full bg-fintech-purple/10 p-3 w-fit mb-4">
                  <Calculator className="h-6 w-6 text-fintech-purple" />
                </div>
                <CardTitle>Wealth Creation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Build equity in your property over time as you pay down your loan and as property values appreciate, helping you create long-term wealth.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md">
              <CardHeader>
                <div className="rounded-full bg-fintech-orange/10 p-3 w-fit mb-4">
                  <Home className="h-6 w-6 text-fintech-orange" />
                </div>
                <CardTitle>Affordable EMIs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Home loans come with longer tenures (up to 30 years), making EMIs affordable and helping you manage your monthly budget effectively.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about home loans
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {homeLoanFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Apply Now CTA */}
      <section className="py-16 bg-gradient-to-r from-fintech-blue to-fintech-purple">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Own Your Dream Home?</h2>
            <p className="text-xl mb-8">
              Apply now and get the best home loan offers from top banks
            </p>
            <Button size="lg" className="bg-white text-fintech-blue hover:bg-white/90">
              Apply for Home Loan
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomeLoan;
