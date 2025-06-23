import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useBlog } from '@/context/BlogContext';
import { BlogPost as BlogPostType } from '@/data/blogData';
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import BlogPostContent from '@/components/blog/BlogPostContent';
import RelatedArticles from '@/components/blog/RelatedArticles';
import BlogCTA from '@/components/blog/BlogCTA';
import { Button } from '@/components/ui/button';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
  const { blogPosts, getPostBySlug } = useBlog();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const currentPost = getPostBySlug(slug || '');
    setPost(currentPost || null);

    if (currentPost) {
      const related = blogPosts
        .filter(p => 
          p.id !== currentPost.id && 
          (p.category === currentPost.category || 
           p.tags.some(tag => currentPost.tags.includes(tag)))
        )
        .slice(0, 3);
      setRelatedPosts(related);
    }
  }, [slug, getPostBySlug, blogPosts]);

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <Link to="/blog" className="text-fintech-purple hover:underline">
            Return to Blog
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post?.title || 'Blog Post'} | Money Bharat Blog</title>
        <meta name="description" content={post?.excerpt} />
        <meta name="keywords" content={post?.tags.join(', ')} />
        <meta property="og:title" content={post?.title || ''} />
        <meta property="og:description" content={post?.excerpt || ''} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://moneybharat.co/blog/${post?.slug}`} />
        <meta property="og:image" content={post?.featuredImage} />
        <meta property="article:published_time" content={post?.publishedDate} />
        <meta property="article:section" content={post?.category} />
        {post?.tags.map((tag) => (
          <meta property="article:tag" content={tag} key={tag} />
        ))}
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post?.title || 'Blog Post'} />
        <meta name="twitter:description" content={post?.excerpt} />
        <meta name="twitter:image" content={post?.featuredImage} />
        <link rel="canonical" href={`https://moneybharat.co/blog/${post?.slug}`} />
        {/* Article structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "${post?.title?.replace(/"/g, '\\"')}",
            "description": "${post?.excerpt?.replace(/"/g, '\\"')}",
            "image": ["${post?.featuredImage}"],
            "author": {
              "@type": "Person",
              "name": "${post?.author?.name?.replace(/"/g, '\\"') || "Money Bharat Team"}"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Money Bharat",
              "logo": {
                "@type": "ImageObject",
                "url": "${post?.featuredImage}"
              }
            },
            "datePublished": "${post?.publishedDate}",
            "articleSection": "${post?.category}",
            "keywords": "${post?.tags?.join(', ')}",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://moneybharat.co/blog/${post?.slug}"
            }
          }
        `}
        </script>
        {/* Breadcrumb structured data */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://moneybharat.co/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://moneybharat.co/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "${post?.title?.replace(/"/g, '\\"')}",
                "item": "https://moneybharat.co/blog/${post?.slug}"
              }
            ]
          }
        `}
        </script>
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4">
          <BlogPostHeader post={post} />
          <BlogPostContent post={post} />
        </article>

        <RelatedArticles relatedPosts={relatedPosts} />
        
        <BlogCTA />
      </main>

      <Footer />
    </>
  );
};

export default BlogPost;
