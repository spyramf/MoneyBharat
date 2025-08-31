
import { supabaseBlogService } from '@/services/supabaseBlogService';

const samplePosts = [
  {
    category_id: '',
    author_id: '',
    title: 'Top 10 Mutual Funds to Invest in 2024',
    slug: 'top-10-mutual-funds-2024',
    excerpt: 'Discover the best performing mutual funds for 2024 with detailed analysis and expert recommendations.',
    content: `<h2>Introduction</h2><p>Investing in mutual funds is one of the best ways to build wealth over time. Here are our top picks for 2024.</p>

<h2>1. Large Cap Equity Funds</h2><p>These funds invest in established companies with strong fundamentals...</p>

<h2>2. Mid Cap Growth Funds</h2><p>For investors looking for higher growth potential...</p>`,
    status: 'published' as const,
    is_featured: true,
    read_time: '8 min read',
    featured_image: '/images/blog/mutual-funds-2024.jpg',
    meta_title: 'Best Mutual Funds 2024 - Expert Picks & Analysis',
    meta_description: 'Discover top-performing mutual funds for 2024. Expert analysis, performance data, and investment strategies to maximize returns.',
    focus_keywords: ['mutual funds 2024', 'best mutual funds', 'investment strategy'],
    published_date: '2024-01-15',
    seo_score: 85,
    canonical_url: '/blog/top-10-mutual-funds-2024',
    robots_directive: 'index, follow',
    og_title: 'Top 10 Mutual Funds to Invest in 2024',
    og_description: 'Expert analysis of the best performing mutual funds for 2024 with detailed investment strategies.',
    og_image: '/images/blog/mutual-funds-2024-og.jpg',
    twitter_title: 'Top 10 Mutual Funds 2024 - Expert Picks',
    twitter_description: 'Discover the best mutual funds for 2024 with expert analysis and investment strategies.',
    twitter_image: '/images/blog/mutual-funds-2024-twitter.jpg',
  },
  {
    category_id: '',
    author_id: '',
    title: 'SIP vs Lump Sum: Which Investment Strategy is Better?',
    slug: 'sip-vs-lump-sum-investment-strategy',
    excerpt: 'A comprehensive comparison between SIP and lump sum investments to help you make the right choice.',
    content: `<h2>Understanding SIP and Lump Sum</h2><p>Both SIP and lump sum investments have their advantages. Let's explore which might be better for you.</p>

<h2>Benefits of SIP</h2><p>Systematic Investment Plans offer several advantages...</p>

<h2>When to Choose Lump Sum</h2><p>Lump sum investments work best when...</p>`,
    status: 'published' as const,
    is_featured: false,
    read_time: '6 min read',
    featured_image: '/images/blog/sip-vs-lumpsum.jpg',
    meta_title: 'SIP vs Lump Sum Investment: Complete Comparison Guide',
    meta_description: 'Compare SIP and Lump Sum investment strategies. Learn which approach works best for your financial goals and risk profile.',
    focus_keywords: ['sip vs lump sum', 'investment strategy', 'systematic investment plan'],
    published_date: '2024-01-20',
    seo_score: 80,
    canonical_url: '/blog/sip-vs-lump-sum-investment-strategy',
    robots_directive: 'index, follow',
    og_title: 'SIP vs Lump Sum: Which Investment Strategy is Better?',
    og_description: 'Complete comparison of SIP and Lump Sum investment strategies to help you choose the right approach.',
    og_image: '/images/blog/sip-vs-lumpsum-og.jpg',
    twitter_title: 'SIP vs Lump Sum Investment Guide',
    twitter_description: 'Comprehensive comparison to help you choose between SIP and Lump Sum investments.',
    twitter_image: '/images/blog/sip-vs-lumpsum-twitter.jpg',
  }
];

export const createSampleBlogPosts = async () => {
  try {
    // First create sample categories and authors if they don't exist
    const categories = await supabaseBlogService.getAllCategories();
    const authors = await supabaseBlogService.getAllAuthors();
    
    let categoryId = categories[0]?.id;
    let authorId = authors[0]?.id;

    // Create default category if none exists
    if (!categoryId) {
      const newCategory = await supabaseBlogService.createCategory({
        name: 'Investment Guide',
        slug: 'investment-guide',
        description: 'Expert guides on investment strategies and financial planning',
        meta_title: 'Investment Guide - Money Bharat',
        meta_description: 'Comprehensive investment guides and strategies from Money Bharat experts'
      });
      categoryId = newCategory.id;
    }

    // Create default author if none exists
    if (!authorId) {
      const newAuthor = await supabaseBlogService.createAuthor({
        name: 'Money Bharat Team',
        email: 'team@moneybharat.co',
        role: 'Financial Advisor',
        bio: 'Expert financial advisors with years of experience in mutual funds, insurance, and investment planning.',
        meta_title: 'Money Bharat Financial Experts',
        meta_description: 'Meet our team of certified financial advisors and investment experts'
      });
      authorId = newAuthor.id;
    }

    // Create sample posts
    for (const postData of samplePosts) {
      const postWithIds = {
        ...postData,
        category_id: categoryId,
        author_id: authorId
      };
      
      await supabaseBlogService.createPost(postWithIds);
    }

    console.log('Sample blog posts created successfully');
  } catch (error) {
    console.error('Error creating sample blog posts:', error);
    throw error;
  }
};
