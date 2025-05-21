import { CheckCircle, ShieldCheck, PiggyBank, TrendingUp, Lightbulb, Scale, CalendarDays, Banknote, FileText, HelpCircle, LucideIcon } from "lucide-react";
import { Activity, Users, History, BarChart3 } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface Step {
  title: string;
  description: string;
  image: string;
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

interface Category {
  name: string;
  description: string;
  funds: string[];
}

interface Fund {
  name: string;
  returns: string;
  risk: string;
}

interface Term {
  term: string;
  definition: string;
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

export const dematSteps: Step[] = [
  {
    title: "Sign Up",
    description: "Fill in your personal details to create an account.",
    image: "/images/mutual-funds/step-1.svg",
  },
  {
    title: "KYC Verification",
    description: "Verify your identity online with our quick KYC process.",
    image: "/images/mutual-funds/step-2.svg",
  },
  {
    title: "Explore Funds",
    description: "Browse through a wide range of mutual funds.",
    image: "/images/mutual-funds/step-3.svg",
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

export const fundCategories: Category[] = [
  {
    name: "Equity Funds",
    description: "Invest in stocks for high growth potential.",
    funds: ["Large Cap", "Mid Cap", "Small Cap"],
  },
  {
    name: "Debt Funds",
    description: "Invest in fixed-income securities for stable returns.",
    funds: ["Government Bonds", "Corporate Bonds", "Treasury Bills"],
  },
  {
    name: "Hybrid Funds",
    description: "Invest in a mix of stocks and bonds for balanced growth.",
    funds: ["Aggressive Hybrid", "Balanced Hybrid", "Conservative Hybrid"],
  },
];

export const topPerformingFunds: Fund[] = [
  {
    name: "SBI Bluechip Fund",
    returns: "18.5%",
    risk: "Moderate",
  },
  {
    name: "HDFC Top 100 Fund",
    returns: "17.2%",
    risk: "Moderate",
  },
  {
    name: "ICICI Prudential Bluechip Fund",
    returns: "19.8%",
    risk: "Moderate",
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
    description: "SIP encourages regular investing, fostering financial discipline. It helps you stay committed to your investment goals over the long term.",
    icon: <CheckCircle className="h-6 w-6 text-green-600" />,
    iconBg: "bg-green-100",
  },
  {
    title: "Power of Compounding",
    description: "By investing consistently, you benefit from the power of compounding, where your returns generate further earnings, maximizing your wealth over time.",
    icon: <TrendingUp className="h-6 w-6 text-purple-600" />,
    iconBg: "bg-purple-100",
  },
  {
    title: "You Can Start Small",
    description: "You can start investing with a minimal amount such as Rs. 500, making SIPs accessible for everyone. This flexibility allows you to grow your investment gradually.",
    icon: <Banknote className="h-6 w-6 text-blue-600" />,
    iconBg: "bg-blue-100",
  },
  {
    title: "Convenient - At Your Fingertips",
    description: "SIPs offer convenience, allowing you to invest effortlessly through online platforms, ensuring your investments are just a click away.",
    icon: <CalendarDays className="h-6 w-6 text-orange-500" />,
    iconBg: "bg-orange-100",
  },
  {
    title: "Professional Fund Management",
    description: "Your SIP mutual funds are managed by professional fund managers, ensuring that your portfolio benefits from expert insights and strategies.",
    icon: <Users className="h-6 w-6 text-cyan-600" />,
    iconBg: "bg-cyan-100",
  },
  {
    title: "Can be Automated",
    description: "SIPs can be easily automated via AutoPay on Dhan, setting up hassle-free monthly investments. This ensures consistency without the need for constant manual input.",
    icon: <CalendarDays className="h-6 w-6 text-yellow-600" />,
    iconBg: "bg-yellow-100",
  },
];

export const choosingMutualFundsTips: Tip[] = [
  {
    title: "Fund Performance",
    description: "Evaluate the fund's historical performance and its Assets Under Management (AUM) to ensure stability and growth potential.",
    icon: <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
      <Activity className="h-8 w-8 text-green-600" />
    </div>
  },
  {
    title: "AMC Track Record",
    description: "Consider the track record of the Asset Management Company (AMC). A reputable AMC with a strong history can indicate reliability and effective fund management.",
    icon: <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center">
      <History className="h-8 w-8 text-orange-600" />
    </div>
  },
  {
    title: "Fund Managers",
    description: "Look at the experience and expertise of the fund managers. Skilled fund managers can make informed decisions that positively impact the fund's performance.",
    icon: <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
      <Users className="h-8 w-8 text-blue-600" />
    </div>
  },
  {
    title: "Index Benchmark",
    description: "Compare the fund's returns against its benchmark index. Consistent outperformance relative to the benchmark suggests a well-managed fund.",
    icon: <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
      <BarChart3 className="h-8 w-8 text-purple-600" />
    </div>
  }
];

export const mutualFundTerms: Term[] = [
  {
    term: "NAV (Net Asset Value)",
    definition: "The market value of a fund's assets, less its liabilities, divided by the number of outstanding units.",
  },
  {
    term: "Expense Ratio",
    definition: "The annual cost of operating a fund, expressed as a percentage of the fund's average net assets.",
  },
  {
    term: "Exit Load",
    definition: "A fee charged when you redeem your investment before a specified period.",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "What is a mutual fund?",
    answer: "A mutual fund is a type of investment vehicle consisting of a portfolio of stocks, bonds, or other assets.",
  },
  {
    question: "How do I invest in mutual funds?",
    answer: "You can invest in mutual funds through a brokerage account, financial advisor, or directly through the fund company.",
  },
  {
    question: "What are the risks of investing in mutual funds?",
    answer: "The risks of investing in mutual funds include market risk, interest rate risk, and credit risk.",
  },
];
