import { BadgePercent, Clock, Award, ShieldCheck } from "lucide-react";

export const carLoanFeatures = [
  {
    title: "Low Interest Rates",
    description: "Starting at 7.5% p.a.",
    icon: <BadgePercent className="h-10 w-10 text-fintech-blue" />
  },
  {
    title: "Quick Disbursals",
    description: "Get funds in 24 hours",
    icon: <Clock className="h-10 w-10 text-fintech-purple" />
  },
  {
    title: "High Eligibility",
    description: "CIBIL score of 700+",
    icon: <Award className="h-10 w-10 text-fintech-deep-purple" />
  },
  {
    title: "Minimal Documentation",
    description: "Digital application process",
    icon: <ShieldCheck className="h-10 w-10 text-green-500" />
  }
];

export const carLoanEligibilityCriteria = [
  "Age: 21-65 years",
  "Minimum monthly income: ₹25,000",
  "Employment: Salaried or Self-employed",
  "CIBIL score: 700 or above",
  "Existing EMI to income ratio below 50%"
];

export const carLoanRequiredDocuments = [
  "Identity proof (Aadhaar, PAN)",
  "Address proof",
  "Income proof (salary slips, ITR)",
  "Bank statements (last 6 months)",
  "Vehicle proforma invoice",
  "2 passport-sized photographs"
];

export const carLoanProcess = [
  {
    title: "Choose Your Car",
    description: "Select your dream car and get a proforma invoice from the dealer"
  },
  {
    title: "Apply Online",
    description: "Fill the application form and submit required documents"
  },
  {
    title: "Get Approval",
    description: "Receive loan approval within 24-48 hours"
  },
  {
    title: "Drive Home",
    description: "Complete documentation and drive home your new car"
  }
];

export const carLoanFAQs = [
  {
    question: "What documents are required for a car loan?",
    answer: "For a car loan, you typically need identity proof (Aadhaar, PAN), address proof, income proof (salary slips, Form 16, ITR for last 2 years), bank statements for the last 6 months, and vehicle proforma invoice from the dealer."
  },
  {
    question: "What is the maximum loan tenure available?",
    answer: "At Money Bharat, we offer car loans with tenures ranging from 1 to 7 years (84 months). The optimal tenure depends on your repayment capacity and financial goals."
  },
  {
    question: "How is the interest rate determined for my car loan?",
    answer: "Your car loan interest rate depends on several factors including your credit score, income, loan amount, tenure, employment status, relationship with the bank, and the vehicle you're purchasing (new or pre-owned)."
  },
  {
    question: "Can I prepay or foreclose my car loan?",
    answer: "Yes, you can prepay or foreclose your car loan. However, most lenders have a lock-in period of 6-12 months before which prepayment is not allowed. Some lenders may also charge a prepayment penalty, typically 2-5% of the outstanding principal."
  },
  {
    question: "What happens if I miss an EMI payment?",
    answer: "Missing an EMI payment can result in late payment charges, negatively impact your credit score, and in case of consistent defaults, the lender may repossess your vehicle. It's important to communicate with your lender if you anticipate payment difficulties."
  }
];
