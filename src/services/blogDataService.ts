
import { BlogPost } from '@/content/blog/types';
import { blogPostsRegistry } from '@/content/blog/registry';

export interface LocalBlogPost extends Omit<BlogPost, 'id'> {
  id?: number;
  isLocal?: boolean;
}

class BlogDataService {
  private static instance: BlogDataService;
  private localStorageKey = 'cms_blog_posts';

  static getInstance(): BlogDataService {
    if (!BlogDataService.instance) {
      BlogDataService.instance = new BlogDataService();
    }
    return BlogDataService.instance;
  }

  // Get all blog posts (static + local)
  getAllPosts(): BlogPost[] {
    const localPosts = this.getLocalPosts();
    const staticPosts = blogPostsRegistry;
    
    // Combine posts, with local posts taking precedence over static ones with same ID
    const allPosts = [...staticPosts];
    
    localPosts.forEach(localPost => {
      const existingIndex = allPosts.findIndex(post => post.id === localPost.id);
      if (existingIndex >= 0) {
        // Replace existing post
        allPosts[existingIndex] = localPost;
      } else {
        // Add new post
        allPosts.push(localPost);
      }
    });

    return allPosts.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime());
  }

  // Get posts from localStorage
  private getLocalPosts(): BlogPost[] {
    try {
      const stored = localStorage.getItem(this.localStorageKey);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error reading local posts:', error);
      return [];
    }
  }

  // Save posts to localStorage
  private saveLocalPosts(posts: BlogPost[]) {
    try {
      localStorage.setItem(this.localStorageKey, JSON.stringify(posts));
    } catch (error) {
      console.error('Error saving local posts:', error);
    }
  }

  // Add new post
  addPost(post: Omit<BlogPost, 'id'>): BlogPost {
    const allPosts = this.getAllPosts();
    const newId = Math.max(...allPosts.map(p => p.id), 0) + 1;
    
    const newPost: BlogPost = {
      ...post,
      id: newId,
    };

    const localPosts = this.getLocalPosts();
    localPosts.push(newPost);
    this.saveLocalPosts(localPosts);

    return newPost;
  }

  // Update existing post
  updatePost(updatedPost: BlogPost): BlogPost {
    const localPosts = this.getLocalPosts();
    const existingIndex = localPosts.findIndex(post => post.id === updatedPost.id);

    if (existingIndex >= 0) {
      localPosts[existingIndex] = updatedPost;
    } else {
      localPosts.push(updatedPost);
    }

    this.saveLocalPosts(localPosts);
    return updatedPost;
  }

  // Delete post
  deletePost(id: number): boolean {
    const localPosts = this.getLocalPosts();
    const filteredPosts = localPosts.filter(post => post.id !== id);
    
    if (filteredPosts.length !== localPosts.length) {
      this.saveLocalPosts(filteredPosts);
      return true;
    }
    
    return false;
  }

  // Get post by ID
  getPostById(id: number): BlogPost | undefined {
    return this.getAllPosts().find(post => post.id === id);
  }

  // Get post by slug
  getPostBySlug(slug: string): BlogPost | undefined {
    return this.getAllPosts().find(post => post.slug === slug);
  }

  // Export all data
  exportData(): string {
    const data = {
      posts: this.getLocalPosts(),
      images: JSON.parse(localStorage.getItem('cms_images') || '[]'),
      exportDate: new Date().toISOString()
    };
    return JSON.stringify(data, null, 2);
  }

  // Import data
  importData(jsonData: string): boolean {
    try {
      const data = JSON.parse(jsonData);
      if (data.posts) {
        this.saveLocalPosts(data.posts);
      }
      if (data.images) {
        localStorage.setItem('cms_images', JSON.stringify(data.images));
      }
      return true;
    } catch (error) {
      console.error('Error importing data:', error);
      return false;
    }
  }

  // Clear all local data
  clearLocalData(): void {
    localStorage.removeItem(this.localStorageKey);
    localStorage.removeItem('cms_images');
  }
}

export const blogDataService = BlogDataService.getInstance();
