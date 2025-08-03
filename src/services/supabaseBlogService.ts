
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';

export type SupabaseBlogPost = Tables<'blogs'> & {
  category?: Tables<'blog_categories'> | null;
  author?: Tables<'blog_authors'> | null;
  tags?: Tables<'blog_tags'>[];
};

export type SupabaseBlogCategory = Tables<'blog_categories'>;
export type SupabaseBlogAuthor = Tables<'blog_authors'>;
export type SupabaseBlogTag = Tables<'blog_tags'>;

export const supabaseBlogService = {
  getAllPosts: async (): Promise<SupabaseBlogPost[]> => {
    const { data, error } = await supabase
      .from('blogs')
      .select(`
        *,
        category:category_id (
          *
        ),
        author:author_id (
          *
        )
      `)
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(`Error fetching posts: ${error.message}`);
    }

    return data || [];
  },

  getPostById: async (id: string): Promise<SupabaseBlogPost | null> => {
    const { data, error } = await supabase
      .from('blogs')
      .select(`
        *,
        category:category_id (
          *
        ),
        author:author_id (
          *
        )
      `)
      .eq('id', id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') return null; // Not found
      throw new Error(`Error fetching post by ID: ${error.message}`);
    }

    return data;
  },

  getPostBySlug: async (slug: string): Promise<SupabaseBlogPost | null> => {
    const { data, error } = await supabase
      .from('blogs')
      .select(`
        *,
        category:category_id (
          *
        ),
        author:author_id (
          *
        )
      `)
      .eq('slug', slug)
      .single();

    if (error) {
      if (error.code === 'PGRST116') return null; // Not found
      throw new Error(`Error fetching post by slug: ${error.message}`);
    }

    return data;
  },

  createPost: async (post: Tables<'blogs', 'Insert'>): Promise<SupabaseBlogPost | null> => {
    const { data, error } = await supabase
      .from('blogs')
      .insert([post])
      .select(`
        *,
        category:category_id (
          *
        ),
        author:author_id (
          *
        )
      `)
      .single();

    if (error) {
      throw new Error(`Error creating post: ${error.message}`);
    }

    return data || null;
  },

  updatePost: async (id: string, updates: Tables<'blogs', 'Update'>): Promise<SupabaseBlogPost | null> => {
    const { data, error } = await supabase
      .from('blogs')
      .update(updates)
      .eq('id', id)
      .select(`
        *,
        category:category_id (
          *
        ),
        author:author_id (
          *
        )
      `)
      .single();

    if (error) {
      throw new Error(`Error updating post: ${error.message}`);
    }

    return data || null;
  },

  deletePost: async (id: string): Promise<void> => {
    const { error } = await supabase
      .from('blogs')
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error(`Error deleting post: ${error.message}`);
    }
  },

  getAllCategories: async (): Promise<SupabaseBlogCategory[]> => {
    const { data, error } = await supabase
      .from('blog_categories')
      .select('*')
      .order('name');

    if (error) {
      throw new Error(`Error fetching categories: ${error.message}`);
    }

    return data || [];
  },

  createCategory: async (category: Tables<'blog_categories', 'Insert'>): Promise<SupabaseBlogCategory | null> => {
    const { data, error } = await supabase
      .from('blog_categories')
      .insert([category])
      .select('*')
      .single();

    if (error) {
      throw new Error(`Error creating category: ${error.message}`);
    }

    return data || null;
  },

  updateCategory: async (id: string, updates: Tables<'blog_categories', 'Update'>): Promise<SupabaseBlogCategory | null> => {
    const { data, error } = await supabase
      .from('blog_categories')
      .update(updates)
      .eq('id', id)
      .select('*')
      .single();

    if (error) {
      throw new Error(`Error updating category: ${error.message}`);
    }

    return data || null;
  },

  deleteCategory: async (id: string): Promise<void> => {
    const { error } = await supabase
      .from('blog_categories')
      .delete()
      .eq('id', id);

    if (error) {
      throw new Error(`Error deleting category: ${error.message}`);
    }
  },

  getAllAuthors: async (): Promise<SupabaseBlogAuthor[]> => {
    const { data, error } = await supabase
      .from('blog_authors')
      .select('*')
      .order('name');
    
    if (error) {
      throw new Error(`Error fetching authors: ${error.message}`);
    }
    
    return data || [];
  },

  getAllTags: async (): Promise<SupabaseBlogTag[]> => {
    const { data, error } = await supabase
      .from('blog_tags')
      .select('*')
      .order('name');
    
    if (error) {
      throw new Error(`Error fetching tags: ${error.message}`);
    }
    
    return data || [];
  },

  calculateSEOScore: (post: Partial<SupabaseBlogPost>): number => {
    let score = 0;
    
    // Title length check (30-60 characters)
    if (post.title && post.title.length >= 30 && post.title.length <= 60) score += 20;
    else if (post.title && post.title.length > 0) score += 10;
    
    // Meta description length check (120-160 characters)
    if (post.meta_description && post.meta_description.length >= 120 && post.meta_description.length <= 160) score += 20;
    else if (post.meta_description && post.meta_description.length > 0) score += 10;
    
    // Content length check (minimum 300 words)
    if (post.content && post.content.length > 1500) score += 20;
    else if (post.content && post.content.length > 500) score += 10;
    
    // Featured image check
    if (post.featured_image) score += 10;
    
    // Focus keywords check
    if (post.focus_keywords && post.focus_keywords.length > 0) score += 15;
    
    // Excerpt check
    if (post.excerpt && post.excerpt.length > 20) score += 15;
    
    return Math.min(score, 100);
  },
};
