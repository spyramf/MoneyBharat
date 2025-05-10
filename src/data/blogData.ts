
export interface BlogAuthor {
  name: string;
  avatar: string;
  role: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: string;
  author: BlogAuthor;
  publishedDate: string;
  readTime: string;
  tags: string[];
  isFeatured: boolean;
}

export interface BlogCategory {
  name: string;
  slug: string;
  count: number;
}

export const blogCategories: BlogCategory[] = [
  { name: 'All', slug: 'all', count: 12 },
  { name: 'Personal Finance', slug: 'personal-finance', count: 4 },
  { name: 'Investments', slug: 'investments', count: 3 },
  { name: 'Insurance', slug: 'insurance', count: 2 },
  { name: 'Mutual Funds', slug: 'mutual-funds', count: 3 },
  { name: 'Loans & Credit', slug: 'loans-credit', count: 2 },
  { name: 'Tax Planning', slug: 'tax-planning', count: 2 },
];

export const blogAuthors: Record<string, BlogAuthor> = {
  aditya: {
    name: 'Aditya Sharma',
    avatar: '/placeholder.svg',
    role: 'Finance Expert'
  },
  priya: {
    name: 'Priya Patel',
    avatar: '/placeholder.svg',
    role: 'Investment Strategist'
  },
  rahul: {
    name: 'Rahul Mehta',
    avatar: '/placeholder.svg',
    role: 'Insurance Advisor'
  },
  neha: {
    name: 'Neha Gupta',
    avatar: '/placeholder.svg',
    role: 'Tax Consultant'
  }
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '10 Essential Personal Finance Tips Every Indian Should Know',
    slug: '10-essential-personal-finance-tips',
    excerpt: 'Master the basics of personal finance with these essential tips tailored for the Indian market and economic conditions.',
    content: `
      <p>Personal finance management is crucial for financial security and freedom. Here are 10 essential tips every Indian should follow:</p>
      
      <h2>1. Start Investing Early</h2>
      <p>The power of compounding is incredible. Starting your investment journey early, even with small amounts, can lead to significant wealth creation over time.</p>
      
      <h2>2. Create an Emergency Fund</h2>
      <p>Aim to save at least 6 months of expenses in an easily accessible account to handle unexpected financial emergencies.</p>
      
      <h2>3. Get Proper Insurance Coverage</h2>
      <p>Ensure you have adequate health insurance for yourself and your family. Term life insurance is essential if you have dependents.</p>
      
      <h2>4. Budget Effectively</h2>
      <p>Follow the 50-30-20 rule: 50% on needs, 30% on wants, and 20% on savings and investments.</p>
      
      <h2>5. Diversify Your Investments</h2>
      <p>Don't put all your eggs in one basket. Spread your investments across asset classes like equity, debt, gold, and real estate.</p>
      
      <h2>6. Minimize Debt, Especially High-Interest Debt</h2>
      <p>Credit card debt and personal loans can be extremely expensive. Prioritize repaying high-interest debt.</p>
      
      <h2>7. Plan for Retirement</h2>
      <p>Start contributing to retirement funds like EPF, PPF, and NPS early to ensure a comfortable retirement.</p>
      
      <h2>8. Stay Informed About Taxes</h2>
      <p>Understanding tax rules can help you save significant amounts through legal deductions and exemptions.</p>
      
      <h2>9. Set Financial Goals</h2>
      <p>Define short-term, mid-term, and long-term financial goals to give direction to your financial planning.</p>
      
      <h2>10. Review and Adjust Regularly</h2>
      <p>Financial planning is not a one-time activity. Review your financial plan regularly and make necessary adjustments as your life circumstances change.</p>
      
      <p>Following these principles consistently will put you on the path to financial security and independence.</p>
    `,
    featuredImage: '/placeholder.svg',
    category: 'Personal Finance',
    author: blogAuthors.aditya,
    publishedDate: 'May 2, 2025',
    readTime: '6 min read',
    tags: ['Personal Finance', 'Budgeting', 'Financial Planning'],
    isFeatured: true
  },
  {
    id: 2,
    title: 'Understanding Mutual Funds: A Beginner's Guide for Indian Investors',
    slug: 'understanding-mutual-funds-beginners-guide',
    excerpt: 'Learn the fundamentals of mutual fund investing and how to build a portfolio that aligns with your financial goals.',
    content: `
      <p>Mutual funds have revolutionized how average investors access the financial markets. This guide will help beginners understand the essentials.</p>
      
      <h2>What Are Mutual Funds?</h2>
      <p>Mutual funds are investment vehicles that pool money from multiple investors to purchase securities like stocks, bonds, and other assets. Professional fund managers handle these investments, making decisions on behalf of investors.</p>
      
      <h2>Types of Mutual Funds in India</h2>
      
      <h3>Equity Funds</h3>
      <p>These invest primarily in stocks and are suitable for investors with a higher risk appetite looking for long-term growth.</p>
      
      <h3>Debt Funds</h3>
      <p>These invest in fixed-income securities like government bonds and corporate debt, offering more stability than equity funds.</p>
      
      <h3>Hybrid Funds</h3>
      <p>These invest in a mix of equity and debt, providing a balance between growth and stability.</p>
      
      <h3>Index Funds</h3>
      <p>These passively track a market index like Nifty 50 or Sensex, offering market returns at lower expense ratios.</p>
      
      <h2>How to Start Investing in Mutual Funds</h2>
      
      <h3>1. KYC Completion</h3>
      <p>Complete your Know Your Customer (KYC) process, which is mandatory for investing in mutual funds in India.</p>
      
      <h3>2. Choose Investment Mode</h3>
      <p>Decide between lump sum investments or Systematic Investment Plans (SIPs), where you invest fixed amounts regularly.</p>
      
      <h3>3. Select Funds Based on Goals</h3>
      <p>Choose funds that align with your financial goals, risk tolerance, and investment horizon.</p>
      
      <h2>Important Factors to Consider</h2>
      
      <h3>Expense Ratio</h3>
      <p>This is the annual fee charged by the fund. Lower expense ratios mean more returns for you.</p>
      
      <h3>Fund Performance</h3>
      <p>Look at consistent performers over 5-10 years rather than funds with recent spectacular returns.</p>
      
      <h3>Fund Manager Experience</h3>
      <p>Experienced fund managers often navigate market volatility better.</p>
      
      <p>Start small, stay consistent, and gradually increase your understanding and investment amounts as you get more comfortable with mutual fund investing.</p>
    `,
    featuredImage: '/placeholder.svg',
    category: 'Mutual Funds',
    author: blogAuthors.priya,
    publishedDate: 'May 7, 2025',
    readTime: '8 min read',
    tags: ['Mutual Funds', 'Investments', 'SIP'],
    isFeatured: true
  },
  {
    id: 3,
    title: 'Health Insurance in India: Coverage Options and How to Choose',
    slug: 'health-insurance-india-coverage-options',
    excerpt: 'Navigate the complex world of health insurance in India and find the right coverage for you and your family.',
    content: `
      <p>Health insurance is no longer a luxury but a necessity in today's world of rising medical costs. Here's what you need to know about health insurance in India.</p>
      
      <h2>Why Health Insurance is Essential</h2>
      <p>Medical emergencies can strike anytime, and hospitalization costs in India have been rising at 10-15% annually. A comprehensive health insurance policy acts as a financial safety net during such times.</p>
      
      <h2>Types of Health Insurance Policies</h2>
      
      <h3>Individual Health Insurance</h3>
      <p>Covers a single person and is ideal for young professionals or those with specific health concerns.</p>
      
      <h3>Family Floater Policies</h3>
      <p>A single policy covering the entire family, with the sum insured shared among all members. It's cost-effective for young families.</p>
      
      <h3>Senior Citizen Policies</h3>
      <p>Specialized policies for those above 60 years, with coverage for age-related conditions.</p>
      
      <h3>Critical Illness Policies</h3>
      <p>Provide lump-sum payments upon diagnosis of specified critical illnesses like cancer or heart attack.</p>
      
      <h2>Key Factors When Choosing Health Insurance</h2>
      
      <h3>Coverage Amount</h3>
      <p>In metro cities, experts recommend a minimum cover of ₹5-10 lakhs per person.</p>
      
      <h3>Network Hospitals</h3>
      <p>Choose insurers with a wide network of hospitals for cashless treatment, especially in your area.</p>
      
      <h3>Waiting Periods</h3>
      <p>Check waiting periods for pre-existing diseases and specific procedures like cataract or knee replacement.</p>
      
      <h3>Sub-limits and Co-payment</h3>
      <p>Policies with fewer sub-limits on room rent and no co-payment clauses are generally better.</p>
      
      <h3>Claim Settlement Ratio</h3>
      <p>Higher claim settlement ratios indicate the insurer's reliability in honoring claims.</p>
      
      <h2>Beyond the Basic Plan</h2>
      
      <h3>Top-up and Super Top-up Plans</h3>
      <p>These cost-effective additions can significantly increase your coverage at a fraction of the cost of a higher base plan.</p>
      
      <h3>OPD Coverage</h3>
      <p>Some plans now cover outpatient department expenses, which can be valuable for families with frequent doctor visits.</p>
      
      <p>Remember, the best health insurance is one that you buy before you need it. Don't wait for a medical emergency to consider health insurance.</p>
    `,
    featuredImage: '/placeholder.svg',
    category: 'Insurance',
    author: blogAuthors.rahul,
    publishedDate: 'May 10, 2025',
    readTime: '7 min read',
    tags: ['Health Insurance', 'Family Insurance', 'Medical Coverage'],
    isFeatured: true
  },
  {
    id: 4,
    title: 'Tax-Saving Investment Options for Indian Taxpayers',
    slug: 'tax-saving-investment-options',
    excerpt: 'Explore various tax-saving instruments under Section 80C and beyond to optimize your tax liability while growing your wealth.',
    content: `
      <p>Smart tax planning is not just about saving taxes but also about making your money work for you. Let's explore the best tax-saving options available to Indian taxpayers.</p>
      
      <h2>Section 80C Investments (Limit: ₹1.5 Lakhs)</h2>
      
      <h3>Equity-Linked Savings Scheme (ELSS)</h3>
      <p>These mutual funds come with a 3-year lock-in period and potential for high returns through equity investment. They're ideal for young investors with a high-risk appetite.</p>
      
      <h3>Public Provident Fund (PPF)</h3>
      <p>A government-backed scheme with a 15-year tenure offering tax-free interest (currently around 7.1%). It's perfect for risk-averse investors looking for steady returns.</p>
      
      <h3>National Pension System (NPS)</h3>
      <p>A long-term retirement savings option with market-linked returns. Additional tax benefit of ₹50,000 under Section 80CCD(1B) beyond the 80C limit.</p>
      
      <h3>Tax-Saving Fixed Deposits</h3>
      <p>Bank FDs with a 5-year lock-in period offering guaranteed returns. Suitable for conservative investors, especially seniors.</p>
      
      <h3>Sukanya Samriddhi Yojana (SSY)</h3>
      <p>A government scheme for the girl child with tax-free interest and a 21-year maturity period. Currently offers one of the highest interest rates among government schemes.</p>
      
      <h2>Beyond Section 80C</h2>
      
      <h3>Health Insurance Premiums (Section 80D)</h3>
      <p>Deductions up to ₹25,000 for self and family, plus an additional ₹25,000 for parents (₹50,000 if parents are senior citizens).</p>
      
      <h3>Home Loan Benefits</h3>
      <p>Principal repayment falls under Section 80C, while interest payment qualifies for deduction under Section 24 (up to ₹2 lakhs for self-occupied property).</p>
      
      <h3>Education Loan Interest (Section 80E)</h3>
      <p>No upper limit on the deduction for interest paid on education loans.</p>
      
      <h2>New Tax Regime vs. Old Tax Regime</h2>
      <p>With the introduction of the new tax regime offering lower tax rates but fewer exemptions, it's crucial to calculate which regime benefits you more based on your investment and expenditure patterns.</p>
      
      <h2>Tax Planning Throughout the Year</h2>
      <p>Don't rush tax-saving investments in the last quarter. Plan throughout the year with systematic investments for better returns and less financial stress.</p>
      
      <p>Remember, the goal should be tax optimization, not just tax saving. Choose investments that align with your financial goals, risk tolerance, and liquidity needs.</p>
    `,
    featuredImage: '/placeholder.svg',
    category: 'Tax Planning',
    author: blogAuthors.neha,
    publishedDate: 'May 15, 2025',
    readTime: '9 min read',
    tags: ['Tax Planning', 'Section 80C', 'Investment'],
    isFeatured: false
  },
  {
    id: 5,
    title: 'Demystifying Home Loans: How to Get the Best Deal in India',
    slug: 'demystifying-home-loans',
    excerpt: 'Navigate the complex process of securing a home loan with confidence and get the most favorable terms for your dream home.',
    content: ``,
    featuredImage: '/placeholder.svg',
    category: 'Loans & Credit',
    author: blogAuthors.aditya,
    publishedDate: 'May 18, 2025',
    readTime: '10 min read',
    tags: ['Home Loans', 'Real Estate', 'Mortgage'],
    isFeatured: false
  },
  {
    id: 6,
    title: 'SIP vs. Lump Sum Investing: Which Strategy Works Better?',
    slug: 'sip-vs-lump-sum-investing',
    excerpt: 'Compare the two primary approaches to mutual fund investing and understand which might be better suited for your financial situation.',
    content: ``,
    featuredImage: '/placeholder.svg',
    category: 'Mutual Funds',
    author: blogAuthors.priya,
    publishedDate: 'May 22, 2025',
    readTime: '7 min read',
    tags: ['SIP', 'Mutual Funds', 'Investment Strategy'],
    isFeatured: false
  },
  {
    id: 7,
    title: 'The Ultimate Guide to Term Insurance in India',
    slug: 'ultimate-guide-term-insurance',
    excerpt: 'Learn why term insurance is the most essential form of life insurance and how to select the right policy for your family\'s protection.',
    content: ``,
    featuredImage: '/placeholder.svg',
    category: 'Insurance',
    author: blogAuthors.rahul,
    publishedDate: 'May 25, 2025',
    readTime: '8 min read',
    tags: ['Term Insurance', 'Life Insurance', 'Financial Planning'],
    isFeatured: false
  },
  {
    id: 8,
    title: 'Emergency Fund: Why You Need One and How to Build It',
    slug: 'emergency-fund-importance-building',
    excerpt: 'Discover the importance of having an emergency fund in your financial portfolio and strategies to build one effectively.',
    content: ``,
    featuredImage: '/placeholder.svg',
    category: 'Personal Finance',
    author: blogAuthors.aditya,
    publishedDate: 'May 28, 2025',
    readTime: '6 min read',
    tags: ['Emergency Fund', 'Financial Security', 'Savings'],
    isFeatured: false
  },
  {
    id: 9,
    title: 'Credit Cards: Maximizing Benefits While Avoiding Debt Traps',
    slug: 'credit-cards-benefits-avoiding-debt',
    excerpt: 'Learn how to leverage credit card rewards and benefits without falling into debt cycles that can derail your finances.',
    content: ``,
    featuredImage: '/placeholder.svg',
    category: 'Loans & Credit',
    author: blogAuthors.priya,
    publishedDate: 'Jun 1, 2025',
    readTime: '7 min read',
    tags: ['Credit Cards', 'Debt Management', 'Personal Finance'],
    isFeatured: false
  },
  {
    id: 10,
    title: 'Understanding Capital Gains Tax on Your Investments',
    slug: 'understanding-capital-gains-tax',
    excerpt: 'A comprehensive guide to how capital gains are taxed in India across different asset classes and holding periods.',
    content: ``,
    featuredImage: '/placeholder.svg',
    category: 'Tax Planning',
    author: blogAuthors.neha,
    publishedDate: 'Jun 5, 2025',
    readTime: '9 min read',
    tags: ['Capital Gains', 'Taxation', 'Investment'],
    isFeatured: false
  },
  {
    id: 11,
    title: 'Index Funds vs. Active Funds: Making the Right Choice',
    slug: 'index-funds-vs-active-funds',
    excerpt: 'Compare passive and active investment strategies to determine which approach might be better for different segments of your portfolio.',
    content: ``,
    featuredImage: '/placeholder.svg',
    category: 'Mutual Funds',
    author: blogAuthors.priya,
    publishedDate: 'Jun 10, 2025',
    readTime: '8 min read',
    tags: ['Index Funds', 'Mutual Funds', 'Passive Investing'],
    isFeatured: false
  },
  {
    id: 12,
    title: 'Budgeting in the Digital Age: Apps and Strategies',
    slug: 'budgeting-digital-age-apps-strategies',
    excerpt: 'Explore modern budgeting techniques and digital tools that can help you manage your finances more effectively.',
    content: ``,
    featuredImage: '/placeholder.svg',
    category: 'Personal Finance',
    author: blogAuthors.aditya,
    publishedDate: 'Jun 15, 2025',
    readTime: '6 min read',
    tags: ['Budgeting', 'Financial Apps', 'Money Management'],
    isFeatured: false
  }
];
