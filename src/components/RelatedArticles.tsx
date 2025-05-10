
import { BlogPost } from '@/types/blog';
import BlogPostCard from './BlogPostCard';

interface RelatedArticlesProps {
  posts: BlogPost[];
}

const RelatedArticles = ({ posts }: RelatedArticlesProps) => {
  if (posts.length === 0) return null;
  
  return (
    <section className="mt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
