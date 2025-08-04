
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { supabaseBlogService, type SupabaseBlogPost, type SupabaseBlogCategory } from '@/services/supabaseBlogService';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Calendar, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import SEOHead from '@/components/seo/SEOHead';
import MainLayout from '@/layouts/MainLayout';

const SupabaseBlog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState<SupabaseBlogPost[]>([]);
  const [categories, setCategories] = useState<SupabaseBlogCategory[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<SupabaseBlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    // Update URL when filters change
    const params = new URLSearchParams();
    if (searchTerm) params.set('search', searchTerm);
    if (selectedCategory !== 'all') params.set('category', selectedCategory);
    setSearchParams(params);
  }, [searchTerm, selectedCategory, setSearchParams]);

  const loadData = async () => {
    try {
      setIsLoading(true);
      const [allPosts, categoriesData, featured] = await Promise.all([
        supabaseBlogService.getAllPosts(),
        supabaseBlogService.getAllCategories(),
        supabaseBlogService.getFeaturedPosts()
      ]);

      setPosts(allPosts);
      setCategories(categoriesData);
      setFeaturedPosts(featured);
    } catch (error) {
      console.error('Error loading blog data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = !searchTerm || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (post.content && post.content.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || 
      post.category?.slug === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const FeaturedPostCard = ({ post }: { post: SupabaseBlogPost }) => (
    <Link to={`/blog/${post.slug}`} className="group block">
      <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
        <div className="relative h-64 overflow-hidden">
          {post.featured_image ? (
            <img 
              src={post.featured_image} 
              alt={post.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
              <TrendingUp className="w-16 h-16 text-primary/60" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-4 left-4">
            <Badge className="bg-primary text-primary-foreground font-semibold">
              Featured
            </Badge>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-white/90 text-sm line-clamp-2">
              {post.excerpt}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );

  const RegularPostCard = ({ post }: { post: SupabaseBlogPost }) => (
    <Link to={`/blog/${post.slug}`} className="group block">
      <Card className="h-full overflow-hidden border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300 bg-white">
        <div className="relative h-48 overflow-hidden">
          {post.featured_image ? (
            <img 
              src={post.featured_image} 
              alt={post.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <Calendar className="w-12 h-12 text-gray-400" />
            </div>
          )}
          {post.category && (
            <div className="absolute top-3 left-3">
              <Badge variant="secondary" className="bg-white/90 text-gray-800 font-medium">
                {post.category.name}
              </Badge>
            </div>
          )}
        </div>
        
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between text-xs text-gray-500">
            {post.published_date && (
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {format(new Date(post.published_date), 'MMM dd, yyyy')}
              </div>
            )}
            {post.read_time && (
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.read_time}
              </div>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="px-6 pb-6 pt-0 flex items-center justify-between">
          {post.author && (
            <div className="flex items-center gap-2">
              <Avatar className="w-6 h-6">
                <AvatarImage src={post.author.avatar_url} alt={post.author.name} />
                <AvatarFallback className="text-xs">
                  {post.author.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <span className="text-xs text-gray-600 font-medium">{post.author.name}</span>
            </div>
          )}
          
          <div className="flex items-center gap-1 text-primary text-xs font-medium group-hover:gap-2 transition-all">
            Read More <ArrowRight className="w-3 h-3" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );

  if (isLoading) {
    return (
      <MainLayout>
        <div className="min-h-screen bg-gray-50/30">
          <div className="container mx-auto px-4 py-20">
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <SEOHead 
        title="Financial Blog - Expert Insights | Money Bharat Finance"
        description="Stay updated with the latest financial insights, investment strategies, and money management tips from Money Bharat Finance experts."
        keywords="financial blog, investment advice, money management, mutual funds, insurance, loans"
      />
      
      <div className="min-h-screen bg-gray-50/30">
        {/* Hero Section */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Financial Insights & Expert Advice
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Stay informed with the latest trends in finance, investment strategies, and money management tips from certified professionals
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search articles, topics, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-3 text-lg border-2 border-gray-200 rounded-xl focus:border-primary shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap items-center gap-3 justify-center">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('all')}
                className="rounded-full"
              >
                All Articles ({posts.length})
              </Button>
              {categories.map(category => {
                const count = posts.filter(post => post.category?.slug === category.slug).length;
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.slug ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(category.slug)}
                    className="rounded-full"
                  >
                    {category.name} ({count})
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && !searchTerm && selectedCategory === 'all' && (
            <section className="mb-16">
              <div className="flex items-center gap-2 mb-8">
                <TrendingUp className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-gray-900">Featured Articles</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.slice(0, 3).map(post => (
                  <FeaturedPostCard key={post.id} post={post} />
                ))}
              </div>
            </section>
          )}

          {/* All Posts */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {searchTerm ? `Search Results for "${searchTerm}"` : 
                 selectedCategory !== 'all' ? `${categories.find(c => c.slug === selectedCategory)?.name} Articles` : 
                 'Latest Articles'}
              </h2>
              <span className="text-gray-500 bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              </span>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-xl border">
                <div className="text-gray-400 mb-4">
                  <Search className="w-16 h-16 mx-auto mb-4" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {searchTerm ? 'No articles found' : 'No articles in this category'}
                </h3>
                <p className="text-gray-500 mb-6">
                  {searchTerm ? 'Try adjusting your search terms' : 'Check back soon for new content'}
                </p>
                {(searchTerm || selectedCategory !== 'all') && (
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                    }}
                    className="rounded-full"
                  >
                    Clear Filters
                  </Button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map(post => (
                  <RegularPostCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </section>

          {/* Newsletter CTA */}
          <section className="mt-20">
            <div className="bg-gradient-to-r from-primary to-primary/90 text-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Never Miss a Financial Update</h2>
              <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-lg">
                Get expert financial insights, investment tips, and market updates delivered directly to your inbox every week.
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold">
                <Link to="/contact">Subscribe Now</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default SupabaseBlog;
