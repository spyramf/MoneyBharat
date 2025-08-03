import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useBlog } from '@/context/BlogContext';
import { BlogPostCard } from '@/components/BlogPostCard';
import SEOHead from '@/components/seo/SEOHead';
import StructuredData from '@/components/seo/StructuredData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Calendar, User, Tag, TrendingUp, BookOpen } from 'lucide-react';

const Blog = () => {
  const { posts, categories, featuredPosts, isLoading, error } = useBlog();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = searchTerm === '' || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || post.category?.slug === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchTerm, selectedCategory]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-fintech-light via-white to-fintech-light/30">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-center min-h-96">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-fintech-purple"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-fintech-light via-white to-fintech-light/30">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center justify-center min-h-96">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Error Loading Blog</h2>
            <p className="text-gray-600 mb-8">{error}</p>
            <Button onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Money Bharat Finance Blog",
    "description": "Expert financial advice, investment strategies, and money management tips",
    "url": "https://moneybharatfinance.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Money Bharat Finance",
      "logo": {
        "@type": "ImageObject",
        "url": "https://moneybharatfinance.com/logo.png"
      }
    }
  };

  return (
    <>
      <SEOHead 
        title="Financial Blog - Expert Money Management Tips | Money Bharat Finance"
        description="Read expert insights on mutual funds, insurance, loans, and investment strategies. Get the latest financial advice from certified professionals."
        keywords="financial blog, investment tips, mutual funds, insurance, money management"
      />
      <StructuredData data={structuredData} />
      
      <div className="min-h-screen bg-gradient-to-br from-fintech-light via-white to-fintech-light/30">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-fintech-purple/10 rounded-full text-fintech-purple font-medium text-sm mb-6">
              <BookOpen className="mr-2 h-4 w-4" />
              Expert Financial Insights
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Financial Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Stay informed with expert insights on investments, insurance, loans, and financial planning strategies
            </p>
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="mb-16">
              <div className="flex items-center gap-2 mb-8">
                <TrendingUp className="h-6 w-6 text-fintech-purple" />
                <h2 className="text-2xl font-bold text-gray-900">Featured Articles</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.slice(0, 3).map((post) => (
                  <BlogPostCard key={post.id} post={post} featured />
                ))}
              </div>
            </section>
          )}

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-64">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.slug}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              <Badge 
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                className="cursor-pointer"
                onClick={() => setSelectedCategory('all')}
              >
                All Posts ({posts.length})
              </Badge>
              {categories.map((category) => {
                const count = posts.filter(post => post.category?.slug === category.slug).length;
                return (
                  <Badge 
                    key={category.id}
                    variant={selectedCategory === category.slug ? 'default' : 'outline'}
                    className="cursor-pointer"
                    onClick={() => setSelectedCategory(category.slug)}
                  >
                    {category.name} ({count})
                  </Badge>
                );
              })}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
              <p className="text-gray-500 mb-6">
                {searchTerm || selectedCategory !== 'all' 
                  ? 'Try adjusting your search or filters' 
                  : 'Check back soon for new content'}
              </p>
              {(searchTerm || selectedCategory !== 'all') && (
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                >
                  Clear Filters
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
