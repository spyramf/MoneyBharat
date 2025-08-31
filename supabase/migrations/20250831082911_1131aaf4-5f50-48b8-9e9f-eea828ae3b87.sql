
-- First, let's check if we have any authors in the table
SELECT COUNT(*) as author_count FROM blog_authors;

-- If no authors exist, let's create some sample authors
INSERT INTO blog_authors (name, slug, email, role, bio) VALUES
('Money Bharat Expert', 'money-bharat-expert', 'expert@moneybharat.com', 'Financial Expert', 'Expert financial advisor with 10+ years of experience'),
('Pradeep Gangurde', 'pradeep-gangurde', 'pradeep@moneybharat.com', 'Investment Advisor', 'Specialized in mutual funds and investment planning'),
('Manjunath Kumar', 'manjunath-kumar', 'manjunath@moneybharat.com', 'Financial Analyst', 'Market analysis and financial planning specialist')
ON CONFLICT (slug) DO NOTHING;

-- Ensure RLS is still disabled to allow access
ALTER TABLE public.blog_authors DISABLE ROW LEVEL SECURITY;

-- Grant explicit permissions to ensure access
GRANT SELECT ON public.blog_authors TO authenticated;
GRANT SELECT ON public.blog_authors TO anon;
