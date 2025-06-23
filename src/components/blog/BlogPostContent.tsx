
import { BlogPost as BlogPostType } from '@/data/blogData';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import ShareButtonGroup from '@/components/ui/ShareButtonGroup';

interface BlogPostContentProps {
  post: BlogPostType;
}

const BlogPostContent = ({ post }: BlogPostContentProps) => {
  return (
    <>
      {/* Featured Image */}
      {post.featuredImage && (
        <div className="mb-8 rounded-xl overflow-hidden">
          <img 
            src={post.featuredImage} 
            alt={post.title + " - " + post.category + " - " + (post?.tags?.[0] || "Money Bharat") + " - Money Bharat Blog"}
            className="w-full h-auto max-h-[400px] object-cover"
          />
        </div>
      )}

      {/* Article Content */}
      <div className="max-w-3xl mx-auto">
        <div 
          className="prose prose-lg max-w-none" 
          dangerouslySetInnerHTML={{ __html: post.content || '' }}
        />

        {/* Share After Content */}
        <div className="mt-8 mb-8">
          <ShareButtonGroup
            title={post.title}
            text={`${post.excerpt} - Read more on Money Bharat Finance`}
            url={`https://moneybharat.co/blog/${post.slug}`}
            layout="card"
            platforms={['whatsapp', 'linkedin', 'twitter', 'email', 'copy']}
            showLabels={true}
          />
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
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
        )}
        
        {/* Author Bio */}
        {post.author && (
          <div className="mt-10 p-6 bg-gray-50 rounded-xl">
            <div className="flex items-start gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback className="text-lg">{post.author.name.split(' ').map(name => name[0]).join('')}</AvatarFallback>
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
        )}
      </div>
    </>
  );
};

export default BlogPostContent;
