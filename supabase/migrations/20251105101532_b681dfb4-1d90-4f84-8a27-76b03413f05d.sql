-- Fix 1: Correct the BSE token RLS policy to properly restrict to admins only
DROP POLICY IF EXISTS "Only admins can manage BSE tokens" ON public.bse_token_store;

CREATE POLICY "Only admins can manage BSE tokens"
ON public.bse_token_store
FOR ALL
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Fix 2: Recreate blog_authors_public view as SECURITY INVOKER
-- This makes the view respect the calling user's permissions instead of the view owner's
DROP VIEW IF EXISTS public.blog_authors_public CASCADE;

CREATE VIEW public.blog_authors_public
WITH (security_invoker = true)
AS
SELECT 
  id,
  created_at,
  updated_at,
  name,
  role,
  avatar_url,
  bio
FROM public.blog_authors;