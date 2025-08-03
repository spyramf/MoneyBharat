
import { supabase } from '@/integrations/supabase/client';
import { Database } from '@/integrations/supabase/types';

export type SupabaseBlogPost = Database['public']['Tables']['blogs']['Row'] & {
  author?: SupabaseBlogAuthor;
  category?: SupabaseBlogCategory;
  tags?: SupabaseBlogTag[];
};

export type SupabaseBlogCategory = Database['public']['Tables']['blog_categories']['Row'];
export type SupabaseBlogAuthor = Database['public']['Tables']['blog_authors']['Row'];
export type SupabaseBlogTag = Database['public']['Tables']['blog_tags']['Row'];

export type BlogPostInsert = Database['public']['Tables']['blogs']['Insert'];
export type BlogPostUpdate = Database['public']['Tables']['blogs']['Update'];

class SupabaseBlogService {
  async getAllPosts(): Promise<SupabaseBlogPost[]> {
    const { data, error } = await supabase
      .from('blogs')
      .select(`
        *,
        author:blog_authors(*),
        category:blog_categories(*),
        tags:blog_post_tags(blog_tags(*))
      `)
      .eq('status', 'published')
      .order('published_date', { ascending: false });

    if (error) {
      console.error('Error fetching blog posts:', error);
      throw new Error('Failed to fetch blog posts');
    }

    return data?.map(post => ({
      ...post,
      tags: post.tags?.map((tagRelation: any) => tagRelation.blog_tags) || []
    })) || [];
  }

  async getPostBySlug(slug: string): Promise<SupabaseBlogPost> {
    const { data, error } = await supabase
      .from('blogs')
      .select(`
        *,
        author:blog_authors(*),
        category:blog_categories(*),
        tags:blog_post_tags(blog_tags(*))
      `)
      .eq('slug', slug)
      .single();

    if (error) {
      console.error('Error fetching blog post:', error);
      throw new Error('Failed to fetch blog post');
    }

    return {
      ...data,
      tags: data.tags?.map((tagRelation: any) => tagRelation.blog_tags) || []
    };
  }

  async getPostById(id: string): Promise<SupabaseBlogPost> {
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

    if (error) {
      console.error('Error fetching blog post by ID:', error);
      throw new Error('Failed to fetch blog post');
    }

    return {
      ...data,
      tags: data.tags?.map((tagRelation: any) => tagRelation.blog_tags) || []
    };
  }

  async createPost(post: Partial<BlogPostInsert>): Promise<SupabaseBlogPost> {
    const { data, error } = await supabase
      .from('blogs')
      .insert({
        ...post,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        updated_date: new Date().toISOString(),
      } as BlogPostInsert)
      .select()
      .single();

    if (error) {
      console.error('Error creating blog post:', error);
      throw new Error('Failed to create blog post');
    }

    return data;
  }

  async updatePost(id: string, updates: Partial<BlogPostUpdate>): Promise<SupabaseBlogPost> {
    const { data, error } = await supabase
      .from('blogs')
      .update({
        ...updates,
        updated_at: new Date().toISOString(),
        updated_date: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating blog post:', error);
      throw new Error('Failed to update blog post');
    }

    return data;
  }

  async deletePost(id: string): Promise<void> {
    const { error } = await supabase
      .from('blogs')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting blog post:', error);
      throw new Error('Failed to delete blog post');
    }
  }

  async getAllCategories(): Promise<SupabaseBlogCategory[]> {
    const { data, error } = await supabase
      .from('blog_categories')
      .select('*')
      .order('name');

    if (error) {
      console.error('Error fetching categories:', error);
      throw new Error('Failed to fetch categories');
    }

    return data || [];
  }

  async getAllAuthors(): Promise<SupabaseBlogAuthor[]> {
    const { data, error } = await supabase
      .from('blog_authors')
      .select('*')
      .order('name');

    if (error) {
      console.error('Error fetching authors:', error);
      throw new Error('Failed to fetch authors');
    }

    return data || [];
  }

  async getAllTags(): Promise<SupabaseBlogTag[]> {
    const { data, error } = await supabase
      .from('blog_tags')
      .select('*')
      .order('name');

    if (error) {
      console.error('Error fetching tags:', error);
      throw new Error('Failed to fetch tags');
    }

    return data || [];
  }

  calculateSEOScore(post: Partial<SupabaseBlogPost>): number {
    let score = 0;
    
    // Title optimization (20 points)
    if (post.title && post.title.length >= 30 && post.title.length <= 60) {
      score += 20;
    } else if (post.title && post.title.length > 0) {
      score += 10;
    }
    
    // Meta description (20 points)
    if (post.meta_description && post.meta_description.length >= 120 && post.meta_description.length <= 160) {
      score += 20;
    } else if (post.meta_description && post.meta_description.length > 0) {
      score += 10;
    }
    
    // Focus keywords (20 points)
    if (post.focus_keywords && post.focus_keywords.length > 0) {
      score += 20;
    }
    
    // Content length (20 points)
    if (post.content && post.content.length >= 1000) {
      score += 20;
    } else if (post.content && post.content.length >= 500) {
      score += 10;
    }
    
    // Featured image (10 points)
    if (post.featured_image) {
      score += 10;
    }
    
    // Canonical URL (10 points)
    if (post.canonical_url) {
      score += 10;
    }
    
    return Math.min(score, 100);
  }
}

export const supabaseBlogService = new SupabaseBlogService();
