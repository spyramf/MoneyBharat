import Head from 'next/head';
import React, { useState, useEffect } from "react";
import { Calculator, ArrowRight, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts";

interface FormValues {
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  loanType: string;
}

const EmiCalculator = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      loanAmount: 1000000,
      interestRate: 10,
      loanTerm: 20,
      loanType: "home"
    },
  });

  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [pieData, setPieData] = useState<any[]>([]);
  const [yearlyBreakup, setYearlyBreakup] = useState<any[]>([]);

  const loanTypeOptions = [
    { value: "home", label: "Home Loan", defaultRate: 8.5 },
    { value: "car", label: "Car Loan", defaultRate: 9.5 },
    { value: "personal", label: "Personal Loan", defaultRate: 12 },
    { value: "education", label: "Education Loan", defaultRate: 10.5 }
  ];

  const calculateEMI = (loanAmount: number, interestRate: number, loanTerm: number) => {
    // P x R x (1+R)^N / [(1+R)^N-1]
    const principal = loanAmount;
    const rate = interestRate / 12 / 100;
    const time = loanTerm * 12;
    
    const emi = principal * rate * Math.pow(1 + rate, time) / (Math.pow(1 + rate, time) - 1);
    const totalPayment = emi * time;
    const totalInterestPayment = totalPayment - principal;
    
    return {
      monthlyEmi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterestPayment)
    };
  };

  const generateYearlyBreakup = (
    loanAmount: number, 
    interestRate: number, 
    loanTerm: number
  ) => {
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = loanTerm * 12;
    const monthlyEmi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths) / 
                     (Math.pow(1 + monthlyRate, totalMonths) - 1);
    
    let remainingPrincipal = loanAmount;
    const yearlyData = [];
    
    for (let year = 1; year <= loanTerm; year++) {
      let yearlyPrincipal = 0;
      let yearlyInterest = 0;
      
      for (let month = 1; month <= 12; month++) {
        if ((year - 1) * 12 + month > totalMonths) break;
        
        const monthlyInterest = remainingPrincipal * monthlyRate;
        const monthlyPrincipal = monthlyEmi - monthlyInterest;
        
        yearlyPrincipal += monthlyPrincipal;
        yearlyInterest += monthlyInterest;
        remainingPrincipal -= monthlyPrincipal;
      }
      
      yearlyData.push({
        year: `Year ${year}`,
        principal: Math.round(yearlyPrincipal),
        interest: Math.round(yearlyInterest)
      });
    }
    
    return yearlyData;
  };

  useEffect(() => {
    const { loanAmount, interestRate, loanTerm } = form.getValues();
    const result = calculateEMI(loanAmount, interestRate, loanTerm);
    setEmi(result.monthlyEmi);
    setTotalInterest(result.totalInterest);
    setTotalAmount(result.totalPayment);
    
    setPieData([
      { name: "Principal", value: loanAmount, fill: "#9b87f5" },
      { name: "Interest", value: result.totalInterest, fill: "#0FA0CE" }
    ]);
    
    setYearlyBreakup(generateYearlyBreakup(loanAmount, interestRate, loanTerm));
  }, [form.watch("loanAmount"), form.watch("interestRate"), form.watch("loanTerm")]);

  useEffect(() => {
    const loanType = form.watch("loanType");
    const selectedOption = loanTypeOptions.find(option => option.value === loanType);
    if (selectedOption) {
      form.setValue("interestRate", selectedOption.defaultRate);
    }
  }, [form.watch("loanType")]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const COLORS = ["#9b87f5", "#0FA0CE"];

  return (
    <div className="min-h-screen flex flex-col">
        <Head>
            <title>EMI Calculator - Money Bharat</title>
            <meta name="description" content="Plan your loan repayment by calculating your Equated Monthly Installment (EMI) and get a detailed breakdown." />
        </Head>
      
      <main className="flex-grow pt-24 pb-8 md:pt-28 md:pb-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">EMI Calculator</h1>
              <p className="text-gray-600 text-center max-w-2xl mx-auto">
                Plan your loan repayment by calculating your Equated Monthly Installment (EMI) and get a detailed breakdown.
              </p>
            </div>
            
            <div className="grid md:grid-cols-12 gap-8">
              <Card className="md:col-span-5 shadow-md border border-green-100">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-6">Calculate Loan EMI</h2>
                  
                  <Form {...form}>
                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="loanType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium">Loan Type</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="grid grid-cols-2 gap-2 mt-2"
                              >
                                {loanTypeOptions.map((option) => (
                                  <div key={option.value} className="flex items-center space-x-2 border rounded p-2 cursor-pointer hover:bg-gray-50">
                                    <RadioGroupItem value={option.value} id={option.value} />
                                    <label htmlFor={option.value} className="cursor-pointer text-sm">
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </RadioGroup>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    
                      <FormField
                        control={form.control}
                        name="loanAmount"
                        render={({ field }) => (
                          <FormItem>
                            <div className="flex justify-between">
                              <FormLabel className="text-base font-medium">Loan Amount</FormLabel>
                              <div className="flex items-center">
                                <span className="mr-2 text-sm">₹</span>
                                <Input
                                  type="number"
                                  className="w-24 h-8 text-right"
                                  value={field.value}
                                  onChange={(e) => field.onChange(parseInt(e.target.value) || 100000)}
                                />
                              </div>
                            </div>
                            <FormControl>
                              <Slider
                                value={[field.value]}
                                min={100000}
                                max={10000000}
                                step={100000}
                                onValueChange={(value) => field.onChange(value[0])}
                                className="mt-2"
                              />
                            </FormControl>
                            <div className="flex justify-between mt-1">
                              <span className="text-xs text-gray-500">₹1 Lakh</span>
                              <span className="text-xs text-gray-500">₹1 Crore</span>
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="interestRate"
                        render={({ field }) => (
                          <FormItem>
                            <div className="flex justify-between">
                              <FormLabel className="text-base font-medium flex items-center">
                                Interest Rate (p.a)
                                <Popover>
                                  <PopoverTrigger>
                                    <HelpCircle className="h-4 w-4 ml-1 text-gray-400" />
                                  </PopoverTrigger>
                                  <PopoverContent>
                                    <p className="text-sm">
                                      The interest rate varies based on the type of loan, your credit score, and the lender's policies.
                                    </p>
                                  </PopoverContent>
                                </Popover>
                              </FormLabel>
                              <div className="flex items-center">
                                <Input
                                  type="number"
                                  className="w-16 h-8 text-right"
                                  value={field.value}
                                  onChange={(e) => field.onChange(parseFloat(e.target.value) || 1)}
                                />
                                <span className="ml-2 text-sm">%</span>
                              </div>
                            </div>
                            <FormControl>
                              <Slider
                                value={[field.value]}
                                min={5}
                                max={20}
                                step={0.1}
                                onValueChange={(value) => field.onChange(value[0])}
                                className="mt-2"
                              />
                            </FormControl>
                            <div className="flex justify-between mt-1">
                              <span className="text-xs text-gray-500">5%</span>
                              <span className="text-xs text-gray-500">20%</span>
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="loanTerm"
                        render={({ field }) => (
                          <FormItem>
                            <div className="flex justify-between">
                              <FormLabel className="text-base font-medium">Loan Term</FormLabel>
                              <div className="flex items-center">
                                <Input
                                  type="number"
                                  className="w-16 h-8 text-right"
                                  value={field.value}
                                  onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                                />
                                <span className="ml-2 text-sm">Years</span>
                              </div>
                            </div>
                            <FormControl>
                              <Slider
                                value={[field.value]}
                                min={1}
                                max={30}
                                step={1}
                                onValueChange={(value) => field.onChange(value[0])}
                                className="mt-2"
                              />
                            </FormControl>
                            <div className="flex justify-between mt-1">
                              <span className="text-xs text-gray-500">1 Year</span>
                              <span className="text-xs text-gray-500">30 Years</span>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  </Form>
                </CardContent>
              </Card>

              <div className="md:col-span-7">
                <Card className="shadow-md h-full border border-green-100">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-6">Loan Summary</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Monthly EMI</p>
                        <p className="text-lg font-bold mt-1">{formatCurrency(emi)}</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Total Interest</p>
                        <p className="text-lg font-bold mt-1 text-fintech-blue">{formatCurrency(totalInterest)}</p>
                      </div>
                      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Total Payment</p>
                        <p className="text-lg font-bold mt-1">{formatCurrency(totalAmount)}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-sm font-medium mb-3">Payment Distribution</h3>
                        <div className="h-48">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                              >
                                {pieData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                              </Pie>
                              <Tooltip formatter={(value) => formatCurrency(value as number)} />
                              <Legend />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium mb-3">Principal vs Interest</h3>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Principal</span>
                              <span>{formatCurrency(form.watch("loanAmount"))}</span>
                            </div>
                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                              <div 
                                className="progress-bar-loan" 
                                style={{ "--progress-width": `${(form.watch("loanAmount") / totalAmount) * 100}%` } as React.CSSProperties}
                              ></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Interest</span>
                              <span>{formatCurrency(totalInterest)}</span>
                            </div>
                            <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                              <div 
                                className="progress-bar-interest" 
                                style={{ "--progress-width": `${(totalInterest / totalAmount) * 100}%` } as React.CSSProperties}
                              ></div>
                            </div>
                          </div>

                          <div className="mt-4 pt-3 border-t">
                            <div className="flex justify-between text-sm font-medium">
                              <span>Total Payment</span>
                              <span>{formatCurrency(totalAmount)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-10 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-4">About EMI (Equated Monthly Installment)</h3>
              <p className="text-gray-600 mb-4">
                An Equated Monthly Installment (EMI) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month.
                EMIs are used to pay off both interest and principal each month so that over a specified number of years, the loan is paid off in full.
              </p>
              <p className="text-gray-600">
                EMI calculation is based on the principal loan amount, interest rate, and loan tenure. Paying a higher EMI or increasing the payment frequency 
                can help reduce the overall interest burden and loan tenure.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmiCalculator;
