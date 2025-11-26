export interface PageSeoMetadata {
  title: string;
  description: string;
  keywords: string;
  type?: "website" | "article";
  image?: string;
  noIndex?: boolean;
}

export const SEO_METADATA = {
  home: {
    title: "Best Mutual Funds, Daily SIP in India | Money Bharat Finance",
    description:
      "Start your wealth journey with Money Bharat Finance, India's trusted platform for mutual funds, daily SIP investing, insurance planning, and AI-enabled financial advice.",
    keywords:
      "Money Bharat Finance, best SIP plan India, daily SIP investment, top mutual funds 2024, health insurance platform, instant personal loans, tax saving funds, investment planning India",
  },
  about: {
    title: "About Us | Money Bharat Finance",
    description:
      "Discover how Money Bharat Finance blends financial expertise with technology to deliver transparent mutual fund, insurance, and loan solutions that empower Indians to build wealth.",
    keywords:
      "Money Bharat story, fintech company India, financial mission statement, mutual fund advisors, insurance experts India, Money Bharat leadership, wealth management platform",
  },
  contact: {
    title: "Contact Us - Money Bharat Finance | Get Expert Financial Advice",
    description:
      "Contact Money Bharat Finance for personalized financial advice on mutual funds, insurance, and loans. Call +91 9970735694 or email contact@moneybharatfinance.com. Free consultation available.",
    keywords:
      "contact money bharat, financial advisor contact, mutual fund advice, insurance consultation, loan assistance, financial planning help, money bharat phone number",
  },
  booking: {
    title: "Book a Consultation | Money Bharat Finance",
    description:
      "Book a free consultation with Money Bharat's SEBI-registered advisors for personalized investment, insurance, tax-planning, or loan guidance tailored to your goals.",
    keywords:
      "book financial consultation, Money Bharat appointment, investment planning call, insurance advisor meeting, tax planning consultation, loan expert India, financial review session",
  },
  mutualFunds: {
    title: "Best Mutual Funds for SIP Investment Online in India 2024 | Money Bharat",
    description:
      "Invest in top-performing mutual funds and start SIP online with Money Bharat's experts. Compare 2000+ schemes across equity, debt, and ELSS tax-saving categories with Rs 15,000 Cr+ AUM.",
    keywords:
      "best mutual funds for SIP, SIP investment online, top mutual funds India, mutual fund distributor, ELSS tax saving funds, SIP calculator India, mutual fund returns, invest in mutual funds",
  },
  insurance: {
    title: "Insurance Plans in India - Health, Life, Term & Vehicle Insurance | Money Bharat",
    description:
      "Compare and buy insurance online across health, life, term, vehicle, and travel categories from 15+ insurers. Get instant quotes, low premiums, and guided claims assistance with Money Bharat.",
    keywords:
      "insurance plans India, health insurance online, term insurance calculator, life insurance plans, vehicle insurance quotes, insurance comparison, insurance policy online, family insurance plans",
  },
  healthInsurance: {
    title: "Best Health Insurance Plans in India 2024 - Compare & Buy Online | Money Bharat",
    description:
      "Compare and buy the best health insurance plans with cashless hospitalization at 10,000+ network hospitals. Get comprehensive family coverage from Rs 5 Lakhs to Rs 1 Crore with instant policy issuance.",
    keywords:
      "best health insurance India, health insurance plans, family health insurance, cashless mediclaim, health insurance premium calculator, medical insurance online, individual health insurance India",
  },
  termInsurance: {
    title: "Best Term Insurance Plans in India 2024 - Online Term Life Insurance | Money Bharat",
    description:
      "Compare and buy term insurance online with high coverage at affordable premiums. Choose plans from Rs 25 Lakhs to Rs 2 Crore, get instant policy issuance, and claim tax benefits under Section 80C and 10(10D).",
    keywords:
      "term insurance calculator, best term insurance India, term life insurance online, term insurance premium calculator, life insurance plans India, online term policy, life cover plans",
  },
  vehicleInsurance: {
    title: "Vehicle Insurance - Compare Car & Bike Insurance Plans | Money Bharat",
    description:
      "Compare car and bike insurance quotes online, get the right IDV, add zero depreciation and roadside assistance covers, and enjoy cashless repairs at 6000+ garages with Money Bharat.",
    keywords:
      "vehicle insurance India, car insurance renewal, bike insurance quotes, zero dep insurance, IDV calculator, motor insurance online, best car insurance plan, four wheeler insurance",
  },
  loansOverview: {
    title: "Loans in India - Personal, Home, Business & More | Money Bharat Finance",
    description:
      "Compare and apply for personal, home, business, car, and education loans from 70+ lending partners. Get instant eligibility checks, lowest interest rates, and fully digital processing with Money Bharat.",
    keywords:
      "loans India, personal loan online, home loan interest rate, business loan eligibility, car loan offers, education loan India, instant loan approval, Money Bharat loans",
  },
  homeLoans: {
    title: "Home Loan Interest Rates & EMI Calculator | Money Bharat Finance",
    description:
      "Find the best home loan offers with Money Bharat's partner banks. Compare interest rates, check eligibility, and use our EMI calculator to plan your dream home purchase.",
    keywords:
      "home loan India, best home loan interest rates, housing loan eligibility, home loan EMI calculator, balance transfer loan, affordable housing finance, Money Bharat home loan",
  },
  taxSaving: {
    title: "Tax Saving Calculator - Money Bharat",
    description:
      "Compare old vs new tax regimes, visualize your tax outgo, and plan Section 80C, 80D, NPS, and home loan deductions with Money Bharat's interactive tax saving calculator.",
    keywords:
      "tax saving calculator, old vs new tax regime, income tax calculator India, Section 80C planning, NPS tax benefits, tax regime comparison, tax planning tool India",
  },
  privacyPolicy: {
    title: "Privacy Policy - Money Bharat Finance",
    description:
      "Read Money Bharat Finance's privacy policy to understand how we collect, store, and protect your personal information across our investment, insurance, and loan services.",
    keywords:
      "Money Bharat privacy policy, data protection India, financial data security, user privacy statement, personal information usage, Money Bharat compliance",
  },
  termsOfService: {
    title: "Terms of Service - Money Bharat Finance",
    description:
      "Review the Terms of Service that govern your use of Money Bharat Finance's website, investment advisory, insurance distribution, and loan facilitation offerings.",
    keywords:
      "Money Bharat terms of service, user agreement, financial services terms, fintech terms and conditions, Money Bharat policies, service agreement India",
  },
  sitemap: {
    title: "Sitemap - Money Bharat Finance",
    description: "Browse all public pages, calculators, loan products, and support resources on the Money Bharat Finance website.",
    keywords: "Money Bharat sitemap, money bharat site structure, website index, financial services sitemap",
    noIndex: true,
  },
  blog: {
    title: "Financial Insights & Expert Advice | Money Bharat Blog",
    description:
      "Stay updated with Money Bharat's financial experts. Explore articles on investing, insurance, loans, taxation, and wealth planning tailored for Indian investors.",
    keywords:
      "financial advice blog, investment tips India, money management articles, mutual fund insights, insurance tips, loan strategies, tax planning blog",
    type: "website",
  },
  calculatorsSip: {
    title: "SIP Calculator - Money Bharat Finance",
    description:
      "Estimate SIP returns, understand wealth creation potential, and plan your monthly investments using Money Bharat's SIP calculator.",
    keywords:
      "SIP calculator India, mutual fund SIP returns, monthly investment calculator, SIP goal planning, SIP maturity value, SIP investment tool",
  },
  calculatorsEmi: {
    title: "EMI Calculator - Money Bharat Finance",
    description:
      "Calculate EMIs for personal, home, business, and vehicle loans. Adjust amount, tenure, and interest rates to plan repayments with Money Bharat.",
    keywords:
      "EMI calculator India, loan EMI planner, home loan EMI, personal loan calculator, car loan EMI tool, loan repayment schedule",
  },
} as const satisfies Record<string, PageSeoMetadata>;

export type SeoMetadataKey = keyof typeof SEO_METADATA;

export const getSeoMetadata = (key: SeoMetadataKey): PageSeoMetadata => SEO_METADATA[key];
