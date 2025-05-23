
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { blogPosts as initialBlogPosts, BlogPost, blogCategories as initialCategories } from '@/data/blogData';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
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
    // Use any type to bypass TypeScript's strict checking since Supabase types aren't generated yet
    const { data, error } = await (supabase as any)
      .from('blogs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching blogs:', error);
      throw new Error('Failed to fetch blogs');
    }

    return data as unknown as BlogPost[];
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return initialBlogPosts; // Fallback to initial data
  }
};

export const BlogProvider = ({ children }: BlogProviderProps) => {
  const [categories] = useState(initialCategories);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Query to fetch blogs
  const { data: blogPosts = [], isLoading, error } = useQuery({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
    meta: {
      onError: (error: Error) => {
        console.error('Error loading blogs from Supabase:', error);
        toast({
          title: "Error loading blogs",
          description: "Using fallback data. Please check your connection.",
          variant: "destructive",
        });
      }
    }
  });

  // Initialize Supabase with initial data if needed
  const initializeSupabase = async () => {
    try {
      // First check if the table exists by trying a simple count query
      const { count, error: countError } = await (supabase as any)
        .from('blogs')
        .select('*', { count: 'exact', head: true });

      if (countError) {
        console.error('Error checking blogs table:', countError);
        return; // Table might not exist yet
      }

      // If no data in Supabase, add initial data
      if (count === 0) {
        console.log('Initializing blog data in Supabase');
        for (const post of initialBlogPosts) {
          try {
            await (supabase as any)
              .from('blogs')
              .insert({
                title: post.title,
                slug: post.slug, 
                excerpt: post.excerpt,
                content: post.content,
                category: post.category,
                author: post.author,
                publishedDate: post.publishedDate,
                readTime: post.readTime,
                tags: post.tags,
                isFeatured: post.isFeatured,
                featuredImage: post.featuredImage
              });
          } catch (error) {
            console.error('Error inserting blog post:', error);
          }
        }
        queryClient.invalidateQueries({ queryKey: ['blogs'] });
      }
    } catch (error) {
      console.error('Error initializing blogs in Supabase:', error);
    }
  };

  // Add post mutation
  const addPostMutation = useMutation({
    mutationFn: async (post: Omit<BlogPost, 'id'>) => {
      try {
        const { data, error } = await (supabase as any)
          .from('blogs')
          .insert({
            title: post.title,
            slug: post.slug, 
            excerpt: post.excerpt,
            content: post.content,
            category: post.category,
            author: post.author,
            publishedDate: post.publishedDate,
            readTime: post.readTime,
            tags: post.tags,
            isFeatured: post.isFeatured,
            featuredImage: post.featuredImage
          })
          .select();

        if (error) throw new Error(error.message);
        return data[0] as unknown as BlogPost;
      } catch (error) {
        console.error('Error adding blog post:', error);
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      toast({
        title: "Blog post added",
        description: "Your post has been added successfully",
      });
    },
    onError: (error) => {
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
      try {
        const { error } = await (supabase as any)
          .from('blogs')
          .update({
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt,
            content: post.content,
            category: post.category,
            author: post.author,
            publishedDate: post.publishedDate,
            readTime: post.readTime,
            tags: post.tags,
            isFeatured: post.isFeatured,
            featuredImage: post.featuredImage,
            updated_at: new Date().toISOString()
          })
          .eq('id', post.id);

        if (error) throw new Error(error.message);
        return post;
      } catch (error) {
        console.error('Error updating blog post:', error);
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      toast({
        title: "Blog post updated",
        description: "Your post has been updated successfully",
      });
    },
    onError: (error) => {
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
      try {
        const { error } = await (supabase as any)
          .from('blogs')
          .delete()
          .eq('id', id);

        if (error) throw new Error(error.message);
        return id;
      } catch (error) {
        console.error('Error deleting blog post:', error);
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      toast({
        title: "Blog post deleted",
        description: "Your post has been deleted successfully",
      });
    },
    onError: (error) => {
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

  // Initialize data on first load
  useEffect(() => {
    initializeSupabase();
  }, []);

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
};
