
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Search } from 'lucide-react';
import { useBlog } from '@/context/BlogContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPostCard from '@/components/BlogPostCard';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const Blog = () => {
  const { blogPosts, categories } = useBlog();
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<typeof blogPosts>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  
  const featuredPosts = blogPosts.filter(post => post.isFeatured);
  const filteredPosts = selectedCategory.slug === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory.slug);
  
  // Handle search functionality with debouncing
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }
    
    const debounceTimer = setTimeout(() => {
      const query = searchQuery.toLowerCase();
      const results = blogPosts.filter(post => {
        return (
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.content.toLowerCase().includes(query) ||
          post.category.toLowerCase().includes(query) ||
          post.tags.some(tag => tag.toLowerCase().includes(query)) ||
          post.author.name.toLowerCase().includes(query)
        );
      });
      
      setSearchResults(results);
      setIsSearching(true);
    }, 300);
    
    return () => clearTimeout(debounceTimer);
  }, [searchQuery, blogPosts]);
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // The search is already handled by the useEffect
    // This is just to prevent form submission
  };
  
  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
  };
  
  return (
    <>
      <Helmet>
        <title>Personal Finance Blog | Money Bharat</title>
        <meta name="description" content="Explore articles on personal finance, investments, insurance, and more. Stay updated with the latest financial insights and tips from Money Bharat's experts." />
        <meta name="keywords" content="personal finance, investments, mutual funds, insurance, tax planning, financial tips, money management, Indian finance" />
        <meta property="og:title" content="Personal Finance Blog | Money Bharat" />
        <meta property="og:description" content="Explore articles on personal finance, investments, insurance, and more. Stay updated with the latest financial insights and tips from Money Bharat's experts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moneybharat.com/blog" />
        <meta property="og:image" content="/placeholder.svg" />
        <link rel="canonical" href="https://moneybharat.com/blog" />
      </Helmet>

      <Navbar />

      <main className="pt-24">
        {/* Hero Section - Updated with proper padding */}
        <section className="pt-32 pb-16 md:py-24 bg-gradient-to-r from-purple-100 to-blue-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-fintech-purple/10 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-fintech-blue/10 blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="mb-4 px-4 py-1 bg-white/90 backdrop-blur-sm border-fintech-purple">
                Financial Insights & Knowledge
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Financial Wisdom for Every Indian
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Expert insights, practical tips, and comprehensive guides to help you navigate the complex world of personal finance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-fintech-purple hover:bg-fintech-deep-purple">
                  Latest Articles
                </Button>
                <Button variant="outline" className="border-fintech-purple text-fintech-purple hover:bg-fintech-purple/10">
                  Subscribe to Newsletter <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Find Financial Wisdom</h2>
              <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <Input
                    type="text"
                    placeholder="Search for articles, topics, or keywords..."
                    className="pr-10 pl-4 py-6 text-base"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                </div>
                <Button 
                  type="submit" 
                  className="bg-fintech-purple hover:bg-fintech-deep-purple py-6"
                >
                  Search
                </Button>
                {isSearching && (
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="py-6"
                    onClick={clearSearch}
                  >
                    Clear
                  </Button>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* Search Results Section - Only visible when searching */}
        {isSearching && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">
                  {searchResults.length > 0 ? `Search Results (${searchResults.length})` : 'No Results Found'}
                </h2>
                <Button variant="ghost" onClick={clearSearch}>
                  Back to All Articles
                </Button>
              </div>
              
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {searchResults.map(post => (
                    <BlogPostCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <Card className="p-8 text-center">
                  <p className="text-lg text-gray-500 mb-4">
                    No articles match your search query "{searchQuery}".
                  </p>
                  <p className="text-gray-600 mb-6">
                    Try using different keywords or browsing our categories below.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {categories.slice(1).map(category => (
                      <Badge 
                        key={category.slug} 
                        className="cursor-pointer bg-white hover:bg-fintech-purple/10"
                        onClick={() => {
                          setSelectedCategory(category);
                          clearSearch();
                        }}
                      >
                        {category.name}
                      </Badge>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          </section>
        )}

        {/* Featured Posts - Only visible when not searching */}
        {!isSearching && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold">Featured Articles</h2>
                <Button variant="ghost" className="group">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredPosts.length > 0 ? (
                  featuredPosts.map(post => <BlogPostCard key={post.id} post={post} />)
                ) : (
                  <div className="col-span-3 text-center py-10">
                    <p className="text-lg text-gray-500">No featured articles found.</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* All Posts with Categories - Only visible when not searching */}
        {!isSearching && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">All Articles</h2>
                <ScrollArea className="w-full whitespace-nowrap pb-4">
                  <div className="flex gap-3 pb-2">
                    {categories.map(category => (
                      <Button 
                        key={category.slug} 
                        variant={selectedCategory.slug === category.slug ? "default" : "outline"} 
                        size="sm" 
                        className={selectedCategory.slug === category.slug ? "bg-fintech-purple" : ""} 
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category.name} ({category.slug === 'all' 
                          ? blogPosts.length 
                          : blogPosts.filter(post => 
                              post.category.toLowerCase().replace(/\s+/g, '-') === category.slug
                            ).length})
                      </Button>
                    ))}
                  </div>
                </ScrollArea>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map(post => <BlogPostCard key={post.id} post={post} />)
                ) : (
                  <div className="col-span-3 text-center py-10">
                    <p className="text-lg text-gray-500">No articles found in this category.</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Newsletter */}
        <section className="py-16 bg-gradient-to-r from-fintech-purple to-fintech-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Financial Insights</h2>
              <p className="mb-8">
                Subscribe to our newsletter for the latest articles, tips, and expert advice delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input type="email" placeholder="Enter your email address" className="px-4 py-3 rounded-lg text-gray-800 w-full sm:w-64 md:w-80" />
                <Button className="bg-white text-fintech-purple hover:bg-gray-100">
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
