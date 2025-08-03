
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Clock, User, Star } from 'lucide-react';
import { type SupabaseBlogPost } from '@/services/supabaseBlogService';

interface BlogPostCardProps {
  post: SupabaseBlogPost;
  featured?: boolean;
}

export const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, featured = false }) => {
  const formattedDate = post.published_date 
    ? new Date(post.published_date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : 'Draft';

  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden ${
      featured ? 'border-fintech-purple/20 shadow-lg' : ''
    }`}>
      {post.featured_image && (
        <div className="relative overflow-hidden">
          <img 
            src={post.featured_image} 
            alt={post.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {featured && (
            <div className="absolute top-4 left-4">
              <Badge className="bg-fintech-purple text-white">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            </div>
          )}
          {post.is_featured && !featured && (
            <div className="absolute top-4 left-4">
              <Badge variant="secondary">
                <Star className="w-3 h-3 mr-1" />
                Featured
              </Badge>
            </div>
          )}
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 mb-2">
          {post.category && (
            <Badge variant="outline" className="text-xs">
              {post.category.name}
            </Badge>
          )}
          <div className="flex items-center text-xs text-gray-500 gap-1">
            <Calendar className="w-3 h-3" />
            {formattedDate}
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-fintech-purple transition-colors line-clamp-2">
          <Link to={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>
      </CardHeader>

      <CardContent className="pb-3">
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-xs text-gray-500">
          {post.read_time && (
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.read_time}
            </div>
          )}
          
          {post.seo_score && (
            <div className={`flex items-center gap-1 ${
              post.seo_score >= 80 ? 'text-green-600' : 
              post.seo_score >= 60 ? 'text-yellow-600' : 'text-red-600'
            }`}>
              SEO: {post.seo_score}/100
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-0 border-t">
        <div className="flex items-center justify-between w-full">
          {post.author && (
            <div className="flex items-center gap-2">
              <Avatar className="w-6 h-6">
                <AvatarImage src={post.author.avatar_url} alt={post.author.name} />
                <AvatarFallback className="text-xs">
                  {post.author.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <span className="text-xs text-gray-600">{post.author.name}</span>
            </div>
          )}
          
          <Link 
            to={`/blog/${post.slug}`}
            className="text-xs text-fintech-purple hover:text-fintech-purple/80 font-medium"
          >
            Read More →
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
