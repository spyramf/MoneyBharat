import { supabase } from '@/lib/supabaseClient';
import { type Category } from '@/context/BlogContext';

export interface SupabaseBlogCategory {
  id: string;
  created_at: string;
  name: string;
  slug: string;
  description: string | null;
  meta_title: string | null;
  meta_description: string | null;
}

export interface SupabaseBlogPost {
  id: string;
  created_at: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  category_id: string | null;
  author_id: string | null;
  published_date: string | null;
  read_time: string | null;
  is_featured: boolean | null;
  featured_image: string | null;
  status: 'draft' | 'published';
  meta_title: string | null;
  meta_description: string | null;
  focus_keywords: string[] | null;
  seo_score: number | null;
  category?: SupabaseBlogCategory | null;
  author?: SupabaseBlogAuthor | null;
}

export interface SupabaseBlogAuthor {
  id: string;
  created_at: string;
  name: string;
  slug: string;
  email: string | null;
  role: string | null;
  avatar_url: string | null;
  bio: string | null;
  social_links: any | null;
  meta_title: string | null;
  meta_description: string | null;
}

export interface SEOScoreParams {
  title: string;
  meta_description: string;
  focus_keywords: string[];
  content: string;
  featured_image: string;
  canonical_url: string;
}

// Helper to generate URL-friendly slugs from names
const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

export const supabaseBlogService = {
  getAllPosts: async (): Promise<SupabaseBlogPost[]> => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          category:blog_categories(*),
          author:blog_authors(*)
        `)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching posts:', error);
        throw error;
      }
      return data as SupabaseBlogPost[];
    } catch (error) {
      console.error('Unexpected error fetching posts:', error);
      throw error;
    }
  },

  getPostById: async (id: string): Promise<SupabaseBlogPost | null> => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          category:blog_categories(*),
          author:blog_authors(*)
        `)
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching post by ID:', error);
        return null;
      }
      return data as SupabaseBlogPost;
    } catch (error) {
      console.error('Unexpected error fetching post by ID:', error);
      return null;
    }
  },

  getPostsByCategory: async (categoryId: string): Promise<SupabaseBlogPost[]> => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          category:blog_categories(*),
          author:blog_authors(*)
        `)
        .eq('category_id', categoryId)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching posts by category:', error);
        throw error;
      }
      return data as SupabaseBlogPost[];
    } catch (error) {
      console.error('Unexpected error fetching posts by category:', error);
      throw error;
    }
  },

  getPostsByAuthor: async (authorId: string): Promise<SupabaseBlogPost[]> => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          category:blog_categories(*),
          author:blog_authors(*)
        `)
        .eq('author_id', authorId)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching posts by author:', error);
        throw error;
      }
      return data as SupabaseBlogPost[];
    } catch (error) {
      console.error('Unexpected error fetching posts by author:', error);
      throw error;
    }
  },

  getPostsBySearch: async (searchTerm: string): Promise<SupabaseBlogPost[]> => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          category:blog_categories(*),
          author:blog_authors(*)
        `)
        .ilike('title', `%${searchTerm}%`)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching posts by search term:', error);
        throw error;
      }
      return data as SupabaseBlogPost[];
    } catch (error) {
      console.error('Unexpected error fetching posts by search term:', error);
      throw error;
    }
  },

  createPost: async (post: Omit<SupabaseBlogPost, 'id' | 'created_at' | 'category' | 'author'>): Promise<SupabaseBlogPost> => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .insert([post])
        .select(`
          *,
          category:blog_categories(*),
          author:blog_authors(*)
        `)
        .single();

      if (error) {
        console.error('Error creating post:', error);
        throw error;
      }
      return data as SupabaseBlogPost;
    } catch (error) {
      console.error('Unexpected error creating post:', error);
      throw error;
    }
  },

  updatePost: async (id: string, updates: Partial<Omit<SupabaseBlogPost, 'id' | 'created_at' | 'category' | 'author'>>): Promise<SupabaseBlogPost | null> => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .update(updates)
        .eq('id', id)
        .select(`
          *,
          category:blog_categories(*),
          author:blog_authors(*)
        `)
        .single();

      if (error) {
        console.error('Error updating post:', error);
        throw error;
      }
      return data as SupabaseBlogPost;
    } catch (error) {
      console.error('Unexpected error updating post:', error);
      return null;
    }
  },

  deletePost: async (id: string): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting post:', error);
        throw error;
      }
      return true;
    } catch (error) {
      console.error('Unexpected error deleting post:', error);
      return false;
    }
  },

  getAllCategories: async (): Promise<SupabaseBlogCategory[]> => {
    try {
      const { data, error } = await supabase
        .from('blog_categories')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching categories:', error);
        throw error;
      }
      return data as SupabaseBlogCategory[];
    } catch (error) {
      console.error('Unexpected error fetching categories:', error);
      throw error;
    }
  },

  getCategoryById: async (id: string): Promise<SupabaseBlogCategory | null> => {
    try {
      const { data, error } = await supabase
        .from('blog_categories')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching category by ID:', error);
        return null;
      }
      return data as SupabaseBlogCategory;
    } catch (error) {
      console.error('Unexpected error fetching category by ID:', error);
      return null;
    }
  },

  createCategory: async (category: Omit<SupabaseBlogCategory, 'id' | 'created_at'>): Promise<SupabaseBlogCategory> => {
    try {
      const { data, error } = await supabase
        .from('blog_categories')
        .insert([category])
        .select('*')
        .single();

      if (error) {
        console.error('Error creating category:', error);
        throw error;
      }
      return data as SupabaseBlogCategory;
    } catch (error) {
      console.error('Unexpected error creating category:', error);
      throw error;
    }
  },

  updateCategory: async (id: string, updates: Partial<Omit<SupabaseBlogCategory, 'id' | 'created_at'>>): Promise<SupabaseBlogCategory | null> => {
    try {
      const { data, error } = await supabase
        .from('blog_categories')
        .update(updates)
        .eq('id', id)
        .select('*')
        .single();

      if (error) {
        console.error('Error updating category:', error);
        throw error;
      }
      return data as SupabaseBlogCategory;
    } catch (error) {
      console.error('Unexpected error updating category:', error);
      return null;
    }
  },

  deleteCategory: async (id: string): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from('blog_categories')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting category:', error);
        throw error;
      }
      return true;
    } catch (error) {
      console.error('Unexpected error deleting category:', error);
      return false;
    }
  },

  getAllAuthors: async (): Promise<SupabaseBlogAuthor[]> => {
    try {
      const { data, error } = await supabase
        .from('blog_authors')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching authors:', error);
        throw error;
      }
      return data as SupabaseBlogAuthor[];
    } catch (error) {
      console.error('Unexpected error fetching authors:', error);
      throw error;
    }
  },

  getAuthorById: async (id: string): Promise<SupabaseBlogAuthor | null> => {
    try {
      const { data, error } = await supabase
        .from('blog_authors')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching author by ID:', error);
        return null;
      }
      return data as SupabaseBlogAuthor;
    } catch (error) {
      console.error('Unexpected error fetching author by ID:', error);
      return null;
    }
  },

  // Fixed: ensure required fields (name, slug) are present; remove created_at/updated_at from insert payload.
  // Also return inserted row with id so the caller can auto-select it.
  createAuthor: async (data: {
    name: string;
    email?: string | null;
    role?: string | null;
    avatar_url?: string | null;
    bio?: string | null;
    social_links?: any; // keep broad to satisfy Json type in supabase
    meta_title?: string | null;
    meta_description?: string | null;
    slug?: string;
  }) => {
    // Validate and prepare required fields
    const name = (data.name ?? "").trim();
    if (!name) {
      throw new Error("Author name is required");
    }
    const slug = (data.slug ?? slugify(name)).trim();

    // Prepare insert payload with only allowed/defined fields
    const payload: Record<string, any> = {
      name,
      slug,
    };
    if (data.email) payload.email = data.email;
    if (data.role) payload.role = data.role;
    if (data.avatar_url) payload.avatar_url = data.avatar_url;
    if (data.bio) payload.bio = data.bio;
    if (data.social_links) payload.social_links = data.social_links;
    if (data.meta_title) payload.meta_title = data.meta_title;
    if (data.meta_description) payload.meta_description = data.meta_description;

    // Important: Do NOT send created_at or updated_at; let DB defaults handle them.
    const { data: row, error } = await supabase
      .from("blog_authors")
      // Casting payload to any prevents TS from enforcing generated column types too strictly
      .insert(payload as any)
      .select("*")
      .single();

    if (error) {
      console.error("createAuthor error:", error);
      throw error;
    }
    return row;
  },

  updateAuthor: async (id: string, updates: Partial<Omit<SupabaseBlogAuthor, 'id' | 'created_at'>>): Promise<SupabaseBlogAuthor | null> => {
    try {
      const { data, error } = await supabase
        .from('blog_authors')
        .update(updates)
        .eq('id', id)
        .select('*')
        .single();

      if (error) {
        console.error('Error updating author:', error);
        throw error;
      }
      return data as SupabaseBlogAuthor;
    } catch (error) {
      console.error('Unexpected error updating author:', error);
      return null;
    }
  },

  deleteAuthor: async (id: string): Promise<boolean> => {
    try {
      const { error } = await supabase
        .from('blog_authors')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting author:', error);
        throw error;
      }
      return true;
    } catch (error) {
      console.error('Unexpected error deleting author:', error);
      return false;
    }
  },

  calculateSEOScore: ({
    title,
    meta_description,
    focus_keywords,
    content,
    featured_image,
    canonical_url,
  }: SEOScoreParams): number => {
    let score = 0;

    // Check for title and meta description length
    if (title.length >= 50 && title.length <= 60) {
      score += 15;
    }
    if (meta_description.length >= 150 && meta_description.length <= 160) {
      score += 15;
    }

    // Check if focus keywords are in title, meta description, and content
    focus_keywords.forEach(keyword => {
      if (title.toLowerCase().includes(keyword.toLowerCase())) {
        score += 10;
      }
      if (meta_description.toLowerCase().includes(keyword.toLowerCase())) {
        score += 10;
      }
      if (content.toLowerCase().includes(keyword.toLowerCase())) {
        score += 10;
      }
    });

    // Check for image and canonical URL
    if (featured_image) {
      score += 15;
    }
    if (canonical_url) {
      score += 15;
    }

    return Math.min(score, 100); // Ensure score does not exceed 100
  },
};
