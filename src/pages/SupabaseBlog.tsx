
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { supabaseBlogService, type SupabaseBlogPost, type SupabaseBlogCategory } from '@/services/supabaseBlogService';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Calendar, Clock } from 'lucide-react';
import { format } from 'date-fns';
import SEOHead from '@/components/seo/SEOHead';

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
        supabaseBlogService.getAllPosts('published'),
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

  const BlogCard = ({ post, featured = false }: { post: SupabaseBlogPost; featured?: boolean }) => (
    <Link to={`/blog/${post.slug}`} className="group">
      <Card className={`h-full overflow-hidden transition-all hover:shadow-lg ${featured ? 'border-fintech-purple' : ''}`}>
        {post.featured_image && (
          <div className={`relative overflow-hidden ${featured ? 'h-64' : 'h-48'}`}>
            <img 
              src={post.featured_image} 
              alt={post.title} 
              className="absolute inset-0 h-full w-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute top-3 left-3 flex gap-2">
              {post.category && (
                <Badge className="bg-fintech-purple">{post.category.name}</Badge>
              )}
              {featured && (
                <Badge variant="secondary">Featured</Badge>
              )}
            </div>
          </div>
        )}
        
        <CardContent className="pt-6">
          <h3 className={`mb-3 font-bold group-hover:text-fintech-purple line-clamp-2 ${featured ? 'text-xl' : 'text-lg'}`}>
            {post.title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-3 mb-4">
            {post.excerpt}
          </p>
          
          <div className="flex items-center gap-4 text-xs text-gray-500">
            {post.published_date && (
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {format(new Date(post.published_date), 'MMM dd, yyyy')}
              </div>
            )}
            {post.read_time && (
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {post.read_time}
              </div>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="border-t pt-4">
          {post.author && (
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={post.author.avatar_url} alt={post.author.name} />
                <AvatarFallback>
                  {post.author.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{post.author.name}</p>
                {post.author.role && (
                  <p className="text-xs text-gray-500">{post.author.role}</p>
                )}
              </div>
            </div>
          )}
        </CardFooter>
      </Card>
    </Link>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-fintech-purple"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title="Financial Blog - Expert Insights | Money Bharat Finance"
        description="Stay updated with the latest financial insights, investment strategies, and money management tips from Money Bharat Finance experts."
        keywords={['financial blog', 'investment advice', 'money management', 'mutual funds', 'insurance', 'loans']}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-fintech-purple to-purple-700 text-white">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Money Bharat Finance Blog
            </h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Expert financial insights, investment strategies, and money management tips to help you achieve your financial goals
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category.id} value={category.slug}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Featured Posts */}
          {featuredPosts.length > 0 && !searchTerm && selectedCategory === 'all' && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPosts.slice(0, 3).map(post => (
                  <BlogCard key={post.id} post={post} featured={true} />
                ))}
              </div>
            </section>
          )}

          {/* All Posts */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">
                {searchTerm ? `Search Results for "${searchTerm}"` : 
                 selectedCategory !== 'all' ? `${categories.find(c => c.slug === selectedCategory)?.name} Articles` : 
                 'Latest Articles'}
              </h2>
              <span className="text-gray-500">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
              </span>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-500 text-lg mb-4">
                  {searchTerm ? 'No articles found matching your search.' : 'No articles found in this category.'}
                </div>
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
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map(post => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </section>
        </div>

        {/* Newsletter CTA */}
        <section className="bg-white border-t">
          <div className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the latest financial insights and investment tips delivered straight to your inbox.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Subscribe to Newsletter</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupabaseBlog;
