
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { createSampleBlogPosts } from '@/utils/createSampleBlogPosts';
import { toast } from 'sonner';

const SamplePostsCreator = () => {
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateSamples = async () => {
    try {
      setIsCreating(true);
      await createSampleBlogPosts();
      toast.success('Sample blog posts created successfully!');
    } catch (error) {
      console.error('Error creating sample posts:', error);
      toast.error('Failed to create sample posts');
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sample Blog Posts</CardTitle>
        <CardDescription>
          Create sample blog posts to get started with your blog.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          onClick={handleCreateSamples}
          disabled={isCreating}
        >
          {isCreating ? 'Creating...' : 'Create Sample Posts'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default SamplePostsCreator;
