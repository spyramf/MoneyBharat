
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, Clock } from 'lucide-react';
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

  // Get most recent post
  const latestPost = blogPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )[0];

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
          {/* Hero Banner Section */}
          <section className="bg-gradient-to-r from-fintech-purple/10 to-fintech-blue/10 pt-28 pb-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left side - Hero content */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    <span className="gradient-text">Money Bharat</span> Blog
                  </h1>
                  <p className="text-gray-700 text-lg md:text-xl mb-6">
                    Expert insights on personal finance, investments, insurance, and more to help you make better financial decisions.
                  </p>
                  
                  {/* Search Bar */}
                  <div className="relative max-w-md">
                    <Input
                      type="text"
                      placeholder="Search articles..."
                      className="pl-10 pr-4 py-2 rounded-lg"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  </div>
                  
                  {/* Categories pills */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    <Badge 
                      className={`cursor-pointer ${selectedCategory === null ? 'bg-fintech-purple' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                      onClick={() => setSelectedCategory(null)}
                    >
                      All
                    </Badge>
                    {categories.slice(0, 5).map((category) => (
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
                
                {/* Right side - Latest post */}
                <div className="lg:col-span-6">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="relative aspect-[16/9]">
                      <img
                        src={latestPost.coverImage}
                        alt={latestPost.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-fintech-purple">Latest Post</Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="bg-gray-100">
                          {latestPost.categories[0]}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock size={14} className="mr-1" />
                          <span>{latestPost.readingTime} min read</span>
                        </div>
                      </div>
                      <Link to={`/blog/${latestPost.slug}`} className="hover:text-fintech-purple">
                        <h3 className="text-xl font-bold mb-2">{latestPost.title}</h3>
                      </Link>
                      <p className="text-gray-600 mb-4 line-clamp-2">{latestPost.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarImage src={latestPost.authorAvatar || "https://github.com/shadcn.png"} />
                            <AvatarFallback>{latestPost.author.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{latestPost.author}</span>
                        </div>
                        <Link 
                          to={`/blog/${latestPost.slug}`} 
                          className="text-sm text-fintech-purple font-medium hover:underline"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
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
                <div className="lg:col-span-1 order-2 lg:order-1">
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
                <div className="lg:col-span-3 order-1 lg:order-2">
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
