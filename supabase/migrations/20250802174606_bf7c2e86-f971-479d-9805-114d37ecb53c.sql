
-- Create enhanced blog categories table
CREATE TABLE public.blog_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  meta_title text,
  meta_description text,
  seo_keywords text[],
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Create blog authors table
CREATE TABLE public.blog_authors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  role text,
  avatar_url text,
  bio text,
  email text,
  social_links jsonb,
  meta_title text,
  meta_description text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Create blog tags table
CREATE TABLE public.blog_tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  color text DEFAULT '#3B82F6',
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Drop existing blogs table and recreate with enhanced SEO fields
DROP TABLE IF EXISTS public.blogs;

CREATE TABLE public.blogs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text,
  content text,
  
  -- SEO Fields
  meta_title text,
  meta_description text,
  focus_keywords text[],
  canonical_url text,
  robots_directive text DEFAULT 'index,follow',
  
  -- Social Media
  og_title text,
  og_description text,
  og_image text,
  twitter_title text,
  twitter_description text,
  twitter_image text,
  
  -- Content Management
  author_id uuid REFERENCES public.blog_authors(id),
  category_id uuid REFERENCES public.blog_categories(id),
  featured_image text,
  published_date timestamp with time zone,
  updated_date timestamp with time zone DEFAULT now(),
  
  -- Status and Features
  status text DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  is_featured boolean DEFAULT false,
  read_time text,
  
  -- SEO Analysis
  seo_score integer DEFAULT 0,
  content_score jsonb,
  
  -- Timestamps
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Create blog post tags junction table
CREATE TABLE public.blog_post_tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  blog_id uuid REFERENCES public.blogs(id) ON DELETE CASCADE,
  tag_id uuid REFERENCES public.blog_tags(id) ON DELETE CASCADE,
  created_at timestamp with time zone DEFAULT now(),
  UNIQUE(blog_id, tag_id)
);

-- Create SEO settings table for global blog SEO configuration
CREATE TABLE public.blog_seo_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  setting_key text UNIQUE NOT NULL,
  setting_value jsonb,
  description text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Create blog analytics table for SEO tracking
CREATE TABLE public.blog_analytics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  blog_id uuid REFERENCES public.blogs(id) ON DELETE CASCADE,
  metric_name text NOT NULL,
  metric_value numeric,
  metric_data jsonb,
  recorded_date date DEFAULT CURRENT_DATE,
  created_at timestamp with time zone DEFAULT now(),
  UNIQUE(blog_id, metric_name, recorded_date)
);

-- Enable RLS on all tables (public access for blogs, no authentication needed)
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_authors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_post_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_seo_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_analytics ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (no authentication required)
CREATE POLICY "Allow public read access to blog categories" ON public.blog_categories FOR SELECT USING (true);
CREATE POLICY "Allow public read access to blog authors" ON public.blog_authors FOR SELECT USING (true);
CREATE POLICY "Allow public read access to blog tags" ON public.blog_tags FOR SELECT USING (true);
CREATE POLICY "Allow public read access to published blogs" ON public.blogs FOR SELECT USING (status = 'published' OR status = 'draft');
CREATE POLICY "Allow public read access to blog post tags" ON public.blog_post_tags FOR SELECT USING (true);
CREATE POLICY "Allow public read access to blog SEO settings" ON public.blog_seo_settings FOR SELECT USING (true);
CREATE POLICY "Allow public read access to blog analytics" ON public.blog_analytics FOR SELECT USING (true);

-- Create policies for public write access (CMS without authentication)
CREATE POLICY "Allow public insert to blog categories" ON public.blog_categories FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update to blog categories" ON public.blog_categories FOR UPDATE USING (true);
CREATE POLICY "Allow public delete to blog categories" ON public.blog_categories FOR DELETE USING (true);

CREATE POLICY "Allow public insert to blog authors" ON public.blog_authors FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update to blog authors" ON public.blog_authors FOR UPDATE USING (true);
CREATE POLICY "Allow public delete to blog authors" ON public.blog_authors FOR DELETE USING (true);

CREATE POLICY "Allow public insert to blog tags" ON public.blog_tags FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update to blog tags" ON public.blog_tags FOR UPDATE USING (true);
CREATE POLICY "Allow public delete to blog tags" ON public.blog_tags FOR DELETE USING (true);

CREATE POLICY "Allow public insert to blogs" ON public.blogs FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update to blogs" ON public.blogs FOR UPDATE USING (true);
CREATE POLICY "Allow public delete to blogs" ON public.blogs FOR DELETE USING (true);

CREATE POLICY "Allow public insert to blog post tags" ON public.blog_post_tags FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update to blog post tags" ON public.blog_post_tags FOR UPDATE USING (true);
CREATE POLICY "Allow public delete to blog post tags" ON public.blog_post_tags FOR DELETE USING (true);

CREATE POLICY "Allow public insert to blog SEO settings" ON public.blog_seo_settings FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update to blog SEO settings" ON public.blog_seo_settings FOR UPDATE USING (true);
CREATE POLICY "Allow public delete to blog SEO settings" ON public.blog_seo_settings FOR DELETE USING (true);

CREATE POLICY "Allow public insert to blog analytics" ON public.blog_analytics FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public update to blog analytics" ON public.blog_analytics FOR UPDATE USING (true);
CREATE POLICY "Allow public delete to blog analytics" ON public.blog_analytics FOR DELETE USING (true);

-- Create indexes for better performance
CREATE INDEX idx_blogs_slug ON public.blogs(slug);
CREATE INDEX idx_blogs_status ON public.blogs(status);
CREATE INDEX idx_blogs_published_date ON public.blogs(published_date DESC);
CREATE INDEX idx_blogs_category_id ON public.blogs(category_id);
CREATE INDEX idx_blogs_author_id ON public.blogs(author_id);
CREATE INDEX idx_blogs_featured ON public.blogs(is_featured);
CREATE INDEX idx_blog_categories_slug ON public.blog_categories(slug);
CREATE INDEX idx_blog_authors_slug ON public.blog_authors(slug);
CREATE INDEX idx_blog_tags_slug ON public.blog_tags(slug);

-- Insert default categories
INSERT INTO public.blog_categories (name, slug, description, meta_title, meta_description) VALUES
('Mutual Funds', 'mutual-funds', 'Expert insights on mutual fund investments and strategies', 'Mutual Funds Investment Guide - Money Bharat', 'Learn about mutual fund investments, SIP strategies, and portfolio management with expert insights from Money Bharat Finance.'),
('Investment', 'investment', 'Investment strategies and market insights', 'Investment Strategies & Tips - Money Bharat', 'Discover proven investment strategies, market analysis, and wealth building tips from Money Bharat Finance experts.'),
('Insurance', 'insurance', 'Comprehensive insurance guides and advice', 'Insurance Guide & Advice - Money Bharat', 'Complete guide to health, life, and term insurance with expert advice and comparison from Money Bharat Finance.'),
('Tax Planning', 'tax-planning', 'Tax saving strategies and planning advice', 'Tax Saving Strategies & Planning - Money Bharat', 'Learn effective tax saving strategies, ELSS investments, and tax planning tips to maximize your savings.'),
('Loans', 'loans', 'Personal and home loan guidance', 'Loan Guidance & Tips - Money Bharat', 'Get expert advice on personal loans, home loans, and loan management strategies from Money Bharat Finance.'),
('Financial Planning', 'financial-planning', 'Comprehensive financial planning advice', 'Financial Planning Advice - Money Bharat', 'Master your finances with comprehensive financial planning guides, budgeting tips, and wealth creation strategies.');

-- Insert default authors
INSERT INTO public.blog_authors (name, slug, role, avatar_url, bio, email) VALUES
('Priya Sharma', 'priya-sharma', 'Senior Investment Advisor', '/images/authors/priya-sharma.jpg', 'Priya has over 8 years of experience in mutual fund advisory and portfolio management. She specializes in goal-based financial planning and SIP strategies.', 'priya@moneybharat.co'),
('Rajesh Kumar', 'rajesh-kumar', 'Tax Planning Specialist', '/images/authors/rajesh-kumar.jpg', 'Rajesh is a certified financial planner with expertise in tax-saving investments and retirement planning. He has helped over 1000 clients optimize their tax strategies.', 'rajesh@moneybharat.co'),
('Anita Singh', 'anita-singh', 'Insurance Consultant', '/images/authors/anita-singh.jpg', 'Anita specializes in life and health insurance planning with 6 years of industry experience. She focuses on making insurance simple and accessible for all.', 'anita@moneybharat.co'),
('Vikash Jain', 'vikash-jain', 'Chief Financial Advisor', '/images/authors/vikash-jain.jpg', 'Vikash leads our financial advisory team with 12 years of experience in comprehensive financial planning and wealth management.', 'vikash@moneybharat.co');

-- Insert default tags
INSERT INTO public.blog_tags (name, slug, description, color) VALUES
('SIP', 'sip', 'Systematic Investment Plan related content', '#3B82F6'),
('ELSS', 'elss', 'Equity Linked Savings Scheme content', '#10B981'),
('Tax Saving', 'tax-saving', 'Tax optimization and saving strategies', '#F59E0B'),
('Health Insurance', 'health-insurance', 'Health insurance plans and advice', '#EF4444'),
('Term Insurance', 'term-insurance', 'Term life insurance guidance', '#8B5CF6'),
('Portfolio', 'portfolio', 'Investment portfolio management', '#06B6D4'),
('Financial Planning', 'financial-planning', 'Comprehensive financial planning', '#84CC16'),
('Market Analysis', 'market-analysis', 'Stock market and fund analysis', '#F97316'),
('Personal Finance', 'personal-finance', 'Personal money management tips', '#EC4899'),
('Retirement Planning', 'retirement-planning', 'Retirement and pension planning', '#6B7280');

-- Insert default SEO settings
INSERT INTO public.blog_seo_settings (setting_key, setting_value, description) VALUES
('site_name', '"Money Bharat Finance"', 'Site name for Open Graph tags'),
('default_og_image', '"/images/blog/default-og-image.jpg"', 'Default Open Graph image for blog posts'),
('twitter_handle', '"@moneybharat"', 'Twitter handle for Twitter Card tags'),
('blog_description', '"Expert financial advice, investment strategies, and money management tips from Money Bharat Finance team."', 'Default blog description for meta tags'),
('contact_email', '"blog@moneybharat.co"', 'Contact email for blog inquiries'),
('analytics_enabled', 'true', 'Whether to track blog analytics'),
('sitemap_enabled', 'true', 'Whether to generate XML sitemap'),
('rss_enabled', 'true', 'Whether to generate RSS feed');
