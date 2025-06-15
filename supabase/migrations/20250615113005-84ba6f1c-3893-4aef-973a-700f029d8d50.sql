
-- 1. Enable Row-Level Security for the blogs table
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

-- 2. Allow SELECT for everyone (blog is public)
CREATE POLICY "Allow select for all" ON public.blogs
  FOR SELECT
  USING (true);

-- 3. Allow INSERT for everyone (you can restrict to only authenticated users if needed)
CREATE POLICY "Allow insert for all" ON public.blogs
  FOR INSERT
  WITH CHECK (true);

-- 4. Allow UPDATE for everyone (you can restrict to only authenticated users if needed)
CREATE POLICY "Allow update for all" ON public.blogs
  FOR UPDATE
  USING (true);

-- 5. Allow DELETE for everyone (you can restrict to only authenticated users if needed)
CREATE POLICY "Allow delete for all" ON public.blogs
  FOR DELETE
  USING (true);
