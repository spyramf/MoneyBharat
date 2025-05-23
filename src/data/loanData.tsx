import React, { ReactNode } from "react";
import { Banknote, Clock, PiggyBank, BadgeDollarSign, Shield, CheckCircle, Building, Calculator, DollarSign, ArrowRight, Info } from "lucide-react";
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
  maxLoanAmount?: string;
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
export const personalLoanFeatures: LoanFeature[] = [
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

// Home Loan Data
export interface HomeLoanType {
  name: string;
  description: string;
  features: string[];
  icon: ReactNode;
}

export const homeLoanFeatures: LoanFeature[] = [
  {
    title: "Competitive Interest Rates",
    description: "Get home loans at interest rates starting from 8.40% per annum",
    icon: <BadgeDollarSign className="h-6 w-6 text-fintech-blue" />
  },
  {
    title: "Flexible Tenure",
    description: "Choose loan tenure from 5 to 30 years based on your repayment capacity",
    icon: <Clock className="h-6 w-6 text-fintech-blue" />
  },
  {
    title: "High Loan Amount",
    description: "Get up to 90% of your property value as loan amount",
    icon: <Home className="h-6 w-6 text-fintech-blue" />
  },
  {
    title: "Tax Benefits",
    description: "Avail tax benefits on principal and interest payments under Section 80C and 24(b)",
    icon: <Calculator className="h-6 w-6 text-fintech-blue" />
  }
];

export const homeLoanTypes: HomeLoanType[] = [
  {
    name: "New Home Loan",
    description: "For purchasing a new property for residential purposes.",
    features: ["Competitive interest rates", "Up to 30 years tenure", "Up to 90% financing"],
    icon: <Home className="h-10 w-10 text-fintech-blue" />
  },
  {
    name: "Home Loan Balance Transfer",
    description: "Transfer your existing home loan and save on interest payments.",
    features: ["Lower interest rates", "Top-up loan facility", "Minimal documentation"],
    icon: <ArrowRight className="h-10 w-10 text-fintech-purple" />
  },
  {
    name: "Home Loan Top-up",
    description: "Additional loan amount over your existing home loan.",
    features: ["Lower interest than personal loan", "Flexible usage", "Extended repayment period"],
    icon: <DollarSign className="h-10 w-10 text-fintech-orange" />
  },
  {
    name: "Construction Loan",
    description: "For constructing a house on land already owned.",
    features: ["Disbursement in phases", "Pay interest only on disbursed amount", "Flexible drawdown schedule"],
    icon: <Building className="h-10 w-10 text-fintech-deep-purple" />
  }
];

export const homeLoanBankComparisons: BankComparisonItem[] = [
  { 
    bank: "SBI", 
    interestRate: "8.40% - 9.10%",
    processingFee: "0.35% + GST (Min ₹2,000, Max ₹10,000)",
    prepaymentCharges: "Nil for floating rate loans",
    maxLoanAmount: "Up to ₹10 crore" 
  },
  { 
    bank: "HDFC Bank", 
    interestRate: "8.50% - 9.25%",
    processingFee: "0.50% + GST (Min ₹3,000, Max ₹10,000)",
    prepaymentCharges: "Nil after 6 months for floating rate",
    maxLoanAmount: "Based on eligibility" 
  },
  { 
    bank: "ICICI Bank", 
    interestRate: "8.60% - 9.30%",
    processingFee: "0.50% + GST (Min ₹1,500, Max ₹10,000)",
    prepaymentCharges: "Nil for floating rate loans",
    maxLoanAmount: "Based on eligibility" 
  },
  { 
    bank: "Axis Bank", 
    interestRate: "8.75% - 9.40%",
    processingFee: "1.00% + GST (Min ₹10,000)",
    prepaymentCharges: "Nil for floating rate loans",
    maxLoanAmount: "Up to ₹15 crore" 
  },
  { 
    bank: "LIC Housing Finance", 
    interestRate: "8.50% - 9.10%",
    processingFee: "0.50% + GST (Max ₹10,000)",
    prepaymentCharges: "Nil for floating rate loans",
    maxLoanAmount: "Up to ₹5 crore" 
  }
];

export const homeLoanFAQs: FAQ[] = [
  {
    question: "What is the maximum loan amount I can get?",
    answer: "The maximum loan amount depends on your income, repayment capacity, property value, and the bank's policies. Generally, banks provide up to 75-90% of the property value as loan amount."
  },
  {
    question: "What is the typical home loan tenure?",
    answer: "Home loans can typically be taken for a tenure of 5 to 30 years. The longer the tenure, the lower your EMI but higher the total interest outgo."
  },
  {
    question: "What documents are required for a home loan?",
    answer: "Common documents include identity proof (Aadhaar, PAN card), address proof, income proof (salary slips, ITR for last 2-3 years), bank statements for 6 months, property documents, and employment details."
  },
  {
    question: "How is the home loan interest rate determined?",
    answer: "Home loan interest rates are determined based on the RBI's repo rate, your credit score, loan amount, tenure, and the bank's internal benchmarking system (usually RLLR or External Benchmark Lending Rate)."
  },
  {
    question: "Can I prepay my home loan?",
    answer: "Yes, most banks allow partial or full prepayment of home loans. For floating rate loans, there is usually no prepayment penalty. For fixed rate loans, some banks may charge a prepayment penalty."
  },
  {
    question: "What is PMAY and how can I benefit from it?",
    answer: "Pradhan Mantri Awas Yojana (PMAY) is a government scheme that provides interest subsidies to eligible home buyers from economically weaker sections, low and middle-income groups. Under this scheme, you can get an interest subsidy of up to ₹2.67 lakhs."
  }
];

export const homeLoanEligibilityCriteria: string[] = [
  "Age: 21-65 years (at loan maturity)",
  "Income: Regular source of income (salaried or self-employed)",
  "Credit Score: Preferably 750+ for better interest rates",
  "Employment: Minimum 2 years of work experience",
  "Property: The property should have clear title and all approvals"
];

export const homeLoanRequiredDocuments: string[] = [
  "Identity Proof (Aadhaar, PAN, Passport)",
  "Address Proof (Utility bill, Rental agreement)",
  "Income Proof (Salary slips, Form 16, ITR for last 2 years)",
  "6 months' Bank statements",
  "Property documents (Sale deed, Approved plan)",
  "Passport size photographs",
  "Employment details"
];
