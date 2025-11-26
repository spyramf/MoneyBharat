import { SupabaseBlogPost as BlogPostType } from "@/services/supabaseBlogService";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import ShareButtonGroup from "@/components/ui/ShareButtonGroup";
import { sanitizeHtml } from "@/utils/sanitize";

interface BlogPostContentProps {
  post: BlogPostType;
}

const BlogPostContent = ({ post }: BlogPostContentProps) => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      {/* Featured Image */}
      {post.featured_image && (
        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={post.featured_image}
            alt={
              post.title + " - " + post.category?.name + " - " + (post?.tags?.[0] || "Money Bharat") + " - Money Bharat Blog"
            }
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
        </div>
      )}

      {/* Article Content */}
      <article className="prose prose-lg prose-gray max-w-none">
        <div
          className="blog-content [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-10 [&>h2]:mb-6 [&>h2]:text-foreground [&>h2]:border-b [&>h2]:border-border [&>h2]:pb-3
                     [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-4 [&>h3]:text-foreground
                     [&>h4]:text-lg [&>h4]:font-medium [&>h4]:mt-6 [&>h4]:mb-3 [&>h4]:text-foreground
                     [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-base
                     [&>ul]:mb-6 [&>ul]:space-y-2 [&>li]:text-muted-foreground [&>li]:leading-relaxed
                     [&>ol]:mb-6 [&>ol]:space-y-2
                     [&>blockquote]:border-l-4 [&>blockquote]:border-accent [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:bg-muted/50 [&>blockquote]:py-4 [&>blockquote]:my-6 [&>blockquote]:rounded-r-lg
                     [&>table]:w-full [&>table]:border-collapse [&>table]:border [&>table]:border-border [&>table]:rounded-lg [&>table]:overflow-hidden [&>table]:my-8
                     [&>table_th]:bg-accent [&>table_th]:text-accent-foreground [&>table_th]:font-semibold [&>table_th]:p-3 [&>table_th]:text-left [&>table_th]:border-b [&>table_th]:border-border
                     [&>table_td]:p-3 [&>table_td]:border-b [&>table_td]:border-border [&>table_td]:text-muted-foreground
                     [&>table_tr:nth-child(even)]:bg-muted/50
                     [&_strong]:text-accent-foreground [&_strong]:font-semibold
                     [&_em]:text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content || "") }}
        />
      </article>

      {/* Share Section */}
      <div className="mt-12 p-8 bg-gradient-to-r from-muted/50 to-secondary/50 rounded-2xl border">
        <h3 className="text-xl font-bold mb-4 text-center text-foreground">Share this article</h3>
        <p className="text-muted-foreground text-center mb-6">Help others discover this valuable financial insight</p>
        <ShareButtonGroup
          title={post.title}
          text={`${post.excerpt} - Read more on Money Bharat Finance`}
          url={`https://moneybharatfinance.com/blog/${post.slug}`}
          layout="card"
          platforms={["whatsapp", "linkedin", "twitter", "email", "copy"]}
          showLabels={true}
          className="justify-center"
        />
      </div>

      {/* Tags Section */}
      {post.tags && post.tags.length > 0 && (
        <div className="mt-12 p-6 bg-background rounded-xl border shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center">
            <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
            Related Topics
          </h3>
          <div className="flex flex-wrap gap-3">
            {post.tags.map((tag: string) => (
              <Badge
                key={tag}
                variant="outline"
                className="px-4 py-2 text-sm font-medium border-2 border-accent/20 text-accent-foreground hover:bg-accent hover:text-white transition-colors duration-200"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Author Bio Section */}
      {post.author && (
        <div className="mt-12 p-8 bg-gradient-to-r from-accent/5 to-secondary/50 rounded-2xl border-accent/10">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <Avatar className="h-20 w-20 ring-4 ring-white shadow-lg">
              <AvatarImage src={post.author.avatar_url || ''} alt={post.author.name} />
              <AvatarFallback className="text-lg font-bold bg-accent text-accent-foreground">
                {post.author.name
                  .split(" ")
                  .map((name: string) => name[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="mb-2">
                <h3 className="text-2xl font-bold mb-1 text-foreground">About {post.author.name}</h3>
                <p className="text-accent-foreground font-semibold">{post.author.role}</p>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {post.author.bio}
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <span className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                  Financial Expert
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-12 p-8 bg-gradient-to-r from-accent to-secondary rounded-2xl text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Take Action?</h3>
        <p className="text-lg mb-6 text-purple-100">Get personalized financial advice from our expert team</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-accent-foreground font-semibold rounded-lg hover:bg-gray-100 transition-colors">
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