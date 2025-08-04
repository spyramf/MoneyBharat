
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabaseBlogService, type SupabaseBlogPost, type SupabaseBlogCategory, type SupabaseBlogAuthor } from '@/services/supabaseBlogService';

interface BlogContextType {
  posts: SupabaseBlogPost[];
  categories: SupabaseBlogCategory[];
  authors: SupabaseBlogAuthor[];
  isLoading: boolean;
  error: string | null;
  featuredPosts: SupabaseBlogPost[];
  getPostBySlug: (slug: string) => SupabaseBlogPost | undefined;
  getPostsByCategory: (categorySlug: string) => SupabaseBlogPost[];
  refreshData: () => Promise<void>;
  // Additional methods for admin functionality
  blogPosts: SupabaseBlogPost[];
  addPost: (post: Partial<SupabaseBlogPost>) => Promise<void>;
  updatePost: (id: string, post: Partial<SupabaseBlogPost>) => Promise<void>;
  deletePost: (id: string) => Promise<void>;
  getPostById: (id: string) => SupabaseBlogPost | undefined;
  refreshPosts: () => Promise<void>;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

interface BlogProviderProps {
  children: ReactNode;
}

export const BlogProvider: React.FC<BlogProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<SupabaseBlogPost[]>([]);
  const [categories, setCategories] = useState<SupabaseBlogCategory[]>([]);
  const [authors, setAuthors] = useState<SupabaseBlogAuthor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const [postsData, categoriesData, authorsData] = await Promise.all([
        supabaseBlogService.getAllPosts(),
        supabaseBlogService.getAllCategories(),
        supabaseBlogService.getAllAuthors()
      ]);

      setPosts(postsData);
      setCategories(categoriesData);
      setAuthors(authorsData);
    } catch (err) {
      console.error('Error loading blog data:', err);
      setError('Failed to load blog data');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const featuredPosts = posts.filter(post => post.is_featured && post.status === 'published');

  const getPostBySlug = (slug: string): SupabaseBlogPost | undefined => {
    return posts.find(post => post.slug === slug && post.status === 'published');
  };

  const getPostsByCategory = (categorySlug: string): SupabaseBlogPost[] => {
    return posts.filter(post => 
      post.category?.slug === categorySlug && 
      post.status === 'published'
    );
  };

  const refreshData = async () => {
    await loadData();
  };

  // Admin methods
  const addPost = async (postData: Partial<SupabaseBlogPost>) => {
    try {
      const newPost = await supabaseBlogService.createPost(postData);
      setPosts(prev => [newPost, ...prev]);
    } catch (error) {
      console.error('Error adding post:', error);
      throw error;
    }
  };

  const updatePost = async (id: string, postData: Partial<SupabaseBlogPost>) => {
    try {
      const updatedPost = await supabaseBlogService.updatePost(id, postData);
      setPosts(prev => prev.map(post => post.id === id ? updatedPost : post));
    } catch (error) {
      console.error('Error updating post:', error);
      throw error;
    }
  };

  const deletePost = async (id: string) => {
    try {
      await supabaseBlogService.deletePost(id);
      setPosts(prev => prev.filter(post => post.id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
      throw error;
    }
  };

  const getPostById = (id: string): SupabaseBlogPost | undefined => {
    return posts.find(post => post.id === id);
  };

  const refreshPosts = async () => {
    await loadData();
  };

  const value: BlogContextType = {
    posts: posts.filter(post => post.status === 'published'),
    categories,
    authors,
    isLoading,
    error,
    featuredPosts,
    getPostBySlug,
    getPostsByCategory,
    refreshData,
    // Admin methods
    blogPosts: posts,
    addPost,
    updatePost,
    deletePost,
    getPostById,
    refreshPosts,
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = (): BlogContextType => {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};
