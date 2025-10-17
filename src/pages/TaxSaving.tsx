
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Calculator, ArrowRight, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

interface FormValues {
  income: number;
  age: number;
  regime: string;
  eightyC: number;
  eightyD: number;
  homeLoanInterest: number;
  nps: number;
}

const TaxSaving = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      income: 1000000,
      age: 30,
      regime: "new",
      eightyC: 50000,
      eightyD: 25000,
      homeLoanInterest: 0,
      nps: 0,
    },
  });

  const [taxAmount, setTaxAmount] = useState({ old: 0, new: 0 });
  const [savings, setSavings] = useState(0);
  const [effectiveTaxRate, setEffectiveTaxRate] = useState({ old: 0, new: 0 });
  const [recommendedRegime, setRecommendedRegime] = useState("new");
  const [comparisonData, setComparisonData] = useState<any[]>([]);

  // Tax slabs for old regime
  const oldRegimeSlabs = [
    { limit: 250000, rate: 0 },
    { limit: 500000, rate: 5 },
    { limit: 750000, rate: 10 },
    { limit: 1000000, rate: 15 },
    { limit: 1250000, rate: 20 },
    { limit: 1500000, rate: 25 },
    { limit: Infinity, rate: 30 },
  ];

  // Tax slabs for new regime
  const newRegimeSlabs = [
    { limit: 300000, rate: 0 },
    { limit: 600000, rate: 5 },
    { limit: 900000, rate: 10 },
    { limit: 1200000, rate: 15 },
    { limit: 1500000, rate: 20 },
    { limit: Infinity, rate: 30 },
  ];

  // Function to calculate tax for old regime
  const calculateOldRegimeTax = (
    income: number,
    eightyC: number,
    eightyD: number,
    homeLoanInterest: number,
    nps: number,
    age: number
  ) => {
    // Standard deduction
    const standardDeduction = 50000;
    
    // Age-based exemption limit
    let basicExemption = 250000;
    if (age >= 60 && age < 80) {
      basicExemption = 300000;
    } else if (age >= 80) {
      basicExemption = 500000;
    }
    
    // Total deductions under various sections
    const section80C = Math.min(eightyC, 150000);
    const section80D = Math.min(eightyD, 25000);
    const homeLoanInt = Math.min(homeLoanInterest, 200000);
    const npsDeduction = Math.min(nps, 50000);
    
    const totalDeductions = standardDeduction + section80C + section80D + homeLoanInt + npsDeduction;
    
    // Taxable income
    let taxableIncome = Math.max(0, income - totalDeductions);
    taxableIncome = Math.max(0, taxableIncome - basicExemption);
    
    // Calculate tax based on slabs
    let tax = 0;
    let remainingIncome = taxableIncome;
    let prevLimit = 0;
    
    for (const slab of oldRegimeSlabs) {
      if (slab.limit === Infinity) {
        tax += (remainingIncome * slab.rate) / 100;
        break;
      }
      
      const slabIncome = Math.min(remainingIncome, slab.limit - prevLimit);
      tax += (slabIncome * slab.rate) / 100;
      remainingIncome -= slabIncome;
      prevLimit = slab.limit;
      
      if (remainingIncome <= 0) break;
    }
    
    // Surcharge and cess can be added here if required
    const cess = (tax * 4) / 100;
    tax += cess;
    
    return tax;
  };

  // Function to calculate tax for new regime
  const calculateNewRegimeTax = (income: number, age: number) => {
    // Standard deduction
    const standardDeduction = 50000;
    
    // Taxable income
    let taxableIncome = Math.max(0, income - standardDeduction);
    
    // Calculate tax based on slabs
    let tax = 0;
    let remainingIncome = taxableIncome;
    let prevLimit = 0;
    
    for (const slab of newRegimeSlabs) {
      if (slab.limit === Infinity) {
        tax += (remainingIncome * slab.rate) / 100;
        break;
      }
      
      const slabIncome = Math.min(remainingIncome, slab.limit - prevLimit);
      tax += (slabIncome * slab.rate) / 100;
      remainingIncome -= slabIncome;
      prevLimit = slab.limit;
      
      if (remainingIncome <= 0) break;
    }
    
    // Surcharge and cess can be added here if required
    const cess = (tax * 4) / 100;
    tax += cess;
    
    return tax;
  };

  const generateTaxBreakup = (income: number) => {
    const breakupData = [
      { name: 'Standard Deduction', oldRegime: 50000, newRegime: 50000 },
      { name: '80C (up to ₹1.5L)', oldRegime: Math.min(form.watch('eightyC'), 150000), newRegime: 0 },
      { name: '80D (Health Insurance)', oldRegime: Math.min(form.watch('eightyD'), 25000), newRegime: 0 },
      { name: 'Home Loan Interest', oldRegime: Math.min(form.watch('homeLoanInterest'), 200000), newRegime: 0 },
      { name: 'NPS', oldRegime: Math.min(form.watch('nps'), 50000), newRegime: 0 },
    ];
    
    // Calculate total deductions
    const oldRegimeDeduction = breakupData.reduce((total, item) => total + item.oldRegime, 0);
    const newRegimeDeduction = breakupData.reduce((total, item) => total + item.newRegime, 0);
    
    // Add taxable income to data
    breakupData.push({
      name: 'Taxable Income',
      oldRegime: Math.max(0, income - oldRegimeDeduction),
      newRegime: Math.max(0, income - newRegimeDeduction)
    });
    
    return breakupData;
  };

  useEffect(() => {
    const { income, age, eightyC, eightyD, homeLoanInterest, nps } = form.getValues();
    
    const oldTax = calculateOldRegimeTax(income, eightyC, eightyD, homeLoanInterest, nps, age);
    const newTax = calculateNewRegimeTax(income, age);
    
    setTaxAmount({
      old: Math.round(oldTax),
      new: Math.round(newTax)
    });
    
    const savingsAmount = Math.max(0, Math.round(oldTax - newTax));
    setSavings(savingsAmount);
    
    setEffectiveTaxRate({
      old: Math.round((oldTax / income) * 100 * 10) / 10,
      new: Math.round((newTax / income) * 100 * 10) / 10
    });
    
    setRecommendedRegime(oldTax < newTax ? "old" : "new");
    
    // Chart data
    setComparisonData([
      {
        name: "Old Regime",
        tax: Math.round(oldTax),
        effectiveRate: Math.round((oldTax / income) * 100 * 10) / 10
      },
      {
        name: "New Regime",
        tax: Math.round(newTax),
        effectiveRate: Math.round((newTax / income) * 100 * 10) / 10
      }
    ]);
    
    // If the user selects a regime, update it based on calculation
    if (form.watch('regime') !== recommendedRegime) {
      form.setValue('regime', oldTax < newTax ? "old" : "new");
    }
  }, [
    form.watch("income"),
    form.watch("age"),
    form.watch("eightyC"),
    form.watch("eightyD"),
    form.watch("homeLoanInterest"),
    form.watch("nps"),
  ]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8 md:py-16 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Tax Saving Calculator</h1>
              <p className="text-gray-600 text-center max-w-2xl mx-auto">
                Compare old and new tax regimes to find which one saves you more tax. Plan your investments for maximum tax benefits.
              </p>
            </div>
            
            <div className="grid md:grid-cols-12 gap-8">
              <Card className="md:col-span-5 shadow-md border border-purple-100">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-6">Income & Investments</h2>
                  
                  <Form {...form}>
                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="income"
                        render={({ field }) => (
                          <FormItem>
                            <div className="flex justify-between">
                              <FormLabel className="text-base font-medium">Annual Income</FormLabel>
                              <div className="flex items-center">
                                <span className="mr-2 text-sm">₹</span>
                                <Input
                                  type="number"
                                  className="w-24 h-8 text-right"
                                  value={field.value}
                                  onChange={(e) => field.onChange(parseInt(e.target.value) || 500000)}
                                />
                              </div>
                            </div>
                            <FormControl>
                              <Slider
                                value={[field.value]}
                                min={300000}
                                max={5000000}
                                step={50000}
                                onValueChange={(value) => field.onChange(value[0])}
                                className="mt-2"
                              />
                            </FormControl>
                            <div className="flex justify-between mt-1">
                              <span className="text-xs text-gray-500">₹3 Lakh</span>
                              <span className="text-xs text-gray-500">₹50 Lakh</span>
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                          <FormItem>
                            <div className="flex justify-between">
                              <FormLabel className="text-base font-medium">Age</FormLabel>
                              <div className="flex items-center">
                                <Input
                                  type="number"
                                  className="w-16 h-8 text-right"
                                  value={field.value}
                                  onChange={(e) => field.onChange(parseInt(e.target.value) || 25)}
                                />
                                <span className="ml-2 text-sm">Years</span>
                              </div>
                            </div>
                            <FormControl>
                              <Slider
                                value={[field.value]}
                                min={18}
                                max={80}
                                step={1}
                                onValueChange={(value) => field.onChange(value[0])}
                                className="mt-2"
                              />
                            </FormControl>
                            <div className="flex justify-between mt-1">
                              <span className="text-xs text-gray-500">18 years</span>
                              <span className="text-xs text-gray-500">80 years</span>
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="regime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-base font-medium">Tax Regime</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value}
                                className="flex gap-4 mt-2"
                              >
                                <div className={`flex-1 border rounded-md p-3 cursor-pointer ${field.value === 'old' ? 'bg-purple-50 border-purple-200' : 'hover:bg-gray-50'}`}>
                                  <RadioGroupItem value="old" id="old-regime" className="sr-only" />
                                  <label htmlFor="old-regime" className="cursor-pointer flex flex-col items-center">
                                    <span className="font-medium">Old Regime</span>
                                    <span className="text-sm text-gray-500 mt-1">With Deductions</span>
                                  </label>
                                </div>
                                <div className={`flex-1 border rounded-md p-3 cursor-pointer ${field.value === 'new' ? 'bg-purple-50 border-purple-200' : 'hover:bg-gray-50'}`}>
                                  <RadioGroupItem value="new" id="new-regime" className="sr-only" />
                                  <label htmlFor="new-regime" className="cursor-pointer flex flex-col items-center">
                                    <span className="font-medium">New Regime</span>
                                    <span className="text-sm text-gray-500 mt-1">Lower Tax Rates</span>
                                  </label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <div className="border-t pt-4 mt-4">
                        <h3 className="font-medium mb-4 flex items-center">
                          Tax Saving Investments
                          <Popover>
                            <PopoverTrigger>
                              <HelpCircle className="h-4 w-4 ml-1 text-gray-400" />
                            </PopoverTrigger>
                            <PopoverContent>
                              <p className="text-sm">
                                These deductions are applicable only in the old tax regime.
                              </p>
                            </PopoverContent>
                          </Popover>
                        </h3>

                        <FormField
                          control={form.control}
                          name="eightyC"
                          render={({ field }) => (
                            <FormItem className="mb-4">
                              <div className="flex justify-between">
                                <FormLabel className="text-sm">
                                  80C Investments
                                  <span className="block text-xs font-normal text-gray-500">
                                    PPF, ELSS, Life Insurance, etc.
                                  </span>
                                </FormLabel>
                                <div className="flex items-center">
                                  <span className="mr-2 text-sm">₹</span>
                                  <Input
                                    type="number"
                                    className="w-20 h-8 text-right text-sm"
                                    value={field.value}
                                    onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                  />
                                </div>
                              </div>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="eightyD"
                          render={({ field }) => (
                            <FormItem className="mb-4">
                              <div className="flex justify-between">
                                <FormLabel className="text-sm">
                                  80D Health Insurance
                                </FormLabel>
                                <div className="flex items-center">
                                  <span className="mr-2 text-sm">₹</span>
                                  <Input
                                    type="number"
                                    className="w-20 h-8 text-right text-sm"
                                    value={field.value}
                                    onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                  />
                                </div>
                              </div>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="homeLoanInterest"
                          render={({ field }) => (
                            <FormItem className="mb-4">
                              <div className="flex justify-between">
                                <FormLabel className="text-sm">
                                  Home Loan Interest
                                </FormLabel>
                                <div className="flex items-center">
                                  <span className="mr-2 text-sm">₹</span>
                                  <Input
                                    type="number"
                                    className="w-20 h-8 text-right text-sm"
                                    value={field.value}
                                    onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                  />
                                </div>
                              </div>
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="nps"
                          render={({ field }) => (
                            <FormItem>
                              <div className="flex justify-between">
                                <FormLabel className="text-sm">
                                  NPS Investment (80CCD)
                                </FormLabel>
                                <div className="flex items-center">
                                  <span className="mr-2 text-sm">₹</span>
                                  <Input
                                    type="number"
                                    className="w-20 h-8 text-right text-sm"
                                    value={field.value}
                                    onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                                  />
                                </div>
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </Form>
                </CardContent>
              </Card>

              <div className="md:col-span-7">
                <Card className="shadow-md h-full border border-purple-100">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-6">Tax Calculation Results</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Old Regime Tax</p>
                        <p className="text-lg font-bold mt-1">{formatCurrency(taxAmount.old)}</p>
                        <p className="text-xs text-gray-500">Effective tax rate: {effectiveTaxRate.old}%</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">New Regime Tax</p>
                        <p className="text-lg font-bold mt-1">{formatCurrency(taxAmount.new)}</p>
                        <p className="text-xs text-gray-500">Effective tax rate: {effectiveTaxRate.new}%</p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg mb-6">
                      <p className="text-sm text-gray-600">
                        Recommended Regime: <span className="font-semibold">{recommendedRegime === 'old' ? 'Old Regime' : 'New Regime'}</span>
                      </p>
                      <p className="text-lg font-bold mt-1 text-green-600">
                        You save {formatCurrency(savings)} with {recommendedRegime === 'old' ? 'Old' : 'New'} Regime
                      </p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-sm font-medium mb-3">Tax Amount Comparison</h3>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={comparisonData}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis 
                              yAxisId="left" 
                              orientation="left" 
                              stroke="#9b87f5"
                              tickFormatter={(value) => value >= 100000 ? `${(value / 100000).toFixed(1)}L` : `${value}`}
                            />
                            <YAxis 
                              yAxisId="right" 
                              orientation="right" 
                              stroke="#0FA0CE"
                              tickFormatter={(value) => `${value}%`}
                            />
                            <Tooltip 
                              formatter={(value, name) => {
                                if (name === "tax") return [formatCurrency(value as number), "Tax Amount"];
                                return [`${value}%`, "Effective Tax Rate"];
                              }}
                            />
                            <Legend />
                            <Bar yAxisId="left" dataKey="tax" name="Tax Amount" fill="#9b87f5" />
                            <Bar yAxisId="right" dataKey="effectiveRate" name="Effective Tax Rate %" fill="#0FA0CE" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-10 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-4">Tax Regimes in India</h3>
              <p className="text-gray-600 mb-4">
                India offers two tax regimes: the Old Tax Regime with higher tax rates but multiple deductions and exemptions, 
                and the New Tax Regime with lower tax rates but fewer deductions.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="font-medium mb-2">Old Regime Benefits</h4>
                  <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                    <li>Various deductions under Sections 80C, 80D, etc.</li>
                    <li>Home loan interest deduction up to ₹2 lakh</li>
                    <li>HRA exemption for rent payments</li>
                    <li>Leave Travel Allowance (LTA) exemption</li>
                    <li>Standard deduction of ₹50,000</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">New Regime Benefits</h4>
                  <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
                    <li>Lower tax rates across income slabs</li>
                    <li>Simplified tax structure</li>
                    <li>Standard deduction of ₹50,000</li>
                    <li>No need to maintain investment proofs</li>
                    <li>Better for those with fewer investments or deductions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TaxSaving;
