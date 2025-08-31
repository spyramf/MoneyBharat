import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { supabaseBlogService, type SupabaseBlogPost, type SupabaseBlogCategory } from '@/services/supabaseBlogService';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getCanonicalUrl, getPageTitle, getPageDescription } from '@/utils/seoUtils';
import { format } from 'date-fns';

const SupabaseBlog = () => {
  const [posts, setPosts] = useState<SupabaseBlogPost[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<SupabaseBlogPost[]>([]);
  const [categories, setCategories] = useState<SupabaseBlogCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        
        const [allPosts, allCategories, featured] = await Promise.all([
          supabaseBlogService.getAllPosts(),
          supabaseBlogService.getAllCategories(),
          supabaseBlogService.getFeaturedPosts()
        ]);

        setPosts(allPosts);
        setCategories(allCategories);
        setFeaturedPosts(featured);
        
      } catch (error) {
        console.error('Error loading blog data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || post.category_id === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{getPageTitle('Blog')}</title>
        <meta name="description" content={getPageDescription('blog')} />
        <link rel="canonical" href={getCanonicalUrl('/blog')} />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Financial Insights & Expertise
              </h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Stay informed with the latest trends, tips, and strategies in mutual funds, insurance, and loans
              </p>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border rounded-md bg-background"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPosts.slice(0, 3).map((post) => (
                  <Card key={post.id} className="overflow-hidden">
                    {post.featured_image && (
                      <div className="h-48 overflow-hidden">
                        <img
                          src={post.featured_image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <CardHeader>
                      {post.category && (
                        <Badge variant="secondary" className="w-fit mb-2">
                          {post.category.name}
                        </Badge>
                      )}
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-3 w-3" />
                        {format(new Date(post.published_date || post.created_at), 'MMM d, yyyy')}
                      </div>
                      <Button asChild variant="ghost" size="sm">
                        <Link to={`/blog/${post.slug}`}>
                          Read More <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* All Posts */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No articles found matching your search.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    {post.featured_image && (
                      <div className="h-48 overflow-hidden">
                        <img
                          src={post.featured_image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        {post.category && (
                          <Badge variant="secondary">
                            {post.category.name}
                          </Badge>
                        )}
                        {post.read_time && (
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" />
                            {post.read_time}
                          </div>
                        )}
                      </div>
                      <CardTitle className="line-clamp-2 hover:text-primary">
                        <Link to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-muted-foreground">
                        {post.author && (
                          <>
                            <User className="mr-1 h-3 w-3" />
                            <span className="mr-3">{post.author.name}</span>
                          </>
                        )}
                        <Calendar className="mr-1 h-3 w-3" />
                        {format(new Date(post.published_date || post.created_at), 'MMM d')}
                      </div>
                      <Button asChild variant="ghost" size="sm">
                        <Link to={`/blog/${post.slug}`}>
                          Read More <ArrowRight className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default SupabaseBlog;
