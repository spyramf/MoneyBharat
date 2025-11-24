
// Re-export everything from the new structure
export type { BlogPost, BlogAuthor, BlogCategory } from '@/content/blog/types';
export { blogAuthors } from '@/content/blog/authors';
export { blogCategories } from '@/content/blog/categories';
export { 
  blogPostsRegistry as blogPosts,
  getBlogPostById,
  getBlogPostBySlug,
  getFeaturedPosts,
  getPostsByCategory,
  getPostsByTag
} from '@/content/blog/registry';
