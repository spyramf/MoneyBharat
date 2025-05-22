import { IconType } from "lucide-react";

export const insuranceCategories = [{
  id: "health",
  title: "Health Insurance",
  iconName: "Heart",
  description: "Comprehensive health coverage for individuals and families"
}, {
  id: "life",
  title: "Life Insurance",
  iconName: "Shield",
  description: "Secure your family's future with our life insurance plans"
}, {
  id: "car",
  title: "Car Insurance",
  iconName: "Car",
  description: "Protect your vehicle against accidents and damages"
}, {
  id: "home",
  title: "Home Insurance",
  iconName: "Home",
  description: "Safeguard your home and belongings"
}, {
  id: "term",
  title: "Term Insurance",
  iconName: "ShieldCheck",
  description: "High coverage at affordable premiums"
}];

export const insuranceTypes = [{
  id: "health",
  title: "Health Insurance",
  cards: [{
    title: "Individual Health",
    description: "Comprehensive health protection for you with customizable coverage options",
    iconName: "User",
    color: "bg-gradient-to-r from-fintech-purple to-fintech-blue"
  }, {
    title: "Family Health",
    description: "Coverage for your entire family under a single policy with enhanced benefits",
    iconName: "User",
    color: "bg-gradient-to-r from-fintech-blue to-fintech-ocean-blue"
  }, {
    title: "Senior Citizen",
    description: "Special health plans designed for the needs of senior citizens",
    iconName: "User",
    color: "bg-gradient-to-r from-fintech-orange to-fintech-purple"
  }, {
    title: "Critical Illness",
    description: "Financial protection against major illnesses with lump-sum benefits",
    iconName: "Heart",
    color: "bg-gradient-to-r from-fintech-deep-purple to-fintech-purple"
  }]
}, {
  id: "life",
  title: "Life Insurance",
  cards: [{
    title: "Term Life",
    description: "High coverage at affordable premiums for a specific period",
    iconName: "Shield",
    color: "bg-gradient-to-r from-fintech-purple to-fintech-blue"
  }, {
    title: "Whole Life",
    description: "Lifetime coverage with savings benefit for your family",
    iconName: "ShieldCheck",
    color: "bg-gradient-to-r from-fintech-blue to-fintech-ocean-blue"
  }, {
    title: "Child Plans",
    description: "Secure your child's future education and milestones",
    iconName: "User",
    color: "bg-gradient-to-r from-fintech-orange to-fintech-purple"
  }, {
    title: "Retirement Plans",
    description: "Build a corpus for your retirement years with guaranteed returns",
    iconName: "Briefcase",
    color: "bg-gradient-to-r from-fintech-deep-purple to-fintech-purple"
  }]
}, {
  id: "car",
  title: "Car Insurance",
  cards: [{
    title: "Comprehensive",
    description: "Complete protection for your vehicle against damages and third-party liability",
    iconName: "Car",
    color: "bg-gradient-to-r from-fintech-purple to-fintech-blue"
  }, {
    title: "Third-Party",
    description: "Mandatory insurance covering damages to third parties",
    iconName: "Car",
    color: "bg-gradient-to-r from-fintech-blue to-fintech-ocean-blue"
  }, {
    title: "Zero Depreciation",
    description: "Get full claim without accounting for vehicle depreciation",
    iconName: "Car",
    color: "bg-gradient-to-r from-fintech-orange to-fintech-purple"
  }, {
    title: "Add-ons",
    description: "Customize your policy with additional protections like roadside assistance",
    iconName: "Car",
    color: "bg-gradient-to-r from-fintech-deep-purple to-fintech-purple"
  }]
}, {
  id: "home",
  title: "Home Insurance",
  cards: [{
    title: "Building Insurance",
    description: "Protection for your home structure against damages",
    iconName: "Home",
    color: "bg-gradient-to-r from-fintech-purple to-fintech-blue"
  }, {
    title: "Contents Insurance",
    description: "Coverage for valuables and belongings inside your home",
    iconName: "Home",
    color: "bg-gradient-to-r from-fintech-blue to-fintech-ocean-blue"
  }, {
    title: "Combined Policy",
    description: "Comprehensive coverage for both structure and contents",
    iconName: "Home",
    color: "bg-gradient-to-r from-fintech-orange to-fintech-purple"
  }, {
    title: "Natural Disasters",
    description: "Additional coverage against floods, earthquakes and other calamities",
    iconName: "Umbrella",
    color: "bg-gradient-to-r from-fintech-deep-purple to-fintech-purple"
  }]
}, {
  id: "term",
  title: "Term Insurance",
  cards: [{
    title: "Regular Term",
    description: "Pure life coverage with high sum assured at affordable premiums",
    iconName: "ShieldCheck",
    color: "bg-gradient-to-r from-fintech-purple to-fintech-blue"
  }, {
    title: "Return of Premium",
    description: "Get all your premiums back at policy maturity",
    iconName: "ShieldCheck",
    color: "bg-gradient-to-r from-fintech-blue to-fintech-ocean-blue"
  }, {
    title: "Increasing Term",
    description: "Sum assured increases over time to match inflation",
    iconName: "ShieldCheck",
    color: "bg-gradient-to-r from-fintech-orange to-fintech-purple"
  }, {
    title: "Critical Illness Rider",
    description: "Added protection against major illnesses with your term plan",
    iconName: "Heart",
    color: "bg-gradient-to-r from-fintech-deep-purple to-fintech-purple"
  }]
}];

export const topInsuranceProviders = [
  {
    name: "HDFC ERGO",
    category: "Health & General",
    claimSettlement: "98.5%",
    networkHospitals: "12,500+",
    rating: "4.8",
    riskProfile: "Very Good",
    colorClass: "bg-green-500"
  },
  {
    name: "ICICI Lombard",
    category: "Health & General",
    claimSettlement: "97.9%",
    networkHospitals: "10,800+",
    rating: "4.7",
    riskProfile: "Very Good",
    colorClass: "bg-green-500"
  },
  {
    name: "Bajaj Allianz",
    category: "Life & Health",
    claimSettlement: "97.2%",
    networkHospitals: "9,500+",
    rating: "4.5",
    riskProfile: "Good",
    colorClass: "bg-blue-500"
  },
  {
    name: "SBI Life Insurance",
    category: "Life Insurance",
    claimSettlement: "98.1%",
    networkHospitals: "N/A",
    rating: "4.6",
    riskProfile: "Very Good",
    colorClass: "bg-green-500"
  },
  {
    name: "Star Health",
    category: "Health Insurance",
    claimSettlement: "96.8%",
    networkHospitals: "11,200+",
    rating: "4.4",
    riskProfile: "Good",
    colorClass: "bg-blue-500"
  }
];

export const frequentlyAskedQuestions = [
  {
    question: "What is the waiting period in health insurance?",
    answer: "A waiting period is a specific time during which you cannot claim benefits under your health insurance policy. It typically ranges from 30 days to 4 years depending on the condition. Pre-existing diseases usually have a waiting period of 2-4 years."
  },
  {
    question: "How do I choose the right insurance cover amount?",
    answer: "Consider factors like your age, medical history, family health history, lifestyle, income, and existing liabilities. For health insurance, a cover of at least ₹5-10 lakhs is recommended for individuals in metro cities, while for life insurance, a cover of at least 10 times your annual income is advisable."
  },
  {
    question: "What is claim settlement ratio and why is it important?",
    answer: "Claim settlement ratio is the percentage of claims an insurer has settled compared to the total claims received. A higher ratio (ideally above 95%) indicates the insurer is more likely to honor valid claims, making it an important factor when choosing an insurance provider."
  },
  {
    question: "Can I port my existing health insurance policy?",
    answer: "Yes, IRDAI regulations allow you to port your health insurance policy from one insurer to another while maintaining continuity benefits like waiting periods for pre-existing conditions. You need to apply for portability at least 45 days before your existing policy's renewal date."
  },
  {
    question: "What tax benefits do insurance policies offer?",
    answer: "Under Section 80C, premiums paid for life insurance policies qualify for tax deduction up to ₹1.5 lakhs. Under Section 80D, premiums paid for health insurance policies qualify for deduction up to ₹25,000 for self, spouse and children (additional ₹25,000 for parents, and ₹50,000 if parents are senior citizens)."
  }
];

export const insuranceKeyBenefits = [
  {
    title: "Financial Protection",
    description: "Insurance provides a financial safety net for you and your family against unexpected events and major financial losses.",
    iconName: "Shield",
    iconBg: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    title: "Peace of Mind",
    description: "With insurance coverage, you can enjoy greater peace of mind knowing that you're protected against life's uncertainties.",
    iconName: "ShieldCheck",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    title: "Tax Benefits",
    description: "Many insurance policies offer tax advantages, helping you reduce your tax liability while securing your future.",
    iconName: "FileChartLine",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  {
    title: "Estate Planning",
    description: "Life insurance can be an important tool in estate planning, ensuring your wealth is transferred to your beneficiaries as intended.",
    iconName: "Briefcase",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600"
  },
  {
    title: "Cashless Treatment",
    description: "Health insurance policies offer cashless treatment at network hospitals, making healthcare access smoother during emergencies.",
    iconName: "Heart",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600"
  },
  {
    title: "Long-term Savings",
    description: "Some insurance policies double as investment instruments, helping you build a corpus for your long-term financial goals.",
    iconName: "User",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600"
  }
];

export const moneyBharatBenefits = [
  {
    title: "Compare Multiple Insurers",
    description: "Compare quotes from 50+ insurers in one place to find the best coverage at the best price",
    color: "bg-gradient-to-r from-fintech-purple to-fintech-blue"
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees or charges. Get clear and transparent pricing on all insurance plans",
    color: "bg-gradient-to-r from-fintech-orange to-fintech-purple"
  },
  {
    title: "Expert Assistance",
    description: "Our insurance experts guide you through the entire process, from selection to claims",
    color: "bg-gradient-to-r from-fintech-blue to-fintech-ocean-blue"
  },
  {
    title: "Fast Policy Issuance",
    description: "Get your policy issued quickly with minimal paperwork and hassle-free processing",
    color: "bg-gradient-to-r from-fintech-deep-purple to-fintech-purple"
  }
];
