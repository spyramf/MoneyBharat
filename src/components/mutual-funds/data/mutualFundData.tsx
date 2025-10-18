import {
  CheckCircle,
  ShieldCheck,
  PiggyBank,
  TrendingUp,
  Lightbulb,
  Scale,
  CalendarDays,
  Banknote,
  FileText,
  HelpCircle,
  ArrowRight,
  Database,
  Currency,
  Activity,
  Users,
  History,
  BarChart3,
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface DematStep {
  title: string;
  description: string;
  image: string;
  icon: JSX.Element;
  number: number;
}

interface Benefit {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface Advantage {
  title: string;
  description: string;
  icon: JSX.Element;
  iconBg: string;
}

interface FundCategory {
  type: string;
  expectedReturns: string;
  riskLevel: string;
  description: string;
  bgColor: string;
  textColor: string;
  iconBg: string;
  icon: JSX.Element;
}

interface Fund {
  name: string;
  returns: string;
  risk: string;
  category: string;
  aum: string;
  colorClass: string;
  description: string;
  borderColor: string;
  riskColorClass: string;
}

interface MutualFundTerm {
  term: string;
  definition: string;
  title: string;
  description: string;
  icon: JSX.Element;
  bgColor?: string;
}

interface Tip {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface FAQItem {
  question: string;
  answer: string;
}

export const sipFeatures: Feature[] = [
  {
    title: "Start Small",
    description: "Begin your investment journey with as little as ₹500.",
    icon: <CheckCircle className="w-8 h-8 text-fintech-green" />,
  },
  {
    title: "Rupee Cost Averaging",
    description: "Invest regularly to average out the cost per unit.",
    icon: <ShieldCheck className="w-8 h-8 text-fintech-green" />,
  },
  {
    title: "Power of Compounding",
    description: "Grow your wealth exponentially with long-term investments.",
    icon: <PiggyBank className="w-8 h-8 text-fintech-green" />,
  },
];

export const dematSteps: DematStep[] = [
  {
    title: "Sign Up",
    description: "Fill in your personal details to create an account.",
    image: "/images/mutual-funds/step-1.svg",
    icon: <CheckCircle className="w-12 h-12 text-fintech-green" />,
    number: 1,
  },
  {
    title: "KYC Verification",
    description: "Verify your identity online with our quick KYC process.",
    image: "/images/mutual-funds/step-2.svg",
    icon: <ShieldCheck className="w-12 h-12 text-fintech-green" />,
    number: 2,
  },
  {
    title: "Explore Funds",
    description: "Browse through a wide range of mutual funds.",
    image: "/images/mutual-funds/step-3.svg",
    icon: <FileText className="w-12 h-12 text-fintech-green" />,
    number: 3,
  },
];

export const additionalFeatures: Feature[] = [
  {
    title: "Tax Benefits",
    description: "Save on taxes with ELSS funds under Section 80C.",
    icon: <TrendingUp className="w-10 h-10 text-fintech-orange" />,
  },
  {
    title: "Expert Guidance",
    description: "Get advice from our experienced financial advisors.",
    icon: <Lightbulb className="w-10 h-10 text-fintech-orange" />,
  },
  {
    title: "Portfolio Diversification",
    description: "Spread your investments across different asset classes.",
    icon: <Scale className="w-10 h-10 text-fintech-orange" />,
  },
  {
    title: "SIP Calculator",
    description: "Plan your investments with our easy-to-use SIP calculator.",
    icon: <CalendarDays className="w-10 h-10 text-fintech-orange" />,
  },
];

export const fundCategories: FundCategory[] = [
  {
    type: "Equity Funds",
    expectedReturns: "12-15%",
    riskLevel: "High",
    description: "Invest in stocks for high growth potential.",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    iconBg: "bg-blue-100",
    icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
  },
  {
    type: "Debt Funds",
    expectedReturns: "7-9%",
    riskLevel: "Low",
    description: "Invest in fixed-income for stable returns.",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    iconBg: "bg-green-100",
    icon: <ShieldCheck className="h-8 w-8 text-green-600" />,
  },
  {
    type: "Hybrid Funds",
    expectedReturns: "10-12%",
    riskLevel: "Medium",
    description: "Invest in a mix of stocks and bonds for growth.",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    iconBg: "bg-purple-100",
    icon: <Scale className="h-8 w-8 text-purple-600" />,
  },
  {
    type: "Index Funds",
    expectedReturns: "10-12%",
    riskLevel: "Medium",
    description: "Track market indices with lower expense ratios.",
    bgColor: "bg-orange-50",
    textColor: "text-orange-700",
    iconBg: "bg-orange-100",
    icon: <BarChart3 className="h-8 w-8 text-orange-600" />,
  },
];

export const topPerformingFunds: Fund[] = [
  {
    name: "HDFC Flexicap Fund",
    returns: "15.8%",
    risk: "High",
    category: "Equity",
    aum: "₹26,700 Cr",
    colorClass: "bg-green-100",
    description: "Top performer in its category",
    borderColor: "border-l-4 border-green-500",
    riskColorClass: "bg-blue-100 text-blue-800",
  },
  {
    name: "SBI Small Cap Fund",
    returns: "17.2%",
    risk: "Very High",
    category: "Equity",
    aum: "₹18,500 Cr",
    colorClass: "bg-blue-100",
    description: "Top performer in its category",
    borderColor: "border-l-4 border-red-500",
    riskColorClass: "bg-red-100 text-red-800",
  },
  {
    name: "Axis Bluechip Fund",
    returns: "14.3%",
    risk: "Moderate",
    category: "Equity",
    aum: "₹31,200 Cr",
    colorClass: "bg-purple-100",
    description: "Top performer in its category",
    borderColor: "border-l-4 border-yellow-500",
    riskColorClass: "bg-yellow-100 text-yellow-800",
  },
  {
    name: "ICICI Prudential Balanced Advantage",
    returns: "11.7%",
    risk: "Moderate",
    category: "Hybrid",
    aum: "₹42,800 Cr",
    colorClass: "bg-orange-100",
    description: "Top performer in its category",
    borderColor: "border-l-4 border-yellow-500",
    riskColorClass: "bg-yellow-100 text-yellow-800",
  },
  {
    name: "Nippon India Low Duration",
    returns: "7.8%",
    risk: "Low",
    category: "Debt",
    aum: "₹15,600 Cr",
    colorClass: "bg-teal-100",
    description: "Top performer in its category",
    borderColor: "border-l-4 border-green-500",
    riskColorClass: "bg-green-100 text-green-800",
  },
];

export const mutualFundBenefits: Benefit[] = [
  {
    title: "Diversification",
    description: "Mutual funds invest in a variety of stocks, bonds, or other assets, reducing risk.",
    icon: <TrendingUp className="w-8 h-8 text-fintech-green" />,
  },
  {
    title: "Professional Management",
    description: "Experienced fund managers make investment decisions on your behalf.",
    icon: <Banknote className="w-8 h-8 text-fintech-green" />,
  },
  {
    title: "Liquidity",
    description: "You can redeem your mutual fund units easily on any business day.",
    icon: <FileText className="w-8 h-8 text-fintech-green" />,
  },
];

export const sipAdvantages: Advantage[] = [
  {
    title: "Investment Discipline",
    description:
      "SIP encourages regular investing, fostering financial discipline. It helps you stay committed to your investment goals over the long term.",
    icon: <CheckCircle className="h-6 w-6 text-green-600" />,
    iconBg: "bg-green-100",
  },
  {
    title: "Power of Compounding",
    description:
      "By investing consistently, you benefit from the power of compounding, where your returns generate further earnings, maximizing your wealth over time.",
    icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
    iconBg: "bg-purple-100",
  },
  {
    title: "You Can Start Small",
    description:
      "You can start investing with a minimal amount such as Rs. 500, making SIPs accessible for everyone. This flexibility allows you to grow your investment gradually.",
    icon: <Banknote className="h-6 w-6 text-blue-600" />,
    iconBg: "bg-blue-100",
  },
  {
    title: "Convenient - At Your Fingertips",
    description:
      "SIPs offer convenience, allowing you to invest effortlessly through online platforms, ensuring your investments are just a click away.",
    icon: <CalendarDays className="h-6 w-6 text-orange-500" />,
    iconBg: "bg-orange-100",
  },
  {
    title: "Professional Fund Management",
    description:
      "Your SIP mutual funds are managed by professional fund managers, ensuring that your portfolio benefits from expert insights and strategies.",
    icon: <Users className="h-6 w-6 text-cyan-600" />,
    iconBg: "bg-cyan-100",
  },
  {
    title: "Can be Automated",
    description:
      "SIPs can be easily automated via AutoPay on Dhan, setting up hassle-free monthly investments. This ensures consistency without the need for constant manual input.",
    icon: <CalendarDays className="h-6 w-6 text-yellow-600" />,
    iconBg: "bg-yellow-100",
  },
];

export const choosingMutualFundsTips: Tip[] = [
  {
    title: "Fund Performance",
    description:
      "Evaluate the fund's historical performance and its Assets Under Management (AUM) to ensure stability and growth potential.",
    icon: (
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
        <Activity className="h-8 w-8 text-green-600" />
      </div>
    ),
  },
  {
    title: "AMC Track Record",
    description:
      "Consider the track record of the Asset Management Company (AMC). A reputable AMC with a strong history can indicate reliability and effective fund management.",
    icon: (
      <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
        <History className="h-8 w-8 text-orange-600" />
      </div>
    ),
  },
  {
    title: "Fund Managers",
    description:
      "Look at the experience and expertise of the fund managers. Skilled fund managers can make informed decisions that positively impact the fund's performance.",
    icon: (
      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
        <Users className="h-8 w-8 text-blue-600" />
      </div>
    ),
  },
  {
    title: "Index Benchmark",
    description:
      "Compare the fund's returns against its benchmark index. Consistent outperformance relative to the benchmark suggests a well-managed fund.",
    icon: (
      <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
        <BarChart3 className="h-8 w-8 text-purple-600" />
      </div>
    ),
  },
];

export const mutualFundTerms: MutualFundTerm[] = [
  {
    term: "SIP",
    definition: "Systematic Investment Plan - A way to invest a fixed amount in mutual funds at regular intervals.",
    title: "SIP",
    description:
      "A Systematic Investment Plan (SIP) allows you to invest a fixed amount at regular intervals in mutual funds.",
    icon: <CalendarDays className="w-6 h-6 text-green-600" />,
    bgColor: "bg-green-100",
  },
  {
    term: "STP",
    definition:
      "Systematic Transfer Plan - A facility that allows investors to transfer a fixed amount from one mutual fund to another at regular intervals.",
    title: "STP",
    description:
      "A Systematic Transfer Plan (STP) lets you transfer a fixed amount from one mutual fund to another periodically.",
    icon: <ArrowRight className="w-6 h-6 text-blue-600" />,
    bgColor: "bg-blue-100",
  },
  {
    term: "SWP",
    definition:
      "Systematic Withdrawal Plan - Allows you to withdraw a fixed amount from your mutual fund investments at regular intervals.",
    title: "SWP",
    description:
      "A Systematic Withdrawal Plan (SWP) enables you to withdraw a fixed amount from your mutual fund at regular intervals.",
    icon: <FileText className="w-6 h-6 text-purple-600" />,
    bgColor: "bg-purple-100",
  },
  {
    term: "AUM",
    definition:
      "Assets Under Management - The total market value of investments that a mutual fund manages on behalf of its investors.",
    title: "AUM",
    description:
      "Assets Under Management (AUM) refers to the total market value of assets that a fund manages for investors.",
    icon: <Database className="w-6 h-6 text-orange-600" />,
    bgColor: "bg-orange-100",
  },
  {
    term: "NAV",
    definition:
      "Net Asset Value - The per-unit market value of a mutual fund's investments, calculated by dividing the total value of all the securities in the portfolio by the total number of units.",
    title: "NAV",
    description: "Net Asset Value (NAV) represents the per-unit value of a mutual fund, calculated daily.",
    icon: <TrendingUp className="w-6 h-6 text-green-600" />,
    bgColor: "bg-green-100",
  },
  {
    term: "Expense Ratio",
    definition:
      "The annual fee charged by a mutual fund as a percentage of its assets, covering management fees, administrative costs, and other expenses.",
    title: "Expense Ratio",
    description: "The expense ratio is the annual fee expressed as a percentage of a fund's average net assets.",
    icon: <Currency className="w-6 h-6 text-red-600" />,
    bgColor: "bg-red-100",
  },
  {
    term: "Entry Load",
    definition:
      "A fee charged at the time of purchase of mutual fund units. Currently, SEBI has abolished entry loads for all mutual funds.",
    title: "Entry Load",
    description: "Entry load is a fee charged when investing in a mutual fund. (Currently abolished by SEBI)",
    icon: <Banknote className="w-6 h-6 text-yellow-600" />,
    bgColor: "bg-yellow-100",
  },
  {
    term: "Exit Load",
    definition:
      "A fee charged when you redeem your investment before a specified period, typically to discourage short-term investing.",
    title: "Exit Load",
    description:
      "Exit load is a fee incurred when redeeming mutual fund units within a specified period after purchase.",
    icon: <FileText className="w-6 h-6 text-pink-600" />,
    bgColor: "bg-pink-100",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "What is a mutual fund?",
    answer:
      "A mutual fund is a type of investment vehicle consisting of a portfolio of stocks, bonds, or other assets.",
  },
  {
    question: "How do I invest in mutual funds?",
    answer:
      "You can invest in mutual funds through a brokerage account, financial advisor, or directly through the fund company.",
  },
  {
    question: "What are the risks of investing in mutual funds?",
    answer: "The risks of investing in mutual funds include market risk, interest rate risk, and credit risk.",
  },
];
