
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import { Book, Calculator, GraduationCap, School } from 'lucide-react';
import { Link } from 'react-router-dom';

const EducationLoan = () => {
  const [loanAmount, setLoanAmount] = useState<number>(1000000);
  const [loanTenure, setLoanTenure] = useState<number>(60);
  const [interestRate, setInterestRate] = useState<number>(8.5);

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

  const loanComparisons = [
    { 
      bank: "SBI", 
      interestRate: "8.50% - 10.55%",
      processingFee: "Nil",
      loanAmount: "Up to ₹1.5 Crore",
      maxTenure: "15 years"
    },
    { 
      bank: "HDFC Credila", 
      interestRate: "9.55% - 13.25%",
      processingFee: "1% - 2% of loan amount",
      loanAmount: "No upper limit",
      maxTenure: "10 years"
    },
    { 
      bank: "Bank of Baroda", 
      interestRate: "8.80% - 11.10%",
      processingFee: "Up to ₹10,000",
      loanAmount: "Up to ₹80 Lakhs",
      maxTenure: "15 years"
    },
    { 
      bank: "Axis Bank", 
      interestRate: "10.70% - 15.20%",
      processingFee: "2% of loan amount",
      loanAmount: "Up to ₹75 Lakhs",
      maxTenure: "10 years"
    },
    { 
      bank: "PNB", 
      interestRate: "8.35% - 9.95%",
      processingFee: "₹1,000",
      loanAmount: "Up to ₹1 Crore",
      maxTenure: "15 years"
    }
  ];

  const faqs = [
    {
      question: "What documents are required for an education loan?",
      answer: "You'll typically need identity proof (Aadhaar, PAN), address proof, income proof of parents/guardian, academic records, proof of admission, cost estimate from the institution, and collateral documents if applicable."
    },
    {
      question: "Is a co-applicant necessary for an education loan?",
      answer: "Yes, most banks require a parent or guardian as a co-applicant for education loans to serve as a guarantor for loan repayment."
    },
    {
      question: "When do I start repaying my education loan?",
      answer: "Most education loans come with a moratorium period, which typically includes the course duration plus 6-12 months after course completion or getting a job, whichever is earlier. During this period, you might only need to pay simple interest."
    },
    {
      question: "Can I get tax benefits on my education loan?",
      answer: "Yes, under Section 80E of the Income Tax Act, you can claim a deduction for the interest paid on an education loan. There's no upper limit on the interest amount that can be claimed, and the deduction can be claimed for a maximum period of 8 years."
    },
    {
      question: "Can education loans cover living expenses abroad?",
      answer: "Yes, education loans for studying abroad typically cover tuition fees, hostel fees, examination fees, library fees, laboratory fees, purchase of books, equipment, instruments, uniforms, computer expenses, and reasonable living expenses."
    }
  ];

  const eligibleCourses = [
    "Engineering (B.Tech, M.Tech, etc.)",
    "Medicine (MBBS, MD, etc.)",
    "Management (MBA, PGDM, etc.)",
    "Law (LLB, LLM)",
    "Chartered Accountancy (CA)",
    "Architecture (B.Arch, M.Arch)",
    "Humanities & Arts",
    "Science & Research Programs",
    "Ph.D. Programs",
    "Vocational Training Courses"
  ];
  
  const loanFeatures = [
    {
      title: "Flexible Loan Amounts",
      description: "Get funding from ₹50,000 up to ₹1.5 Crore based on your course and institution",
      icon: <Calculator className="h-10 w-10 text-fintech-purple" />
    },
    {
      title: "Comprehensive Coverage",
      description: "Covers tuition fees, hostel expenses, books, laptop, and other study materials",
      icon: <Book className="h-10 w-10 text-fintech-orange" />
    },
    {
      title: "Long Repayment Period",
      description: "Enjoy repayment tenures up to 15 years with moratorium during study period",
      icon: <School className="h-10 w-10 text-fintech-blue" />
    },
    {
      title: "Tax Benefits",
      description: "Get tax deductions under Section 80E for interest paid on education loan",
      icon: <GraduationCap className="h-10 w-10 text-green-600" />
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Helmet>
        <title>Education Loan - MoneyBharat</title>
        <meta name="description" content="Get affordable education loans to fund your higher studies in India or abroad. Compare best education loan offers with lowest interest rates." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-fintech-purple to-fintech-blue py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Education Loans for a Brighter Future
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Fund your dreams with affordable education loans for studies in India and abroad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-fintech-purple hover:bg-white/90">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Compare Loans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <nav className="text-sm">
            <ol className="flex items-center space-x-2">
              <li><Link to="/" className="text-gray-500 hover:text-fintech-purple">Home</Link></li>
              <li><span className="text-gray-500 mx-2">/</span></li>
              <li><Link to="/loans" className="text-gray-500 hover:text-fintech-purple">Loans</Link></li>
              <li><span className="text-gray-500 mx-2">/</span></li>
              <li className="text-fintech-purple font-medium">Education Loan</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education Loan Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get the financial support you need to pursue your academic dreams
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {loanFeatures.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex items-center justify-center">
                  <div className="rounded-full bg-gray-50 p-4 mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-center">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-600">{feature.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Education Loan Calculator</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Plan your finances better with our easy-to-use EMI calculator
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
                    min={100000} 
                    max={5000000} 
                    step={10000}
                    onValueChange={(value) => setLoanAmount(value[0])}
                    className="mt-4" 
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>₹1L</span>
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
                    min={6} 
                    max={15} 
                    step={0.1}
                    onValueChange={(value) => setInterestRate(value[0])}
                    className="mt-4" 
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>6%</span>
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
                    min={12} 
                    max={180} 
                    step={6}
                    onValueChange={(value) => setLoanTenure(value[0])}
                    className="mt-4" 
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>1 Year</span>
                    <span>15 Years</span>
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

      {/* Eligible Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Eligible Courses</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get financial support for a wide range of courses in India and abroad
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {eligibleCourses.map((course, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="rounded-full bg-fintech-purple/10 p-2">
                  <GraduationCap className="h-5 w-5 text-fintech-purple" />
                </div>
                <span className="font-medium">{course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bank Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare Education Loan Options</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the best education loan rates and terms from our partner banks
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Bank</TableHead>
                  <TableHead>Interest Rate</TableHead>
                  <TableHead>Processing Fee</TableHead>
                  <TableHead>Max Loan Amount</TableHead>
                  <TableHead>Max Tenure</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loanComparisons.map((bank, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{bank.bank}</TableCell>
                    <TableCell>{bank.interestRate}</TableCell>
                    <TableCell>{bank.processingFee}</TableCell>
                    <TableCell>{bank.loanAmount}</TableCell>
                    <TableCell>{bank.maxTenure}</TableCell>
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

      {/* Loan Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education Loan Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple 4-step process to get your education loan approved
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-fintech-purple/10 p-6 mb-6">
                <span className="text-2xl font-bold text-fintech-purple">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Application</h3>
              <p className="text-gray-600">Fill the online application form with your details</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-fintech-orange/10 p-6 mb-6">
                <span className="text-2xl font-bold text-fintech-orange">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Documentation</h3>
              <p className="text-gray-600">Submit required documents for verification</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-fintech-blue/10 p-6 mb-6">
                <span className="text-2xl font-bold text-fintech-blue">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Verification</h3>
              <p className="text-gray-600">Bank verifies your documents and eligibility</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-green-100 p-6 mb-6">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Disbursement</h3>
              <p className="text-gray-600">Loan amount is disbursed to the institution</p>
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
              Find answers to common questions about our education loans
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">
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
      <section className="py-16 bg-gradient-to-r from-fintech-purple to-fintech-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Fund Your Education?</h2>
            <p className="text-xl mb-8">
              Take the first step towards your academic dreams with our education loans
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-fintech-purple hover:bg-white/90">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationLoan;
