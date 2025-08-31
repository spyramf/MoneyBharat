
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { supabaseBlogService, type SupabaseBlogPost } from '@/services/supabaseBlogService';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import SocialShareButtons from '@/components/ui/SocialShareButtons';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogCTA from '@/components/blog/BlogCTA';
import { getCanonicalUrl, getPageTitle } from '@/utils/seoUtils';
import { format } from 'date-fns';
import { toast } from 'sonner';

const SupabaseBlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<SupabaseBlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) {
        setError('No post slug provided');
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);
        
        console.log('Loading blog post with slug:', slug);
        const postData = await supabaseBlogService.getPostBySlug(slug);
        
        if (!postData) {
          setError('Post not found');
          return;
        }

        setPost(postData);
        
        // Track page view
        if (postData.id) {
          await supabaseBlogService.trackAnalytics(postData.id, 'page_view');
        }
        
      } catch (err) {
        console.error('Error loading blog post:', err);
        setError('Failed to load blog post');
        toast.error('Failed to load blog post');
      } finally {
        setIsLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-4">{error || 'The blog post you are looking for does not exist.'}</p>
          <Button asChild>
            <Link to="/supabase-blog">← Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  const currentUrl = getCanonicalUrl(`/supabase-blog/${post.slug}`);
  const socialImage = post.og_image || post.featured_image || '/images/blog/default-og.jpg';

  return (
    <>
      <Helmet>
        <title>{getPageTitle(post.meta_title || post.title)}</title>
        <meta name="description" content={post.meta_description || post.excerpt || ''} />
        <link rel="canonical" href={currentUrl} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={post.og_title || post.title} />
        <meta property="og:description" content={post.og_description || post.excerpt || ''} />
        <meta property="og:image" content={socialImage} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.published_date || post.created_at} />
        <meta property="article:modified_time" content={post.updated_at} />
        <meta property="article:author" content={post.author?.name || ''} />
        <meta property="article:section" content={post.category?.name || ''} />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.twitter_title || post.title} />
        <meta name="twitter:description" content={post.twitter_description || post.excerpt || ''} />
        <meta name="twitter:image" content={socialImage} />
        
        {/* Additional SEO tags */}
        <meta name="robots" content={post.robots_directive || 'index, follow'} />
        {post.focus_keywords && <meta name="keywords" content={post.focus_keywords.join(', ')} />}
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" asChild>
              <Link to="/supabase-blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>

        {/* Article */}
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Featured Image */}
          {post.featured_image && (
            <div className="mb-8 rounded-lg overflow-hidden">
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          )}

          {/* Article Header */}
          <header className="mb-8">
            {post.category && (
              <Badge variant="secondary" className="mb-4">
                {post.category.name}
              </Badge>
            )}
            
            <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
              {post.title}
            </h1>
            
            {post.excerpt && (
              <p className="text-xl text-muted-foreground mb-6">
                {post.excerpt}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              {post.author && (
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  <span>{post.author.name}</span>
                </div>
              )}
              
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <time dateTime={post.published_date || post.created_at}>
                  {format(new Date(post.published_date || post.created_at), 'MMMM d, yyyy')}
                </time>
              </div>
              
              {post.read_time && (
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  <span>{post.read_time}</span>
                </div>
              )}
            </div>

            {/* Social Share */}
            <div className="mt-6 pt-6 border-t">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Share this article:</span>
                <SocialShareButtons
                  url={currentUrl}
                  title={post.title}
                  description={post.excerpt || ''}
                />
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            {post.content && (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            )}
          </div>

          {/* Tags - Only show if focus keywords exist */}
          {post.focus_keywords && post.focus_keywords.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {post.focus_keywords.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Author Bio */}
          {post.author && (
            <Card className="mb-12">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  {post.author.avatar_url && (
                    <img
                      src={post.author.avatar_url}
                      alt={post.author.name}
                      className="w-16 h-16 rounded-full"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold">{post.author.name}</h3>
                    {post.author.role && (
                      <p className="text-muted-foreground mb-2">{post.author.role}</p>
                    )}
                    {post.author.bio && (
                      <p className="text-muted-foreground">{post.author.bio}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Related Articles */}
          {post.category_id && (
            <RelatedArticles 
              currentPostId={post.id} 
              categoryId={post.category_id} 
            />
          )}

          {/* CTA Section */}
          <BlogCTA />
        </article>
      </div>
    </>
  );
};

export default SupabaseBlogPost;
