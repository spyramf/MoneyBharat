
import { Link } from 'react-router-dom';
import { BlogPost } from '@/types/blog';
import BlogPostCard from './BlogPostCard';

interface FeaturedPostsSectionProps {
  posts: BlogPost[];
}

const FeaturedPostsSection = ({ posts }: FeaturedPostsSectionProps) => {
  if (posts.length === 0) return null;
  
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} featured={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPostsSection;
