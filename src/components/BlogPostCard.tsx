
import { BlogPost } from "@/data/blogData";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { format } from "date-fns";

interface BlogPostCardProps {
  post: BlogPost;
  compact?: boolean;
}

const BlogPostCard = ({ post, compact = false }: BlogPostCardProps) => {
  const initials = post.author.name
    .split(' ')
    .map(name => name[0])
    .join('');

  if (compact) {
    return (
      <Link to={`/blog/${post.slug}`} className="group">
        <Card className="h-full overflow-hidden transition-all hover:shadow-md">
          <div className="flex gap-3 p-4">
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
              <img 
                src={post.featuredImage} 
                alt={post.title} 
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="line-clamp-2 font-semibold group-hover:text-fintech-purple">
                {post.title}
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                {post.publishedDate && format(new Date(post.publishedDate), 'PP')} · {post.readTime}
              </p>
            </div>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link to={`/blog/${post.slug}`} className="group">
      <Card className="h-full overflow-hidden transition-all hover:shadow-md">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={post.featuredImage} 
            alt={post.title} 
            className="absolute inset-0 h-full w-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute top-3 right-3">
            <Badge className="bg-fintech-purple">{post.category}</Badge>
          </div>
        </div>
        <CardContent className="pt-6">
          <h3 className="mb-2 line-clamp-2 text-xl font-bold group-hover:text-fintech-purple">
            {post.title}
          </h3>
          <p className="line-clamp-3 text-sm text-gray-600">
            {post.excerpt}
          </p>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t pt-4">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div className="text-sm">
              <p className="font-medium">{post.author.name}</p>
            </div>
          </div>
          <div className="text-xs text-gray-500">
            {post.publishedDate && format(new Date(post.publishedDate), 'PP')} · {post.readTime}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogPostCard;
