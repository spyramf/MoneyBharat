
-- Insert categories
INSERT INTO blog_categories (name, slug, description) VALUES 
('Mutual Fund', 'mutual-fund', 'Investment strategies and mutual fund insights'),
('Insurance', 'insurance', 'Life and health insurance guidance'),
('Load', 'load', 'Load-related financial topics'),
('Stock Market', 'stock-market', 'Stock market analysis and investment tips'),
('Finance', 'finance', 'General finance and financial planning')
ON CONFLICT (slug) DO NOTHING;

-- Insert authors
INSERT INTO blog_authors (name, slug, role) VALUES 
('Money Bharat', 'money-bharat', 'Financial Expert'),
('Pradeep Gangurde', 'pradeep-gangurde', 'Investment Advisor'),
('Manjunath', 'manjunath', 'Financial Analyst')
ON CONFLICT (slug) DO NOTHING;
