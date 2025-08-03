
import { BlogPost as BlogPostType } from '@/data/blogData';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import ShareButtonGroup from '@/components/ui/ShareButtonGroup';

interface BlogPostContentProps {
  post: BlogPostType;
}

const BlogPostContent = ({ post }: BlogPostContentProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Featured Image */}
      {post.featuredImage && (
        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src={post.featuredImage} 
            alt={post.title + " - " + post.category + " - " + (post?.tags?.[0] || "Money Bharat") + " - Money Bharat Blog"}
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
        </div>
      )}

      {/* Article Content */}
      <article className="prose prose-lg prose-gray max-w-none">
        <div 
          className="blog-content [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-6 [&>h2]:text-gray-900 [&>h2]:border-b [&>h2]:border-gray-200 [&>h2]:pb-3
                     [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-4 [&>h3]:text-gray-800
                     [&>h4]:text-lg [&>h4]:font-medium [&>h4]:mt-6 [&>h4]:mb-3 [&>h4]:text-gray-800
                     [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-base
                     [&>ul]:mb-6 [&>ul]:space-y-2 [&>li]:text-gray-700 [&>li]:leading-relaxed
                     [&>ol]:mb-6 [&>ol]:space-y-2
                     [&>blockquote]:border-l-4 [&>blockquote]:border-fintech-purple [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:bg-gray-50 [&>blockquote]:py-4 [&>blockquote]:my-6 [&>blockquote]:rounded-r-lg
                     [&>table]:w-full [&>table]:border-collapse [&>table]:border [&>table]:border-gray-200 [&>table]:rounded-lg [&>table]:overflow-hidden [&>table]:my-8
                     [&>table_th]:bg-fintech-purple [&>table_th]:text-white [&>table_th]:font-semibold [&>table_th]:p-3 [&>table_th]:text-left [&>table_th]:border-b [&>table_th]:border-gray-300
                     [&>table_td]:p-3 [&>table_td]:border-b [&>table_td]:border-gray-200 [&>table_td]:text-gray-700
                     [&>table_tr:nth-child(even)]:bg-gray-50
                     [&_strong]:text-fintech-purple [&_strong]:font-semibold
                     [&_em]:text-gray-600"
          dangerouslySetInnerHTML={{ __html: post.content || '' }}
        />
      </article>

      {/* Share Section */}
      <div className="mt-12 p-8 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-100">
        <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Share this article</h3>
        <p className="text-gray-600 text-center mb-6">Help others discover this valuable financial insight</p>
        <ShareButtonGroup
          title={post.title}
          text={`${post.excerpt} - Read more on Money Bharat Finance`}
          url={`https://moneybharat.co/blog/${post.slug}`}
          layout="card"
          platforms={['whatsapp', 'linkedin', 'twitter', 'email', 'copy']}
          showLabels={true}
          className="justify-center"
        />
      </div>

      {/* Tags Section */}
      {post.tags && post.tags.length > 0 && (
        <div className="mt-12 p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center">
            <span className="w-2 h-2 bg-fintech-purple rounded-full mr-3"></span>
            Related Topics
          </h3>
          <div className="flex flex-wrap gap-3">
            {post.tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="outline" 
                className="px-4 py-2 text-sm font-medium border-2 border-fintech-purple/20 text-fintech-purple hover:bg-fintech-purple hover:text-white transition-colors duration-200"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      )}
      
      {/* Author Bio Section */}
      {post.author && (
        <div className="mt-12 p-8 bg-gradient-to-r from-fintech-purple/5 to-blue-50 rounded-2xl border border-fintech-purple/10">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <Avatar className="h-20 w-20 ring-4 ring-white shadow-lg">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback className="text-lg font-bold bg-fintech-purple text-white">
                {post.author.name.split(' ').map(name => name[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="mb-2">
                <h3 className="text-2xl font-bold mb-1 text-gray-900">About {post.author.name}</h3>
                <p className="text-fintech-purple font-semibold">{post.author.role}</p>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {post.author.role} at Money Bharat with extensive experience in Indian financial markets. 
                Passionate about making finance accessible to everyone through clear, actionable insights 
                and expert guidance on investments, loans, and insurance.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <span className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                  Financial Expert
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-12 p-8 bg-gradient-to-r from-fintech-purple to-blue-600 rounded-2xl text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Take Action?</h3>
        <p className="text-lg mb-6 text-purple-100">
          Get personalized financial advice from our expert team
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-fintech-purple font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Get Free Consultation
          </button>
          <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
            Explore More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPostContent;
