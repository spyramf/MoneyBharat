import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';

export type SupabaseBlogPost = Tables<'blogs', 'Row'> & {
  category?: Tables<'blog_categories', 'Row'> | null;
  author?: Tables<'blog_authors', 'Row'> | null;
};

export type SupabaseBlogCategory = Tables<'blog_categories', 'Row'>;
export type SupabaseBlogAuthor = Tables<'blog_authors', 'Row'>;

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
      throw new Error(`Error fetching post by slug: ${error.message}`);
    }

    return data || null;
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
};
