
import { supabaseBlogService } from '@/services/supabaseBlogService';

const samplePosts = [
  {
    title: "Getting Started with Mutual Fund Investments",
    slug: "getting-started-mutual-fund-investments",
    excerpt: "A comprehensive guide to help beginners understand the basics of mutual fund investing and make informed decisions.",
    content: "# Getting Started with Mutual Fund Investments\n\nMutual funds are one of the most popular investment vehicles for both beginners and experienced investors. This comprehensive guide will walk you through everything you need to know to get started with mutual fund investments.\n\n## What are Mutual Funds?\n\nMutual funds are investment vehicles that pool money from multiple investors to purchase a diversified portfolio of stocks, bonds, or other securities. Professional fund managers make investment decisions on behalf of the investors.\n\n## Benefits of Mutual Fund Investing\n\n1. **Diversification**: Spread risk across multiple securities\n2. **Professional Management**: Experienced fund managers make investment decisions\n3. **Liquidity**: Easy to buy and sell fund shares\n4. **Affordability**: Start investing with small amounts\n\n## Types of Mutual Funds\n\n- **Equity Funds**: Invest primarily in stocks\n- **Debt Funds**: Invest in bonds and fixed-income securities\n- **Hybrid Funds**: Mix of equity and debt investments\n- **Index Funds**: Track a specific market index\n\n## How to Start Investing\n\n1. Assess your risk tolerance\n2. Define your investment goals\n3. Choose the right fund category\n4. Start with SIP (Systematic Investment Plan)\n5. Monitor and review regularly\n\nRemember, mutual fund investments are subject to market risks. Always read the scheme-related documents carefully before investing.",
    category_id: "", // Will be filled when category exists
    author_id: "", // Will be filled when author exists
    status: "published" as const,
    is_featured: true,
    read_time: "8 min read",
    featured_image: "/images/blog/mutual-funds-guide.jpg",
    meta_title: "Mutual Fund Investment Guide for Beginners | Money Bharat",
    meta_description: "Learn the basics of mutual fund investing with our comprehensive beginner's guide. Understand types, benefits, and how to start investing today.",
    focus_keywords: ["mutual funds", "investment guide", "SIP", "diversification"],
    published_date: new Date().toISOString(),
    seo_score: 85,
  },
  // Add more sample posts as needed...
];

export const createSampleBlogPosts = async () => {
  try {
    console.log('Creating sample blog posts...');
    
    // Get existing categories and authors
    const [categories, authors] = await Promise.all([
      supabaseBlogService.getAllCategories(),
      supabaseBlogService.getAllAuthors()
    ]);

    if (categories.length === 0 || authors.length === 0) {
      console.log('No categories or authors found. Please create them first.');
      return;
    }

    const categoryId = categories[0].id;
    const authorId = authors[0].id;

    for (const postData of samplePosts) {
      try {
        const post = {
          ...postData,
          category_id: categoryId,
          author_id: authorId,
        };
        
        await supabaseBlogService.createPost(post);
        console.log(`Created post: ${post.title}`);
      } catch (error) {
        console.error(`Error creating post ${postData.title}:`, error);
      }
    }

    console.log('Sample blog posts creation completed!');
  } catch (error) {
    console.error('Error creating sample blog posts:', error);
  }
};
