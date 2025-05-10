
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPostCard from '@/components/BlogPostCard';
import { blogPosts, BlogPost as BlogPostType } from '@/data/blogData';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const currentPost = blogPosts.find(p => p.slug === slug);
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
  }, [slug]);

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

  const authorInitials = post.author.name
    .split(' ')
    .map(name => name[0])
    .join('');

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Money Bharat Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://moneybharat.com/blog/${post.slug}`} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="article:published_time" content={post.publishedDate} />
        <meta property="article:section" content={post.category} />
        {post.tags.map((tag) => (
          <meta property="article:tag" content={tag} key={tag} />
        ))}
        <link rel="canonical" href={`https://moneybharat.com/blog/${post.slug}`} />
      </Helmet>

      <Navbar />

      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} to="/blog">Blog</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink>{post.title}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center text-sm text-gray-600 hover:text-fintech-purple mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Articles
          </Link>

          {/* Category Badge */}
          <div className="mb-4">
            <Badge className="bg-fintech-purple">
              {post.category}
            </Badge>
          </div>

          {/* Article Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            {post.title}
          </h1>

          {/* Article Metadata */}
          <div className="flex flex-wrap items-center gap-6 mb-8">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{authorInitials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm text-gray-500">{post.author.role}</p>
              </div>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              {post.publishedDate}
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="ml-auto" 
              onClick={handleShare}
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>

          {/* Featured Image */}
          <div className="mb-8 rounded-xl overflow-hidden">
            <img 
              src={post.featuredImage} 
              alt={post.title}
              className="w-full h-auto max-h-[400px] object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg max-w-none" 
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-10 pt-6 border-t">
              <h3 className="font-medium mb-3">Related Topics:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-gray-700">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Author Bio */}
            <div className="mt-10 p-6 bg-gray-50 rounded-xl">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback className="text-lg">{authorInitials}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold mb-2">About {post.author.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {post.author.role} at Money Bharat with extensive experience in Indian financial markets. 
                    Passionate about making finance accessible to everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <ScrollArea className="pb-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <BlogPostCard key={relatedPost.id} post={relatedPost} />
                  ))}
                </div>
              </ScrollArea>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="container mx-auto px-4 my-16">
          <div className="bg-gradient-to-r from-fintech-purple to-fintech-blue text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Your Financial Journey Today</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Whether you're planning for retirement, looking to invest, or just want to manage your finances better, 
              Money Bharat has the tools and resources to help you succeed.
            </p>
            <Button className="bg-white text-fintech-purple hover:bg-gray-100">
              Explore Our Services
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BlogPost;
