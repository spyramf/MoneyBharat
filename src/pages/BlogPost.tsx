
import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, User, Tag, Share } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/data/blogPosts';
import RelatedArticles from '@/components/RelatedArticles';
import NewsletterSignup from '@/components/NewsletterSignup';
import TableOfContents from '@/components/TableOfContents';
import SocialShareButtons from '@/components/SocialShareButtons';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  // Find the blog post by slug
  const post = blogPosts.find((post) => post.slug === slug);
  
  // Get related posts (same category, excluding current post)
  const relatedPosts = post
    ? blogPosts
        .filter(
          (p) => 
            p.slug !== slug && 
            p.categories.some((cat) => post.categories.includes(cat))
        )
        .slice(0, 3)
    : [];
  
  // If post doesn't exist, redirect to blog page
  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
  }, [post, navigate]);
  
  if (!post) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - Money Bharat Finance</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={`${post.categories.join(', ')}, finance, money management, investing`} />
        <link rel="canonical" href={`https://moneybharat.com/blog/${post.slug}`} />
        <meta property="og:title" content={`${post.title} - Money Bharat Finance`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://moneybharat.com/blog/${post.slug}`} />
        <meta property="og:image" content={post.coverImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        {post.categories.map((category) => (
          <meta key={category} property="article:tag" content={category} />
        ))}
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-24 pb-12">
          <div className="container mx-auto px-4">
            {/* Breadcrumbs & back button */}
            <div className="mb-8">
              <Link to="/blog" className="flex items-center text-gray-600 hover:text-fintech-purple">
                <ArrowLeft size={16} className="mr-1" />
                <span>Back to Blog</span>
              </Link>
            </div>
            
            {/* Article header */}
            <div className="max-w-4xl mx-auto mb-10">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((category) => (
                  <Badge key={category} variant="outline" className="bg-gray-100">
                    {category}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-gray-600 mb-8">
                <div className="flex items-center">
                  <User size={16} className="mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center">
                  <Tag size={16} className="mr-2" />
                  <span>{post.readingTime} min read</span>
                </div>
              </div>
              
              <div className="aspect-w-16 aspect-h-9 mb-8 rounded-xl overflow-hidden">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            
            {/* Article content */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {/* Sidebar with table of contents */}
              <div className="hidden lg:block">
                <div className="sticky top-24">
                  <TableOfContents headings={post.tableOfContents} />
                  <SocialShareButtons title={post.title} />
                </div>
              </div>
              
              {/* Main content */}
              <article className="lg:col-span-3 prose prose-lg max-w-none prose-headings:font-semibold prose-headings:text-gray-800 prose-p:text-gray-600 prose-a:text-fintech-purple prose-a:no-underline hover:prose-a:underline">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-gray-700 font-medium">Tags:</span>
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-gray-100">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </article>
            </div>
            
            {/* Author bio section */}
            <div className="max-w-4xl mx-auto mt-12 p-6 bg-gray-50 rounded-lg border border-gray-100">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={post.authorAvatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                    alt={post.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{post.author}</h3>
                  <p className="text-gray-600 mb-4">{post.authorBio || "Financial expert with over 10 years of experience in the investment and insurance sector. Passionate about educating people on personal finance and wealth creation."}</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      View Profile
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs">
                      All Articles
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Related articles */}
            <RelatedArticles posts={relatedPosts} />
            
            {/* Newsletter signup */}
            <div className="mt-16">
              <NewsletterSignup />
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
