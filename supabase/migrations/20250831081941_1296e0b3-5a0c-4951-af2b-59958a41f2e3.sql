
-- First, let's create a simple admin user role if it doesn't exist
INSERT INTO user_roles (user_id, role) 
SELECT auth.uid(), 'admin'::app_role
WHERE auth.uid() IS NOT NULL
ON CONFLICT (user_id, role) DO NOTHING;

-- Update the blog_authors policies to be more permissive for now
DROP POLICY IF EXISTS "Allow public read access to blog authors" ON blog_authors;
DROP POLICY IF EXISTS "Only admins can insert authors" ON blog_authors;
DROP POLICY IF EXISTS "Only admins can update authors" ON blog_authors;
DROP POLICY IF EXISTS "Only admins can delete authors" ON blog_authors;

-- Create new policies that allow authenticated users to read and admins to manage
CREATE POLICY "Allow authenticated users to read blog authors" 
ON blog_authors FOR SELECT 
TO authenticated
USING (true);

CREATE POLICY "Allow admins to insert authors" 
ON blog_authors FOR INSERT 
TO authenticated
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Allow admins to update authors" 
ON blog_authors FOR UPDATE 
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Allow admins to delete authors" 
ON blog_authors FOR DELETE 
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Also update the blogs table policies to ensure consistency
DROP POLICY IF EXISTS "Public can read published blogs" ON blogs;
DROP POLICY IF EXISTS "Admins can read all blogs" ON blogs;

CREATE POLICY "Allow public to read published blogs" 
ON blogs FOR SELECT 
USING (status = 'published');

CREATE POLICY "Allow authenticated users to read all blogs" 
ON blogs FOR SELECT 
TO authenticated
USING (true);
