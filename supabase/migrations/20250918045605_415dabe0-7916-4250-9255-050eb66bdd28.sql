-- Add sample blog data for testing
INSERT INTO public.blog_categories (id, name, slug, description) VALUES 
('550e8400-e29b-41d4-a716-446655440001', 'Financial Planning', 'financial-planning', 'Articles about financial planning and investment strategies'),
('550e8400-e29b-41d4-a716-446655440002', 'Insurance', 'insurance', 'Comprehensive guides about various insurance products'),
('550e8400-e29b-41d4-a716-446655440003', 'Mutual Funds', 'mutual-funds', 'Investment guides and mutual fund analysis'),
('550e8400-e29b-41d4-a716-446655440004', 'Loans', 'loans', 'Information about different types of loans and financing'),
('550e8400-e29b-41d4-a716-446655440005', 'Tax Planning', 'tax-planning', 'Tax saving strategies and planning guides'),
('550e8400-e29b-41d4-a716-446655440006', 'Market News', 'market-news', 'Latest financial market updates and analysis')
ON CONFLICT (id) DO NOTHING;

-- Add sample authors
INSERT INTO public.blog_authors (id, name, email, bio, avatar_url, role) VALUES 
('550e8400-e29b-41d4-a716-446655440010', 'Rajesh Kumar', 'rajesh@moneybharat.in', 'Senior Financial Advisor with 15+ years of experience in wealth management and investment planning.', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face', 'Senior Financial Advisor'),
('550e8400-e29b-41d4-a716-446655440011', 'Priya Sharma', 'priya@moneybharat.in', 'Insurance specialist and certified financial planner helping families secure their financial future.', 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face', 'Insurance Specialist'),
('550e8400-e29b-41d4-a716-446655440012', 'Amit Patel', 'amit@moneybharat.in', 'Investment analyst and mutual fund expert with deep knowledge of Indian capital markets.', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face', 'Investment Analyst')
ON CONFLICT (id) DO NOTHING;

-- Add sample blog posts
INSERT INTO public.blogs (id, title, slug, excerpt, content, category_id, author_id, featured_image, tags, status, is_featured, read_time, meta_title, meta_description, published_at) VALUES 
(
  '550e8400-e29b-41d4-a716-446655440020',
  'Complete Guide to SIP Investment in 2024',
  'complete-guide-sip-investment-2024',
  'Learn everything about Systematic Investment Plans (SIP) and how to build wealth through disciplined investing in mutual funds.',
  '<h2>What is SIP Investment?</h2><p>A Systematic Investment Plan (SIP) is a method of investing in mutual funds where you invest a fixed amount regularly at predetermined intervals. This disciplined approach helps in building wealth over time through the power of compounding.</p><h3>Benefits of SIP Investment</h3><p><strong>1. Rupee Cost Averaging:</strong> SIP helps reduce the impact of market volatility by averaging the cost of units over time.</p><p><strong>2. Power of Compounding:</strong> Regular investments allow your money to grow exponentially over long periods.</p><p><strong>3. Disciplined Investing:</strong> SIP inculcates a habit of regular saving and investing.</p><h3>How to Start SIP?</h3><p>Starting a SIP is simple. Choose a mutual fund scheme based on your risk appetite and financial goals. You can start with as little as ₹500 per month.</p><h3>Best SIP Strategies for 2024</h3><p>1. Start early to maximize compounding benefits<br>2. Increase SIP amount annually (Step-up SIP)<br>3. Diversify across different fund categories<br>4. Stay invested for long term (minimum 5-7 years)</p>',
  '550e8400-e29b-41d4-a716-446655440003',
  '550e8400-e29b-41d4-a716-446655440012',
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop',
  ARRAY['SIP', 'Mutual Funds', 'Investment', 'Wealth Building'],
  'published',
  true,
  8,
  'Complete SIP Investment Guide 2024 - Build Wealth with Systematic Investment Plans',
  'Comprehensive guide to SIP investment in India. Learn benefits, strategies, and how to start SIP for wealth creation in 2024.',
  NOW() - INTERVAL '2 days'
),
(
  '550e8400-e29b-41d4-a716-446655440021',
  'Term Insurance vs Life Insurance: Which is Better?',
  'term-insurance-vs-life-insurance-comparison',
  'Understand the key differences between term insurance and traditional life insurance to make the right choice for your family''s financial security.',
  '<h2>Understanding Life Insurance Types</h2><p>When it comes to life insurance, the two main categories are term insurance and traditional life insurance (endowment/ULIP). Each serves different purposes and has distinct features.</p><h3>What is Term Insurance?</h3><p>Term insurance is a pure protection plan that provides life cover for a specific period. It offers high coverage at low premiums but has no investment component.</p><h3>What is Traditional Life Insurance?</h3><p>Traditional life insurance combines insurance with investment. It includes endowment plans, money-back policies, and ULIPs that provide both protection and returns.</p><h3>Key Differences</h3><table><tr><th>Feature</th><th>Term Insurance</th><th>Traditional Life Insurance</th></tr><tr><td>Premium</td><td>Low</td><td>High</td></tr><tr><td>Coverage</td><td>High</td><td>Lower</td></tr><tr><td>Investment</td><td>No</td><td>Yes</td></tr><tr><td>Returns</td><td>None</td><td>Guaranteed/Market-linked</td></tr></table><h3>Which Should You Choose?</h3><p>For pure protection needs, term insurance is ideal due to its affordability and high coverage. For those seeking both protection and investment, traditional plans might be suitable, though separating insurance and investment is often recommended.</p>',
  '550e8400-e29b-41d4-a716-446655440002',
  '550e8400-e29b-41d4-a716-446655440011',
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=400&fit=crop',
  ARRAY['Term Insurance', 'Life Insurance', 'Financial Planning', 'Protection'],
  'published',
  true,
  6,
  'Term Insurance vs Life Insurance: Complete Comparison Guide 2024',
  'Compare term insurance and life insurance plans. Learn which type suits your needs, coverage benefits, and make informed decisions.',
  NOW() - INTERVAL '5 days'
),
(
  '550e8400-e29b-41d4-a716-446655440022',
  'Home Loan Interest Rates in 2024: Complete Guide',
  'home-loan-interest-rates-2024-guide',
  'Get the latest information on home loan interest rates, eligibility criteria, and tips to get the best deal on your home loan in 2024.',
  '<h2>Current Home Loan Scenario in 2024</h2><p>Home loan interest rates in India have been dynamic in 2024, influenced by RBI policy changes and market conditions. Understanding these rates and factors affecting them can help you secure the best deal.</p><h3>Current Interest Rate Ranges</h3><p><strong>SBI:</strong> 8.50% - 9.40% per annum<br><strong>HDFC Bank:</strong> 8.60% - 9.50% per annum<br><strong>ICICI Bank:</strong> 8.70% - 9.75% per annum<br><strong>Axis Bank:</strong> 8.75% - 9.50% per annum</p><h3>Factors Affecting Home Loan Rates</h3><p>1. <strong>Credit Score:</strong> Higher scores (750+) get better rates<br>2. <strong>Down Payment:</strong> Higher down payment reduces risk<br>3. <strong>Income Stability:</strong> Salaried professionals often get preferential rates<br>4. <strong>Loan Amount:</strong> Larger loans may have different rate structures</p><h3>Types of Interest Rates</h3><p><strong>Fixed Rate:</strong> Remains constant throughout the loan tenure<br><strong>Floating Rate:</strong> Changes with market conditions<br><strong>Hybrid Rate:</strong> Fixed for initial years, then floating</p><h3>Tips to Get Lower Interest Rates</h3><p>• Maintain excellent credit score<br>• Compare offers from multiple lenders<br>• Negotiate based on your profile<br>• Consider balance transfer if rates drop significantly</p>',
  '550e8400-e29b-41d4-a716-446655440004',
  '550e8400-e29b-41d4-a716-446655440010',
  'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&h=400&fit=crop',
  ARRAY['Home Loan', 'Interest Rates', 'Real Estate', 'Banking'],
  'published',
  false,
  7,
  'Home Loan Interest Rates 2024: Latest Rates & Best Deals Guide',
  'Find the best home loan interest rates in 2024. Compare rates from top banks, eligibility criteria, and tips to secure lowest rates.',
  NOW() - INTERVAL '1 day'
)
ON CONFLICT (id) DO NOTHING;