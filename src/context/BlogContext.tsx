
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { blogPosts as staticBlogPosts, BlogPost, blogCategories as initialCategories, blogAuthors } from '@/data/blogData';
import { toast } from 'sonner';

interface BlogContextType {
  blogPosts: BlogPost[];
  categories: typeof initialCategories;
  getPostById: (id: number) => BlogPost | undefined;
  getPostBySlug: (slug: string) => BlogPost | undefined;
  addPost: (post: Omit<BlogPost, 'id'>) => void;
  updatePost: (post: BlogPost) => void;
  deletePost: (id: number) => void;
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
  const [blogPosts, setBlogPosts] = useState(staticBlogPosts);
  const [isLoading] = useState(false);
  const [error] = useState<Error | null>(null);

  const getPostById = (id: number) => {
    return blogPosts.find(post => post.id === id);
  };

  const getPostBySlug = (slug: string) => {
    return blogPosts.find(post => post.slug === slug);
  };

  const addPost = (newPostData: Omit<BlogPost, 'id'>) => {
    const newId = Math.max(...blogPosts.map(p => p.id)) + 1;
    const newPost: BlogPost = {
      ...newPostData,
      id: newId,
    };
    setBlogPosts(prevPosts => [...prevPosts, newPost]);
    toast.success('Blog post created successfully!');
  };

  const updatePost = (updatedPost: BlogPost) => {
    setBlogPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === updatedPost.id ? updatedPost : post
      )
    );
    toast.success('Blog post updated successfully!');
  };

  const deletePost = (id: number) => {
    setBlogPosts(prevPosts => prevPosts.filter(post => post.id !== id));
    toast.success('Blog post deleted successfully!');
  };

  const value = {
    blogPosts,
    categories,
    getPostById,
    getPostBySlug,
    addPost,
    updatePost,
    deletePost,
    isLoading,
    error,
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
};
