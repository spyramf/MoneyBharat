
import { BlogPost } from '@/types/blog';
import BlogPostCard from './BlogPostCard';
import { Link } from 'react-router-dom';

interface RelatedArticlesProps {
  posts: BlogPost[];
}

const RelatedArticles = ({ posts }: RelatedArticlesProps) => {
  if (posts.length === 0) return null;
  
  return (
    <section className="mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Related Articles</h2>
          <Link to="/blog" className="text-fintech-purple hover:underline font-medium">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} compact={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
