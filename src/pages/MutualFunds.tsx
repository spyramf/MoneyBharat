import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, CircleArrowDown, CircleArrowUp, FileChartLine, FileChartPie, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MutualFunds = () => {
  const [investmentAmount, setInvestmentAmount] = useState(5000);
  const [investmentPeriod, setInvestmentPeriod] = useState(5);
  const [selectedTab, setSelectedTab] = useState("sip");
  const [animate, setAnimate] = useState(false);

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
    { 
      name: "Equity Funds", 
      returns: "12-15%", 
      risk: "High", 
      icon: <CircleArrowUp className="h-6 w-6 text-green-500" />,
      description: "Higher potential returns with market-linked investments in company stocks.",
      color: "from-green-50 to-green-100",
      iconBg: "bg-green-100",
      iconColor: "text-fintech-green" 
    },
    { 
      name: "Debt Funds", 
      returns: "7-9%", 
      risk: "Low", 
      icon: <CircleArrowDown className="h-6 w-6 text-blue-500" />,
      description: "Stable returns with lower risk investments in fixed income securities.",
      color: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-100",
      iconColor: "text-fintech-blue" 
    },
    { 
      name: "Hybrid Funds", 
      returns: "9-12%", 
      risk: "Medium", 
      icon: <FileChartLine className="h-6 w-6 text-purple-500" />,
      description: "Balanced approach with a mix of equity and debt investments.",
      color: "from-purple-50 to-purple-100",
      iconBg: "bg-purple-100",
      iconColor: "text-fintech-purple" 
    },
    { 
      name: "Index Funds", 
      returns: "10-12%", 
      risk: "Medium", 
      icon: <FileChartPie className="h-6 w-6 text-orange-500" />,
      description: "Passive investments that track market indices with lower expenses.",
      color: "from-orange-50 to-orange-100",
      iconBg: "bg-orange-100",
      iconColor: "text-fintech-orange" 
    },
  ];
  
  const topPerformingFunds = [
    { name: "HDFC Flexicap Fund", category: "Equity", returns: "15.8%", aum: "₹26,700 Cr", risk: "High" },
    { name: "SBI Small Cap Fund", category: "Equity", returns: "17.2%", aum: "₹18,500 Cr", risk: "Very High" },
    { name: "Axis Bluechip Fund", category: "Equity", returns: "14.3%", aum: "₹31,200 Cr", risk: "Moderate" },
    { name: "ICICI Prudential Balanced Advantage", category: "Hybrid", returns: "11.7%", aum: "₹42,800 Cr", risk: "Moderate" },
    { name: "Nippon India Low Duration", category: "Debt", returns: "7.8%", aum: "₹15,600 Cr", risk: "Low" },
  ];

  // Function to determine the risk badge color
  const getRiskBadgeColor = (risk: string) => {
    switch (risk) {
      case "Very High":
        return "bg-red-100 text-red-800";
      case "High":
        return "bg-orange-100 text-orange-800";
      case "Moderate":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Function to determine the returns text color
  const getReturnsColor = (returns: string) => {
    const numReturns = parseFloat(returns);
    if (numReturns >= 15) return "text-green-600";
    if (numReturns >= 10) return "text-emerald-600";
    if (numReturns >= 8) return "text-blue-600";
    return "text-gray-600";
  };

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 1000);
    return () => clearTimeout(timer);
  }, [investmentAmount, investmentPeriod, selectedTab]);

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

      {/* Calculator Section - Enhanced UI */}
      <section className="py-16 px-4 md:px-8 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/50 opacity-70"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-fintech-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-fintech-green/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-fintech-purple to-fintech-blue">Investment Calculator</h2>
              <p className="text-gray-600">Estimate your potential returns with our investment calculator</p>
            </div>
            
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
              <CardHeader className="pb-0">
                <Tabs defaultValue="sip" className="w-full" onValueChange={setSelectedTab}>
                  <TabsList className="w-full mb-6 bg-gray-100/50 p-1">
                    <TabsTrigger value="sip" className="flex-1 data-[state=active]:bg-white data-[state=active]:text-fintech-purple data-[state=active]:shadow-md transition-all duration-300">SIP Investment</TabsTrigger>
                    <TabsTrigger value="lumpsum" className="flex-1 data-[state=active]:bg-white data-[state=active]:text-fintech-purple data-[state=active]:shadow-md transition-all duration-300">Lumpsum Investment</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent className="space-y-8 pt-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <Label htmlFor="investment-amount" className="text-sm font-medium">
                      {selectedTab === "sip" ? "Monthly Investment Amount" : "Investment Amount"}
                    </Label>
                    <div className="bg-gray-100 px-4 py-2 rounded-full font-semibold text-fintech-purple">
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
                    className="py-6"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span className="font-medium">₹1,000</span>
                    <span className="font-medium">₹1,00,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <Label htmlFor="investment-period" className="text-sm font-medium">Investment Period (Years)</Label>
                    <div className="bg-gray-100 px-4 py-2 rounded-full font-semibold text-fintech-purple">
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
                    className="py-6"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span className="font-medium">1 year</span>
                    <span className="font-medium">30 years</span>
                  </div>
                </div>

                <Card className={`bg-gradient-to-br from-purple-50 to-blue-50 border-0 shadow-inner transition-all ${animate ? 'scale-105' : 'scale-100'}`}>
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row justify-between gap-8">
                      <div className="text-center md:text-left">
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Invested Amount</p>
                        <p className={`text-2xl font-bold ${animate ? 'animate-fade-in' : ''}`}>
                          ₹{(selectedTab === "sip" ? investmentAmount * 12 * investmentPeriod : investmentAmount).toLocaleString()}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Estimated Returns</p>
                        <p className={`text-2xl font-bold text-fintech-purple ${animate ? 'animate-fade-in' : ''}`}>
                          ₹{(calculatedReturns() - (selectedTab === "sip" ? investmentAmount * 12 * investmentPeriod : investmentAmount)).toLocaleString()}
                        </p>
                      </div>
                      <div className="text-center md:text-right">
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Total Value</p>
                        <p className={`text-3xl font-bold gradient-text ${animate ? 'animate-fade-in' : ''}`}>
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
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Explore Fund Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover the right type of mutual fund for your investment goals and risk appetite</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {fundCategories.map((category, index) => (
              <div 
                key={index}
                className={`rounded-xl overflow-hidden bg-gradient-to-br ${category.color} border border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-6">
                  <div className={`w-16 h-16 rounded-full ${category.iconBg} flex items-center justify-center mb-5 mx-auto`}>
                    <div className={`${category.iconColor}`}>
                      {category.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-center mb-4">{category.name}</h3>
                  
                  <div className="space-y-3 mb-5">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Expected Returns</span>
                      <span className="font-semibold">{category.returns}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Risk Level</span>
                      <span className="font-semibold">{category.risk}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-5 text-center">
                    {category.description}
                  </p>
                  
                  <div className="text-center">
                    <Button variant="outline" className="group hover:bg-white/50 transition-all">
                      Explore Funds
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
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
          
          <Card className="shadow-lg border-0 overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <TableRow>
                    <TableHead className="text-sm font-semibold">Fund Name</TableHead>
                    <TableHead className="text-sm font-semibold">Category</TableHead>
                    <TableHead className="text-sm font-semibold">1Y Returns</TableHead>
                    <TableHead className="text-sm font-semibold">AUM</TableHead>
                    <TableHead className="text-sm font-semibold">Risk</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topPerformingFunds.map((fund, index) => (
                    <TableRow 
                      key={index} 
                      className="hover:bg-gray-50 transition-colors cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <TableCell className="font-medium py-4">
                        <div className="flex items-center">
                          <div className={`w-2 h-12 rounded-l-md ${fund.category === "Equity" ? "bg-fintech-green" : fund.category === "Hybrid" ? "bg-fintech-purple" : "bg-fintech-blue"} mr-3`}></div>
                          <div>
                            {fund.name}
                            <div className="text-xs text-gray-500 mt-1">Top performer in its category</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`px-3 py-1 rounded-full text-xs ${fund.category === "Equity" ? "bg-green-50 text-green-700" : fund.category === "Hybrid" ? "bg-purple-50 text-purple-700" : "bg-blue-50 text-blue-700"}`}>
                          {fund.category}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={`font-semibold text-lg ${getReturnsColor(fund.returns)}`}>
                          {fund.returns}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <span className="font-medium">{fund.aum}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className={`px-3 py-1 rounded-full text-xs ${getRiskBadgeColor(fund.risk)}`}>
                          {fund.risk}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
          
          <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: '500ms' }}>
            <Button className="bg-gradient-to-r from-fintech-purple to-fintech-blue hover:opacity-90 transition-all transform hover:scale-105">
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
