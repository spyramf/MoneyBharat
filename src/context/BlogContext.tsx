
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
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
  const { data, error } = await supabase
    .from('blogs')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching blogs:', error);
    throw new Error('Failed to fetch blogs');
  }

  return data as unknown as BlogPost[];
};

export const BlogProvider = ({ children }: BlogProviderProps) => {
  const [categories] = useState(initialCategories);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Query to fetch blogs
  const { data: blogPosts = [], isLoading, error } = useQuery({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
    // If data fetching fails, fall back to initial data
    onError: (err) => {
      console.error('Error loading blogs from Supabase:', err);
      toast({
        title: "Error loading blogs",
        description: "Using fallback data. Please check your connection.",
        variant: "destructive",
      });
      return initialBlogPosts;
    }
  });

  // Initialize Supabase with initial data if needed
  useEffect(() => {
    const initializeSupabase = async () => {
      try {
        const { count } = await supabase
          .from('blogs')
          .select('*', { count: 'exact', head: true });

        // If no data in Supabase, add initial data
        if (count === 0) {
          for (const post of initialBlogPosts) {
            await supabase.from('blogs').insert({
              ...post,
              tags: post.tags
            });
          }
          queryClient.invalidateQueries({ queryKey: ['blogs'] });
        }
      } catch (error) {
        console.error('Error initializing blogs in Supabase:', error);
      }
    };

    initializeSupabase();
  }, [queryClient]);

  // Add post mutation
  const addPostMutation = useMutation({
    mutationFn: async (post: Omit<BlogPost, 'id'>) => {
      const { data, error } = await supabase
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
        description: error.message,
        variant: "destructive",
      });
    }
  });

  // Update post mutation
  const updatePostMutation = useMutation({
    mutationFn: async (post: BlogPost) => {
      const { error } = await supabase
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
        description: error.message,
        variant: "destructive",
      });
    }
  });

  // Delete post mutation
  const deletePostMutation = useMutation({
    mutationFn: async (id: number) => {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', id);

      if (error) throw new Error(error.message);
      return id;
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
        description: error.message,
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
