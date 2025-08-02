
import { supabase } from '@/integrations/supabase/client';

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
  author_id?: string;
  category_id?: string;
  featured_image?: string;
  published_date?: string;
  updated_date?: string;
  status?: 'draft' | 'published' | 'archived';
  is_featured?: boolean;
  read_time?: string;
  seo_score?: number;
  content_score?: any;
  created_at?: string;
  updated_at?: string;
  author?: SupabaseBlogAuthor;
  category?: SupabaseBlogCategory;
  tags?: SupabaseBlogTag[];
}

export interface SupabaseBlogAuthor {
  id: string;
  name: string;
  slug: string;
  role?: string;
  avatar_url?: string;
  bio?: string;
  email?: string;
  social_links?: any;
  meta_title?: string;
  meta_description?: string;
}

export interface SupabaseBlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  meta_title?: string;
  meta_description?: string;
  seo_keywords?: string[];
}

export interface SupabaseBlogTag {
  id: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
}

export interface BlogSEOSettings {
  id: string;
  setting_key: string;
  setting_value: any;
  description?: string;
}

class SupabaseBlogService {
  // Blog Posts CRUD
  async getAllPosts(status?: string): Promise<SupabaseBlogPost[]> {
    let query = supabase
      .from('blogs')
      .select(`
        *,
        author:blog_authors(*),
        category:blog_categories(*),
        tags:blog_post_tags(blog_tags(*))
      `)
      .order('published_date', { ascending: false });

    if (status) {
      query = query.eq('status', status);
    }

    const { data, error } = await query;
    if (error) throw error;

    return data?.map(post => ({
      ...post,
      status: post.status as 'draft' | 'published' | 'archived',
      tags: post.tags?.map((t: any) => t.blog_tags) || []
    })) || [];
  }

  async getPostBySlug(slug: string): Promise<SupabaseBlogPost | null> {
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

    if (error) return null;

    return {
      ...data,
      status: data.status as 'draft' | 'published' | 'archived',
      tags: data.tags?.map((t: any) => t.blog_tags) || []
    };
  }

  async getPostById(id: string): Promise<SupabaseBlogPost | null> {
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

    if (error) return null;

    return {
      ...data,
      status: data.status as 'draft' | 'published' | 'archived',
      tags: data.tags?.map((t: any) => t.blog_tags) || []
    };
  }

  async getFeaturedPosts(): Promise<SupabaseBlogPost[]> {
    const { data, error } = await supabase
      .from('blogs')
      .select(`
        *,
        author:blog_authors(*),
        category:blog_categories(*),
        tags:blog_post_tags(blog_tags(*))
      `)
      .eq('is_featured', true)
      .eq('status', 'published')
      .order('published_date', { ascending: false });

    if (error) throw error;

    return data?.map(post => ({
      ...post,
      status: post.status as 'draft' | 'published' | 'archived',
      tags: post.tags?.map((t: any) => t.blog_tags) || []
    })) || [];
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
      .eq('category.slug', categorySlug)
      .eq('status', 'published')
      .order('published_date', { ascending: false });

    if (error) throw error;

    return data?.map(post => ({
      ...post,
      status: post.status as 'draft' | 'published' | 'archived',
      tags: post.tags?.map((t: any) => t.blog_tags) || []
    })) || [];
  }

  async createPost(post: Omit<SupabaseBlogPost, 'id' | 'created_at' | 'updated_at'>): Promise<SupabaseBlogPost> {
    const { data, error } = await supabase
      .from('blogs')
      .insert(post)
      .select()
      .single();

    if (error) throw error;
    return {
      ...data,
      status: data.status as 'draft' | 'published' | 'archived'
    };
  }

  async updatePost(id: string, updates: Partial<SupabaseBlogPost>): Promise<SupabaseBlogPost> {
    const { data, error } = await supabase
      .from('blogs')
      .update({ ...updates, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return {
      ...data,
      status: data.status as 'draft' | 'published' | 'archived'
    };
  }

  async deletePost(id: string): Promise<void> {
    const { error } = await supabase
      .from('blogs')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }

  // Authors CRUD
  async getAllAuthors(): Promise<SupabaseBlogAuthor[]> {
    const { data, error } = await supabase
      .from('blog_authors')
      .select('*')
      .order('name');

    if (error) throw error;
    return data || [];
  }

  async createAuthor(author: Omit<SupabaseBlogAuthor, 'id' | 'created_at' | 'updated_at'>): Promise<SupabaseBlogAuthor> {
    const { data, error } = await supabase
      .from('blog_authors')
      .insert(author)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  // Categories CRUD
  async getAllCategories(): Promise<SupabaseBlogCategory[]> {
    const { data, error } = await supabase
      .from('blog_categories')
      .select('*')
      .order('name');

    if (error) throw error;
    return data || [];
  }

  async createCategory(category: Omit<SupabaseBlogCategory, 'id' | 'created_at' | 'updated_at'>): Promise<SupabaseBlogCategory> {
    const { data, error } = await supabase
      .from('blog_categories')
      .insert(category)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  // Tags CRUD
  async getAllTags(): Promise<SupabaseBlogTag[]> {
    const { data, error } = await supabase
      .from('blog_tags')
      .select('*')
      .order('name');

    if (error) throw error;
    return data || [];
  }

  async createTag(tag: Omit<SupabaseBlogTag, 'id' | 'created_at' | 'updated_at'>): Promise<SupabaseBlogTag> {
    const { data, error } = await supabase
      .from('blog_tags')
      .insert(tag)
      .select()
      .single();

    if (error) throw error;
    return data;
  }

  // Post Tags Junction
  async addTagToPost(blogId: string, tagId: string): Promise<void> {
    const { error } = await supabase
      .from('blog_post_tags')
      .insert({ blog_id: blogId, tag_id: tagId });

    if (error) throw error;
  }

  async removeTagFromPost(blogId: string, tagId: string): Promise<void> {
    const { error } = await supabase
      .from('blog_post_tags')
      .delete()
      .eq('blog_id', blogId)
      .eq('tag_id', tagId);

    if (error) throw error;
  }

  // SEO Settings
  async getSEOSettings(): Promise<BlogSEOSettings[]> {
    const { data, error } = await supabase
      .from('blog_seo_settings')
      .select('*');

    if (error) throw error;
    return data || [];
  }

  async getSEOSetting(key: string): Promise<any> {
    const { data, error } = await supabase
      .from('blog_seo_settings')
      .select('setting_value')
      .eq('setting_key', key)
      .single();

    if (error) return null;
    return data?.setting_value;
  }

  async updateSEOSetting(key: string, value: any): Promise<void> {
    const { error } = await supabase
      .from('blog_seo_settings')
      .upsert({ 
        setting_key: key, 
        setting_value: value,
        updated_at: new Date().toISOString()
      });

    if (error) throw error;
  }

  // Analytics
  async trackAnalytics(blogId: string, metricName: string, metricValue: number, metricData?: any): Promise<void> {
    const { error } = await supabase
      .from('blog_analytics')
      .upsert({
        blog_id: blogId,
        metric_name: metricName,
        metric_value: metricValue,
        metric_data: metricData,
        recorded_date: new Date().toISOString().split('T')[0]
      });

    if (error) throw error;
  }

  // SEO Analysis
  calculateSEOScore(post: SupabaseBlogPost): number {
    let score = 0;
    const maxScore = 100;

    // Title optimization (20 points)
    if (post.title && post.title.length >= 30 && post.title.length <= 60) score += 20;
    else if (post.title && post.title.length > 0) score += 10;

    // Meta description (20 points)
    if (post.meta_description && post.meta_description.length >= 120 && post.meta_description.length <= 160) score += 20;
    else if (post.meta_description && post.meta_description.length > 0) score += 10;

    // Content length (20 points)
    if (post.content && post.content.length >= 1500) score += 20;
    else if (post.content && post.content.length >= 800) score += 10;

    // Focus keywords (15 points)
    if (post.focus_keywords && post.focus_keywords.length > 0) score += 15;

    // Featured image (10 points)
    if (post.featured_image) score += 10;

    // Social media optimization (10 points)
    if (post.og_title && post.og_description) score += 10;

    // Read time (5 points)
    if (post.read_time) score += 5;

    return Math.min(score, maxScore);
  }

  async updatePostSEOScore(postId: string): Promise<void> {
    const post = await this.getPostById(postId);
    if (post) {
      const seoScore = this.calculateSEOScore(post);
      await this.updatePost(postId, { seo_score: seoScore });
    }
  }
}

export const supabaseBlogService = new SupabaseBlogService();
