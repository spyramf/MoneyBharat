
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { categoriesWithIcons } from '@/data/blogCategories';

interface BlogCategoriesSectionProps {
  categories: string[];
}

const BlogCategoriesSection = ({ categories }: BlogCategoriesSectionProps) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore Topics</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dive into our comprehensive collection of financial knowledge organized by topics
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categoriesWithIcons.map((category) => (
            <Link
              key={category.name}
              to={`/blog?category=${encodeURIComponent(category.name)}`}
              className="block"
            >
              <Card className="h-full transition-all hover:shadow-md hover:scale-105 border-2 hover:border-fintech-purple/30">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                  <div className="w-12 h-12 rounded-full bg-fintech-purple/10 flex items-center justify-center mb-4">
                    {category.icon}
                  </div>
                  <h3 className="font-medium text-gray-900">{category.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{category.count} Articles</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCategoriesSection;
