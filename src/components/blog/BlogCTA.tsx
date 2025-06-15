
import { Button } from '@/components/ui/button';

const BlogCTA = () => {
  return (
    <section className="container mx-auto px-4 my-16">
      <div className="bg-gradient-to-r from-fintech-purple to-fintech-blue text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Your Financial Journey Today</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Whether you're planning for retirement, looking to invest, or just want to manage your finances better, 
          Money Bharat has the tools and resources to help you succeed.
        </p>
        <Button className="bg-white text-fintech-purple hover:bg-gray-100">
          Explore Our Services
        </Button>
      </div>
    </section>
  );
};

export default BlogCTA;
