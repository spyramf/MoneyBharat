import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { seedBlogData } from '@/scripts/seedBlogData';

const BlogDataSeeder = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string; inserted?: number } | null>(null);

  const handleSeed = async () => {
    setLoading(true);
    setResult(null);

    try {
      const seedResult = await seedBlogData();
      setResult({
        success: true,
        message: `Successfully seeded blog data! Inserted ${seedResult.inserted} new blog posts.`,
        inserted: seedResult.inserted
      });
    } catch (error) {
      setResult({
        success: false,
        message: `Error seeding data: ${error instanceof Error ? error.message : 'Unknown error'}`
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Blog Data Seeder</CardTitle>
            <CardDescription>
              Add sample blog posts, authors, and categories to your database
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              This will add:
            </p>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>3 additional blog authors (Priya Sharma, Rahul Gupta, Anjali Patel)</li>
              <li>6 comprehensive blog posts across different categories</li>
              <li>Featured images from Unsplash</li>
              <li>SEO-optimized content with meta tags</li>
            </ul>

            {result && (
              <Alert variant={result.success ? 'default' : 'destructive'}>
                {result.success ? (
                  <CheckCircle2 className="h-4 w-4" />
                ) : (
                  <AlertCircle className="h-4 w-4" />
                )}
                <AlertDescription>{result.message}</AlertDescription>
              </Alert>
            )}

            <Button 
              onClick={handleSeed} 
              disabled={loading}
              className="w-full"
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {loading ? 'Seeding Data...' : 'Seed Blog Data'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogDataSeeder;
