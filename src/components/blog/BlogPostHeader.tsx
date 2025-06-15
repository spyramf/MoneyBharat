
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { BlogPost as BlogPostType } from '@/data/blogData';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { format } from 'date-fns';

interface BlogPostHeaderProps {
  post: BlogPostType;
  handleShare: () => void;
}

const BlogPostHeader = ({ post, handleShare }: BlogPostHeaderProps) => {
  return (
    <>
      {/* Breadcrumbs */}
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/blog">Blog</Link>
            </BreadcrumbLink>
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
            <AvatarFallback>{post.author.name.split(' ').map(name => name[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{post.author.name}</p>
            <p className="text-sm text-gray-500">{post.author.role}</p>
          </div>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <Calendar className="h-4 w-4 mr-1" />
          {post.publishedDate && format(new Date(post.publishedDate), 'PPP')}
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
    </>
  );
};

export default BlogPostHeader;
