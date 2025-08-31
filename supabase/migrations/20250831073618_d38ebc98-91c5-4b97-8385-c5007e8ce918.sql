
-- Add missing columns to blog_posts table
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS canonical_url text;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS robots_directive text DEFAULT 'index, follow';
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS og_title text;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS og_description text;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS og_image text;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS twitter_title text;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS twitter_description text;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS twitter_image text;
ALTER TABLE blog_posts ADD COLUMN IF NOT EXISTS updated_at timestamp with time zone DEFAULT now();

-- Update status enum to include 'archived'
ALTER TABLE blog_posts DROP CONSTRAINT IF EXISTS blog_posts_status_check;
ALTER TABLE blog_posts ADD CONSTRAINT blog_posts_status_check 
  CHECK (status IN ('draft', 'published', 'archived'));

-- Add trigger to automatically update updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_blog_posts_updated_at ON blog_posts;
CREATE TRIGGER update_blog_posts_updated_at 
    BEFORE UPDATE ON blog_posts 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
