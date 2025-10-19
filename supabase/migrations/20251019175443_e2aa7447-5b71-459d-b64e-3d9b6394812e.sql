-- Create role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'editor', 'viewer');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- RLS policies for user_roles table
CREATE POLICY "Users can view their own roles"
ON public.user_roles FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all roles"
ON public.user_roles FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- Fix blogs table policies
DROP POLICY IF EXISTS "Allow public insert to blogs" ON public.blogs;
DROP POLICY IF EXISTS "Allow public update to blogs" ON public.blogs;
DROP POLICY IF EXISTS "Allow public delete to blogs" ON public.blogs;
DROP POLICY IF EXISTS "Admin can manage blogs" ON public.blogs;
DROP POLICY IF EXISTS "Public can view published content" ON public.blogs;

CREATE POLICY "Public can view published blogs"
ON public.blogs FOR SELECT
USING (status = 'published');

CREATE POLICY "Admins can manage all blogs"
ON public.blogs FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Editors can create and update blogs"
ON public.blogs FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'editor') OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Editors can update their blogs"
ON public.blogs FOR UPDATE
USING (public.has_role(auth.uid(), 'editor') OR public.has_role(auth.uid(), 'admin'));

-- Fix blog_authors table policies - hide emails from public
DROP POLICY IF EXISTS "Public can view authors" ON public.blog_authors;
DROP POLICY IF EXISTS "Allow public read access to blog authors" ON public.blog_authors;
DROP POLICY IF EXISTS "Admin can manage authors" ON public.blog_authors;

CREATE POLICY "Admins can manage authors"
ON public.blog_authors FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- Create view for public author data (without emails)
CREATE OR REPLACE VIEW public.blog_authors_public AS
SELECT id, name, role, avatar_url, bio, created_at, updated_at
FROM public.blog_authors;

-- Fix blog_categories policies
DROP POLICY IF EXISTS "Public can view categories" ON public.blog_categories;
DROP POLICY IF EXISTS "Admin can manage categories" ON public.blog_categories;

CREATE POLICY "Public can view categories"
ON public.blog_categories FOR SELECT
USING (true);

CREATE POLICY "Admins can manage categories"
ON public.blog_categories FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- Fix blog_tags policies
DROP POLICY IF EXISTS "Public can view tags" ON public.blog_tags;
DROP POLICY IF EXISTS "Admin can manage tags" ON public.blog_tags;

CREATE POLICY "Public can view tags"
ON public.blog_tags FOR SELECT
USING (true);

CREATE POLICY "Admins can manage tags"
ON public.blog_tags FOR ALL
USING (public.has_role(auth.uid(), 'admin'));

-- Fix bse_token_store policies
DROP POLICY IF EXISTS "Admin can manage BSE tokens" ON public.bse_token_store;

CREATE POLICY "Only admins can manage BSE tokens"
ON public.bse_token_store FOR ALL
USING (public.has_role(auth.uid(), 'admin'));