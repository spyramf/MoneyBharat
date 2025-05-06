
import { useState } from "react";
import { ArrowRight, ChevronDown, CircleArrowDown, CircleArrowUp, FileChartLine, FileChartPie, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MutualFunds = () => {
  const [investmentAmount, setInvestmentAmount] = useState(5000);
  const [investmentPeriod, setInvestmentPeriod] = useState(5);
  const [selectedTab, setSelectedTab] = useState("sip");

  const handleSliderChange = (value: number[]) => {
    setInvestmentAmount(value[0]);
  };

  const handlePeriodChange = (value: number[]) => {
    setInvestmentPeriod(value[0]);
  };

  const calculatedReturns = () => {
    // Using a simple compound interest formula for demonstration
    // r = 12% annual return for example
    const r = 0.12;
    const n = 12; // monthly
    const t = investmentPeriod;
    
    if (selectedTab === "sip") {
      // SIP calculation formula: P × ({[1 + r]^n - 1} ÷ r) × (1 + r)
      const monthlyAmount = investmentAmount;
      const months = t * 12;
      const monthlyRate = r / 12;
      return Math.round(monthlyAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    } else {
      // Lumpsum calculation formula: P(1+r)^t
      return Math.round(investmentAmount * Math.pow(1 + r, t));
    }
  };

  const fundCategories = [
    { name: "Equity Funds", returns: "12-15%", risk: "High", icon: <CircleArrowUp className="text-green-500" /> },
    { name: "Debt Funds", returns: "7-9%", risk: "Low", icon: <CircleArrowDown className="text-blue-500" /> },
    { name: "Hybrid Funds", returns: "9-12%", risk: "Medium", icon: <FileChartLine className="text-purple-500" /> },
    { name: "Index Funds", returns: "10-12%", risk: "Medium", icon: <FileChartPie className="text-orange-500" /> },
  ];
  
  const topPerformingFunds = [
    { name: "HDFC Flexicap Fund", category: "Equity", returns: "15.8%", aum: "₹26,700 Cr", risk: "High" },
    { name: "SBI Small Cap Fund", category: "Equity", returns: "17.2%", aum: "₹18,500 Cr", risk: "Very High" },
    { name: "Axis Bluechip Fund", category: "Equity", returns: "14.3%", aum: "₹31,200 Cr", risk: "Moderate" },
    { name: "ICICI Prudential Balanced Advantage", category: "Hybrid", returns: "11.7%", aum: "₹42,800 Cr", risk: "Moderate" },
    { name: "Nippon India Low Duration", category: "Debt", returns: "7.8%", aum: "₹15,600 Cr", risk: "Low" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 md:px-8 bg-gradient-to-br from-white via-purple-50 to-blue-50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Simplify</span> Your Mutual Fund Investments
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Invest smarter with Money Bharat's curated mutual funds selection, zero commission, and expert guidance.
            </p>
            <Button className="bg-gradient-to-r from-fintech-purple to-fintech-blue hover:opacity-90 text-lg px-8 py-6">
              Start Investing Now
            </Button>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Investment Calculator</h2>
              <p className="text-gray-600">Estimate your potential returns with our investment calculator</p>
            </div>
            
            <Card className="shadow-lg border-0">
              <CardHeader>
                <Tabs defaultValue="sip" className="w-full" onValueChange={setSelectedTab}>
                  <TabsList className="w-full mb-6">
                    <TabsTrigger value="sip" className="flex-1">SIP Investment</TabsTrigger>
                    <TabsTrigger value="lumpsum" className="flex-1">Lumpsum Investment</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <Label htmlFor="investment-amount">
                      {selectedTab === "sip" ? "Monthly Investment Amount" : "Investment Amount"}
                    </Label>
                    <div className="bg-gray-100 px-3 py-1 rounded-md">
                      ₹ {investmentAmount.toLocaleString()}
                    </div>
                  </div>
                  <Slider 
                    id="investment-amount"
                    defaultValue={[5000]} 
                    max={100000} 
                    min={1000} 
                    step={1000} 
                    value={[investmentAmount]}
                    onValueChange={handleSliderChange}
                    className="py-4"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>₹1,000</span>
                    <span>₹1,00,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <Label htmlFor="investment-period">Investment Period (Years)</Label>
                    <div className="bg-gray-100 px-3 py-1 rounded-md">
                      {investmentPeriod} years
                    </div>
                  </div>
                  <Slider 
                    id="investment-period"
                    defaultValue={[5]} 
                    max={30} 
                    min={1} 
                    step={1} 
                    value={[investmentPeriod]}
                    onValueChange={handlePeriodChange}
                    className="py-4"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>1 year</span>
                    <span>30 years</span>
                  </div>
                </div>

                <Card className="bg-gradient-to-br from-purple-50 to-blue-50">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-8">
                      <div>
                        <p className="text-gray-600 mb-1">Invested Amount</p>
                        <p className="text-2xl font-bold">
                          ₹{(selectedTab === "sip" ? investmentAmount * 12 * investmentPeriod : investmentAmount).toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-1">Estimated Returns</p>
                        <p className="text-2xl font-bold text-fintech-purple">
                          ₹{(calculatedReturns() - (selectedTab === "sip" ? investmentAmount * 12 * investmentPeriod : investmentAmount)).toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-1">Total Value</p>
                        <p className="text-3xl font-bold gradient-text">
                          ₹{calculatedReturns().toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fund Categories Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Fund Categories</h2>
            <p className="text-gray-600">Discover the right type of mutual fund for your investment goals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fundCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow glass-card">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <div className="space-y-2 w-full">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Expected Returns:</span>
                      <span className="font-medium">{category.returns}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Risk Level:</span>
                      <span className="font-medium">{category.risk}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-4 w-full group">
                    Explore Funds
                    <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Top Performing Funds */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Top Performing Funds</h2>
            <p className="text-gray-600">Our selection of mutual funds with consistent performance</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fund Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">1Y Returns</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AUM</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {topPerformingFunds.map((fund, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium">{fund.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{fund.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-green-600 font-medium">{fund.returns}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{fund.aum}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{fund.risk}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Button variant="outline" size="sm" className="group">
                        Invest <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="text-center mt-8">
            <Button className="bg-gradient-to-r from-fintech-purple to-fintech-blue hover:opacity-90">
              View All Mutual Funds
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Get answers to common questions about mutual fund investments</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What is a Mutual Fund?",
                answer: "A mutual fund is an investment vehicle that pools money from multiple investors to purchase securities like stocks, bonds, and other assets. Professional fund managers allocate these assets to generate capital gains or income for investors."
              },
              {
                question: "How do SIP investments work?",
                answer: "Systematic Investment Plans (SIPs) allow investors to invest a fixed amount in mutual funds at regular intervals (typically monthly). This approach helps in rupee-cost averaging and building wealth over time through disciplined investing."
              },
              {
                question: "Are mutual fund investments safe?",
                answer: "Mutual funds come with varying degrees of risk depending on their type. While they're generally considered safer than direct stock investments due to diversification, they're not completely risk-free. Equity funds carry higher risk but potentially higher returns, while debt funds are relatively safer."
              },
              {
                question: "What are the tax implications of mutual fund investments?",
                answer: "Equity mutual funds held for more than 1 year are subject to Long Term Capital Gains (LTCG) tax at 10% for gains exceeding ₹1 lakh. Equity funds held for less than 1 year attract Short Term Capital Gains (STCG) tax at 15%. For debt mutual funds, the LTCG tax rate is 20% with indexation benefits, while STCG is taxed as per the investor's income tax slab."
              },
              {
                question: "How to choose the right mutual fund?",
                answer: "Select mutual funds based on your financial goals, investment horizon, risk tolerance, fund performance history, expense ratio, fund manager experience, and fund house reputation. It's advisable to diversify your investments across different types of funds."
              }
            ].map((faq, index) => (
              <Card key={index} className="shadow-sm border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-2">
                    <Info className="h-5 w-5 text-fintech-purple mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-fintech-purple to-fintech-blue text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Investment Journey?</h2>
          <p className="text-xl mb-8 text-white/90">Create an account and start investing in just 5 minutes</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-fintech-purple hover:bg-white/90 text-lg px-8 py-6">
              Open Free Account
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MutualFunds;
