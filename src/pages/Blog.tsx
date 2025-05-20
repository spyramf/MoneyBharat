import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPostCard from '@/components/BlogPostCard';
import { blogPosts, blogCategories, type BlogCategory } from '@/data/blogData';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>(blogCategories[0]);
  const featuredPosts = blogPosts.filter(post => post.isFeatured);
  const filteredPosts = selectedCategory.slug === 'all' ? blogPosts : blogPosts.filter(post => post.category.toLowerCase().replace(/\s+/g, '-') === selectedCategory.slug);
  return <>
      <Helmet>
        <title>Personal Finance Blog | Money Bharat</title>
        <meta name="description" content="Explore articles on personal finance, investments, insurance, and more. Stay updated with the latest financial insights and tips from Money Bharat's experts." />
        <meta name="keywords" content="personal finance, investments, mutual funds, insurance, tax planning, financial tips, money management, Indian finance" />
        <meta property="og:title" content="Personal Finance Blog | Money Bharat" />
        <meta property="og:description" content="Explore articles on personal finance, investments, insurance, and more. Stay updated with the latest financial insights and tips from Money Bharat's experts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moneybharat.com/blog" />
        <meta property="og:image" content="/placeholder.svg" />
        <link rel="canonical" href="https://moneybharat.com/blog" />
      </Helmet>

      <Navbar />

      <main className="pt-24 py-[80px]">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-fintech-purple/10 to-fintech-blue/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Financial Wisdom for Every Indian
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Expert insights, practical tips, and comprehensive guides to help you navigate the complex world of personal finance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-fintech-purple hover:bg-fintech-deep-purple">
                  Latest Articles
                </Button>
                <Button variant="outline">
                  Subscribe to Newsletter
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Featured Articles</h2>
              <Button variant="ghost" className="group">
                View All
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPosts.map(post => <BlogPostCard key={post.id} post={post} />)}
            </div>
          </div>
        </section>

        {/* All Posts with Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">All Articles</h2>
              <ScrollArea className="w-full whitespace-nowrap pb-4">
                <div className="flex gap-3 pb-2">
                  {blogCategories.map(category => <Button key={category.slug} variant={selectedCategory.slug === category.slug ? "default" : "outline"} size="sm" className={selectedCategory.slug === category.slug ? "bg-fintech-purple" : ""} onClick={() => setSelectedCategory(category)}>
                      {category.name} ({category.count})
                    </Button>)}
                </div>
              </ScrollArea>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => <BlogPostCard key={post.id} post={post} />)}
            </div>
            
            {filteredPosts.length === 0 && <div className="text-center py-10">
                <p className="text-lg text-gray-500">No articles found in this category.</p>
              </div>}
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-gradient-to-r from-fintech-purple to-fintech-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with Financial Insights</h2>
              <p className="mb-8">
                Subscribe to our newsletter for the latest articles, tips, and expert advice delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input type="email" placeholder="Enter your email address" className="px-4 py-3 rounded-lg text-gray-800 w-full sm:w-64 md:w-80" />
                <Button className="bg-white text-fintech-purple hover:bg-gray-100">
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>;
};
export default Blog;