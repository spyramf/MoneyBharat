import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { BlogPost as BlogPostType } from "@/data/blogData";
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
              <Link to="/" className="text-gray-200 hover:text-white">
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-gray-300" />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/blog" className="text-gray-200 hover:text-white">
                Blog
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-gray-300" />
          <BreadcrumbItem>
            <span className="text-white font-medium">{post.category}</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Back Button */}
      <Link to="/blog" className="inline-flex items-center text-white/90 hover:text-white mb-8 group transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
        Back to All Articles
      </Link>

      {/* Category Badge */}
      <div className="mb-6">
        <Badge className="bg-white/20 hover:bg-white/30 text-white border-white/30 px-4 py-2 text-sm font-semibold">
          {post.category}
        </Badge>
      </div>

      {/* Article Title */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white">{post.title}</h1>

      {/* Article Excerpt */}
      {post.excerpt && <p className="text-xl text-white/90 mb-8 leading-relaxed">{post.excerpt}</p>}

      {/* Article Metadata */}
      <div className="flex flex-wrap items-center gap-8 mb-8 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
        {/* Author Info */}
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 ring-2 ring-white/50 shadow-md">
            <AvatarImage src={post.author.avatar} alt={post.author.name} />
            <AvatarFallback className="bg-white/20 text-white font-semibold">
              {post.author.name
                .split(" ")
                .map((name) => name[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-white">{post.author.name}</p>
            <p className="text-sm text-white/80 font-medium">{post.author.role}</p>
          </div>
        </div>

        {/* Metadata */}
        <div className="flex items-center gap-6 text-sm text-white/80">
          {post.publishedDate && (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-white/90" />
              <span>{format(new Date(post.publishedDate), "MMMM dd, yyyy")}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-white/90" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Share Buttons */}
      <div className="mb-12 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="font-semibold text-white mb-1">Share this article</h3>
            <p className="text-sm text-white/80">Help others discover this financial insight</p>
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
