
import { ReactNode } from "react";
import { Banknote, Clock, PiggyBank, BadgeDollarSign, Shield, CheckCircle } from "lucide-react";
import Home from "@/components/icons/Home";
import Car from "@/components/icons/Car";
import GraduationCap from "@/components/icons/GraduationCap";

export interface LoanFeature {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface BankComparisonItem {
  bank: string;
  interestRate: string;
  processingFee: string;
  prepaymentCharges: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

// Personal Loan Data
export const personalLoanFeatures = [
  {
    title: "Quick Approval",
    description: "Get your loan approved within 24 hours with minimal documentation",
    icon: <Clock className="h-6 w-6 text-fintech-purple" />
  },
  {
    title: "Flexible Tenure",
    description: "Choose loan tenure from 12 to 60 months based on your repayment capacity",
    icon: <PiggyBank className="h-6 w-6 text-fintech-purple" />
  },
  {
    title: "No Hidden Charges",
    description: "Transparent fee structure with no hidden costs or prepayment penalties",
    icon: <BadgeDollarSign className="h-6 w-6 text-fintech-purple" />
  },
  {
    title: "Secure Processing",
    description: "Your data is protected with bank-grade security and encryption",
    icon: <Shield className="h-6 w-6 text-fintech-purple" />
  }
];

export const personalLoanEligibilityCriteria = [
  "Age between 23 and 58 years",
  "Minimum monthly income of ₹25,000",
  "Salaried employees with at least 6 months in current job",
  "Credit score of 700 or above",
  "Indian citizen with valid KYC documents"
];

export const personalLoanRequiredDocuments = [
  "Identity Proof (Aadhaar, PAN, Passport, Voter ID)",
  "Address Proof (Utility bill, Rental agreement)",
  "Income Proof (Salary slips for last 3 months)",
  "Bank statements for the last 6 months",
  "Passport-size photographs"
];

export const personalLoanProcess: ProcessStep[] = [
  {
    title: "Apply Online",
    description: "Fill out our simple online application form with your details"
  },
  {
    title: "Quick Verification",
    description: "Our team will verify your documents and check eligibility"
  },
  {
    title: "Get Disbursement",
    description: "Upon approval, the loan amount is disbursed to your bank account"
  }
];

export const personalLoanFAQs: FAQ[] = [
  {
    question: "What is the maximum loan amount I can get?",
    answer: "You can apply for a personal loan of up to ₹15 lakhs depending on your income, credit score, and repayment capacity."
  },
  {
    question: "How long does the approval process take?",
    answer: "Our approval process is quick and typically takes 24-48 hours once all required documents are submitted."
  },
  {
    question: "Are there any prepayment charges?",
    answer: "We do not charge any prepayment penalties if you wish to repay your loan before the end of the tenure."
  },
  {
    question: "What can I use a personal loan for?",
    answer: "Our personal loans can be used for various purposes including medical emergencies, education, home renovation, wedding expenses, travel, or debt consolidation."
  }
];

// Common Bank Comparison Data
export const loanBankComparisons: BankComparisonItem[] = [
  {
    bank: "HDFC Bank",
    interestRate: "10.50% - 18.00%",
    processingFee: "Up to 2.50%",
    prepaymentCharges: "Nil for floating rate loans"
  }, 
  {
    bank: "ICICI Bank",
    interestRate: "10.75% - 18.49%",
    processingFee: "Up to 2.25% + GST",
    prepaymentCharges: "2% on outstanding amount"
  }, 
  {
    bank: "SBI",
    interestRate: "9.60% - 16.40%",
    processingFee: "1.50% - 2.00% + GST",
    prepaymentCharges: "Nil after 12 months"
  }, 
  {
    bank: "Axis Bank",
    interestRate: "10.49% - 18.00%",
    processingFee: "Up to 2.00% + GST",
    prepaymentCharges: "2% on outstanding amount"
  }, 
  {
    bank: "Bajaj Finserv",
    interestRate: "11.00% - 16.00%",
    processingFee: "Up to 3.99% + GST",
    prepaymentCharges: "4% on outstanding amount"
  }
];

// Loan Types for general loans page
export const loanTypes = [
  {
    id: "personal",
    name: "Personal Loan",
    icon: <Banknote className="h-10 w-10 text-fintech-purple" />,
    description: "Quick unsecured loans for your personal needs",
    features: ["Get instant funding up to ₹40 Lakhs", "No collateral or security required", "Flexible repayment options"],
    gradient: "bg-gradient-to-r from-fintech-purple to-fintech-purple/80",
    path: "/loans/personal"
  }, 
  {
    id: "business",
    name: "Business Loan",
    icon: <Banknote className="h-10 w-10 text-fintech-orange" />,
    description: "Grow your business with flexible financing options",
    features: ["Funding up to ₹5 Crores for your business", "Tailored solutions for different business types", "Competitive interest rates"],
    gradient: "bg-gradient-to-r from-fintech-orange to-fintech-orange/80",
    path: "/loans/business"
  }, 
  {
    id: "home",
    name: "Home Loan",
    icon: <Home className="h-10 w-10 text-fintech-blue" />,
    description: "Affordable housing finance solutions",
    features: ["Up to 90% of property value as loan", "Lower interest rates starting at 8.40%", "Tax benefits on principal and interest"],
    gradient: "bg-gradient-to-r from-fintech-blue to-fintech-blue/80",
    path: "/loans/home"
  }, 
  {
    id: "car",
    name: "Car Loan",
    icon: <Car className="h-10 w-10 text-fintech-deep-purple" />,
    description: "Drive your dream car with competitive rates",
    features: ["Quick approval and disbursement", "Up to 100% financing on select models", "Flexible tenure options"],
    gradient: "bg-gradient-to-r from-fintech-deep-purple to-fintech-deep-purple/80",
    path: "/loans/car"
  }, 
  {
    id: "education",
    name: "Education Loan",
    icon: <GraduationCap className="h-10 w-10 text-green-500" />,
    description: "Invest in education with affordable student loans",
    features: ["Cover tuition fees, living expenses & more", "Moratorium during study period", "Tax benefits under Section 80E"],
    gradient: "bg-gradient-to-r from-green-500 to-green-500/80",
    path: "/loans/education"
  }
];
