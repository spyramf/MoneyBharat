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
  async getAllPosts(includeAllStatuses: boolean = false): Promise<SupabaseBlogPost[]> {
    try {
      // First, try to get posts with all relations
      let query = supabase
        .from('blogs')
        .select(`
          *,
          author:blog_authors(*),
          category:blog_categories(*),
          tags:blog_post_tags(blog_tags(*))
        `);

      // If we're not including all statuses, filter to published only
      if (!includeAllStatuses) {
        query = query.eq('status', 'published');
      }

      const { data, error } = await query.order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching blog posts with relations:', error);
        
        // Fallback: Try to get posts without author relation if it fails
        const fallbackQuery = supabase
          .from('blogs')
          .select(`
            *,
            category:blog_categories(*),
            tags:blog_post_tags(blog_tags(*))
          `);

        if (!includeAllStatuses) {
          fallbackQuery.eq('status', 'published');
        }

        const { data: fallbackData, error: fallbackError } = await fallbackQuery.order('created_at', { ascending: false });

        if (fallbackError) {
          console.error('Fallback query also failed:', fallbackError);
          throw new Error('Failed to fetch blog posts');
        }

        return fallbackData?.map(post => ({
          ...post,
          author: null, // Set author to null if we can't fetch it
          tags: post.tags?.map((tagRelation: any) => tagRelation.blog_tags) || []
        })) || [];
      }

      return data?.map(post => ({
        ...post,
        tags: post.tags?.map((tagRelation: any) => tagRelation.blog_tags) || []
      })) || [];
    } catch (error) {
      console.error('Error in getAllPosts:', error);
      throw error;
    }
  }

  async getFeaturedPosts(): Promise<SupabaseBlogPost[]> {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select(`
          *,
          author:blog_authors(*),
          category:blog_categories(*),
          tags:blog_post_tags(blog_tags(*))
        `)
        .eq('status', 'published')
        .eq('is_featured', true)
        .order('published_date', { ascending: false });

      if (error) {
        console.error('Error fetching featured posts:', error);
        
        // Fallback without author relation
        const { data: fallbackData, error: fallbackError } = await supabase
          .from('blogs')
          .select(`
            *,
            category:blog_categories(*),
            tags:blog_post_tags(blog_tags(*))
          `)
          .eq('status', 'published')
          .eq('is_featured', true)
          .order('published_date', { ascending: false });

        if (fallbackError) {
          throw new Error('Failed to fetch featured posts');
        }

        return fallbackData?.map(post => ({
          ...post,
          author: null,
          tags: post.tags?.map((tagRelation: any) => tagRelation.blog_tags) || []
        })) || [];
      }

      return data?.map(post => ({
        ...post,
        tags: post.tags?.map((tagRelation: any) => tagRelation.blog_tags) || []
      })) || [];
    } catch (error) {
      console.error('Error in getFeaturedPosts:', error);
      throw error;
    }
  }

  async getPostsByCategory(categorySlug: string): Promise<SupabaseBlogPost[]> {
    const { data, error } = await supabase
      .from('blogs')
      .select(`
        *,
        author:blog_authors(*),
        category:blog_categories(*),
        tags:blog_post_tags(blog_tags(*))
      `)
      .eq('status', 'published')
      .eq('category.slug', categorySlug)
      .order('published_date', { ascending: false });

    if (error) {
      console.error('Error fetching posts by category:', error);
      throw new Error('Failed to fetch posts by category');
    }

    return data?.map(post => ({
      ...post,
      tags: post.tags?.map((tagRelation: any) => tagRelation.blog_tags) || []
    })) || [];
  }

  async trackAnalytics(blogId: string, metricName: string, value: number): Promise<void> {
    const { error } = await supabase
      .from('blog_analytics')
      .insert({
        blog_id: blogId,
        metric_name: metricName,
        metric_value: value,
        recorded_date: new Date().toISOString()
      });

    if (error) {
      console.error('Error tracking analytics:', error);
    }
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

  async createAuthor(authorData: Partial<SupabaseBlogAuthor>): Promise<SupabaseBlogAuthor> {
    const { data, error } = await supabase
      .from('blog_authors')
      .insert({
        ...authorData,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating author:', error);
      throw new Error('Failed to create author');
    }

    return data;
  }

  async getAllCategories(): Promise<SupabaseBlogCategory[]> {
    try {
      const { data, error } = await supabase
        .from('blog_categories')
        .select('*')
        .order('name');

      if (error) {
        console.error('Error fetching categories:', error);
        return []; // Return empty array instead of throwing
      }

      return data || [];
    } catch (error) {
      console.error('Error in getAllCategories:', error);
      return [];
    }
  }

  async getAllAuthors(): Promise<SupabaseBlogAuthor[]> {
    try {
      const { data, error } = await supabase
        .from('blog_authors')
        .select('*')
        .order('name');

      if (error) {
        console.error('Error fetching authors:', error);
        return []; // Return empty array instead of throwing
      }

      return data || [];
    } catch (error) {
      console.error('Error in getAllAuthors:', error);
      return [];
    }
  }

  async getAllTags(): Promise<SupabaseBlogTag[]> {
    try {
      const { data, error } = await supabase
        .from('blog_tags')
        .select('*')
        .order('name');

      if (error) {
        console.error('Error fetching tags:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Error in getAllTags:', error);
      return [];
    }
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
