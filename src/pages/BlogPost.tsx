
import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useBlog } from '@/context/BlogContext';
import { supabaseBlogService, type SupabaseBlogPost } from '@/services/supabaseBlogService';
import SEOHead from '@/components/seo/SEOHead';
import StructuredData from '@/components/seo/StructuredData';
import { BlogPostHeader } from '@/components/blog/BlogPostHeader';
import { BlogPostContent } from '@/components/blog/BlogPostContent';
import { RelatedArticles } from '@/components/blog/RelatedArticles';
import { BlogCTA } from '@/components/blog/BlogCTA';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { posts, isLoading: contextLoading } = useBlog();
  const [post, setPost] = useState<SupabaseBlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return;

      try {
        setIsLoading(true);
        setError(null);

        // First try to get from context
        const contextPost = posts.find(p => p.slug === slug);
        if (contextPost) {
          setPost(contextPost);
        } else {
          // Fallback: fetch directly from service
          const fetchedPost = await supabaseBlogService.getPostBySlug(slug);
          if (fetchedPost && fetchedPost.status === 'published') {
            setPost(fetchedPost);
          }
        }
      } catch (err) {
        console.error('Error loading blog post:', err);
        setError('Failed to load blog post');
      } finally {
        setIsLoading(false);
      }
    };

    loadPost();
  }, [slug, posts]);

  if (isLoading || contextLoading) {
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
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Error Loading Article</h2>
            <p className="text-gray-600 mb-8">{error}</p>
            <Button onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt || post.meta_description,
    "image": post.featured_image || post.og_image,
    "datePublished": post.published_date,
    "dateModified": post.updated_date,
    "author": {
      "@type": "Person",
      "name": post.author?.name || "Money Bharat Finance",
      "description": post.author?.bio
    },
    "publisher": {
      "@type": "Organization",
      "name": "Money Bharat Finance",
      "logo": {
        "@type": "ImageObject",
        "url": "https://moneybharatfinance.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://moneybharatfinance.com/blog/${post.slug}`
    }
  };

  const relatedPosts = posts
    .filter(p => p.id !== post.id && p.category?.slug === post.category?.slug)
    .slice(0, 3);

  return (
    <>
      <SEOHead 
        title={post.meta_title || `${post.title} | Money Bharat Finance`}
        description={post.meta_description || post.excerpt}
        keywords={post.focus_keywords?.join(', ') || ''}
      />
      <StructuredData data={structuredData} />
      
      <div className="min-h-screen bg-gradient-to-br from-fintech-light via-white to-fintech-light/30">
        <article className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <BlogPostHeader 
              title={post.title}
              author={post.author}
              publishedDate={post.published_date}
              readTime={post.read_time}
              category={post.category}
              featuredImage={post.featured_image}
            />
            
            <BlogPostContent content={post.content} />
            
            <BlogCTA />
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <RelatedArticles posts={relatedPosts} />
        )}
      </div>
    </>
  );
};

export default BlogPost;
