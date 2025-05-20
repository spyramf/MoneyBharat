import { useState, useEffect } from "react";
import { ArrowRight, CircleArrowDown, CircleArrowUp, FileChartLine, FileChartPie, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
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
  const fundCategories = [
    {
      type: "Equity Funds",
      expectedReturns: "12-15%",
      riskLevel: "High",
      description: "Higher potential returns with market-linked investments in company stocks.",
      bgColor: "bg-green-50",
      iconColor: "text-fintech-green",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      )
    },
    {
      type: "Debt Funds",
      expectedReturns: "7-9%",
      riskLevel: "Low",
      description: "Stable returns with lower risk investments in fixed income securities.",
      bgColor: "bg-blue-50",
      iconColor: "text-fintech-blue",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="12" x2="12" y1="9" y2="17" />
          <line x1="8" x2="8" y1="11" y2="15" />
          <line x1="16" x2="16" y1="11" y2="15" />
        </svg>
      )
    },
    {
      type: "Hybrid Funds",
      expectedReturns: "9-12%",
      riskLevel: "Medium",
      description: "Balanced approach with a mix of equity and debt investments.",
      bgColor: "bg-purple-50",
      iconColor: "text-fintech-purple",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M2 20h.01" />
          <path d="M7 20v-4" />
          <path d="M12 20v-8" />
          <path d="M17 20V8" />
          <path d="M22 4v16" />
        </svg>
      )
    },
    {
      type: "Index Funds",
      expectedReturns: "10-12%",
      riskLevel: "Medium",
      description: "Passive investments that track market indices with lower expenses.",
      bgColor: "bg-orange-50",
      iconColor: "text-fintech-orange",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </svg>
      )
    }
  ];

  // Top Performing Funds Data
  const topPerformingFunds = [
    {
      name: "HDFC Flexicap Fund",
      performance: "Top performer in its category",
      category: "Equity",
      returns: "15.8%",
      aum: "₹26,700 Cr",
      risk: "High",
      colorClass: "bg-green-500"
    },
    {
      name: "SBI Small Cap Fund",
      performance: "Top performer in its category",
      category: "Equity",
      returns: "17.2%",
      aum: "₹18,500 Cr",
      risk: "Very High",
      colorClass: "bg-red-500"
    },
    {
      name: "Axis Bluechip Fund",
      performance: "Top performer in its category",
      category: "Equity",
      returns: "14.3%",
      aum: "₹31,200 Cr",
      risk: "Moderate",
      colorClass: "bg-yellow-500"
    },
    {
      name: "ICICI Prudential Balanced Advantage",
      performance: "Top performer in its category",
      category: "Hybrid",
      returns: "11.7%",
      aum: "₹42,800 Cr",
      risk: "Moderate",
      colorClass: "bg-yellow-500"
    },
    {
      name: "Nippon India Low Duration",
      performance: "Top performer in its category",
      category: "Debt",
      returns: "7.8%",
      aum: "₹15,600 Cr",
      risk: "Low",
      colorClass: "bg-green-300"
    }
  ];

  const mutualFundBenefits = [
    {
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
    },
    {
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
    },
    {
      title: "Highly Regulated",
      description: "Mutual funds are regulated by SEBI, ensuring transparency and protecting investor interests through stringent guidelines.",
      icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-fintech-purple">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          <circle cx="12" cy="16" r="1" />
        </svg>
      </div>
    },
    {
      title: "Lower Transaction Costs",
      description: "Investing in mutual funds typically incurs lower transaction costs compared to individual stock trading, making it cost-effective.",
      icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-fintech-orange">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <line x1="12" x2="12" y1="2" y2="22" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </div>
    },
    {
      title: "Liquid Assets",
      description: "Mutual funds offer high liquidity, allowing you to easily redeem your investments when needed, providing financial flexibility.",
      icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 text-cyan-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M8 16a5 5 0 0 1 10 0" />
          <line x1="2" x2="22" y1="20" y2="20" />
          <line x1="2" x2="7" y1="4" y2="4" />
          <line x1="2" x2="4" y1="8" y2="8" />
          <line x1="2" x2="10" y1="12" y2="12" />
          <line x1="17" x2="22" y1="4" y2="4" />
          <line x1="20" x2="22" y1="8" y2="8" />
          <line x1="14" x2="22" y1="12" y2="12" />
        </svg>
      </div>
    },
    {
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
    }
  ];

  const sipAdvantages = [
    {
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
    },
    {
      title: "Power of Compounding",
      description: "By investing consistently, you benefit from the power of compounding, where your returns generate further earnings, maximizing your wealth over time.",
      icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-fintech-purple">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M12 17V3" />
          <path d="m6 11 6 6 6-6" />
          <path d="M19 21H5" />
        </svg>
      </div>
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
      title: "Can be Automated",
      description: "SIPs can be easily automated via AutoPay on Dhan, setting up hassle-free monthly investments. This ensures consistency without the need for constant manual input.",
      icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M17 6H8a5 5 0 0 0 0 10h9" />
          <path d="m19 9-3-3 3-3" />
          <path d="m19 15-3 3 3 3" />
        </svg>
      </div>
    }
  ];

  const choosingMutualFundsTips = [
    {
      title: "Fund Performance",
      description: "Evaluate the fund's historical performance and its Assets Under Management (AUM) to ensure stability and growth potential.",
      icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-fintech-green">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      </div>
    },
    {
      title: "AMC Track Record",
      description: "Consider the track record of the Asset Management Company (AMC). A reputable AMC with a strong history can indicate reliability and effective fund management.",
      icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-fintech-orange">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      </div>
    },
    {
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
    },
    {
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
    }
  ];

  const mutualFundTerms = [
    {
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
    },
    {
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
    },
    {
      title: "SWP",
      description: "A Systematic Withdrawal Plan (SWP) enables you to withdraw a fixed sum regularly from your mutual fund, providing steady income while maintaining your investment.",
      icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-fintech-purple">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M12 3v12" />
          <path d="m8 11 4 4 4-4" />
          <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
        </svg>
      </div>
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
      title: "Entry Load",
      description: "Entry load is a fee charged when investing in a mutual fund. Though many funds have eliminated it, understanding any applicable charges helps maximize your investment.",
      icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 text-yellow-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <line x1="12" x2="12" y1="2" y2="22" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      </div>
    },
    {
      title: "Exit Load",
      description: "Exit load is a fee incurred when redeeming mutual fund units before a certain period. It serves as a penalty for early withdrawal, encouraging long-term investment.",
      icon: <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 text-pink-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M12 3v12" />
          <path d="m8 11 4 4 4-4" />
          <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
        </svg>
      </div>
    }
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

      {/* New Feature Section - Light Theme with Glowing Borders */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-800">Aaj Ka </span>
              <span className="text-fintech-green">Investment</span>
              <span className="text-gray-800">, Kal Ka </span>
              <span className="text-fintech-green">Benefit</span>
            </h2>
            <p className="text-lg text-gray-600">
              Invest in Mutual Funds to build a financially secure future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {mutualFundBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white backdrop-blur-sm border border-gray-200 p-6 rounded-xl transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  {benefit.icon}
                  <h3 className="font-bold text-xl ml-3">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
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
            {sipAdvantages.map((advantage, index) => (
              <div 
                key={index}
                className="bg-white backdrop-blur-sm border border-gray-200 p-6 rounded-xl shadow-sm transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  {advantage.icon}
                  <div>
                    <h3 className="font-bold text-xl mb-2">{advantage.title}</h3>
                    <p className="text-gray-600 text-sm">{advantage.description}</p>
                  </div>
                </div>
              </div>
            ))}
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
            {choosingMutualFundsTips.map((tip, index) => (
              <div 
                key={index}
                className="bg-white backdrop-blur-sm border border-gray-200 p-6 rounded-xl shadow-sm transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center gap-4">
                  {tip.icon}
                  <div>
                    <h3 className="font-bold text-xl mb-2">{tip.title}</h3>
                    <p className="text-gray-600 text-sm">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Terms Related to Mutual Funds Section */}
      <section className="py-16 px-4 md:px-8 bg-white text-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-800">Important Terms </span>
              <span className="text-fintech-purple">Related to Mutual Funds</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Familiarize yourself with these key mutual fund terms to make informed investment decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {mutualFundTerms.map((term, index) => (
              <HoverCard key={index}>
                <HoverCardTrigger asChild>
                  <div 
                    className="bg-white backdrop-blur-sm border border-gray-200 p-6 rounded-xl shadow-sm transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
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
              </HoverCard>
            ))}
          </div>
        </div>
      </section>

      {/* Fund Categories Section - ADDED FROM REFERENCE */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Fund Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Discover the right type of mutual fund for your investment goals and risk appetite</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {fundCategories.map((fund, index) => (
              <div 
                key={index}
                className={`${fund.bgColor} p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${fund.iconColor} bg-white/70`}>
                    {fund.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-center mb-4">{fund.type}</h3>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Expected Returns</p>
                    <p className="font-semibold">{fund.expectedReturns}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Risk Level</p>
                    <p className="font-semibold">{fund.riskLevel}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-6">{fund.description}</p>
                
                <div className="flex justify-center">
                  <Button variant="outline" size="sm" className="group">
                    Explore Funds 
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Performing Funds - ADDED FROM REFERENCE */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Performing Funds</h2>
            <p className="text-gray-600">Our selection of mutual funds with consistent performance</p>
          </div>
          
          <Card className="shadow-lg border-0 overflow-hidden shadow-[0_0_25px_rgba(155,135,245,0.1)]">
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
                    <TableRow key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                      <TableCell>
                        <div className="flex items-center">
                          <div className={`w-1 h-16 ${fund.colorClass} rounded-full mr-3`}></div>
                          <div>
                            <p className="font-medium">{fund.name}</p>
                            <p className="text-xs text-gray-500">{fund.performance}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={fund.category === "Equity" ? "text-green-700 border-green-200 bg-green-50" : 
                                                          fund.category === "Hybrid" ? "text-purple-700 border-purple-200 bg-purple-50" : 
                                                          "text-blue-700 border-blue-200 bg-blue-50"}>
                          {fund.category}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span className="font-semibold text-green-600">{fund.returns}</span>
                      </TableCell>
                      <TableCell>{fund.aum}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={
                          fund.risk === "High" ? "text-amber-700 border-amber-200 bg-amber-50" :
                          fund.risk === "Very High" ? "text-red-700 border-red-200 bg-red-50" :
                          fund.risk === "Moderate" ? "text-yellow-700 border-yellow-200 bg-yellow-50" :
                          "text-green-700 border-green-200 bg-green-50"
                        }>
                          {fund.risk}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
          
          <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: '500ms' }}>
            <Button className="bg-gradient-to-r from-fintech-purple to-fintech-blue hover:opacity-90 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(155,135,245,0.3)]">
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
            {/* ... keep existing code (FAQ content) */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-fintech-purple to-fintech-blue text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Investment Journey?</h2>
          <p className="text-xl mb-8 text-white/90">Create an account and start investing in just 5 minutes</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-fintech-purple hover:bg-white/90 text-lg px-8 py-6 shadow-[0_0_25px_rgba(255,255,255,0.3)]">
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
