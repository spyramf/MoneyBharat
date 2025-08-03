
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useBlog } from '@/context/BlogContext';
import MainLayout from '@/layouts/MainLayout';
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import BlogPostContent from '@/components/blog/BlogPostContent';
import RelatedArticles from '@/components/blog/RelatedArticles';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { getPostBySlug, blogPosts } = useBlog();

  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts from the same category
  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <MainLayout>
      <Helmet>
        <title>{post.title} | Money Bharat Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://moneybharat.co/blog/${post.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.featuredImage} />
        <link rel="canonical" href={`https://moneybharat.co/blog/${post.slug}`} />
        
        {/* Article Structured Data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "${post.title}",
            "description": "${post.excerpt}",
            "image": "${post.featuredImage}",
            "author": {
              "@type": "Person",
              "name": "${post.author.name}"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Money Bharat",
              "logo": {
                "@type": "ImageObject",
                "url": "/placeholder.svg"
              }
            },
            "datePublished": "${post.publishedDate}",
            "dateModified": "${post.publishedDate}",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://moneybharat.co/blog/${post.slug}"
            }
          }
        `}</script>
      </Helmet>

      <article className="pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <BlogPostHeader post={post} />
            <BlogPostContent post={post} />
          </div>
        </div>
      </article>

      <RelatedArticles relatedPosts={relatedPosts} />
    </MainLayout>
  );
};

export default BlogPost;
