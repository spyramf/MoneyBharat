
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { createSampleBlogPosts } from '@/utils/createSampleBlogPosts';
import { toast } from 'sonner';
import { BookOpen, Plus, Loader2 } from 'lucide-react';

const SamplePostsCreator = () => {
  const [isCreating, setIsCreating] = useState(false);

  const handleCreatePosts = async () => {
    setIsCreating(true);
    try {
      const success = await createSampleBlogPosts();
      if (success) {
        toast.success('Sample blog posts created successfully!');
      } else {
        toast.error('Some posts may have failed to create. Check console for details.');
      }
    } catch (error) {
      toast.error('Failed to create sample posts');
      console.error('Error:', error);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Sample Finance Blog Posts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">
          Create sample blog posts about mutual funds, insurance, and loans to populate your blog with quality content.
        </p>
        <div className="space-y-2">
          <div className="text-sm font-medium">Posts to be created:</div>
          <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
            <li>Mutual Funds vs Fixed Deposits: Investment Comparison Guide</li>
            <li>Health Insurance vs Life Insurance: Understanding Key Differences</li>
            <li>Home Loan vs Personal Loan: Which Should You Choose?</li>
          </ul>
        </div>
        <Button 
          onClick={handleCreatePosts} 
          disabled={isCreating}
          className="mt-4"
        >
          {isCreating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating Posts...
            </>
          ) : (
            <>
              <Plus className="mr-2 h-4 w-4" />
              Create Sample Posts
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
};

export default SamplePostsCreator;
