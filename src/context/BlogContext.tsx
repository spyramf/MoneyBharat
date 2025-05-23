
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { blogPosts as initialBlogPosts, BlogPost, blogCategories as initialCategories } from '@/data/blogData';

interface BlogContextType {
  blogPosts: BlogPost[];
  categories: typeof initialCategories;
  addPost: (post: Omit<BlogPost, 'id'>) => void;
  updatePost: (post: BlogPost) => void;
  deletePost: (id: number) => void;
  getPostById: (id: number) => BlogPost | undefined;
  getPostBySlug: (slug: string) => BlogPost | undefined;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

const STORAGE_KEY = 'moneybharat-blog-posts';

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

// Helper function to get the posts from localStorage or use initial data
const getStoredBlogPosts = (): BlogPost[] => {
  try {
    const storedPosts = localStorage.getItem(STORAGE_KEY);
    if (storedPosts) {
      return JSON.parse(storedPosts);
    }
  } catch (error) {
    console.error('Error loading blog posts from localStorage:', error);
  }
  return initialBlogPosts;
};

// Helper function to save posts to localStorage
const saveBlogPosts = (posts: BlogPost[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  } catch (error) {
    console.error('Error saving blog posts to localStorage:', error);
  }
};

export const BlogProvider = ({ children }: BlogProviderProps) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(getStoredBlogPosts());
  const [categories] = useState(initialCategories);

  // Save to localStorage whenever blogPosts change
  useEffect(() => {
    saveBlogPosts(blogPosts);
  }, [blogPosts]);

  const addPost = (post: Omit<BlogPost, 'id'>) => {
    const newPost: BlogPost = {
      ...post,
      id: blogPosts.length > 0 ? Math.max(...blogPosts.map(p => p.id)) + 1 : 1,
    };
    const updatedPosts = [...blogPosts, newPost];
    setBlogPosts(updatedPosts);
  };

  const updatePost = (post: BlogPost) => {
    const updatedPosts = blogPosts.map(p => (p.id === post.id ? post : p));
    setBlogPosts(updatedPosts);
  };

  const deletePost = (id: number) => {
    const updatedPosts = blogPosts.filter(post => post.id !== id);
    setBlogPosts(updatedPosts);
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
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
};
