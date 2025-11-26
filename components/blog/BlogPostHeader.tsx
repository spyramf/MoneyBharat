import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { SupabaseBlogPost as BlogPostType } from "@/services/supabaseBlogService";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ShareButtonGroup from "@/components/ui/ShareButtonGroup";
import { format } from "date-fns";

interface BlogPostHeaderProps {
  post: BlogPostType;
}

const BlogPostHeader = ({ post }: BlogPostHeaderProps) => {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      {/* Breadcrumbs */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-muted-foreground" />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                Blog
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-muted-foreground" />
          <BreadcrumbItem>
            <span className="text-foreground font-medium">{post.category?.name}</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Back Button */}
      <Link href="/blog" className="inline-flex items-center text-foreground/90 hover:text-foreground mb-8 group transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Back to All Articles
      </Link>

      {/* Category Badge */}
      <div className="mb-6">
        <Badge className="bg-foreground/20 hover:bg-foreground/30 text-foreground border-foreground/30 px-4 py-2 text-sm font-semibold">
          {post.category?.name}
        </Badge>
      </div>

      {/* Article Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-foreground">{post.title}</h1>

      {/* Article Excerpt */}
      {post.excerpt && <p className="text-xl text-foreground/90 mb-8 leading-relaxed">{post.excerpt}</p>}

      {/* Article Metadata */}
      <div className="flex flex-wrap items-center gap-8 mb-8 p-6 bg-foreground/10 backdrop-blur-sm rounded-xl border border-foreground/20">
        {/* Author Info */}
        {post.author && (
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 ring-2 ring-white/50 shadow-md">
              <AvatarImage src={post.author.avatar_url || ''} alt={post.author.name} />
              <AvatarFallback className="bg-foreground/20 text-foreground font-semibold">
                {post.author.name
                  .split(" ")
                  .map((name: string) => name[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-foreground">{post.author.name}</p>
              <p className="text-sm text-foreground/80 font-medium">{post.author.role}</p>
            </div>
          </div>
        )}

        {/* Metadata */}
        <div className="flex items-center gap-6 text-sm text-foreground/80">
          {post.published_at && (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-foreground/90" />
              <span>{format(new Date(post.published_at), "MMMM dd, yyyy")}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-foreground/90" />
            <span>{post.read_time} min read</span>
          </div>
        </div>
      </div>

      {/* Share Buttons */}
      <div className="mb-12 p-6 bg-foreground/10 backdrop-blur-sm rounded-xl border border-foreground/20">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="font-semibold text-foreground mb-1">Share this article</h3>
            <p className="text-sm text-foreground/80">Help others discover this financial insight</p>
          </div>
          <ShareButtonGroup
            title={post.title}
            text={`${post.excerpt} - Read more on Money Bharat Finance`}
            url={`https://moneybharatfinance.com/blog/${post.slug}`}
            platforms={["whatsapp", "linkedin", "twitter", "email", "copy"]}
            showLabels={false}
            className="flex-shrink-0"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPostHeader;