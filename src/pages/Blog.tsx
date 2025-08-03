
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Search, Calendar, Clock, User } from 'lucide-react';
import { useBlog } from '@/context/BlogContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPostCard from '@/components/BlogPostCard';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

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
  };
  
  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
  };

  const FeaturedPostCard = ({ post }: { post: typeof blogPosts[0] }) => (
    <Link to={`/blog/${post.slug}`} className="group block">
      <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={post.featuredImage} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute top-4 left-4">
            <Badge className="bg-fintech-purple text-white border-0">
              {post.category}
            </Badge>
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-fintech-purple transition-colors">
              {post.title}
            </h3>
            <div className="flex items-center gap-4 text-sm opacity-90">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {post.publishedDate && format(new Date(post.publishedDate), 'MMM dd, yyyy')}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );

  const RegularPostCard = ({ post }: { post: typeof blogPosts[0] }) => (
    <Link to={`/blog/${post.slug}`} className="group block">
      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 bg-white border border-gray-100">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={post.featuredImage} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-white/90 text-fintech-purple">
              {post.category}
            </Badge>
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-fintech-purple transition-colors leading-tight">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback className="text-xs">
                  {post.author.name.split(' ').map(name => name[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-xs font-medium text-gray-900">{post.author.name}</p>
                <p className="text-xs text-gray-500">{post.author.role}</p>
              </div>
            </div>
            <div className="text-xs text-gray-500 flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
  
  return (
    <>
      <Helmet>
        <title>Personal Finance Blog | Money Bharat</title>
        <meta name="description" content="Discover expert personal finance guides, investment advice, insurance tips, and actionable strategies tailored for Indians. Navigate your financial journey with insights from Money Bharat's team." />
        <meta name="keywords" content="personal finance, investments, mutual funds, insurance, tax planning, financial tips, money management, Indian finance, best SIPs, moneybharat, financial guides" />
        <meta property="og:title" content="Personal Finance Blog | Money Bharat" />
        <meta property="og:description" content="Expert tips, guides, and resources for building financial security and wealth in India." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moneybharat.co/blog" />
        <meta property="og:image" content="/placeholder.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Personal Finance Blog | Money Bharat" />
        <meta name="twitter:description" content="Expert tips, guides, and resources for building financial security and wealth in India." />
        <meta name="twitter:image" content="/placeholder.svg" />
        <link rel="canonical" href="https://moneybharat.co/blog" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Money Bharat Personal Finance Blog",
            "description": "Discover expert personal finance guides, investment advice, insurance tips, and actionable strategies tailored for Indians.",
            "url": "https://moneybharat.co/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Money Bharat",
              "logo": {
                "@type": "ImageObject",
                "url": "/placeholder.svg"
              }
            }
          }
        `}</script>
      </Helmet>

      <Navbar />

      <main className="pt-24 bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Financial Wisdom for
                <span className="gradient-text block">Every Indian</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Expert insights, practical tips, and comprehensive guides to help you navigate the complex world of personal finance and build lasting wealth.
              </p>
              
              {/* Search Bar */}
              <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search articles, topics, or keywords..."
                    className="h-14 pl-12 pr-24 text-base border-2 border-gray-200 rounded-full focus:border-fintech-purple"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-2">
                    <Button 
                      type="submit" 
                      className="bg-fintech-purple hover:bg-fintech-deep-purple rounded-full h-10 px-6"
                    >
                      Search
                    </Button>
                    {isSearching && (
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="rounded-full h-10 px-4"
                        onClick={clearSearch}
                      >
                        Clear
                      </Button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Search Results Section */}
        {isSearching && (
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="mb-8 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  {searchResults.length > 0 ? `Search Results (${searchResults.length})` : 'No Results Found'}
                </h2>
                <Button variant="ghost" onClick={clearSearch} className="text-fintech-purple hover:text-fintech-deep-purple">
                  Back to All Articles
                </Button>
              </div>
              
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {searchResults.map(post => (
                    <RegularPostCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <Card className="p-12 text-center bg-white">
                  <div className="max-w-md mx-auto">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Search className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No articles found</h3>
                    <p className="text-gray-600 mb-6">
                      No articles match your search query "{searchQuery}". Try using different keywords or browse our categories below.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {categories.slice(1).map(category => (
                        <Badge 
                          key={category.slug} 
                          variant="outline"
                          className="cursor-pointer hover:bg-fintech-purple hover:text-white transition-colors"
                          onClick={() => {
                            setSelectedCategory(category);
                            clearSearch();
                          }}
                        >
                          {category.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              )}
            </div>
          </section>
        )}

        {/* Featured Posts - Only visible when not searching */}
        {!isSearching && featuredPosts.length > 0 && (
          <section className="py-16 bg-white border-t">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Articles</h2>
                  <p className="text-gray-600">Our most popular and impactful financial insights</p>
                </div>
                <Button variant="ghost" className="group text-fintech-purple hover:text-fintech-deep-purple">
                  View All
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.slice(0, 3).map(post => (
                  <FeaturedPostCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Posts with Categories - Only visible when not searching */}
        {!isSearching && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="mb-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Articles</h2>
                    <p className="text-gray-600">Stay updated with our latest financial insights and expert advice</p>
                  </div>
                </div>
                
                <ScrollArea className="w-full whitespace-nowrap pb-4">
                  <div className="flex gap-3 pb-2">
                    {categories.map(category => (
                      <Button 
                        key={category.slug} 
                        variant={selectedCategory.slug === category.slug ? "default" : "outline"} 
                        size="sm" 
                        className={`rounded-full min-w-fit ${
                          selectedCategory.slug === category.slug 
                            ? "bg-fintech-purple hover:bg-fintech-deep-purple" 
                            : "hover:bg-fintech-purple/10 hover:text-fintech-purple hover:border-fintech-purple"
                        }`}
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
              
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map(post => (
                    <RegularPostCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <Card className="p-12 text-center bg-white">
                  <div className="max-w-md mx-auto">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No articles in this category</h3>
                    <p className="text-gray-600">We're working on adding more content to this category. Check back soon!</p>
                  </div>
                </Card>
              )}
            </div>
          </section>
        )}

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-to-r from-fintech-purple to-fintech-blue">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Ahead of Your Financial Game
              </h2>
              <p className="text-xl text-purple-100 mb-10 leading-relaxed">
                Join thousands of smart investors who get weekly insights, market updates, and exclusive tips delivered straight to their inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-6 py-4 rounded-full text-gray-800 border-0 focus:ring-4 focus:ring-white/20 text-center sm:text-left" 
                />
                <Button className="bg-white text-fintech-purple hover:bg-gray-100 rounded-full px-8 py-4 font-semibold">
                  Subscribe Now
                </Button>
              </div>
              <p className="text-sm text-purple-200 mt-4">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
