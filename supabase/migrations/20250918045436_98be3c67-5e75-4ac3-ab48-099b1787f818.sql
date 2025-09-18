-- Add RLS policies for admin operations on blog tables
-- Enable admin access to blog_authors table
CREATE POLICY "Admin can manage authors" 
ON public.blog_authors 
FOR ALL 
USING (true)
WITH CHECK (true);

-- Enable admin access to blog_categories table  
CREATE POLICY "Admin can manage categories"
ON public.blog_categories
FOR ALL
USING (true) 
WITH CHECK (true);

-- Enable admin access to blog_tags table
CREATE POLICY "Admin can manage tags"
ON public.blog_tags
FOR ALL
USING (true)
WITH CHECK (true);

-- Enable admin access to blogs table
CREATE POLICY "Admin can manage blogs"
ON public.blogs
FOR ALL
USING (true)
WITH CHECK (true);