import { supabase } from '@/integrations/supabase/client';

export async function seedBlogData() {
  try {
    console.log('Starting blog data seeding...');

    // Get existing categories and author
    const { data: categories } = await supabase
      .from('blog_categories')
      .select('id, slug');
    
    const { data: existingAuthors } = await supabase
      .from('blog_authors')
      .select('id, email');

    if (!categories || !existingAuthors) {
      throw new Error('Failed to fetch existing data');
    }

    const categoryMap = categories.reduce((acc, cat) => {
      acc[cat.slug] = cat.id;
      return acc;
    }, {} as Record<string, string>);

    // Add more authors
    const newAuthors = [
      {
        name: 'Priya Sharma',
        email: 'priya.sharma@moneybharat.com',
        role: 'Senior Investment Analyst',
        bio: 'With over 10 years of experience in mutual fund analysis and portfolio management, Priya helps investors make informed investment decisions.',
        avatar_url: '/images/authors/priya-sharma.jpg'
      },
      {
        name: 'Rahul Gupta',
        email: 'rahul.gupta@moneybharat.com',
        role: 'Tax Planning Expert',
        bio: 'Rahul specializes in tax-efficient investment strategies and has helped thousands of clients optimize their tax savings.',
        avatar_url: '/images/authors/rahul-gupta.jpg'
      },
      {
        name: 'Anjali Patel',
        email: 'anjali.patel@moneybharat.com',
        role: 'Insurance Specialist',
        bio: 'Anjali has extensive knowledge in life and health insurance products, helping clients choose the right coverage for their needs.',
        avatar_url: '/images/authors/anjali-patel.jpg'
      }
    ];

    // Filter out authors that already exist
    const authorsToInsert = newAuthors.filter(
      author => !existingAuthors.some(existing => existing.email === author.email)
    );

    let authorIds: Record<string, string> = {};
    
    if (authorsToInsert.length > 0) {
      const { data: insertedAuthors, error: authorsError } = await supabase
        .from('blog_authors')
        .insert(authorsToInsert)
        .select('id, email');

      if (authorsError) {
        console.error('Error inserting authors:', authorsError);
      } else if (insertedAuthors) {
        insertedAuthors.forEach(author => {
          authorIds[author.email] = author.id;
        });
      }
    }

    // Get all authors for blog posts
    const { data: allAuthors } = await supabase
      .from('blog_authors')
      .select('id, email');

    const authorMap = allAuthors?.reduce((acc, author) => {
      acc[author.email] = author.id;
      return acc;
    }, {} as Record<string, string>) || {};

    // Add comprehensive blog posts
    const blogPosts = [
      {
        title: 'Understanding Mutual Fund Returns: A Complete Guide',
        slug: 'understanding-mutual-fund-returns-guide',
        excerpt: 'Learn how to analyze and compare mutual fund returns effectively to make better investment decisions.',
        content: `
          <h2>Introduction to Mutual Fund Returns</h2>
          <p>Understanding mutual fund returns is crucial for making informed investment decisions. In this comprehensive guide, we'll explore different types of returns, how to calculate them, and what they mean for your investments.</p>
          
          <h3>Types of Returns</h3>
          <ul>
            <li><strong>Absolute Returns:</strong> The simple percentage gain or loss over a period</li>
            <li><strong>CAGR (Compound Annual Growth Rate):</strong> The rate of return that would be required for an investment to grow from its beginning balance to its ending balance</li>
            <li><strong>XIRR (Extended Internal Rate of Return):</strong> Used for SIP investments with multiple cash flows</li>
          </ul>

          <h3>Factors Affecting Returns</h3>
          <p>Several factors influence mutual fund returns including market conditions, fund management quality, expense ratios, and investment strategy. Understanding these factors helps you set realistic expectations.</p>

          <h3>How to Compare Returns</h3>
          <p>When comparing mutual fund returns, always compare funds within the same category, consider the time period, and look at risk-adjusted returns rather than just raw returns.</p>

          <h3>Conclusion</h3>
          <p>Remember, past performance doesn't guarantee future results. Use returns as one of many factors in your investment decision-making process.</p>
        `,
        category_id: categoryMap['mutual-funds'],
        author_id: authorMap['priya.sharma@moneybharat.com'] || authorMap['admin@moneybharat.com'],
        status: 'published',
        is_featured: true,
        read_time: 8,
        featured_image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
        tags: ['mutual funds', 'returns', 'investment', 'CAGR'],
        meta_title: 'Understanding Mutual Fund Returns: Complete Guide 2024',
        meta_description: 'Learn how to analyze mutual fund returns, understand CAGR, XIRR, and make better investment decisions with our comprehensive guide.',
        published_at: new Date().toISOString()
      },
      {
        title: 'Top Tax Saving Investment Options for 2024',
        slug: 'tax-saving-investment-options-2024',
        excerpt: 'Discover the best tax-saving investment options under Section 80C and other sections to minimize your tax liability.',
        content: `
          <h2>Maximize Your Tax Savings</h2>
          <p>Tax planning is an essential part of financial planning. Here are the best tax-saving investment options available in 2024.</p>
          
          <h3>Section 80C Investments</h3>
          <ul>
            <li><strong>ELSS Mutual Funds:</strong> Equity Linked Savings Schemes with 3-year lock-in</li>
            <li><strong>PPF:</strong> Public Provident Fund offering guaranteed returns</li>
            <li><strong>EPF:</strong> Employee Provident Fund for salaried individuals</li>
            <li><strong>Tax Saver FDs:</strong> 5-year fixed deposits</li>
            <li><strong>Life Insurance:</strong> Premium payments under eligible policies</li>
          </ul>

          <h3>Beyond Section 80C</h3>
          <p>Don't limit yourself to 80C. Explore Section 80D for health insurance, 80G for donations, and NPS for additional deductions.</p>

          <h3>ELSS vs PPF: Which is Better?</h3>
          <p>ELSS offers higher potential returns but comes with market risk. PPF provides guaranteed returns with complete safety. Choose based on your risk appetite and financial goals.</p>

          <h3>Planning Tips</h3>
          <p>Start early in the financial year, diversify across different instruments, and don't invest just for tax savings—ensure the investment aligns with your financial goals.</p>
        `,
        category_id: categoryMap['tax-planning'],
        author_id: authorMap['rahul.gupta@moneybharat.com'] || authorMap['admin@moneybharat.com'],
        status: 'published',
        is_featured: true,
        read_time: 10,
        featured_image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=400&fit=crop',
        tags: ['tax planning', '80C', 'ELSS', 'PPF', 'tax savings'],
        meta_title: 'Top Tax Saving Investment Options 2024 | Save Tax Legally',
        meta_description: 'Explore the best tax-saving investments under Section 80C and other sections. Learn about ELSS, PPF, NPS and more to reduce your tax liability.',
        published_at: new Date().toISOString()
      },
      {
        title: 'Health Insurance: What You Need to Know',
        slug: 'health-insurance-complete-guide',
        excerpt: 'Everything you need to know about choosing the right health insurance policy for you and your family.',
        content: `
          <h2>Why Health Insurance is Essential</h2>
          <p>Medical costs are rising rapidly. A comprehensive health insurance policy protects your finances from unexpected medical expenses and ensures quality healthcare for your family.</p>
          
          <h3>Types of Health Insurance</h3>
          <ul>
            <li><strong>Individual Health Insurance:</strong> Covers one person</li>
            <li><strong>Family Floater:</strong> Single sum insured for entire family</li>
            <li><strong>Critical Illness:</strong> Lump sum payment for specified illnesses</li>
            <li><strong>Senior Citizen Plans:</strong> Specialized coverage for elderly</li>
          </ul>

          <h3>Key Features to Look For</h3>
          <p>Coverage amount, network hospitals, waiting periods, pre and post-hospitalization coverage, room rent limits, and claim settlement ratio are crucial factors to consider.</p>

          <h3>Common Exclusions</h3>
          <p>Most policies exclude pre-existing conditions for initial years, cosmetic procedures, and experimental treatments. Read policy documents carefully.</p>

          <h3>Claim Process</h3>
          <p>Familiarize yourself with both cashless and reimbursement claim processes. Keep all medical documents organized for smooth claim settlement.</p>
        `,
        category_id: categoryMap['insurance'],
        author_id: authorMap['anjali.patel@moneybharat.com'] || authorMap['admin@moneybharat.com'],
        status: 'published',
        is_featured: false,
        read_time: 12,
        featured_image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=400&fit=crop',
        tags: ['health insurance', 'family floater', 'medical insurance', 'coverage'],
        meta_title: 'Health Insurance Guide 2024: Choose the Right Policy',
        meta_description: 'Complete guide to health insurance in India. Learn about types, coverage, claim process, and how to choose the best policy for your family.',
        published_at: new Date().toISOString()
      },
      {
        title: 'Personal Loan vs Credit Card: Which is Better?',
        slug: 'personal-loan-vs-credit-card-comparison',
        excerpt: 'Understanding when to use a personal loan versus a credit card for your financing needs.',
        content: `
          <h2>Making the Right Choice</h2>
          <p>Both personal loans and credit cards offer access to funds, but they work differently and suit different financial needs.</p>
          
          <h3>Personal Loans: Pros and Cons</h3>
          <p><strong>Advantages:</strong> Lower interest rates, fixed repayment schedule, larger loan amounts, predictable EMIs.</p>
          <p><strong>Disadvantages:</strong> Less flexible, processing fees, prepayment charges, longer approval process.</p>

          <h3>Credit Cards: Pros and Cons</h3>
          <p><strong>Advantages:</strong> Instant access to credit, reward points, interest-free period, revolving credit.</p>
          <p><strong>Disadvantages:</strong> Higher interest rates, temptation to overspend, annual fees, late payment penalties.</p>

          <h3>When to Choose Personal Loan</h3>
          <ul>
            <li>Large one-time expenses (wedding, home renovation)</li>
            <li>Debt consolidation</li>
            <li>Medical emergencies requiring significant funds</li>
            <li>When you need lower interest rates</li>
          </ul>

          <h3>When to Choose Credit Card</h3>
          <ul>
            <li>Daily expenses and small purchases</li>
            <li>Short-term borrowing (within interest-free period)</li>
            <li>Building credit history</li>
            <li>Earning rewards and cashback</li>
          </ul>
        `,
        category_id: categoryMap['loans'],
        author_id: authorMap['admin@moneybharat.com'],
        status: 'published',
        is_featured: false,
        read_time: 7,
        featured_image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
        tags: ['personal loan', 'credit card', 'borrowing', 'finance'],
        meta_title: 'Personal Loan vs Credit Card: Which One to Choose in 2024',
        meta_description: 'Compare personal loans and credit cards. Learn when to use each option, their pros and cons, and make the right financial decision.',
        published_at: new Date().toISOString()
      },
      {
        title: 'Building an Emergency Fund: Complete Roadmap',
        slug: 'emergency-fund-building-guide',
        excerpt: 'Step-by-step guide to building and maintaining an emergency fund for financial security.',
        content: `
          <h2>Why You Need an Emergency Fund</h2>
          <p>An emergency fund is your financial safety net. It protects you from unexpected expenses and provides peace of mind during uncertain times.</p>
          
          <h3>How Much Should You Save?</h3>
          <p>Financial experts recommend 6-12 months of living expenses. Your target amount depends on job stability, number of dependents, and monthly expenses.</p>

          <h3>Step-by-Step Building Process</h3>
          <ol>
            <li><strong>Calculate monthly expenses:</strong> Track all essential expenses for 2-3 months</li>
            <li><strong>Set initial goal:</strong> Start with 3 months' expenses, then build to 6 months</li>
            <li><strong>Automate savings:</strong> Set up automatic transfers each month</li>
            <li><strong>Choose right account:</strong> High-yield savings account or liquid funds</li>
          </ol>

          <h3>Where to Keep Emergency Funds</h3>
          <ul>
            <li>Savings bank account (instantly accessible)</li>
            <li>Liquid mutual funds (1-2 days withdrawal)</li>
            <li>Fixed deposits with sweep-in facility</li>
          </ul>

          <h3>Common Mistakes to Avoid</h3>
          <p>Don't invest emergency funds in equity, don't dip into it for non-emergencies, and don't keep it all in one place. Maintain liquidity while earning reasonable returns.</p>
        `,
        category_id: categoryMap['financial-planning'],
        author_id: authorMap['priya.sharma@moneybharat.com'] || authorMap['admin@moneybharat.com'],
        status: 'published',
        is_featured: false,
        read_time: 9,
        featured_image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=400&fit=crop',
        tags: ['emergency fund', 'financial planning', 'savings', 'security'],
        meta_title: 'How to Build an Emergency Fund: Complete Guide 2024',
        meta_description: 'Learn how to build and maintain an emergency fund. Step-by-step guide covering amount needed, best places to keep funds, and common mistakes to avoid.',
        published_at: new Date().toISOString()
      },
      {
        title: 'Diversification in Investment Portfolio: Why It Matters',
        slug: 'portfolio-diversification-guide',
        excerpt: 'Understanding the importance of diversification and how to build a well-balanced investment portfolio.',
        content: `
          <h2>The Power of Diversification</h2>
          <p>Don't put all your eggs in one basket. Diversification is the key to managing investment risk while optimizing returns.</p>
          
          <h3>What is Diversification?</h3>
          <p>Diversification means spreading your investments across different asset classes, sectors, and geographical regions to reduce risk.</p>

          <h3>Asset Allocation Strategy</h3>
          <ul>
            <li><strong>Equity (Stocks/Mutual Funds):</strong> 50-70% for growth</li>
            <li><strong>Debt (Bonds/Fixed Deposits):</strong> 20-30% for stability</li>
            <li><strong>Gold:</strong> 5-10% as hedge against inflation</li>
            <li><strong>Real Estate:</strong> 10-20% for long-term wealth</li>
          </ul>

          <h3>Diversification Across Equity</h3>
          <p>Within equity, diversify across large-cap, mid-cap, and small-cap stocks. Include both growth and value stocks, and consider international exposure.</p>

          <h3>Rebalancing Your Portfolio</h3>
          <p>Review and rebalance your portfolio annually or when asset allocation drifts significantly from your target. This helps maintain desired risk levels.</p>

          <h3>Common Diversification Mistakes</h3>
          <p>Over-diversification can dilute returns. Having too many similar funds doesn't add value. Focus on meaningful diversification across uncorrelated assets.</p>
        `,
        category_id: categoryMap['investment'],
        author_id: authorMap['priya.sharma@moneybharat.com'] || authorMap['admin@moneybharat.com'],
        status: 'published',
        is_featured: false,
        read_time: 11,
        featured_image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=400&fit=crop',
        tags: ['diversification', 'portfolio', 'asset allocation', 'risk management'],
        meta_title: 'Portfolio Diversification Guide: Build a Balanced Portfolio',
        meta_description: 'Learn how to diversify your investment portfolio effectively. Understand asset allocation, rebalancing strategies, and avoid common mistakes.',
        published_at: new Date().toISOString()
      }
    ];

    // Check for existing blog posts
    const { data: existingPosts } = await supabase
      .from('blogs')
      .select('slug');

    const postsToInsert = blogPosts.filter(
      post => !existingPosts?.some(existing => existing.slug === post.slug)
    );

    if (postsToInsert.length > 0) {
      const { error: postsError } = await supabase
        .from('blogs')
        .insert(postsToInsert);

      if (postsError) {
        console.error('Error inserting blog posts:', postsError);
        throw postsError;
      }

      console.log(`Successfully inserted ${postsToInsert.length} blog posts`);
    } else {
      console.log('All blog posts already exist');
    }

    console.log('Blog data seeding completed successfully!');
    return { success: true, inserted: postsToInsert.length };
    
  } catch (error) {
    console.error('Error seeding blog data:', error);
    throw error;
  }
}
