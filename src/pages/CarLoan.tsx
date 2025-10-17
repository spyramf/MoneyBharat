
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Check, CircleDollarSign, Award, ShieldCheck, BadgePercent, Clock } from "lucide-react";
import Car from "@/components/icons/Car";

const CarLoan = () => {
  const [loanAmount, setLoanAmount] = useState<number>(1000000);
  const [loanTenure, setLoanTenure] = useState<number>(60);
  const [interestRate, setInterestRate] = useState<number>(7.5);

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

  const carLoanBenefits = [
    {
      title: "Low Interest Rates",
      description: "Starting at 7.5% p.a.",
      icon: <BadgePercent className="h-10 w-10 text-fintech-blue" />
    },
    {
      title: "Quick Disbursals",
      description: "Get funds in 24 hours",
      icon: <Clock className="h-10 w-10 text-fintech-purple" />
    },
    {
      title: "High Eligibility",
      description: "CIBIL score of 700+",
      icon: <Award className="h-10 w-10 text-fintech-deep-purple" />
    },
    {
      title: "Minimal Documentation",
      description: "Digital application process",
      icon: <ShieldCheck className="h-10 w-10 text-green-500" />
    }
  ];

  const faqs = [
    {
      question: "What documents are required for a car loan?",
      answer: "For a car loan, you typically need identity proof (Aadhaar, PAN), address proof, income proof (salary slips, Form 16, ITR for last 2 years), bank statements for the last 6 months, and vehicle proforma invoice from the dealer."
    },
    {
      question: "What is the maximum loan tenure available?",
      answer: "At Money Bharat, we offer car loans with tenures ranging from 1 to 7 years (84 months). The optimal tenure depends on your repayment capacity and financial goals."
    },
    {
      question: "How is the interest rate determined for my car loan?",
      answer: "Your car loan interest rate depends on several factors including your credit score, income, loan amount, tenure, employment status, relationship with the bank, and the vehicle you're purchasing (new or pre-owned)."
    },
    {
      question: "Can I prepay or foreclose my car loan?",
      answer: "Yes, you can prepay or foreclose your car loan. However, most lenders have a lock-in period of 6-12 months before which prepayment is not allowed. Some lenders may also charge a prepayment penalty, typically 2-5% of the outstanding principal."
    },
    {
      question: "What happens if I miss an EMI payment?",
      answer: "Missing an EMI payment can result in late payment charges, negatively impact your credit score, and in case of consistent defaults, the lender may repossess your vehicle. It's important to communicate with your lender if you anticipate payment difficulties."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Car Loan - Money Bharat Finance</title>
        <meta
          name="description"
          content="Get the best car loan offers with low interest rates, quick approval, and minimal documentation at Money Bharat."
        />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-r from-fintech-blue/10 to-fintech-purple/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="flex-1 max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Drive Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-fintech-blue to-fintech-purple">Dream Car</span> Today
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                  Get up to 100% financing on your new car with competitive interest rates starting at 7.5%* p.a.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-fintech-purple to-fintech-blue hover:opacity-90 text-lg px-8 py-6" size="lg">
                    Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button variant="outline" className="text-lg px-8 py-6" size="lg">
                    Check Eligibility
                  </Button>
                </div>
                <div className="flex flex-wrap gap-6 mt-8">
                  <div className="flex items-center gap-2">
                    <Check className="text-green-500 h-5 w-5" />
                    <span className="text-gray-700">Instant approval</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="text-green-500 h-5 w-5" />
                    <span className="text-gray-700">100% digital process</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="text-green-500 h-5 w-5" />
                    <span className="text-gray-700">No hidden charges</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute -top-6 -right-6 bg-fintech-purple/20 rounded-full h-24 w-24 blur-xl"></div>
                  <div className="absolute -bottom-6 -left-6 bg-fintech-blue/20 rounded-full h-24 w-24 blur-xl"></div>
                  <Card className="bg-white/80 backdrop-blur border border-gray-200 shadow-xl w-full max-w-md">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Car className="h-6 w-6 text-fintech-deep-purple" />
                        <span>Quick Car Loan Calculator</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <div className="flex justify-between">
                            <Label htmlFor="loan-amount">Loan Amount</Label>
                            <span className="font-medium">₹{loanAmount.toLocaleString()}</span>
                          </div>
                          <Slider 
                            id="loan-amount"
                            value={[loanAmount]} 
                            min={100000} 
                            max={10000000} 
                            step={10000}
                            onValueChange={(value) => setLoanAmount(value[0])}
                            className="mt-2" 
                          />
                          <div className="flex justify-between text-sm text-gray-500 mt-1">
                            <span>₹1L</span>
                            <span>₹1Cr</span>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between">
                            <Label htmlFor="interest-rate">Interest Rate (%)</Label>
                            <span className="font-medium">{interestRate}%</span>
                          </div>
                          <Slider 
                            id="interest-rate"
                            value={[interestRate]} 
                            min={5} 
                            max={15} 
                            step={0.1}
                            onValueChange={(value) => setInterestRate(value[0])}
                            className="mt-2" 
                          />
                          <div className="flex justify-between text-sm text-gray-500 mt-1">
                            <span>5%</span>
                            <span>15%</span>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between">
                            <Label htmlFor="loan-tenure">Loan Tenure (months)</Label>
                            <span className="font-medium">{loanTenure} months</span>
                          </div>
                          <Slider 
                            id="loan-tenure"
                            value={[loanTenure]} 
                            min={12} 
                            max={84} 
                            step={6}
                            onValueChange={(value) => setLoanTenure(value[0])}
                            className="mt-2" 
                          />
                          <div className="flex justify-between text-sm text-gray-500 mt-1">
                            <span>1 Year</span>
                            <span>7 Years</span>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-gray-600">Monthly EMI</span>
                            <span className="text-2xl font-bold">₹{emi.toLocaleString()}</span>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div>
                              <span className="text-gray-500 block">Principal</span>
                              <span>₹{loanAmount.toLocaleString()}</span>
                            </div>
                            <div>
                              <span className="text-gray-500 block">Interest</span>
                              <span>₹{totalInterest.toLocaleString()}</span>
                            </div>
                            <div className="col-span-2">
                              <span className="text-gray-500 block">Total Amount Payable</span>
                              <span className="font-semibold">₹{totalPayable.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                        
                        <Button className="w-full bg-gradient-to-r from-fintech-purple to-fintech-blue hover:opacity-90">
                          Apply for Car Loan
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Car Loan Types */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Explore Our Car Loan Options</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose from our range of specialized car loan products designed to meet your specific needs
              </p>
            </div>
            
            <Tabs defaultValue="new" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="new" className="text-lg py-3">New Car Loan</TabsTrigger>
                <TabsTrigger value="used" className="text-lg py-3">Used Car Loan</TabsTrigger>
                <TabsTrigger value="refinance" className="text-lg py-3">Refinance</TabsTrigger>
              </TabsList>
              
              <TabsContent value="new" className="border rounded-lg p-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-full md:w-1/3 flex justify-center">
                    <div className="bg-fintech-blue/10 rounded-full p-8">
                      <Car className="h-24 w-24 text-fintech-blue" />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-bold mb-3">New Car Loan</h3>
                    <p className="text-gray-600 mb-4">
                      Drive home your brand new car with our competitive financing options. We offer loans up to 100% of ex-showroom price with flexible repayment options.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="text-green-500 h-5 w-5 shrink-0" />
                        <span>Interest rates starting from 7.5%* p.a.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="text-green-500 h-5 w-5 shrink-0" />
                        <span>Loan tenure up to 7 years</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="text-green-500 h-5 w-5 shrink-0" />
                        <span>Quick approval within 24 hours</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="text-green-500 h-5 w-5 shrink-0" />
                        <span>Minimal documentation</span>
                      </li>
                    </ul>
                    <Button className="bg-gradient-to-r from-fintech-purple to-fintech-blue hover:opacity-90">
                      Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="used" className="border rounded-lg p-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-full md:w-1/3 flex justify-center">
                    <div className="bg-fintech-purple/10 rounded-full p-8">
                      <Car className="h-24 w-24 text-fintech-purple" />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-bold mb-3">Used Car Loan</h3>
                    <p className="text-gray-600 mb-4">
                      Find the perfect pre-owned car without compromising on quality. Our used car loans offer competitive rates for vehicles up to 10 years old.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="text-green-500 h-5 w-5 shrink-0" />
                        <span>Interest rates starting from 9.5%* p.a.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="text-green-500 h-5 w-5 shrink-0" />
                        <span>Loan tenure up to 5 years</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="text-green-500 h-5 w-5 shrink-0" />
                        <span>Financing up to 85% of vehicle value</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="text-green-500 h-5 w-5 shrink-0" />
                        <span>Free vehicle valuation service</span>
                      </li>
                    </ul>
                    <Button className="bg-gradient-to-r from-fintech-purple to-fintech-blue hover:opacity-90">
                      Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="refinance" className="border rounded-lg p-6">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-full md:w-1/3 flex justify-center">
                    <div className="bg-fintech-orange/10 rounded-full p-8">
                      <CircleDollarSign className="h-24 w-24 text-fintech-orange" />
                    </div>
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-bold mb-3">Car Loan Refinance</h3>
                    <p className="text-gray-600 mb-4">
                      Lower your existing car loan EMI by transferring your loan to us. Get better interest rates and save on your monthly payments.
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2">
                        <Check className="text-green-500 h-5 w-5 shrink-0" />
                        <span>Interest rates starting from 8.5%* p.a.</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="text-green-500 h-5 w-5 shrink-0" />
                        <span>Top-up loan facility available</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="text-green-500 h-5 w-5 shrink-0" />
                        <span>Lower EMIs with extended tenure</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="text-green-500 h-5 w-5 shrink-0" />
                        <span>Simplified transfer process</span>
                      </li>
                    </ul>
                    <Button className="bg-gradient-to-r from-fintech-purple to-fintech-blue hover:opacity-90">
                      Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose Our Car Loans?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience a hassle-free car buying journey with our customer-friendly loan process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {carLoanBenefits.map((benefit, index) => (
                <Card key={index} className="border-none shadow-md h-full">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="rounded-full bg-gray-50 p-4 mb-4">
                        {benefit.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get your car loan in 3 simple steps
              </p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
              <div className="flex-1 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-fintech-purple/20 flex items-center justify-center text-fintech-purple text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Apply Online</h3>
                <p className="text-gray-600">
                  Fill our simple online application form and upload the required documents
                </p>
              </div>
              
              <div className="flex-1 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-fintech-blue/20 flex items-center justify-center text-fintech-blue text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Get Approval</h3>
                <p className="text-gray-600">
                  Receive instant in-principle approval and loan offer within 2 hours
                </p>
              </div>
              
              <div className="flex-1 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-fintech-orange/20 flex items-center justify-center text-fintech-orange text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Disbursal</h3>
                <p className="text-gray-600">
                  Once approved, we'll disburse the loan amount directly to the car dealer
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to the most common questions about our car loans
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="mb-6 last:mb-0 bg-white rounded-lg border p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-fintech-purple to-fintech-blue">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Drive Your Dream Car?</h2>
              <p className="text-xl mb-8">
                Apply now and get instant approval on your car loan application
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-fintech-purple hover:bg-white/90 text-lg px-8">
                  Apply Now
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8">
                  Speak to an Expert
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CarLoan;
