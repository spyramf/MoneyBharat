import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useBlog } from '@/context/BlogContext';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Editor from '@/components/Editor';

const BlogEditor = ({ id }: { id?: string }) => {
  const router = useRouter();
  const { addPost, updatePost, getPostById, categories, authors } = useBlog();
  const [editingPost, setEditingPost] = useState(null);

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [readTime, setReadTime] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [featuredImage, setFeaturedImage] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    if (id) {
      const post = getPostById(id);
      if (post) {
        setEditingPost(post);
        setTitle(post.title);
        setSlug(post.slug);
        setExcerpt(post.excerpt || '');
        setContent(post.content || '');
        setCategory(post.category_id || '');
        setAuthor(post.author_id?.toString() || '');
        setPublishedDate(post.published_date || '');
        setReadTime(post.read_time || '');
        setIsFeatured(post.is_featured || false);
        setFeaturedImage(post.featured_image || '');
        setTags(post.tags?.map(tag => tag.name) || []);
      }
    }
  }, [id, getPostById]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const postData = {
        title,
        slug,
        excerpt,
        content,
        category_id: category,
        author_id: author,
        published_date: publishedDate,
        read_time: readTime,
        is_featured: isFeatured,
        featured_image: featuredImage,
        meta_title: title,
        meta_description: excerpt,
        status: 'draft' as const,
        // Convert tag strings to proper tag objects for Supabase
        tags: tags.map(tag => ({ name: tag, slug: tag.toLowerCase().replace(/\s+/g, '-') }))
      };

      if (id && editingPost) {
        await updatePost(id, postData);
        toast.success('Post updated successfully!');
      } else {
        await addPost(postData);
        toast.success('Post created successfully!');
      }
      
      router.push('/admin/blogs');
    } catch (error) {
      console.error('Error saving post:', error);
      toast.error('Failed to save post');
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">{id ? 'Edit Blog Post' : 'Create New Blog Post'}</h1>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
        <div className="mb-4">
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="slug">Slug</Label>
          <Input
            type="text"
            id="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="excerpt">Excerpt</Label>
          <Textarea
            id="excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            rows={3}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="content">Content</Label>
          <Editor value={content} onChange={setContent} />
        </div>
        <div className="mb-4">
          <Label htmlFor="category">Category</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat.id} value={cat.id}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="mb-4">
          <Label htmlFor="author">Author</Label>
          <Select value={author} onValueChange={setAuthor}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select an author" />
            </SelectTrigger>
            <SelectContent>
              {authors.map((auth) => (
                <SelectItem key={auth.id} value={auth.id.toString()}>
                  {auth.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="mb-4">
          <Label htmlFor="publishedDate">Published Date</Label>
          <Input
            type="date"
            id="publishedDate"
            value={publishedDate}
            onChange={(e) => setPublishedDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="readTime">Read Time</Label>
          <Input
            type="text"
            id="readTime"
            value={readTime}
            onChange={(e) => setReadTime(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <Input
              type="checkbox"
              className="mr-2"
              checked={isFeatured}
              onChange={(e) => setIsFeatured(e.target.checked)}
            />
            <span>Is Featured</span>
          </label>
        </div>
        <div className="mb-4">
          <Label htmlFor="featuredImage">Featured Image URL</Label>
          <Input
            type="text"
            id="featuredImage"
            value={featuredImage}
            onChange={(e) => setFeaturedImage(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <Label htmlFor="tags">Tags (comma separated)</Label>
          <Input
            type="text"
            id="tags"
            value={tags.join(',')}
            onChange={(e) => setTags(e.target.value.split(',').map(tag => tag.trim()))}
          />
        </div>
        <Button type="submit" variant="primary">
          {id ? 'Update Post' : 'Create Post'}
        </Button>
      </form>
    </div>
  );
};

export default BlogEditor;
