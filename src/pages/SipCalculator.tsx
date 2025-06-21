
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calculator, ArrowRight, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Progress } from "@/components/ui/progress";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface FormValues {
  monthlyInvestment: number;
  expectedReturn: number;
  timePeriod: number;
}

const SipCalculator = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      monthlyInvestment: 10000,
      expectedReturn: 12,
      timePeriod: 10,
    },
  });

  const [investedAmount, setInvestedAmount] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  const [yearlyData, setYearlyData] = useState<any[]>([]);

  const calculateSIP = (monthlyInvestment: number, expectedReturn: number, timePeriod: number) => {
    const monthlyRate = expectedReturn / 12 / 100;
    const months = timePeriod * 12;
    const invested = monthlyInvestment * months;
    
    // Formula: P × ({[1 + i]^n - 1} / i) × (1 + i)
    const futureValue = monthlyInvestment * 
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * 
      (1 + monthlyRate);
    
    const returns = futureValue - invested;
    
    return {
      invested: Math.round(invested),
      returns: Math.round(returns),
      total: Math.round(futureValue)
    };
  };

  const generateYearlyData = (monthlyInvestment: number, expectedReturn: number, timePeriod: number) => {
    const data = [];
    const monthlyRate = expectedReturn / 12 / 100;
    
    for (let year = 1; year <= Math.min(timePeriod, 10); year++) {
      const months = year * 12;
      const invested = monthlyInvestment * months;
      
      const futureValue = monthlyInvestment * 
        ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * 
        (1 + monthlyRate);
      
      const returns = futureValue - invested;
      
      data.push({
        year: year,
        invested: Math.round(invested),
        returns: Math.round(returns),
        total: Math.round(futureValue)
      });
    }
    
    return data;
  };

  useEffect(() => {
    const { monthlyInvestment, expectedReturn, timePeriod } = form.getValues();
    const result = calculateSIP(monthlyInvestment, expectedReturn, timePeriod);
    setInvestedAmount(result.invested);
    setEstimatedReturns(result.returns);
    setTotalValue(result.total);
    setYearlyData(generateYearlyData(monthlyInvestment, expectedReturn, timePeriod));
  }, [form.watch("monthlyInvestment"), form.watch("expectedReturn"), form.watch("timePeriod")]);

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
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">SIP Calculator</h1>
              <p className="text-gray-600 text-center max-w-2xl mx-auto">
                Calculate your estimated returns on your Systematic Investment Plan and plan your financial goals better.
              </p>
            </div>
            
            <div className="grid md:grid-cols-12 gap-8">
              <Card className="md:col-span-5 shadow-md border border-purple-100">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-6">Calculate SIP Returns</h2>
                  
                  <Form {...form}>
                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="monthlyInvestment"
                        render={({ field }) => (
                          <FormItem>
                            <div className="flex justify-between">
                              <FormLabel className="text-base font-medium">Monthly Investment</FormLabel>
                              <div className="flex items-center">
                                <span className="mr-2 text-sm">₹</span>
                                <Input
                                  type="number"
                                  className="w-24 h-8 text-right"
                                  value={field.value}
                                  onChange={(e) => field.onChange(parseInt(e.target.value) || 1000)}
                                />
                              </div>
                            </div>
                            <FormControl>
                              <Slider
                                value={[field.value]}
                                min={500}
                                max={100000}
                                step={500}
                                onValueChange={(value) => field.onChange(value[0])}
                                className="mt-2"
                              />
                            </FormControl>
                            <div className="flex justify-between mt-1">
                              <span className="text-xs text-gray-500">₹500</span>
                              <span className="text-xs text-gray-500">₹1,00,000</span>
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="expectedReturn"
                        render={({ field }) => (
                          <FormItem>
                            <div className="flex justify-between">
                              <FormLabel className="text-base font-medium flex items-center">
                                Expected Return Rate (p.a)
                                <Popover>
                                  <PopoverTrigger>
                                    <HelpCircle className="h-4 w-4 ml-1 text-gray-400" />
                                  </PopoverTrigger>
                                  <PopoverContent>
                                    <p className="text-sm">
                                      Historical market returns have been between 10-12% annually on average for diversified equity.
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
                                min={1}
                                max={30}
                                step={0.1}
                                onValueChange={(value) => field.onChange(value[0])}
                                className="mt-2"
                              />
                            </FormControl>
                            <div className="flex justify-between mt-1">
                              <span className="text-xs text-gray-500">1%</span>
                              <span className="text-xs text-gray-500">30%</span>
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="timePeriod"
                        render={({ field }) => (
                          <FormItem>
                            <div className="flex justify-between">
                              <FormLabel className="text-base font-medium">Time Period</FormLabel>
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
                                max={40}
                                step={1}
                                onValueChange={(value) => field.onChange(value[0])}
                                className="mt-2"
                              />
                            </FormControl>
                            <div className="flex justify-between mt-1">
                              <span className="text-xs text-gray-500">1 Year</span>
                              <span className="text-xs text-gray-500">40 Years</span>
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  </Form>
                </CardContent>
              </Card>

              <div className="md:col-span-7">
                <Card className="shadow-md h-full border border-purple-100">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-6">Investment Overview</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Invested Amount</p>
                        <p className="text-lg font-bold mt-1">{formatCurrency(investedAmount)}</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Estimated Returns</p>
                        <p className="text-lg font-bold mt-1 text-fintech-blue">{formatCurrency(estimatedReturns)}</p>
                      </div>
                      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Total Value</p>
                        <p className="text-lg font-bold mt-1">{formatCurrency(totalValue)}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Investment Distribution</span>
                        <span>{Math.round(investedAmount / totalValue * 100)}% - {Math.round(estimatedReturns / totalValue * 100)}%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-fintech-purple" 
                          style={{ width: `${(investedAmount / totalValue) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs mt-1">
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-fintech-purple inline-block rounded-full mr-1"></span>
                          Investment
                        </span>
                        <span className="flex items-center">
                          <span className="w-2 h-2 bg-fintech-blue inline-block rounded-full mr-1"></span>
                          Return
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Year-wise Growth</h3>
                      <div className="space-y-3 max-h-64 overflow-y-auto">
                        {yearlyData.map((data, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-sm">
                              <span className="font-medium">Year {data.year}</span>
                            </div>
                            <div className="text-right">
                              <div className="text-xs text-gray-600">Total: {formatCurrency(data.total)}</div>
                              <div className="text-xs text-gray-500">
                                Invested: {formatCurrency(data.invested)} | Returns: {formatCurrency(data.returns)}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-10 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-4">What is Systematic Investment Plan (SIP)?</h3>
              <p className="text-gray-600 mb-4">
                A Systematic Investment Plan (SIP) is an investment vehicle offered by mutual funds, where you can invest a fixed amount regularly. 
                SIP allows you to invest a fixed amount at regular intervals (weekly, monthly, quarterly) rather than a lump sum amount.
              </p>
              <p className="text-gray-600">
                SIP is designed for disciplined investment and works well for those who don't have a large amount to invest at once. 
                Over time, the power of compounding can potentially grow your wealth significantly.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SipCalculator;
