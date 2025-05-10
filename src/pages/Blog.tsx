
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import BlogPostCard from '@/components/BlogPostCard';
import { blogPosts } from '@/data/blogPosts';
import FeaturedPostsSection from '@/components/FeaturedPostsSection';
import BlogCategoriesSection from '@/components/BlogCategoriesSection';
import NewsletterSignup from '@/components/NewsletterSignup';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Filter blog posts based on search query and selected category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = selectedCategory === null || post.categories.includes(selectedCategory);
    
    return matchesSearch && matchesCategory;
  });
  
  // Get featured posts
  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3);
  
  // Extract unique categories from all posts
  const categories = Array.from(
    new Set(blogPosts.flatMap(post => post.categories))
  );

  return (
    <>
      <Helmet>
        <title>Financial Blog - Money Bharat Finance</title>
        <meta name="description" content="Expert insights on mutual funds, investments, insurance, loans, and financial planning for Indian investors. Stay updated with the latest financial news and tips." />
        <meta name="keywords" content="financial blog, money management, investment tips, mutual funds, insurance, loans, tax saving, India, finance blog" />
        <link rel="canonical" href="https://moneybharat.com/blog" />
        <meta property="og:title" content="Financial Blog - Money Bharat Finance" />
        <meta property="og:description" content="Expert insights on mutual funds, investments, insurance, and financial planning for Indian investors." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moneybharat.com/blog" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-fintech-purple/10 to-fintech-blue/10 pt-28 pb-12">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  <span className="gradient-text">Money Bharat</span> Blog
                </h1>
                <p className="text-gray-700 text-lg md:text-xl mb-8">
                  Expert insights on personal finance, investments, insurance, and more
                </p>
                
                {/* Search Bar */}
                <div className="relative max-w-xl mx-auto">
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    className="pl-10 pr-4 py-2 rounded-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                </div>
              </div>
            </div>
          </section>
          
          {/* Featured Posts */}
          <FeaturedPostsSection posts={featuredPosts} />
          
          {/* Main Content Area */}
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
                      <h2 className="text-xl font-semibold mb-4">Categories</h2>
                      <div className="flex flex-wrap gap-2">
                        <Badge 
                          className={`cursor-pointer ${selectedCategory === null ? 'bg-fintech-purple' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                          onClick={() => setSelectedCategory(null)}
                        >
                          All
                        </Badge>
                        {categories.map((category) => (
                          <Badge 
                            key={category}
                            className={`cursor-pointer ${selectedCategory === category ? 'bg-fintech-purple' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                            onClick={() => setSelectedCategory(category)}
                          >
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Newsletter Signup Widget */}
                    <NewsletterSignup />
                  </div>
                </div>
                
                {/* Blog Posts */}
                <div className="lg:col-span-3">
                  <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
                  
                  {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredPosts.map((post) => (
                        <BlogPostCard key={post.slug} post={post} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500 mb-4">No blog posts found matching your criteria.</p>
                      <Button onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory(null);
                      }}>
                        Reset Filters
                      </Button>
                    </div>
                  )}
                  
                  {filteredPosts.length > 0 && (
                    <div className="flex justify-center mt-10">
                      <Button variant="outline">Load More</Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
          
          {/* Categories Section */}
          <BlogCategoriesSection categories={categories} />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Blog;
