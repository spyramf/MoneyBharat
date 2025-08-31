
import React from 'react';
import BlogEditorForm from '@/components/blog/BlogEditorForm';

const BlogEditor = ({ postId }: { postId?: string }) => {
  return <BlogEditorForm postId={postId} />;
};

export default BlogEditor;
