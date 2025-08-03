
import { BlogPost } from "@/data/blogData";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Calendar, Clock } from "lucide-react";

interface BlogPostCardProps {
  post: BlogPost;
  compact?: boolean;
  featured?: boolean;
}

const BlogPostCard = ({ post, compact = false, featured = false }: BlogPostCardProps) => {
  const initials = post.author.name
    .split(' ')
    .map(name => name[0])
    .join('');

  if (compact) {
    return (
      <Link to={`/blog/${post.slug}`} className="group">
        <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-md bg-white border border-gray-100">
          <div className="flex gap-4 p-4">
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
              <img 
                src={post.featuredImage} 
                alt={post.title} 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="flex-1 min-w-0">
              <Badge variant="secondary" className="text-xs bg-fintech-purple/10 text-fintech-purple mb-2">
                {post.category}
              </Badge>
              <h3 className="line-clamp-2 font-semibold text-sm group-hover:text-fintech-purple transition-colors leading-tight">
                {post.title}
              </h3>
              <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {post.publishedDate && format(new Date(post.publishedDate), 'MMM dd')}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    );
  }

  if (featured) {
    return (
      <Link to={`/blog/${post.slug}`} className="group block">
        <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
          <div className="relative h-64 overflow-hidden">
            <img 
              src={post.featuredImage} 
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute top-4 left-4">
              <Badge className="bg-fintech-purple text-white border-0">
                {post.category}
              </Badge>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-fintech-purple transition-colors">
                {post.title}
              </h3>
              <div className="flex items-center gap-4 text-sm opacity-90">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {post.publishedDate && format(new Date(post.publishedDate), 'MMM dd, yyyy')}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link to={`/blog/${post.slug}`} className="group block">
      <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 bg-white border border-gray-100">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={post.featuredImage} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className="bg-white/90 text-fintech-purple">
              {post.category}
            </Badge>
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-fintech-purple transition-colors leading-tight">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback className="text-xs">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-xs font-medium text-gray-900">{post.author.name}</p>
                <p className="text-xs text-gray-500">{post.author.role}</p>
              </div>
            </div>
            <div className="text-xs text-gray-500 flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogPostCard;
