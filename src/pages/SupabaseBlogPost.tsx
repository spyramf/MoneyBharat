
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabaseBlogService, type SupabaseBlogPost } from '@/services/supabaseBlogService';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { ScrollArea } from '@/components/ui/scroll-area';
import ShareButtonGroup from '@/components/ui/ShareButtonGroup';
import SEOHead from '@/components/seo/SEOHead';
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import RelatedArticles from '@/components/blog/RelatedArticles';

const SupabaseBlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<SupabaseBlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<SupabaseBlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      loadPost();
    }
  }, [slug]);

  const loadPost = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const postData = await supabaseBlogService.getPostBySlug(slug!);
      
      if (!postData) {
        setError('Blog post not found');
        return;
      }

      setPost(postData);

      // Track page view
      try {
        await supabaseBlogService.trackAnalytics(postData.id, 'page_views', 1, {
          timestamp: new Date().toISOString(),
          referrer: document.referrer,
          user_agent: navigator.userAgent
        });
      } catch (trackingError) {
        console.warn('Error tracking analytics:', trackingError);
      }

      // Load related posts from same category
      if (postData.category?.slug) {
        try {
          const categoryPosts = await supabaseBlogService.getPostsByCategory(postData.category.slug);
          const related = categoryPosts
            .filter(p => p.id !== postData.id)
            .slice(0, 3);
          setRelatedPosts(related);
        } catch (relatedError) {
          console.warn('Error loading related posts:', relatedError);
        }
      }
    } catch (err) {
      console.error('Error loading blog post:', err);
      setError('Failed to load blog post');
    } finally {
      setIsLoading(false);
    }
  };

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

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-6">
              {error || 'The blog post you are looking for does not exist.'}
            </p>
            <Button asChild>
              <Link to="/blog/supabase">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const canonicalUrl = post.canonical_url || `https://moneybharat.co/blog/${post.slug}`;
  const shareUrl = canonicalUrl;
  
  return (
    <>
      <SEOHead 
        title={post.meta_title || post.title}
        description={post.meta_description || post.excerpt || ''}
        keywords={post.focus_keywords || []}
        canonicalUrl={canonicalUrl}
        ogTitle={post.og_title || post.title}
        ogDescription={post.og_description || post.excerpt || ''}
        ogImage={post.og_image || post.featured_image}
        twitterTitle={post.twitter_title || post.title}
        twitterDescription={post.twitter_description || post.excerpt || ''}
        twitterImage={post.twitter_image || post.featured_image}
        robotsDirective={post.robots_directive || 'index,follow'}
        articlePublishedTime={post.published_date}
        articleModifiedTime={post.updated_date}
        articleAuthor={post.author?.name}
        articleSection={post.category?.name}
        articleTags={post.tags?.map(tag => tag.name)}
      />

      <article className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/blog/supabase">Blog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              {post.category && (
                <>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to={`/blog/supabase?category=${post.category.slug}`}>
                        {post.category.name}
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </>
              )}
              <BreadcrumbItem>
                <BreadcrumbLink>{post.title}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Back Button */}
          <Button variant="outline" className="mb-6" asChild>
            <Link to="/blog/supabase">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Articles
            </Link>
          </Button>

          {/* Article Header */}
          <header className="mb-8">
            {post.category && (
              <Badge className="mb-4 bg-fintech-purple">
                {post.category.name}
              </Badge>
            )}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 mb-6">
              {post.author && (
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={post.author.avatar_url} alt={post.author.name} />
                    <AvatarFallback>
                      {post.author.name.split(' ').map(name => name[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{post.author.name}</p>
                    {post.author.role && (
                      <p className="text-sm text-gray-500">{post.author.role}</p>
                    )}
                  </div>
                </div>
              )}
              
              <div className="flex items-center gap-4 text-gray-500 text-sm">
                {post.published_date && (
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {format(new Date(post.published_date), 'PPP')}
                  </div>
                )}
                {post.read_time && (
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.read_time}
                  </div>
                )}
              </div>
            </div>

            {/* Share Buttons */}
            <div className="mb-8 p-4 bg-white rounded-lg shadow-sm">
              <ShareButtonGroup
                title={post.title}
                text={`${post.excerpt} - Read more on Money Bharat Finance`}
                url={shareUrl}
                platforms={['whatsapp', 'linkedin', 'twitter', 'email', 'copy']}
                showLabels={true}
                className="justify-center"
              />
            </div>
          </header>

          {/* Featured Image */}
          {post.featured_image && (
            <div className="mb-8 rounded-xl overflow-hidden">
              <img 
                src={post.featured_image} 
                alt={`${post.title} - ${post.category?.name || 'Money Bharat'} - Money Bharat Blog`}
                className="w-full h-auto max-h-[500px] object-cover"
              />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg p-8 shadow-sm">
                {/* Article Excerpt */}
                {post.excerpt && (
                  <div className="text-xl text-gray-700 mb-8 pb-8 border-b font-medium leading-relaxed">
                    {post.excerpt}
                  </div>
                )}

                {/* Article Content */}
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-fintech-purple prose-strong:text-gray-900"
                  dangerouslySetInnerHTML={{ __html: post.content || '' }}
                />

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mt-12 pt-8 border-t">
                    <h3 className="font-medium mb-4">Related Topics:</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge 
                          key={tag.id} 
                          variant="outline" 
                          className="text-gray-700"
                          style={{ borderColor: tag.color, color: tag.color }}
                        >
                          {tag.name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Share After Content */}
                <div className="mt-12 pt-8 border-t">
                  <h3 className="font-medium mb-4">Share this article:</h3>
                  <ShareButtonGroup
                    title={post.title}
                    text={`${post.excerpt} - Read more on Money Bharat Finance`}
                    url={shareUrl}
                    layout="card"
                    platforms={['whatsapp', 'linkedin', 'twitter', 'email', 'copy']}
                    showLabels={true}
                  />
                </div>

                {/* Author Bio */}
                {post.author && (
                  <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={post.author.avatar_url} alt={post.author.name} />
                        <AvatarFallback className="text-lg">
                          {post.author.name.split(' ').map(name => name[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-bold mb-2">About {post.author.name}</h3>
                        <p className="text-gray-600 mb-4">
                          {post.author.bio || `${post.author.role} at Money Bharat with extensive experience in Indian financial markets. Passionate about making finance accessible to everyone.`}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Table of Contents (if content has headings) */}
                {post.content && post.content.includes('<h2>') && (
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-4">Table of Contents</h3>
                    <ScrollArea className="h-64">
                      <div className="space-y-2 text-sm">
                        {/* This would be dynamically generated from headings in content */}
                        <div className="text-gray-500">
                          Content navigation would appear here
                        </div>
                      </div>
                    </ScrollArea>
                  </div>
                )}

                {/* Newsletter Signup */}
                <div className="bg-fintech-purple text-white p-6 rounded-lg">
                  <h3 className="font-bold mb-2">Stay Updated</h3>
                  <p className="text-sm text-purple-100 mb-4">
                    Get the latest financial insights delivered to your inbox.
                  </p>
                  <Button variant="secondary" size="sm" asChild className="w-full">
                    <Link to="/contact">Subscribe Now</Link>
                  </Button>
                </div>

                {/* Category Info */}
                {post.category && (
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold mb-2">{post.category.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {post.category.description}
                    </p>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link to={`/blog/supabase?category=${post.category.slug}`}>
                        View All {post.category.name} Articles
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <RelatedArticles relatedPosts={relatedPosts.map(p => ({
            id: parseInt(p.id),
            title: p.title,
            slug: p.slug,
            excerpt: p.excerpt || '',
            content: p.content || '',
            author: {
              id: parseInt(p.author?.id || '1'),
              name: p.author?.name || '',
              role: p.author?.role || '',
              avatar: p.author?.avatar_url || ''
            },
            category: p.category?.name || '',
            tags: p.tags?.map(t => t.name) || [],
            featuredImage: p.featured_image || '',
            publishedDate: p.published_date || '',
            readTime: p.read_time || '',
            isFeatured: p.is_featured || false
          }))} />
        )}
      </article>
    </>
  );
};

export default SupabaseBlogPost;
