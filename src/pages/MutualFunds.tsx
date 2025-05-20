import { useState, useEffect } from "react";
import { ArrowRight, CircleArrowDown, CircleArrowUp, FileChartLine, FileChartPie, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
const MutualFunds = () => {
  const [investmentAmount, setInvestmentAmount] = useState(5000);
  const [investmentPeriod, setInvestmentPeriod] = useState(5);
  const [selectedTab, setSelectedTab] = useState("sip");
  const [animate, setAnimate] = useState(false);

  // Define the sipFeatures array
  const sipFeatures = [{
    title: "Zero Commission",
    description: "Invest in direct mutual funds with zero commission and maximize your returns.",
    icon: <div className="w-12 h-12 rounded-full bg-green-100 text-fintech-green flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <circle cx="12" cy="12" r="10" />
          <path d="m4.93 4.93 14.14 14.14" />
          <path d="M9.17 14.83 14.83 9.17" />
        </svg>
      </div>
  }, {
    title: "Quick Setup",
    description: "Start your SIP in minutes with our streamlined onboarding process.",
    icon: <div className="w-12 h-12 rounded-full bg-blue-100 text-fintech-blue flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <polyline points="13 17 18 12 13 7" />
          <polyline points="6 17 11 12 6 7" />
        </svg>
      </div>
  }, {
    title: "Flexible Options",
    description: "Choose from various SIP dates and customize your investment plan.",
    icon: <div className="w-12 h-12 rounded-full bg-purple-100 text-fintech-purple flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M21 7v6h-6" />
          <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
        </svg>
      </div>
  }, {
    title: "Easy Tracking",
    description: "Monitor your investments with real-time performance tracking and analytics.",
    icon: <div className="w-12 h-12 rounded-full bg-orange-100 text-fintech-orange flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      </div>
  }];

  // Define the dematSteps array
  const dematSteps = [{
    title: "Fill Basic Details",
    description: "Complete a simple form with your personal information and identity verification.",
    icon: <div className="w-16 h-16 rounded-full bg-blue-100 text-fintech-blue flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" x2="8" y1="13" y2="13" />
          <line x1="16" x2="8" y1="17" y2="17" />
          <line x1="10" x2="8" y1="9" y2="9" />
        </svg>
      </div>,
    number: 1
  }, {
    title: "Complete eKYC",
    description: "Verify your identity online using Aadhaar-based eKYC for a paperless process.",
    icon: <div className="w-16 h-16 rounded-full bg-green-100 text-fintech-green flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      </div>,
    number: 2
  }, {
    title: "Start Investing",
    description: "Begin your investment journey immediately after account activation.",
    icon: <div className="w-16 h-16 rounded-full bg-purple-100 text-fintech-purple flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
          <path d="m12 14 4-4" />
          <path d="M3.34 19a10 10 0 1 1 17.32 0" />
          <path d="M7 19h10" />
          <path d="M12 19v-9" />
        </svg>
      </div>,
    number: 3
  }];

  // Define the additionalFeatures array
  const additionalFeatures = [{
    title: "Tax Benefits",
    description: "Get up to ₹1.5 lakh tax exemption under Section 80C with ELSS mutual funds.",
    icon: <div className="w-12 h-12 rounded-full bg-green-100 text-fintech-green flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <rect width="20" height="14" x="2" y="3" rx="2" ry="2" />
          <line x1="12" x2="12" y1="9" y2="17" />
          <line x1="8" x2="8" y1="11" y2="15" />
          <line x1="16" x2="16" y1="11" y2="15" />
        </svg>
      </div>
  }, {
    title: "Portfolio Diversification",
    description: "Spread your investments across various assets to reduce risk and optimize returns.",
    icon: <div className="w-12 h-12 rounded-full bg-blue-100 text-fintech-blue flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <path d="M13 6h3a2 2 0 0 1 2 2v7" />
          <path d="M11 18H8a2 2 0 0 1-2-2V9" />
        </svg>
      </div>
  }, {
    title: "Goal-Based Investing",
    description: "Plan your investments based on your financial goals and timelines.",
    icon: <div className="w-12 h-12 rounded-full bg-purple-100 text-fintech-purple flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="m20 20-6-6" />
          <path d="M14 20h6v-6" />
          <path d="M4 4v6" />
          <path d="M4 10h6" />
          <path d="M14 4h-4v6" />
        </svg>
      </div>
  }, {
    title: "Expert Fund Managers",
    description: "Benefit from the expertise of professional fund managers who actively manage your investments.",
    icon: <div className="w-12 h-12 rounded-full bg-orange-100 text-fintech-orange flex items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </div>
  }];
  const handleSliderChange = (value: number[]) => {
    setInvestmentAmount(value[0]);
  };
  const handlePeriodChange = (value: number[]) => {
    setInvestmentPeriod(value[0]);
  };
  const calculatedReturns = () => {
    const r = 0.12;
    const t = investmentPeriod;
    if (selectedTab === "sip") {
      const monthlyAmount = investmentAmount;
      const months = t * 12;
      const monthlyRate = r / 12;
      return Math.round(monthlyAmount * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    } else {
      return Math.round(investmentAmount * Math.pow(1 + r, t));
    }
  };

  // Fund Categories Data
  const fundCategories = [{
    type: "Equity Funds",
    expectedReturns: "12-15%",
    riskLevel: "High",
    description: "Higher potential returns with market-linked investments in company stocks.",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    iconBg: "bg-green-100/70",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-green-600">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
  }, {
    type: "Debt Funds",
    expectedReturns: "7-9%",
    riskLevel: "Low",
    description: "Stable returns with lower risk investments in fixed income securities.",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    iconBg: "bg-blue-100/70",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-600">
          <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
          <circle cx="16.5" cy="7.5" r=".5" />
        </svg>
  }, {
    type: "Hybrid Funds",
    expectedReturns: "9-12%",
    riskLevel: "Medium",
    description: "Balanced approach with a mix of equity and debt investments.",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    iconBg: "bg-purple-100/70",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-purple-600">
          <path d="M20 7h-9" />
          <path d="M14 17H5" />
          <circle cx="17" cy="17" r="3" />
          <circle cx="7" cy="7" r="3" />
        </svg>
  }, {
    type: "Index Funds",
    expectedReturns: "10-12%",
    riskLevel: "Medium",
    description: "Passive investments that track market indices with lower expenses.",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    iconBg: "bg-orange-100/70",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-orange-600">
          <path d="M2 20h.01" />
          <path d="M7 20v-4" />
          <path d="M12 20v-8" />
          <path d="M17 20V8" />
          <path d="M22 4v16" />
        </svg>
  }];

  // Top Performing Funds Data
  const topPerformingFunds = [{
    name: "HDFC Flexicap Fund",
    performance: "Top performer in its category",
    category: "Equity",
    returns: "15.8%",
    aum: "₹26,700 Cr",
    risk: "High",
    colorClass: "bg-green-500"
  }, {
    name: "SBI Small Cap Fund",
    performance: "Top performer in its category",
    category: "Equity",
    returns: "17.2%",
    aum: "₹18,500 Cr",
    risk: "Very High",
    colorClass: "bg-red-500"
  }, {
    name: "Axis Bluechip Fund",
    performance: "Top performer in its category",
    category: "Equity",
    returns: "14.3%",
    aum: "₹31,200 Cr",
    risk: "Moderate",
    colorClass: "bg-yellow-500"
  }, {
    name: "ICICI Prudential Balanced Advantage",
    performance: "Top performer in its category",
    category: "Hybrid",
    returns: "11.7%",
    aum: "₹42,800 Cr",
    risk: "Moderate",
    colorClass: "bg-yellow-500"
  }, {
    name: "Nippon India Low Duration",
    performance: "Top performer in its category",
    category: "Debt",
    returns: "7.8%",
    aum: "₹15,600 Cr",
    risk: "Low",
    colorClass: "bg-green-300"
  }];
  const mutualFundBenefits = [{
    title: "Diversification of Investment",
    description: "Mutual funds spread your investment across various assets, reducing risk and enhancing potential returns through diversification.",
    icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-fintech-green">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <path d="M13 6h3a2 2 0 0 1 2 2v7" />
          <path d="M11 18H8a2 2 0 0 1-2-2V9" />
        </svg>
      </div>
  }, {
    title: "80C Benefits",
    description: "Certain mutual funds, like ELSS, offer tax benefits under Section 80C, helping you save on taxes while investing for future goals.",
    icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-fintech-blue">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M20 6v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z" />
          <path d="M2 8h2v12a2 2 0 0 0 2 2h12" />
          <path d="M12 10v6" />
          <path d="M16 12h-8" />
        </svg>
      </div>
  }, {
    title: "Highly Regulated",
    description: "Mutual funds are regulated by SEBI, ensuring transparency and protecting investor interests through stringent guidelines.",
    icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-fintech-purple">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <circle cx="12" cy="16" r="1" />
        </svg>
      </div>
  }, {
    title: "Lower Transaction Costs",
    description: "Investing in mutual funds typically incurs lower transaction costs compared to individual stock trading, making it cost-effective.",
    icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-fintech-orange">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <line x1="12" x2="12" y1="2" y2="22" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </div>
  }, {
    title: "Liquid Assets",
    description: "Mutual funds offer high liquidity, allowing you to easily redeem your investments when needed, providing financial flexibility.",
    icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 text-cyan-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M8 16a5 5 0 0 0 0 10h12" />
          <line x1="2" x2="22" y1="20" y2="20" />
          <line x1="2" x2="7" y1="4" y2="4" />
          <line x1="2" x2="4" y1="8" y2="8" />
          <line x1="2" x2="10" y1="12" y2="12" />
          <line x1="17" x2="22" y1="4" y2="4" />
          <line x1="20" x2="22" y1="8" y2="8" />
          <line x1="14" x2="22" y1="12" y2="12" />
        </svg>
      </div>
  }, {
    title: "Invest in Smaller Amounts",
    description: "You can start investing in mutual funds with small amounts, making them accessible and ideal for beginners and seasoned investors alike.",
    icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M2 20h.01" />
          <path d="M7 20v-4" />
          <path d="M12 20v-8" />
          <path d="M17 20V8" />
          <path d="M22 4v16" />
        </svg>
      </div>
  }];
  const sipAdvantages = [{
    title: "Investment Discipline",
    description: "SIP encourages regular investing, fostering financial discipline. It helps you stay committed to your investment goals over the long term.",
    icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-fintech-green">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
          <path d="m9 16 2 2 4-4" />
        </svg>
      </div>
  }, {
    title: "Power of Compounding",
    description: "By investing consistently, you benefit from the power of compounding, where your returns generate further earnings, maximizing your wealth over time.",
    icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-fintech-purple">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M12 17V3" />
          <path d="m6 11 6 6 6-6" />
          <path d="M19 21H5" />
        </svg>
      </div>
  }, {
    title: "You Can Start Small",
    description: "You can start investing with a minimal amount such as Rs. 500, making SIPs accessible for everyone. This flexibility allows you to grow your investment gradually.",
    icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-fintech-blue">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M2 20h.01" />
          <path d="M7 20v-4" />
          <path d="M12 20v-8" />
          <path d="M17 20V8" />
          <path d="M22 4v16" />
        </svg>
      </div>
  }, {
    title: "Convenient - At Your Fingertips",
    description: "SIPs offer convenience, allowing you to invest effortlessly through online platforms, ensuring your investments are just a click away.",
    icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-fintech-orange">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M11 12H3" />
          <path d="M16 6H3" />
          <path d="M16 18H3" />
          <path d="M19 10v8" />
          <path d="M22 2 10 14" />
        </svg>
      </div>
  }, {
    title: "Professional Fund Management",
    description: "Your SIP mutual funds are managed by professional fund managers, ensuring that your portfolio benefits from expert insights and strategies.",
    icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 text-cyan-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </div>
  }, {
    title: "Can be Automated",
    description: "SIPs can be easily automated via AutoPay on Dhan, setting up hassle-free monthly investments. This ensures consistency without the need for constant manual input.",
    icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M17 6H8a5 5 0 0 0 0 10h9" />
          <path d="m19 9-3-3 3-3" />
          <path d="m19 15-3 3 3 3" />
        </svg>
      </div>
  }];
  const choosingMutualFundsTips = [{
    title: "Fund Performance",
    description: "Evaluate the fund's historical performance and its Assets Under Management (AUM) to ensure stability and growth potential.",
    icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-fintech-green">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      </div>
  }, {
    title: "AMC Track Record",
    description: "Consider the track record of the Asset Management Company (AMC). A reputable AMC with a strong history can indicate reliability and effective fund management.",
    icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-fintech-orange">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      </div>
  }, {
    title: "Fund Managers",
    description: "Look at the experience and expertise of the fund managers. Skilled fund managers can make informed decisions that positively impact the fund's performance.",
    icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-fintech-blue">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      </div>
  }, {
    title: "Index Benchmark",
    description: "Compare the fund's returns against its benchmark index. Consistent outperformance relative to the benchmark suggests a well-managed fund.",
    icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-fintech-purple">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M10 2v7.31" />
          <path d="M14 9.3V4" />
          <path d="M18 6.3v-.8" />
          <path d="M6 12.3V4" />
          <path d="M2 17h20" />
          <path d="m22 13-3 3-3-3" />
          <path d="M18 9v7" />
          <path d="M6 12v5" />
          <path d="m2 13 3-3 3 3" />
          <path d="M10 9v9" />
          <path d="M14 13v5" />
        </svg>
      </div>
  }];
  const mutualFundTerms = [{
    title: "SIP",
    description: "A Systematic Investment Plan (SIP) allows you to invest a fixed amount regularly in a mutual fund, promoting disciplined saving and wealth accumulation over time.",
    icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-fintech-green">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
          <line x1="8" x2="16" y1="14" y2="14" />
          <line x1="8" x2="16" y1="18" y2="18" />
        </svg>
      </div>
  }, {
    title: "STP",
    description: "A Systematic Transfer Plan (STP) lets you transfer a fixed amount from one mutual fund to another, helping in portfolio rebalancing and managing risk.",
    icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-fintech-blue">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M17 3v10" />
          <path d="m12 8 5-5 5 5" />
          <path d="M7 21V11" />
          <path d="m2 16 5 5 5-5" />
        </svg>
      </div>
  }, {
    title: "SWP",
    description: "A Systematic Withdrawal Plan (SWP) enables you to withdraw a fixed sum regularly from your mutual fund, providing steady income while maintaining your investment.",
    icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-fintech-purple">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M12 3v12" />
          <path d="m8 11 4 4 4-4" />
          <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
        </svg>
      </div>
  }, {
    title: "AUM",
    description: "Assets Under Management (AUM) refers to the total market value of all assets managed by a mutual fund, indicating the fund's size and investor trust.",
    icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="12" x2="12" y1="9" y2="17" />
          <line x1="8" x2="8" y1="11" y2="15" />
          <line x1="16" x2="16" y1="11" y2="15" />
        </svg>
      </div>
  }, {
    title: "NAV",
    description: "Net Asset Value (NAV) represents the per-unit value of a mutual fund, calculated by dividing the total assets minus liabilities by the number of outstanding units.",
    icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M2 20h.01" />
          <path d="M7 20v-4" />
          <path d="M12 20v-8" />
          <path d="M17 20V8" />
          <path d="M22 4v16" />
        </svg>
      </div>
  }, {
    title: "Expense Ratio",
    description: "The expense ratio is the annual fee expressed as a percentage, covering fund management costs. A lower ratio typically indicates higher net returns for investors.",
    icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M2 20h.01" />
          <path d="M7 20v-4" />
          <path d="M12 20v-8" />
          <path d="M17 20V8" />
          <path d="M22 4v16" />
        </svg>
      </div>
  }, {
    title: "Entry Load",
    description: "Entry load is a fee charged when investing in a mutual fund. Though many funds have eliminated it, understanding any applicable charges helps maximize your investment.",
    icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <line x1="12" x2="12" y1="2" y2="22" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </div>
  }, {
    title: "Exit Load",
    description: "Exit load is a fee incurred when redeeming mutual fund units before a certain period. It serves as a penalty for early withdrawal, encouraging long-term investment.",
    icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 text-pink-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M12 3v12" />
          <path d="m8 11 4 4 4-4" />
          <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
        </svg>
      </div>
  }];

  // New FAQ data for the accordion
  const faqItems = [{
    question: "What is a Mutual Fund?",
    answer: "A mutual fund is an investment vehicle that pools money from multiple investors to purchase securities like stocks, bonds, and other assets. Professional fund managers allocate these assets to generate capital gains or income for investors."
  }, {
    question: "How do SIP investments work?",
    answer: "Systematic Investment Plans (SIPs) allow investors to invest a fixed amount in mutual funds at regular intervals (typically monthly). This approach helps in rupee-cost averaging and building wealth over time through disciplined investing."
  }, {
    question: "Are mutual fund investments safe?",
    answer: "Mutual funds come with varying degrees of risk depending on their type. While they're generally considered safer than direct stock investments due to diversification, they're not completely risk-free. Equity funds carry higher risk but potentially higher returns, while debt funds are relatively safer."
  }, {
    question: "What are the tax implications of mutual fund investments?",
    answer: "Tax implications vary based on fund type and holding period. Equity funds held over 1 year have long-term capital gains taxed at 10% (above ₹1 lakh), while debt funds' long-term gains (held over 3 years) are taxed at 20% with indexation. Short-term gains are added to your income and taxed as per your slab rate."
  }];
  return <div className="min-h-screen flex flex-col">
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
            <Button className="bg-gradient-to-r from-fintech-green to-fintech-green hover:opacity-90 text-lg px-8 py-6">
              Start Investing Now
            </Button>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Start SIP with Just ₹500 */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-white to-blue-50">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gray-800">Start </span>
                <span className="text-fintech-green">SIP</span>
                <span className="text-gray-800"> with Just </span>
                <span className="text-fintech-orange">₹100</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Invest in Mutual Funds effortlessly with incredible features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sipFeatures.map((feature, index) => <div key={index} style={{
              animationDelay: `${index * 100}ms`
            }} className="bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg hover:border-fintech-purple/30 transition-all duration-300 animate-fade-in py-[40px] px-[10px]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 ml-16 mx-[20px]">{feature.description}</p>
                </div>)}
            </div>

            <div className="text-center mt-10">
              <Button className="bg-gradient-to-r from-fintech-green to-fintech-green text-white hover:opacity-90 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(155,135,245,0.3)]">
                Start Your SIP Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Open Demat Account in 3 Steps */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gray-800">Open Demat Account in </span>
                <span className="text-fintech-green">3 Steps</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Start your investment journey with a quick and easy account setup process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {dematSteps.map((step, index) => <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden animate-fade-in" style={{
              animationDelay: `${index * 200}ms`
            }}>
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      {step.icon}
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-fintech-green to-fintech-blue rounded-full flex items-center justify-center text-white font-bold text-lg animate-enhanced-glow">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>)}
            </div>

            <div className="text-center mt-10">
              <Button className="bg-gradient-to-r from-fintech-green to-fintech-green hover:opacity-90 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(155,135,245,0.3)]">
                Start Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Aaj Ka Investment, Kal Ka Benefit */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-white to-purple-50/30">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-gray-800">Aaj Ka </span>
                <span className="text-fintech-green">Investment</span>
                <span className="text-gray-800">, Kal Ka </span>
                <span className="text-fintech-green">Benefit</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Invest in Mutual Funds to build a financially secure future.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalFeatures.map((feature, index) => <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg hover:border-fintech-purple/30 transition-all duration-300 animate-fade-in" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="relative">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Original Feature Section - Light Theme with Glowing Borders */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-800">Mutual Fund </span>
              <span className="text-fintech-green">Benefits</span>
            </h2>
            <p className="text-lg text-gray-600">
              Invest in Mutual Funds to build a financially secure future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mutualFundBenefits.map((benefit, index) => <div key={index} className="bg-white backdrop-blur-sm border border-gray-200 p-6 rounded-xl transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-fade-in" style={{
            animationDelay: `${index * 150}ms`
          }}>
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="font-bold text-xl ml-3">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Advantages of Mutual Fund SIP Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-white via-purple-50/30 to-white text-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-800">Advantages of </span>
              <span className="text-fintech-orange">Mutual Fund SIP</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Systematic Investment Plans offer numerous advantages for long-term wealth creation and financial discipline.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {sipAdvantages.map((advantage, index) => <div key={index} className="bg-white backdrop-blur-sm border border-gray-200 p-6 rounded-xl shadow-sm transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="flex items-start gap-4">
                  {advantage.icon}
                  <div>
                    <h3 className="font-bold text-xl mb-2">{advantage.title}</h3>
                    <p className="text-gray-600 text-sm">{advantage.description}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* How to Choose the Best Mutual Funds Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-white via-green-50/30 to-white text-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-800">How to Choose the </span>
              <span className="text-fintech-green">Best Mutual Funds</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Consider these factors when selecting mutual funds for your investment portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {choosingMutualFundsTips.map((tip, index) => <div key={index} className="bg-white backdrop-blur-sm border border-gray-200 p-6 rounded-xl shadow-sm transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in" style={{
            animationDelay: `${index * 100}ms`
          }}>
                <div className="flex flex-col items-center text-center gap-4">
                  {tip.icon}
                  <div>
                    <h3 className="font-bold text-xl mb-2">{tip.title}</h3>
                    <p className="text-gray-600 text-sm">{tip.description}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Important Terms Related to Mutual Funds Section */}
      <section className="py-16 px-4 md:px-8 bg-white text-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-800">Important Terms </span>
              <span className="gradient-text">Related to Mutual Funds</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Familiarize yourself with these key mutual fund terms to make informed investment decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {mutualFundTerms.map((term, index) => <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <div className="bg-white backdrop-blur-sm border border-gray-200 p-6 rounded-xl shadow-sm transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in cursor-pointer" style={{
                animationDelay: `${index * 100}ms`
              }}>
                    <div className="flex flex-col items-center text-center">
                      {term.icon}
                      <h3 className="font-bold text-xl my-3">{term.title}</h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{term.description}</p>
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent side="top" className="w-80 p-4 shadow-xl bg-white border border-gray-200">
                  <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-lg">{term.title}</h4>
                    <p className="text-gray-700">{term.description}</p>
                  </div>
                </HoverCardContent>
              </HoverCard>)}
          </div>
        </div>
      </section>

      {/* Fund Categories Section - Updated with new styling */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Fund Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover the right type of mutual fund for your investment goals and risk appetite</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {fundCategories.map((fund, index) => <div key={index} className={`${fund.bgColor} p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in h-full`} style={{
            animationDelay: `${index * 150}ms`
          }}>
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${fund.iconBg}`}>
                    {fund.icon}
                  </div>
                </div>
                
                <h3 className={`text-2xl font-bold text-center mb-6 ${fund.textColor}`}>{fund.type}</h3>
                
                <div className="flex justify-between items-center mb-4">
                  <p className="text-gray-600">Expected Returns</p>
                  <p className="font-bold">{fund.expectedReturns}</p>
                </div>
                
                <div className="flex justify-between items-center mb-6">
                  <p className="text-gray-600">Risk Level</p>
                  <p className="font-bold">{fund.riskLevel}</p>
                </div>
                
                <p className="text-gray-600 text-center mb-6">{fund.description}</p>
                
                <div className="flex justify-center">
                  <Button variant="outline" className="bg-white rounded-full hover:bg-gray-50 group">
                    Explore Funds
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      
      {/* NEW SECTION: Top Performing Funds Table */}
      <section className="px-4 md:px-8 bg-white py-[10px]">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Top Performing Funds</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our selection of top-performing mutual funds across different categories</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topPerformingFunds.map((fund, index) => <div key={index} style={{
            animationDelay: `${index * 100}ms`
          }} className="bg-white border border-gray-100 p-6 shadow-md hover:shadow-lg hover:border-fintech-purple/30 transition-all duration-300 animate-fade-in px-[24px] rounded-xl py-[40px]">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-lg text-center mb-4">{fund.name}</h3>
                <div className="flex justify-between items-center mb-2 py-[5px]">
                  <span className="text-gray-600">Returns (CAGR)</span>
                  <span className="font-bold text-green-600">{fund.returns}</span>
                </div>
                <div className="flex justify-between items-center mb-2 py-[5px]">
                  <span className="text-gray-600">Category</span>
                  <span>{fund.category}</span>
                </div>
                <div className="flex justify-between items-center mb-2 py-[5px]">
                  <span className="text-gray-600">AUM</span>
                  <span>{fund.aum}</span>
                </div>
                <div className="flex justify-between items-center mb-4 py-[5px]">
                  <span className="text-gray-600">Risk</span>
                  <span className={`px-2 py-1 rounded-full text-xs text-white ${fund.colorClass}`}>{fund.risk}</span>
                </div>
                <div className="mt-4 flex justify-center">
                  <Button variant="outline" className="w-full hover:bg-gray-50 group">
                    Invest Now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default MutualFunds;