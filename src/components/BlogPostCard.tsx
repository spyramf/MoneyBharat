
import { Link } from 'react-router-dom';
import { Calendar, User, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { BlogPost } from '@/types/blog';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
  compact?: boolean;
}

const BlogPostCard = ({ post, featured = false, compact = false }: BlogPostCardProps) => {
  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-md ${featured ? 'h-full' : ''}`}>
      <div className="relative aspect-video overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {featured && (
          <div className="absolute top-2 left-2">
            <Badge className="bg-fintech-purple">Featured</Badge>
          </div>
        )}
        <div className="absolute top-2 right-2">
          <Badge variant="outline" className="bg-white/80 backdrop-blur-sm">
            {post.categories[0]}
          </Badge>
        </div>
      </div>
      <CardHeader className="pt-4 pb-2">
        <Link to={`/blog/${post.slug}`} className="hover:text-fintech-purple">
          <h3 className="text-xl font-semibold line-clamp-2">{post.title}</h3>
        </Link>
      </CardHeader>
      <CardContent className="py-2">
        {!compact && (
          <p className="text-gray-600 line-clamp-3 mb-4">{post.excerpt}</p>
        )}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500">
          <div className="flex items-center">
            <Avatar className="h-6 w-6 mr-2">
              <AvatarImage src={post.authorAvatar || "https://github.com/shadcn.png"} />
              <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2 pb-4">
        <Link 
          to={`/blog/${post.slug}`} 
          className="text-fintech-purple font-medium hover:underline"
        >
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogPostCard;
