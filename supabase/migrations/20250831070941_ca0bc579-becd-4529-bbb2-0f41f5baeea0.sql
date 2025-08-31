
-- 1) BLOG AUTHORS: Allow public read; remove restrictive ALL policy that blocks SELECT

DROP POLICY IF EXISTS "Only admins can access blog_authors table" ON public.blog_authors;

-- Public SELECT of authors so blog lists and editors can join/resolve author data
CREATE POLICY "Allow public read access to blog authors"
  ON public.blog_authors
  FOR SELECT
  USING (true);


-- 2) BLOGS: Correct public read to published-only; allow admins to read all

-- Replace current public read policy (which included drafts) with published-only visibility
DROP POLICY IF EXISTS "Allow public read access to published blogs" ON public.blogs;

-- Public can read only published posts
CREATE POLICY "Public can read published blogs"
  ON public.blogs
  FOR SELECT
  USING (status = 'published');

-- Admins can read all posts (published/draft/archived)
CREATE POLICY "Admins can read all blogs"
  ON public.blogs
  FOR SELECT
  USING (has_role(auth.uid(), 'admin'::app_role));
