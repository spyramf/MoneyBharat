
import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabaseBlogService, type SupabaseBlogPost } from '@/services/supabaseBlogService';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { format } from 'date-fns';
import SEOHead from '@/components/seo/SEOHead';
import ShareButtonGroup from '@/components/ui/ShareButtonGroup';

const SupabaseBlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<SupabaseBlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<SupabaseBlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      loadPost(slug);
    }
  }, [slug]);

  const loadPost = async (postSlug: string) => {
    try {
      setIsLoading(true);
      const postData = await supabaseBlogService.getPostBySlug(postSlug);
      
      if (!postData) {
        navigate('/blog', { replace: true });
        return;
      }

      setPost(postData);

      // Load related posts from the same category
      if (postData.category?.slug) {
        const related = await supabaseBlogService.getPostsByCategory(postData.category.slug);
        setRelatedPosts(related.filter(p => p.id !== postData.id).slice(0, 3));
      }

      // Track page view
      if (postData.id) {
        await supabaseBlogService.trackAnalytics(postData.id, 'page_views', 1);
      }
    } catch (error) {
      console.error('Error loading blog post:', error);
      navigate('/blog', { replace: true });
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

  if (!post) {
    return null;
  }

  const currentUrl = `${window.location.origin}/blog/${post.slug}`;

  return (
    <>
      <SEOHead 
        title={post.meta_title || `${post.title} | Money Bharat Finance Blog`}
        description={post.meta_description || post.excerpt || ''}
        keywords={post.focus_keywords?.join(', ') || ''}
        canonicalUrl={post.canonical_url || currentUrl}
        ogTitle={post.og_title || post.title}
        ogDescription={post.og_description || post.excerpt || ''}
        ogImage={post.og_image || post.featured_image}
        twitterTitle={post.twitter_title || post.title}
        twitterDescription={post.twitter_description || post.excerpt || ''}
        twitterImage={post.twitter_image || post.featured_image}
        robots={post.robots_directive}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Header Navigation */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" onClick={() => navigate('/blog')} className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
            
            <nav className="text-sm text-gray-600">
              <Link to="/blog" className="hover:text-fintech-purple">Blog</Link>
              {post.category && (
                <>
                  <span className="mx-2">/</span>
                  <Link to={`/blog?category=${post.category.slug}`} className="hover:text-fintech-purple">
                    {post.category.name}
                  </Link>
                </>
              )}
              <span className="mx-2">/</span>
              <span className="text-gray-900">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <header className="mb-8">
              {post.category && (
                <Badge className="mb-4 bg-fintech-purple">
                  {post.category.name}
                </Badge>
              )}
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {post.title}
              </h1>
              
              {post.excerpt && (
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
              )}
              
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  {post.author && (
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={post.author.avatar_url} alt={post.author.name} />
                        <AvatarFallback>
                          {post.author.name.split(' ').map(n => n[0]).join('')}
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
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    {post.published_date && (
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {format(new Date(post.published_date), 'MMMM dd, yyyy')}
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
                
                <ShareButtonGroup
                  url={currentUrl}
                  title={post.title}
                  text={post.excerpt || ''}
                />
              </div>
              
              {post.featured_image && (
                <div className="rounded-lg overflow-hidden mb-8">
                  <img 
                    src={post.featured_image} 
                    alt={post.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              )}
            </header>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none mb-8">
              <div dangerouslySetInnerHTML={{ __html: post.content || '' }} />
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <Badge key={tag.id} variant="outline" style={{ borderColor: tag.color }}>
                      {tag.name}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Author Bio */}
            {post.author && post.author.bio && (
              <div className="bg-white rounded-lg p-6 mb-8 border">
                <div className="flex gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={post.author.avatar_url} alt={post.author.name} />
                    <AvatarFallback className="text-lg">
                      {post.author.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">About {post.author.name}</h3>
                    {post.author.role && (
                      <p className="text-fintech-purple font-medium mb-2">{post.author.role}</p>
                    )}
                    <p className="text-gray-600">{post.author.bio}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-white border-t">
            <div className="container mx-auto px-4 py-12">
              <h2 className="text-2xl font-bold mb-8 text-center">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {relatedPosts.map(relatedPost => (
                  <Link 
                    key={relatedPost.id} 
                    to={`/blog/${relatedPost.slug}`}
                    className="group bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    {relatedPost.featured_image && (
                      <div className="rounded-md overflow-hidden mb-3">
                        <img 
                          src={relatedPost.featured_image} 
                          alt={relatedPost.title}
                          className="w-full h-40 object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                    )}
                    <h3 className="font-semibold mb-2 group-hover:text-fintech-purple line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-fintech-purple text-white">
          <div className="container mx-auto px-4 py-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Financial Journey?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Get personalized financial advice and investment strategies from our expert team.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Get Free Consultation</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default SupabaseBlogPost;
