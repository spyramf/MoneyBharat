
import { BlogPost } from "@/data/blogData";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
  compact?: boolean;
}

const BlogPostCard = ({ post, featured = false, compact = false }: BlogPostCardProps) => {
  const initials = post.author.name
    .split(' ')
    .map(name => name[0])
    .join('');

  if (compact) {
    return (
      <Link to={`/blog/${post.slug}`} className="group block">
        <Card className="transition-all duration-300 hover:shadow-md border-0 bg-background/50 backdrop-blur">
          <div className="flex gap-4 p-4">
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg">
              <img 
                src={post.featuredImage} 
                alt={post.title} 
                className="absolute inset-0 h-full w-full object-cover transition-transform group-hover:scale-110"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="line-clamp-2 font-semibold text-sm group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                <span>{post.publishedDate && format(new Date(post.publishedDate), 'MMM d')}</span>
                <Clock className="h-3 w-3 ml-1" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link to={`/blog/${post.slug}`} className="group block h-full">
      <Card className={`h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-0 bg-background/80 backdrop-blur overflow-hidden ${featured ? 'lg:col-span-1' : ''}`}>
        <div className="relative overflow-hidden">
          <div className={`relative ${featured ? 'h-48' : 'h-40'} overflow-hidden`}>
            <img 
              src={post.featuredImage} 
              alt={post.title} 
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute top-3 right-3">
              <Badge className="bg-primary/90 hover:bg-primary text-primary-foreground border-0">
                {post.category}
              </Badge>
            </div>
            {featured && (
              <div className="absolute top-3 left-3">
                <Badge variant="secondary" className="bg-secondary/90 text-secondary-foreground border-0">
                  Featured
                </Badge>
              </div>
            )}
          </div>
        </div>
        
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <h3 className={`font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2 ${featured ? 'text-xl' : 'text-lg'}`}>
                {post.title}
              </h3>
              <p className={`text-muted-foreground mt-2 line-clamp-3 ${featured ? 'text-base' : 'text-sm'}`}>
                {post.excerpt}
              </p>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-border/50">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8 ring-2 ring-background">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback className="text-xs font-medium">{initials}</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="font-medium text-sm truncate">{post.author.name}</p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.publishedDate && format(new Date(post.publishedDate), 'MMM d, yyyy')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="h-4 w-4 text-primary" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogPostCard;
