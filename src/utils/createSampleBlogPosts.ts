
import { supabaseBlogService } from '@/services/supabaseBlogService';
import { sampleFinanceBlogPosts } from './sampleBlogPosts';

export const createSampleBlogPosts = async () => {
  try {
    console.log('Creating sample blog posts...');
    
    for (const post of sampleFinanceBlogPosts) {
      try {
        await supabaseBlogService.createPost(post);
        console.log(`Created post: ${post.title}`);
      } catch (error) {
        console.error(`Error creating post ${post.title}:`, error);
      }
    }
    
    console.log('Sample blog posts created successfully!');
    return true;
  } catch (error) {
    console.error('Error creating sample blog posts:', error);
    return false;
  }
};
