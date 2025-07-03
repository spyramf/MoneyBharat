
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { blogPosts as staticBlogPosts, BlogPost, blogCategories as initialCategories, BlogAuthor, blogAuthors } from '@/data/blogData';

interface BlogContextType {
  blogPosts: BlogPost[];
  categories: typeof initialCategories;
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

export const BlogProvider = ({ children }: BlogProviderProps) => {
  const [categories] = useState(initialCategories);
  const [blogPosts] = useState(staticBlogPosts);
  const [isLoading] = useState(false);
  const [error] = useState<Error | null>(null);

  const getPostById = (id: number) => {
    return blogPosts.find(post => post.id === id);
  };

  const getPostBySlug = (slug: string) => {
    return blogPosts.find(post => post.slug === slug);
  };

  const value = {
    blogPosts,
    categories,
    getPostById,
    getPostBySlug,
    isLoading,
    error,
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
};
