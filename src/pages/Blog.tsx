
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Filter, Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { useBlog } from '@/context/BlogContext';
import MainLayout from '@/layouts/MainLayout';
import BlogPostCard from '@/components/BlogPostCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Blog = () => {
  const { blogPosts, categories, isLoading, error } = useBlog();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  // Filter posts based on search and category
  useEffect(() => {
    let filtered = blogPosts;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(post => 
        post.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory
      );
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query)) ||
        post.author.name.toLowerCase().includes(query)
      );
    }

    setFilteredPosts(filtered);
  }, [blogPosts, selectedCategory, searchQuery]);

  const featuredPosts = blogPosts.filter(post => post.isFeatured).slice(0, 3);

  if (isLoading) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <p className="text-gray-600">Unable to load blog posts. Please try again later.</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Helmet>
        <title>Financial Insights & Expert Blog | Money Bharat</title>
        <meta name="description" content="Discover expert personal finance guides, investment advice, insurance tips, and actionable strategies tailored for Indians. Navigate your financial journey with insights from Money Bharat's team." />
        <meta name="keywords" content="personal finance, investments, mutual funds, insurance, tax planning, financial tips, money management, Indian finance, Money Bharat blog" />
        <link rel="canonical" href="https://moneybharat.co/blog" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5 pt-32 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 px-6 py-2 text-sm font-medium">
              Financial Knowledge Hub
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Master Your Financial Future
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Expert insights, practical guides, and comprehensive resources to help you navigate 
              the complex world of personal finance, investments, and wealth building in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Explore Articles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search articles, topics, or keywords..."
                  className="pl-10 h-12"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48 h-12">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.slug} value={category.slug}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {searchQuery && (
              <div className="mt-4 flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {filteredPosts.length} results for "{searchQuery}"
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchQuery('')}
                  className="h-6 px-2"
                >
                  Clear
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && !searchQuery && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold mb-2">Featured Articles</h2>
                <p className="text-muted-foreground">Hand-picked insights from our financial experts</p>
              </div>
              <Button variant="ghost" className="hidden md:flex">
                View All Featured <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map(post => (
                <BlogPostCard key={post.id} post={post} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-2">
              {searchQuery ? 'Search Results' : selectedCategory !== 'all' ? 
                categories.find(c => c.slug === selectedCategory)?.name + ' Articles' : 
                'All Articles'
              }
            </h2>
            <p className="text-muted-foreground">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
            </p>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <Card className="py-16">
              <CardContent className="text-center">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No articles found</h3>
                  <p className="text-muted-foreground mb-6">
                    {searchQuery 
                      ? `No articles match your search "${searchQuery}". Try different keywords or browse categories below.`
                      : `No articles found in the ${categories.find(c => c.slug === selectedCategory)?.name} category.`
                    }
                  </p>
                  {searchQuery && (
                    <Button onClick={() => setSearchQuery('')} variant="outline">
                      Clear Search
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Ahead of Your Financial Game</h2>
            <p className="text-lg opacity-90 mb-8">
              Get the latest insights, tips, and expert advice delivered directly to your inbox. 
              Join thousands of Indians making smarter financial decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white text-gray-900 border-0"
              />
              <Button className="bg-white text-primary hover:bg-gray-100">
                Subscribe Now
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              No spam, unsubscribe anytime. Your privacy is our priority.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Blog;
