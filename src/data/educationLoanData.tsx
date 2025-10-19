import { Calculator, Book, School, GraduationCap } from "lucide-react";

export const educationLoanFeatures = [
  {
    title: "Flexible Loan Amounts",
    description: "Get funding from ₹50,000 up to ₹1.5 Crore based on your course and institution",
    icon: <Calculator className="h-10 w-10 text-fintech-purple" />
  },
  {
    title: "Comprehensive Coverage",
    description: "Covers tuition fees, hostel expenses, books, laptop, and other study materials",
    icon: <Book className="h-10 w-10 text-fintech-orange" />
  },
  {
    title: "Long Repayment Period",
    description: "Enjoy repayment tenures up to 15 years with moratorium during study period",
    icon: <School className="h-10 w-10 text-fintech-blue" />
  },
  {
    title: "Tax Benefits",
    description: "Get tax deductions under Section 80E for interest paid on education loan",
    icon: <GraduationCap className="h-10 w-10 text-green-600" />
  }
];

export const educationLoanEligibilityCriteria = [
  "Indian citizen between 18-35 years of age",
  "Admission confirmed in a recognized institution",
  "Co-applicant (parent/guardian) mandatory",
  "Good academic track record",
  "Course from approved list of institutions"
];

export const educationLoanRequiredDocuments = [
  "Identity proof (Aadhaar, PAN)",
  "Address proof",
  "Income proof of parents/guardian",
  "Academic records",
  "Proof of admission",
  "Cost estimate from institution",
  "Collateral documents (if applicable)"
];

export const educationLoanProcess = [
  {
    title: "Application",
    description: "Fill the online application form with your details"
  },
  {
    title: "Documentation",
    description: "Submit required documents and admission proof"
  },
  {
    title: "Verification",
    description: "Our team verifies your application and documents"
  },
  {
    title: "Disbursement",
    description: "Loan amount disbursed directly to the institution"
  }
];

export const educationLoanFAQs = [
  {
    question: "What documents are required for an education loan?",
    answer: "You'll typically need identity proof (Aadhaar, PAN), address proof, income proof of parents/guardian, academic records, proof of admission, cost estimate from the institution, and collateral documents if applicable."
  },
  {
    question: "Is a co-applicant necessary for an education loan?",
    answer: "Yes, most banks require a parent or guardian as a co-applicant for education loans to serve as a guarantor for loan repayment."
  },
  {
    question: "When do I start repaying my education loan?",
    answer: "Most education loans come with a moratorium period, which typically includes the course duration plus 6-12 months after course completion or getting a job, whichever is earlier. During this period, you might only need to pay simple interest."
  },
  {
    question: "Can I get tax benefits on my education loan?",
    answer: "Yes, under Section 80E of the Income Tax Act, you can claim a deduction for the interest paid on an education loan. There's no upper limit on the interest amount that can be claimed, and the deduction can be claimed for a maximum period of 8 years."
  },
  {
    question: "Can education loans cover living expenses abroad?",
    answer: "Yes, education loans for studying abroad typically cover tuition fees, hostel fees, examination fees, library fees, laboratory fees, purchase of books, equipment, instruments, uniforms, computer expenses, and reasonable living expenses."
  }
];
