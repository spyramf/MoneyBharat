import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { blogPosts as initialBlogPosts, BlogPost, blogCategories as initialCategories, BlogAuthor, blogAuthors } from '@/data/blogData';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

interface BlogContextType {
  blogPosts: BlogPost[];
  categories: typeof initialCategories;
  addPost: (post: Omit<BlogPost, 'id'>) => Promise<void>;
  updatePost: (post: BlogPost) => Promise<void>;
  deletePost: (id: number) => Promise<void>;
  getPostById: (id: number) => BlogPost | undefined;
  getPostBySlug: (slug: string) => BlogPost | undefined;
  isLoading: boolean;
  error: Error | null;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};

interface BlogProviderProps {
  children: ReactNode;
}

// Function to fetch blogs from Supabase
const fetchBlogs = async (): Promise<BlogPost[]> => {
  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching blogs:', error);
      // If there's an error (like RLS), return initial data instead of throwing
      return initialBlogPosts;
    }

    // Map from Supabase format to our app's format
    return (data || []).map(blog => {
      // Parse author from JSON with proper type checking
      let author: BlogAuthor;
      try {
        if (blog.author && typeof blog.author === 'object') {
          const authorData = blog.author as any;
          author = {
            name: authorData.name || 'Unknown',
            avatar: authorData.avatar || '',
            role: authorData.role || 'Finance Expert'
          };
        } else {
          author = { name: 'Unknown', avatar: '', role: 'Finance Expert' };
        }
      } catch {
        author = { name: 'Unknown', avatar: '', role: 'Finance Expert' };
      }

      return {
        id: blog.id,
        title: blog.title,
        slug: blog.slug,
        excerpt: blog.excerpt || '',
        content: blog.content || '',
        category: blog.category || '',
        author: author,
        publishedDate: blog.publisheddate || '',
        readTime: blog.readtime || '',
        tags: blog.tags || [],
        isFeatured: blog.isfeatured || false,
        featuredImage: blog.featuredimage || '/placeholder.svg'
      };
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return initialBlogPosts; // Fallback to initial data
  }
};

export const BlogProvider = ({ children }: BlogProviderProps) => {
  const [categories] = useState(initialCategories);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Query to fetch blogs - this will return initial data if Supabase fails
  const { data: blogPosts = initialBlogPosts, isLoading, error } = useQuery({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
  });

  // Add post mutation
  const addPostMutation = useMutation({
    mutationFn: async (post: Omit<BlogPost, 'id'>) => {
      console.log('[BLOG] Attempting to add blog post', post);
      const { data, error } = await supabase
        .from('blogs')
        .insert({
          title: post.title,
          slug: post.slug, 
          excerpt: post.excerpt,
          content: post.content,
          category: post.category,
          author: JSON.parse(JSON.stringify(post.author)), // Serialize to JSON
          publisheddate: post.publishedDate,
          readtime: post.readTime,
          tags: post.tags,
          isfeatured: post.isFeatured,
          featuredimage: post.featuredImage
        })
        .select()
        .single();

      if (error) {
        console.error('[BLOG] Supabase insert error:', error);
        throw new Error(error.message);
      }
      console.log('[BLOG] Blog added:', data);
      return data;
    },
    onSuccess: () => {
      console.log("[BLOG] Blog post add success. Refetching...");
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      toast({
        title: "Blog post added",
        description: "Your post has been added successfully",
      });
    },
    onError: (error: any) => {
      console.error('[BLOG] Error adding blog post:', error);
      toast({
        title: "Error adding blog post",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      });
    }
  });

  // Update post mutation
  const updatePostMutation = useMutation({
    mutationFn: async (post: BlogPost) => {
      console.log('[BLOG] Attempting to update post', post);
      const { error } = await supabase
        .from('blogs')
        .update({
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          content: post.content,
          category: post.category,
          author: JSON.parse(JSON.stringify(post.author)),
          publisheddate: post.publishedDate,
          readtime: post.readTime,
          tags: post.tags,
          isfeatured: post.isFeatured,
          featuredimage: post.featuredImage,
          updated_at: new Date().toISOString()
        })
        .eq('id', post.id);

      if (error) {
        console.error('[BLOG] Supabase update error:', error);
        throw new Error(error.message);
      }
      console.log('[BLOG] Blog updated:', post.id);
      return post;
    },
    onSuccess: () => {
      console.log("[BLOG] Blog post update success. Refetching...");
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      toast({
        title: "Blog post updated",
        description: "Your post has been updated successfully",
      });
    },
    onError: (error: any) => {
      console.error('[BLOG] Error updating blog post:', error);
      toast({
        title: "Error updating blog post",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      });
    }
  });

  // Delete post mutation
  const deletePostMutation = useMutation({
    mutationFn: async (id: number) => {
      console.log('[BLOG] Attempting to delete post', id);
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('[BLOG] Supabase delete error:', error);
        throw new Error(error.message);
      }
      console.log('[BLOG] Blog deleted:', id);
      return id;
    },
    onSuccess: () => {
      console.log("[BLOG] Blog post delete success. Refetching...");
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      toast({
        title: "Blog post deleted",
        description: "Your post has been deleted successfully",
      });
    },
    onError: (error: any) => {
      console.error('[BLOG] Error deleting blog post:', error);
      toast({
        title: "Error deleting blog post",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      });
    }
  });

  const addPost = async (post: Omit<BlogPost, 'id'>) => {
    await addPostMutation.mutateAsync(post);
  };

  const updatePost = async (post: BlogPost) => {
    await updatePostMutation.mutateAsync(post);
  };

  const deletePost = async (id: number) => {
    await deletePostMutation.mutateAsync(id);
  };

  const getPostById = (id: number) => {
    return blogPosts.find(post => post.id === id);
  };

  const getPostBySlug = (slug: string) => {
    return blogPosts.find(post => post.slug === slug);
  };

  const value = {
    blogPosts,
    categories,
    addPost,
    updatePost,
    deletePost,
    getPostById,
    getPostBySlug,
    isLoading,
    error: error as Error | null,
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
};
