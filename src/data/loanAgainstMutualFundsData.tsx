import { PiggyBank, Percent, TrendingUp, Shield } from "lucide-react";

export const lamfFeatures = [
  {
    title: "No Need to Sell",
    description: "Keep your investments intact and continue to benefit from market growth and dividends",
    icon: <PiggyBank className="h-10 w-10 text-fintech-purple" />
  },
  {
    title: "Lower Interest Rates",
    description: "Enjoy significantly lower interest rates compared to personal loans or credit cards",
    icon: <Percent className="h-10 w-10 text-fintech-blue" />
  },
  {
    title: "Quick Approval",
    description: "Get your loan approved within 24-48 hours with minimal documentation required",
    icon: <TrendingUp className="h-10 w-10 text-fintech-orange" />
  },
  {
    title: "Flexible Repayment",
    description: "Choose tenure from 3 to 36 months with no prepayment penalties",
    icon: <Shield className="h-10 w-10 text-green-500" />
  }
];

export const lamfEligibilityCriteria = [
  "You must be at least 21 years old and not more than 65 years old at loan maturity",
  "Your mutual funds must have been held for a minimum of 6 months",
  "The minimum value of pledged mutual funds should be ₹2 lakhs or more",
  "The mutual funds must be from approved Asset Management Companies (AMCs)",
  "KYC compliance and bank account in your name",
  "Stable income source to ensure repayment capacity"
];

export const lamfRequiredDocuments = [
  "KYC documents (PAN card, Aadhaar card, etc.)",
  "Latest mutual fund statements (not older than 15 days)",
  "Bank statements for the last 3 months",
  "Income proof (salary slips, ITR for self-employed)",
  "2 passport-sized photographs",
  "Application form and declaration form"
];

export const lamfProcess = [
  {
    title: "Check Eligibility",
    description: "Verify your mutual fund holdings and calculate eligible loan amount"
  },
  {
    title: "Submit Documents",
    description: "Provide KYC, mutual fund statements, and income proof"
  },
  {
    title: "Pledge Units",
    description: "Pledge your mutual fund units as collateral"
  },
  {
    title: "Get Funds",
    description: "Receive loan amount in your account within 24-48 hours"
  }
];

export const lamfFAQs = [
  {
    question: "What is a loan against mutual funds?",
    answer: "A loan against mutual funds allows you to borrow money by pledging your mutual fund investments as collateral. You can get up to 80% of your mutual fund value as a loan, depending on the type of mutual funds and the lender's policies."
  },
  {
    question: "What are the benefits of taking a loan against mutual funds?",
    answer: "Benefits include lower interest rates compared to personal loans, minimal documentation, quick processing, no prepayment penalties, and the ability to retain your investments while accessing liquidity."
  },
  {
    question: "Which mutual funds can be pledged for a loan?",
    answer: "Typically, lenders accept equity, debt, and hybrid mutual funds that have been held for a minimum period (usually 6 months to 1 year). Liquid funds are the most preferred due to their stable nature, while ELSS funds may have restrictions due to the lock-in period."
  },
  {
    question: "How much loan can I get against my mutual funds?",
    answer: "Most lenders offer 60-80% of the current value of your mutual fund portfolio. The exact percentage depends on the type of mutual funds - with debt funds typically getting higher LTV (Loan-to-Value) ratios compared to equity funds."
  },
  {
    question: "Is there any impact on my mutual fund investment when I take a loan against it?",
    answer: "Your mutual funds remain invested and continue to earn returns. However, you cannot redeem, sell, or transfer the pledged units until you repay the loan. Dividends and other benefits continue to accrue to you."
  }
];
