
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { BlogPost, blogCategories as initialCategories } from '@/data/blogData';
import { blogDataService } from '@/services/blogDataService';
import { toast } from 'sonner';

interface BlogContextType {
  blogPosts: BlogPost[];
  categories: typeof initialCategories;
  getPostById: (id: number) => BlogPost | undefined;
  getPostBySlug: (slug: string) => BlogPost | undefined;
  addPost: (post: Omit<BlogPost, 'id'>) => void;
  updatePost: (post: BlogPost) => void;
  deletePost: (id: number) => void;
  refreshPosts: () => void;
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

export const BlogProvider = ({ children }: BlogProviderProps) => {
  const [categories] = useState(initialCategories);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error] = useState<Error | null>(null);

  const refreshPosts = () => {
    const posts = blogDataService.getAllPosts();
    setBlogPosts(posts);
  };

  useEffect(() => {
    refreshPosts();
    setIsLoading(false);
  }, []);

  const getPostById = (id: number) => {
    return blogDataService.getPostById(id);
  };

  const getPostBySlug = (slug: string) => {
    return blogDataService.getPostBySlug(slug);
  };

  const addPost = (newPostData: Omit<BlogPost, 'id'>) => {
    const newPost = blogDataService.addPost(newPostData);
    refreshPosts();
    toast.success('Blog post created successfully!');
  };

  const updatePost = (updatedPost: BlogPost) => {
    blogDataService.updatePost(updatedPost);
    refreshPosts();
    toast.success('Blog post updated successfully!');
  };

  const deletePost = (id: number) => {
    const success = blogDataService.deletePost(id);
    if (success) {
      refreshPosts();
      toast.success('Blog post deleted successfully!');
    } else {
      toast.error('Failed to delete blog post');
    }
  };

  const value = {
    blogPosts,
    categories,
    getPostById,
    getPostBySlug,
    addPost,
    updatePost,
    deletePost,
    refreshPosts,
    isLoading,
    error,
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
};
