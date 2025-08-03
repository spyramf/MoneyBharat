
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export interface SupabaseBlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  meta_title?: string;
  meta_description?: string;
  focus_keywords?: string[];
  canonical_url?: string;
  robots_directive?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  twitter_title?: string;
  twitter_description?: string;
  twitter_image?: string;
  category_id?: string;
  author_id?: string;
  featured_image?: string;
  published_date?: string;
  read_time?: string;
  is_featured?: boolean;
  status?: 'draft' | 'published' | 'archived';
  seo_score?: number;
  created_at?: string;
  updated_at?: string;
  author?: SupabaseBlogAuthor;
  category?: SupabaseBlogCategory;
  tags?: SupabaseBlogTag[];
}

export interface SupabaseBlogAuthor {
  id: string;
  name: string;
  email?: string;
  bio?: string;
  avatar_url?: string;
  created_at?: string;
}

export interface SupabaseBlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  meta_title?: string;
  meta_description?: string;
  created_at?: string;
}

export interface SupabaseBlogTag {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
  created_at?: string;
}

class SupabaseBlogService {
  // Blog Posts CRUD Operations
  async getAllPosts(): Promise<SupabaseBlogPost[]> {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select(`
          *,
          author:blog_authors(*),
          category:blog_categories(*),
          tags:blog_post_tags(blog_tags(*))
        `)
        .order('published_date', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  }

  async getPostById(id: string): Promise<SupabaseBlogPost | null> {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select(`
          *,
          author:blog_authors(*),
          category:blog_categories(*),
          tags:blog_post_tags(blog_tags(*))
        `)
        .eq('id', id)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching post by ID:', error);
      throw error;
    }
  }

  async createPost(postData: Partial<SupabaseBlogPost>): Promise<SupabaseBlogPost> {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .insert([postData])
        .select(`
          *,
          author:blog_authors(*),
          category:blog_categories(*)
        `)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error creating post:', error);
      throw error;
    }
  }

  async updatePost(id: string, updates: Partial<SupabaseBlogPost>): Promise<SupabaseBlogPost> {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .update(updates)
        .eq('id', id)
        .select(`
          *,
          author:blog_authors(*),
          category:blog_categories(*)
        `)
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error updating post:', error);
      throw error;
    }
  }

  async deletePost(id: string): Promise<void> {
    try {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', id);

      if (error) throw error;
    } catch (error) {
      console.error('Error deleting post:', error);
      throw error;
    }
  }

  // Authors CRUD Operations
  async getAllAuthors(): Promise<SupabaseBlogAuthor[]> {
    try {
      const { data, error } = await supabase
        .from('blog_authors')
        .select('*')
        .order('name');

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching authors:', error);
      throw error;
    }
  }

  // Categories CRUD Operations
  async getAllCategories(): Promise<SupabaseBlogCategory[]> {
    try {
      const { data, error } = await supabase
        .from('blog_categories')
        .select('*')
        .order('name');

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  }

  // Tags CRUD Operations
  async getAllTags(): Promise<SupabaseBlogTag[]> {
    try {
      const { data, error } = await supabase
        .from('blog_tags')
        .select('*')
        .order('name');

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching tags:', error);
      throw error;
    }
  }

  // SEO Score Calculation
  calculateSEOScore(post: Partial<SupabaseBlogPost>): number {
    let score = 0;
    
    // Title optimization (20 points)
    if (post.title) {
      if (post.title.length >= 30 && post.title.length <= 60) score += 15;
      else if (post.title.length > 0) score += 10;
      
      if (post.focus_keywords && post.focus_keywords.length > 0) {
        const titleLower = post.title.toLowerCase();
        const hasKeyword = post.focus_keywords.some(keyword => 
          titleLower.includes(keyword.toLowerCase())
        );
        if (hasKeyword) score += 5;
      }
    }

    // Meta description (15 points)
    if (post.meta_description) {
      if (post.meta_description.length >= 120 && post.meta_description.length <= 160) score += 15;
      else if (post.meta_description.length > 0) score += 10;
    }

    // Content length (20 points)
    if (post.content) {
      if (post.content.length >= 1500) score += 20;
      else if (post.content.length >= 800) score += 15;
      else if (post.content.length >= 300) score += 10;
    }

    // Featured image (10 points)
    if (post.featured_image) score += 10;

    // Focus keywords (15 points)
    if (post.focus_keywords && post.focus_keywords.length > 0) {
      score += Math.min(post.focus_keywords.length * 3, 15);
    }

    // Social media optimization (10 points)
    if (post.og_title || post.og_description) score += 5;
    if (post.twitter_title || post.twitter_description) score += 5;

    // URL structure (10 points)
    if (post.slug && post.slug.length > 0) {
      if (post.slug.includes('-') && post.slug.length <= 60) score += 10;
      else score += 5;
    }

    return Math.min(score, 100);
  }
}

export const supabaseBlogService = new SupabaseBlogService();
