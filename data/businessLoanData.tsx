import { CreditCard, Clock, Briefcase, BadgeCheck, ShieldCheck, Building } from "lucide-react";

export const businessLoanFeatures = [
  {
    title: "Flexible Loan Amount",
    description: "Get business loans from ₹5 lakhs to ₹5 crores based on your business requirements",
    icon: <CreditCard className="h-10 w-10 text-fintech-purple" />
  },
  {
    title: "Quick Disbursals",
    description: "Get funds in your account in as little as 3 business days",
    icon: <Clock className="h-10 w-10 text-fintech-blue" />
  },
  {
    title: "Minimal Documentation",
    description: "Simple paperwork with GST returns and bank statements",
    icon: <Briefcase className="h-10 w-10 text-fintech-orange" />
  },
  {
    title: "Competitive Interest Rates",
    description: "Starting from 14% per annum with transparent fee structure",
    icon: <BadgeCheck className="h-10 w-10 text-green-500" />
  },
  {
    title: "Flexible Tenure",
    description: "Choose repayment periods between 12 to 60 months",
    icon: <ShieldCheck className="h-10 w-10 text-fintech-purple" />
  },
  {
    title: "No Hidden Charges",
    description: "Complete transparency with all fees disclosed upfront",
    icon: <Building className="h-10 w-10 text-fintech-deep-purple" />
  }
];

export const businessLoanEligibilityCriteria = [
  "Business operational for at least 2 years",
  "Minimum annual turnover of ₹50 lakhs",
  "Business should be profit-making for at least 1 year",
  "Valid GST registration (for applicable businesses)",
  "Good credit score of the business and promoters"
];

export const businessLoanRequiredDocuments = [
  "Business PAN and Proprietor/Partner/Director's PAN Card",
  "Address proof (Utility Bill/Rent Agreement)",
  "Bank statements for the last 6 months",
  "GST returns for the last 12 months (if applicable)",
  "Income Tax Returns for the last 2 years",
  "Business registration documents"
];

export const businessLoanProcess = [
  {
    title: "Apply Online",
    description: "Fill our simple application form and submit your documents online"
  },
  {
    title: "Quick Verification",
    description: "Our team verifies your application and documents promptly"
  },
  {
    title: "Get Funded",
    description: "Receive funds directly in your business account within 3 days"
  }
];

export const businessLoanFAQs = [
  {
    question: "What is the minimum turnover required for a business loan?",
    answer: "The minimum annual turnover required is typically ₹50 lakhs. However, this may vary based on the lender and the type of business."
  },
  {
    question: "Can startups apply for a business loan?",
    answer: "Yes, startups can apply for business loans. However, most lenders require the business to be operational for at least 2 years with consistent revenue."
  },
  {
    question: "What is the maximum loan amount I can get?",
    answer: "You can get business loans ranging from ₹5 lakhs to ₹5 crores, depending on your business turnover, profitability, and creditworthiness."
  },
  {
    question: "Is collateral required for a business loan?",
    answer: "For unsecured business loans up to ₹50 lakhs, collateral is typically not required. For higher amounts, lenders may ask for collateral."
  },
  {
    question: "How long does it take to get a business loan approved?",
    answer: "With complete documentation, business loans can be approved within 2-3 business days, and funds can be disbursed within 3-5 business days."
  }
];
