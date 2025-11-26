import React from 'react';
import Link from 'next/link';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { sanitizeHtml } from '@/utils/sanitize';
import { supabaseBlogService, SupabaseBlogAuthor, SupabaseBlogCategory, SupabaseBlogPost } from '@/services/supabaseBlogService';
import SEOHead from '@/components/seo/SEOHead';

interface BlogPostProps {
  post: SupabaseBlogPost;
  relatedPosts: SupabaseBlogPost[];
  author: SupabaseBlogAuthor | null;
  category: SupabaseBlogCategory | null;
}

const BlogPost = ({ post, relatedPosts, author, category }: BlogPostProps) => {
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link href="/blog">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const seoTitle = post.meta_title || post.title;
  const seoDescription = post.meta_description || post.excerpt || post.title;
  const seoKeywords = post.tags?.join(", ");
  const publishedTime = post.published_at || post.created_at;
  const modifiedTime = post.updated_at || publishedTime || undefined;
  const seoImage = post.featured_image || undefined;

  return (
    <>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        image={seoImage}
        type="article"
        publishedTime={publishedTime || undefined}
        modifiedTime={modifiedTime}
        author={author?.name || undefined}
      />
      
      <article className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-6">
            <Link href="/blog">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>

          {/* Featured Image */}
          {post.featured_image && (
            <div className="mb-8">
              <img 
                src={post.featured_image} 
                alt={post.title}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          )}

          {/* Article Header */}
          <header className="mb-8">
            {/* Category */}
            {category && (
              <div className="mb-4">
                <Badge variant="outline">{category.name}</Badge>
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl font-bold mb-4 leading-tight">{post.title}</h1>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
            )}

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              {/* Author */}
              {author && (
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{author.name}</span>
                </div>
              )}

              {/* Date */}
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.published_at || post.created_at)}</span>
              </div>

              {/* Read Time */}
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.read_time} min read</span>
              </div>
            </div>

            <Separator className="mt-6" />
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content || '') }} />
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mb-8">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Tag className="h-4 w-4" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>
          )}

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="overflow-hidden">
                    {relatedPost.featured_image && (
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={relatedPost.featured_image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2 line-clamp-2">
                        <Link href={`/blog/${relatedPost.slug}`} className="hover:text-primary">
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{formatDate(relatedPost.published_at || relatedPost.created_at)}</span>
                        <span>{relatedPost.read_time} min</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await supabaseBlogService.getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
  const slugParam = params?.slug;
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

  if (!slug) {
    return { notFound: true };
  }

  const post = await supabaseBlogService.getPostBySlug(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  const author = post.author ?? null;
  const category = post.category ?? null;

  const relatedPostsList = category?.id ? await supabaseBlogService.getPostsByCategory(category.id) : [];
  const filteredRelatedPosts = relatedPostsList.filter((p) => p.id !== post.id).slice(0, 3);

  return {
    props: {
      post,
      relatedPosts: filteredRelatedPosts,
      author,
      category,
    },
    revalidate: 60,
  };
};

export default BlogPost;
