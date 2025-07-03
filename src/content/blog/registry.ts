
import { BlogPost } from './types';
import { mutualFunds2024Post } from './posts/mutual-funds-2024';
import { sipInvestmentPost } from './posts/sip-investment-strategy';
import { healthVsLifeInsurancePost } from './posts/health-vs-life-insurance';

// Registry of all blog posts - add new posts here
export const blogPostsRegistry: BlogPost[] = [
  mutualFunds2024Post,
  sipInvestmentPost,
  healthVsLifeInsurancePost,
  // Add more posts here as you create them
];

// Helper functions for blog management
export const getBlogPostById = (id: number): BlogPost | undefined => {
  return blogPostsRegistry.find(post => post.id === id);
};

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPostsRegistry.find(post => post.slug === slug);
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPostsRegistry.filter(post => post.isFeatured);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category === 'all' || category === 'All') {
    return blogPostsRegistry;
  }
  return blogPostsRegistry.filter(post => 
    post.category.toLowerCase().replace(/\s+/g, '-') === category.toLowerCase()
  );
};

export const getPostsByTag = (tag: string): BlogPost[] => {
  return blogPostsRegistry.filter(post => 
    post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  );
};
