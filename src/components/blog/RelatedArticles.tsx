
import BlogPostCard from '@/components/BlogPostCard';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BlogPost as BlogPostType } from '@/data/blogData';

interface RelatedArticlesProps {
  relatedPosts: BlogPostType[];
}

const RelatedArticles = ({ relatedPosts }: RelatedArticlesProps) => {
  if (relatedPosts.length === 0) {
    return null;
  }
  
  return (
    <section className="mt-16 bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
        <ScrollArea className="pb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <BlogPostCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default RelatedArticles;
