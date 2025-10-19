import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import {
  CreditCard,
  Calculator,
  Shield,
  ArrowDown,
  ArrowUp,
  Banknote,
  Percent,
  TrendingUp,
  Star,
  Clock,
  BadgeCheck,
  Users,
  Building,
} from "lucide-react";
import Home from "@/components/icons/Home";
import Car from "@/components/icons/Car";
import GraduationCap from "@/components/icons/GraduationCap";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import ProductCard from "@/components/ProductCard";
import LoanBankComparison from "@/components/loans/LoanBankComparison";
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
    const emi = (principal * rateMonthly * Math.pow(1 + rateMonthly, tenure)) / (Math.pow(1 + rateMonthly, tenure) - 1);
    return Math.round(emi);
  };
  const emi = calculateEmi();
  const totalPayable = emi * loanTenure;
  const totalInterest = totalPayable - loanAmount;

  // New recommended loans data
  const recommendedLoans = [
    {
      name: "Instant Personal Loan",
      provider: "HDFC Bank",
      interestRate: "10.50%",
      processingFee: "Up to 2.50%",
      maxAmount: "₹40 Lakhs",
      rating: 4.8,
      benefits: ["Quick approval within 4 hours", "Zero collateral required", "Flexible repayment options"],
    },
    {
      name: "Business Growth Loan",
      provider: "ICICI Bank",
      interestRate: "12.25%",
      processingFee: "1.50%",
      maxAmount: "₹75 Lakhs",
      rating: 4.6,
      benefits: ["Customized for SMEs", "Minimal documentation", "Line of credit options"],
    },
    {
      name: "Prime Home Loan",
      provider: "SBI",
      interestRate: "8.75%",
      processingFee: "0.35%",
      maxAmount: "₹5 Crores",
      rating: 4.9,
      benefits: ["Lowest interest rates", "Up to 30 years tenure", "Balance transfer option"],
    },
  ];

  // Enhance loan types with more features
  const loanTypes = [
    {
      id: "personal",
      name: "Personal Loan",
      icon: <Banknote className="h-10 w-10 text-fintech-purple" />,
      description: "Quick unsecured loans for your personal needs",
      features: [
        "Get instant funding up to ₹40 Lakhs",
        "No collateral or security required",
        "Flexible repayment options",
      ],
      gradient: "bg-gradient-to-r from-fintech-purple to-fintech-purple/80",
      path: "/loans/personal",
    },
    {
      id: "business",
      name: "Business Loan",
      icon: <CreditCard className="h-10 w-10 text-fintech-orange" />,
      description: "Grow your business with flexible financing options",
      features: [
        "Funding up to ₹5 Crores for your business",
        "Tailored solutions for different business types",
        "Competitive interest rates",
      ],
      gradient: "bg-gradient-to-r from-fintech-orange to-fintech-orange/80",
      path: "/loans/business",
    },
    {
      id: "home",
      name: "Home Loan",
      icon: <Home className="h-10 w-10 text-fintech-blue" />,
      description: "Affordable housing finance solutions",
      features: [
        "Up to 90% of property value as loan",
        "Lower interest rates starting at 8.40%",
        "Tax benefits on principal and interest",
      ],
      gradient: "bg-gradient-to-r from-fintech-blue to-fintech-blue/80",
      path: "/loans/home",
    },
    {
      id: "car",
      name: "Car Loan",
      icon: <Car className="h-10 w-10 text-fintech-deep-purple" />,
      description: "Drive your dream car with competitive rates",
      features: ["Quick approval and disbursement", "Up to 100% financing on select models", "Flexible tenure options"],
      gradient: "bg-gradient-to-r from-fintech-deep-purple to-fintech-deep-purple/80",
      path: "/loans/car",
    },
    {
      id: "education",
      name: "Education Loan",
      icon: <GraduationCap className="h-10 w-10 text-green-500" />,
      description: "Invest in education with affordable student loans",
      features: [
        "Cover tuition fees, living expenses & more",
        "Moratorium during study period",
        "Tax benefits under Section 80E",
      ],
      gradient: "bg-gradient-to-r from-green-500 to-green-500/80",
      path: "/loans/education",
    },
    {
      id: "mutual-funds",
      name: "Loan Against Mutual Funds",
      icon: <TrendingUp className="h-10 w-10 text-yellow-500" />,
      description: "Quick loans against your mutual fund investments",
      features: [
        "Up to 80% of your mutual fund value",
        "Retain your investments and their growth",
        "Lower interest rates than personal loans",
      ],
      gradient: "bg-gradient-to-r from-yellow-500 to-yellow-500/80",
      path: "/loans/mutual-funds",
    },
  ];
  const loanComparisons = [
    {
      bank: "HDFC Bank",
      interestRate: "10.50% - 18.00%",
      processingFee: "Up to 2.50%",
      prepaymentCharges: "Nil for floating rate loans",
    },
    {
      bank: "ICICI Bank",
      interestRate: "10.75% - 18.49%",
      processingFee: "Up to 2.25% + GST",
      prepaymentCharges: "2% on outstanding amount",
    },
    {
      bank: "SBI",
      interestRate: "9.60% - 16.40%",
      processingFee: "1.50% - 2.00% + GST",
      prepaymentCharges: "Nil after 12 months",
    },
    {
      bank: "Axis Bank",
      interestRate: "10.49% - 18.00%",
      processingFee: "Up to 2.00% + GST",
      prepaymentCharges: "2% on outstanding amount",
    },
    {
      bank: "Bajaj Finserv",
      interestRate: "11.00% - 16.00%",
      processingFee: "Up to 3.99% + GST",
      prepaymentCharges: "4% on outstanding amount",
    },
  ];
  const faqs = [
    {
      question: "How do I apply for a loan?",
      answer:
        "You can apply for a loan by submitting an application through our website, visiting our branch, or contacting our customer service team. You'll need to provide personal information, income details, and any required documents.",
    },
    {
      question: "What documents are required for a loan application?",
      answer:
        "Typically, you'll need identity proof (Aadhaar, PAN card), address proof, income proof (salary slips, ITR), bank statements for the last 6 months, and employment details. Additional documents may be required based on the loan type.",
    },
    {
      question: "How long does the loan approval process take?",
      answer:
        "The approval process can take anywhere from a few hours to a few days depending on the loan type, amount, and verification process. Personal loans are typically processed faster than secured loans like home loans.",
    },
    {
      question: "Can I prepay my loan before the end of the tenure?",
      answer:
        "Yes, most loans can be prepaid before the end of the tenure. However, some lenders may charge a prepayment penalty, usually a percentage of the outstanding loan amount.",
    },
    {
      question: "How is my loan interest rate determined?",
      answer:
        "Your loan interest rate is determined based on various factors including your credit score, income, loan amount, tenure, employment status, and the lender's policies.",
    },
    {
      question: "What if I miss an EMI payment?",
      answer:
        "Missing an EMI payment can result in late payment charges and negatively impact your credit score. If you anticipate difficulty in making a payment, contact your lender proactively to discuss alternative arrangements.",
    },
    {
      question: "Can I get a loan with a bad credit score?",
      answer:
        "While having a good credit score improves your chances of loan approval and better interest rates, some lenders may still offer loans to individuals with poor credit scores, albeit at higher interest rates or with additional security requirements.",
    },
  ];

  // New loan eligibility criteria data
  const eligibilityCriteria = [
    {
      loanType: "Personal Loan",
      criteria: [
        "Age 21-60 years",
        "Minimum income of ₹15,000 per month",
        "CIBIL score of 700+",
        "At least 1 year of work experience",
      ],
    },
    {
      loanType: "Business Loan",
      criteria: [
        "Business operational for at least 2 years",
        "Annual turnover of ₹50 lakhs+",
        "CIBIL score of 700+",
        "ITR filed for at least 1 year",
      ],
    },
    {
      loanType: "Home Loan",
      criteria: [
        "Age 21-65 years (at loan maturity)",
        "Minimum income of ₹25,000 per month",
        "CIBIL score of 750+",
        "Property with clear title and approvals",
      ],
    },
  ];
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section - Enhanced with stronger call-to-action */}
      <section className="bg-gradient-to-r from-fintech-green/10 to-fintech-blue/10 py-16 md:py-[100px] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 px-4 py-1 bg-white/90 backdrop-blur-sm border-fintech-green">
              Compare Loans From 50+ Banks
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 lg:text-6xl">
              Get the Best Loan Offers
              <br />
              Tailored for You
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Find the perfect loan solution with competitive rates and flexible terms
            </p>
            {/* <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="hover:bg-fintech-deep-purple text-white bg-fintech-green">
                Check Your Eligibility
              </Button>
              <Button size="lg" variant="outline" className="border-fintech-green text-fintech-green hover:bg-fintech-green/10">
                Calculate Your EMI
              </Button>
            </div> */}
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-fintech-green/10 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-fintech-blue/10 blur-3xl"></div>
        </div>
      </section>

      {/* Recommended Loans Section - New section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2 px-3 py-1 text-fintech-green border-fintech-green">
              Top Picks
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recommended Loan Offers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked loan offers with the best rates and terms from our banking partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedLoans.map((loan, index) => (
              <Card
                key={index}
                className="border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <div className="bg-gradient-to-r from-fintech-green/10 to-fintech-blue/10 px-6 py-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-xl">{loan.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{loan.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{loan.provider}</p>
                </div>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Interest Rate</p>
                      <p className="font-semibold text-fintech-green">{loan.interestRate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Processing Fee</p>
                      <p className="font-semibold">{loan.processingFee}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Max Amount</p>
                      <p className="font-semibold">{loan.maxAmount}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Key Benefits</p>
                    <ul className="space-y-2">
                      {loan.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <BadgeCheck className="h-5 w-5 text-fintech-green flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="bg-gray-50 border-t border-gray-100">
                  <Button className="w-full bg-fintech-green hover:bg-fintech-green/90">Explore Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Types Section - Updated with ProductCard */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2 px-3 py-1 text-fintech-purple border-fintech-purple">
              Loan Products
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Loan Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect financial solution for your specific needs with our diverse range of loan options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanTypes.map((loan) => (
              <ProductCard
                key={loan.id}
                title={loan.name}
                icon={loan.icon}
                description={loan.description}
                features={loan.features}
                linkText="Learn More"
                linkHref={loan.path}
                gradient={loan.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section - New section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2 px-3 py-1 text-fintech-blue border-fintech-blue">
              Eligibility
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Loan Eligibility Criteria</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Check if you're eligible for our loan products before applying
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {eligibilityCriteria.map((item, index) => (
              <Card key={index} className="border-none shadow-sm hover:shadow-md transition-all">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-fintech-blue/10 flex items-center justify-center mr-3">
                      {index === 0 && <Users className="h-5 w-5 text-fintech-blue" />}
                      {index === 1 && <Building className="h-5 w-5 text-fintech-blue" />}
                      {index === 2 && <Home className="h-5 w-5 text-fintech-blue" />}
                    </div>
                    {item.loanType}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {item.criteria.map((criterion, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="rounded-full bg-fintech-blue/10 p-1 flex-shrink-0 mt-0.5">
                          <BadgeCheck className="h-4 w-4 text-fintech-blue" />
                        </div>
                        <span className="text-sm text-gray-600">{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full text-fintech-blue border-fintech-blue hover:bg-fintech-blue/10"
                  >
                    Check Eligibility
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Calculator Section - Enhanced styling */}
      <section className="bg-gray-50 py-16" id="calculator">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-2 px-3 py-1 text-fintech-purple border-fintech-purple">
                Financial Planning
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Loan Calculator</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Plan your finances better with our easy-to-use EMI calculator
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle>Calculate Your EMI</CardTitle>
                  <CardDescription>Adjust the sliders to see your monthly payment</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="loan-amount" className="flex justify-between">
                        <span>Loan Amount (₹)</span>
                        <span className="font-medium text-fintech-purple">{loanAmount.toLocaleString()}</span>
                      </Label>
                      <Slider
                        value={[loanAmount]}
                        min={50000}
                        max={5000000}
                        step={10000}
                        onValueChange={(value) => setLoanAmount(value[0])}
                        className="mt-4"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>₹50K</span>
                        <span>₹50L</span>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="interest-rate" className="flex justify-between">
                        <span>Interest Rate (%)</span>
                        <span className="font-medium text-fintech-purple">{interestRate}%</span>
                      </Label>
                      <Slider
                        value={[interestRate]}
                        min={5}
                        max={20}
                        step={0.1}
                        onValueChange={(value) => setInterestRate(value[0])}
                        className="mt-4"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>5%</span>
                        <span>20%</span>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="loan-tenure" className="flex justify-between">
                        <span>Loan Tenure (months)</span>
                        <span className="font-medium text-fintech-purple">{loanTenure} months</span>
                      </Label>
                      <Slider
                        value={[loanTenure]}
                        min={12}
                        max={84}
                        step={1}
                        onValueChange={(value) => setLoanTenure(value[0])}
                        className="mt-4"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>1 Year</span>
                        <span>7 Years</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-br from-fintech-green/10 to-fintech-blue/10 rounded-xl shadow-md flex flex-col overflow-hidden border border-gray-100">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-semibold mb-2">Loan Summary</h3>
                  <p className="text-sm text-gray-600">Based on your selected parameters</p>
                </div>

                <div className="p-6 flex flex-col gap-6 flex-grow">
                  <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-gray-100">
                    <p className="text-sm text-gray-600 mb-1">Monthly EMI</p>
                    <p className="text-3xl font-bold text-fintech-green">₹{emi.toLocaleString()}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-gray-100">
                      <p className="text-sm text-gray-600 mb-1">Total Interest</p>
                      <p className="text-xl font-semibold">₹{totalInterest.toLocaleString()}</p>
                    </div>

                    <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-gray-100">
                      <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                      <p className="text-xl font-semibold">₹{totalPayable.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <Button className="w-full bg-fintech-green text-white hover:bg-fintech-green/90">
                      Explore Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Comparison - Using component */}
      <LoanBankComparison
        title="Compare Loan Options"
        subtitle="Find the best loan rates and terms from our partner banks"
        badgeText="Compare & Choose"
        loanComparisons={loanComparisons}
      />

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2 px-3 py-1 text-fintech-purple border-fintech-purple">
              Our Benefits
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose MoneyBharat?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make getting a loan simpler, faster, and more transparent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-sm hover:shadow-md transition-all">
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

            <Card className="border-none shadow-sm hover:shadow-md transition-all">
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

            <Card className="border-none shadow-sm hover:shadow-md transition-all">
              <CardHeader>
                <div className="rounded-full bg-fintech-green/10 p-3 w-fit mb-4">
                  <Clock className="h-6 w-6 text-fintech-green" />
                </div>
                <CardTitle>Quick Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Get your loan approved and disbursed quickly with our streamlined application process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section - New section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2 px-3 py-1 text-fintech-green border-fintech-green">
              Simple Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Get your loan in just 3 simple steps</p>
          </div>

          <div className="flex flex-col md:flex-row max-w-5xl mx-auto">
            <div className="flex-1 relative text-center px-6 pb-10 md:pb-0">
              <div className="w-16 h-16 bg-fintech-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-fintech-green">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Compare & Choose</h3>
              <p className="text-gray-600">
                Compare multiple loan options and choose the one that best fits your needs
              </p>

              {/* Connector */}
              <div className="hidden md:block absolute top-8 right-0 w-full h-1 bg-gray-200">
                <div className="absolute right-0 top-0 h-1 w-1/2 bg-fintech-green/20"></div>
              </div>
            </div>

            <div className="flex-1 relative text-center px-6 pb-10 md:pb-0">
              <div className="w-16 h-16 bg-fintech-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-fintech-blue">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Apply Online</h3>
              <p className="text-gray-600">Fill out a simple online application form with your details</p>

              {/* Connector */}
              <div className="hidden md:block absolute top-8 right-0 w-full h-1 bg-gray-200">
                <div className="absolute left-0 top-0 h-1 w-1/2 bg-fintech-blue/20"></div>
                <div className="absolute right-0 top-0 h-1 w-1/2 bg-fintech-purple/20"></div>
              </div>
            </div>

            <div className="flex-1 relative text-center px-6">
              <div className="w-16 h-16 bg-fintech-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-fintech-purple">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Get Funded</h3>
              <p className="text-gray-600">Receive your loan amount directly in your bank account</p>

              {/* Connector */}
              <div className="hidden md:block absolute top-8 left-0 w-1/2 h-1 bg-fintech-purple/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced UI */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2 px-3 py-1 text-fintech-blue border-fintech-blue">
              Got Questions?
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our loans and application process
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="application" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="application">Application</TabsTrigger>
                <TabsTrigger value="eligibility">Eligibility</TabsTrigger>
                <TabsTrigger value="repayment">Repayment</TabsTrigger>
              </TabsList>

              <TabsContent value="application">
                <Card className="border-none shadow-sm">
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      {faqs.slice(0, 3).map((faq, index) => (
                        <div key={index} className="mb-6 last:mb-0">
                          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-fintech-blue/10 flex items-center justify-center text-sm text-fintech-blue font-bold">
                              Q
                            </span>
                            {faq.question}
                          </h3>
                          <p className="text-gray-600 pl-8">{faq.answer}</p>
                          {index < 2 && <Separator className="mt-6" />}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="eligibility">
                <Card className="border-none shadow-sm">
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      {faqs.slice(3, 5).map((faq, index) => (
                        <div key={index} className="mb-6 last:mb-0">
                          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-fintech-blue/10 flex items-center justify-center text-sm text-fintech-blue font-bold">
                              Q
                            </span>
                            {faq.question}
                          </h3>
                          <p className="text-gray-600 pl-8">{faq.answer}</p>
                          {index < 1 && <Separator className="mt-6" />}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="repayment">
                <Card className="border-none shadow-sm">
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      {faqs.slice(5, 7).map((faq, index) => (
                        <div key={index} className="mb-6 last:mb-0">
                          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-fintech-blue/10 flex items-center justify-center text-sm text-fintech-blue font-bold">
                              Q
                            </span>
                            {faq.question}
                          </h3>
                          <p className="text-gray-600 pl-8">{faq.answer}</p>
                          {index < 1 && <Separator className="mt-6" />}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Apply Now CTA - Enhanced */}
      <section className="py-16 bg-gradient-to-r from-fintech-green to-fintech-blue relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjxwYXRoIGQ9Ik0zMCA0NGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTR6Ii8+PHBhdGggZD0iTTI0IDI0YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <Badge variant="outline" className="mb-4 px-4 py-1 bg-white/10 backdrop-blur-sm border-white">
              Get Started Today
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Apply now and get instant approval on your loan application</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-fintech-green hover:bg-white/90">
                Apply for a Loan
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white bg-fintech-green">
                Speak to an Advisor
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Loans;
