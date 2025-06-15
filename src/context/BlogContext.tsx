import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { blogPosts as initialBlogPosts, BlogPost, blogCategories as initialCategories, BlogAuthor } from '@/data/blogData';
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
      throw new Error('Failed to fetch blogs');
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

  // Query to fetch blogs
  const { data: blogPosts = [], isLoading, error } = useQuery({
    queryKey: ['blogs'],
    queryFn: fetchBlogs,
  });

  // Initialize Supabase with initial data if needed
  const initializeSupabase = async () => {
    try {
      // First check if the table exists by trying a simple count query
      const { count, error: countError } = await supabase
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
            await supabase
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
          console.error('Supabase error:', error);
          throw new Error(error.message);
        }
        return data;
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
      console.error('Add post error:', error);
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
        const { error } = await supabase
          .from('blogs')
          .update({
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
            featuredimage: post.featuredImage,
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
        const { error } = await supabase
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

  // Add this after the other existing useEffect for initialization
  useEffect(() => {
    // Check if the SEO blog post already exists
    const seoSlug = "top-7-personal-finance-tips-india";
    // If blogPosts is initialized, and our post is missing, add it
    if (
      blogPosts &&
      !blogPosts.some((post) => post.slug === seoSlug)
    ) {
      // Compose the author object. Use a real or placeholder author.
      const seoAuthor = {
        name: "Money Bharat Team",
        avatar: "/placeholder.svg",
        role: "Finance Experts"
      };
      const seoPost = {
        title: "Top 7 Personal Finance Tips to Secure Your Financial Future in India",
        slug: seoSlug,
        excerpt: "Unlock your path to financial freedom! Learn 7 actionable personal finance tips tailored for Indian investors and families — covering budgeting, investing, saving, insurance, and more.",
        content: `
          <p>Managing money the right way is the cornerstone of a happy, stress-free life. Whether you’re new to personal finance or looking to take your wealth-building to the next level, these expert-backed finance tips will guide you toward a secure financial future.</p>
          <h2>1. Set Clear Financial Goals</h2>
          <p>You can’t reach your destination without a map. Define short-term (vacations, emergency funds), medium-term (car, home renovations), and long-term (retirement, children’s education) financial goals.</p>
          <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80" alt="Indian family budgeting together planning for their dream" class="rounded-lg my-4"/>
          <h2>2. Create & Stick to a Budget</h2>
          <p>Track your income and expenses every month. Use budgeting apps or even a basic Excel sheet to categorize and control spending. Allocate at least 20% for savings and investments.</p>
          <h2>3. Build an Emergency Fund</h2>
          <p>Life is unpredictable &mdash; job losses, medical emergencies, and unplanned expenses happen. Aim to save at least 3-6 months’ expenses in a liquid, safe account.</p>
          <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" alt="A piggy bank representing building an emergency fund in India" class="rounded-lg my-4"/>
          <h2>4. Invest Early and Consistently</h2>
          <p>The earlier you start investing, the more you benefit from compound interest. Start SIPs in mutual funds. Explore stocks, gold, and real estate as your risk appetite grows. Don’t fear small beginnings &mdash; consistency is the key.</p>
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" alt="Stock market chart and mutual funds investing - compounding returns" class="rounded-lg my-4"/>
          <h2>5. Don’t Neglect Insurance</h2>
          <p>Protect your loved ones! Health and term life insurance are must-haves to cushion financial shocks.</p>
          <h2>6. Minimize and Manage Debt</h2>
          <p>Prioritize paying off high-interest loans (like credit cards), and avoid piling up EMIs. Consolidate debts or refinance for better terms when possible.</p>
          <h2>7. Stay Educated and Updated</h2>
          <p>Financial markets and policies (like GST, Income Tax) change constantly. Subscribe to trusted finance blogs (like Money Bharat!) and follow SEBI, RBI, and government updates.</p>
          <h3>Conclusion</h3>
          <p>Personal finance is a lifelong journey, and every small step you take can make a big difference. Start today &mdash; your future self will thank you!</p>
          <p>Internal Resources: <a href="/blog">Explore more Money Bharat articles</a></p>
        `,
        category: "Personal Finance",
        author: seoAuthor,
        publishedDate: "2025-06-15",
        readTime: "6 min read",
        tags: [
          "personal finance",
          "budgeting",
          "saving",
          "investments",
          "mutual funds",
          "india",
          "insurance"
        ],
        isFeatured: true,
        featuredImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80"
      };
      // Prevent rapid-fire inserts due to re-renders
      let inserted = false;
      const insertIfNot = async () => {
        if (inserted) return;
        inserted = true;
        try {
          await addPost(seoPost);
          console.log("SEO blog post added automatically.");
        } catch (err) {
          console.error("Error adding SEO blog post: ", err);
        }
      };
      insertIfNot();
    }
  }, [blogPosts, addPost]);

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
};
