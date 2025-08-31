import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { Calendar } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { DatePicker } from "@/components/ui/date-picker"

import { supabaseBlogService, type SupabaseBlogPost, type SupabaseBlogCategory, type SupabaseBlogAuthor } from '@/services/supabaseBlogService';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RichTextEditor } from '@/components/ui/rich-text-editor';
import { toast } from 'sonner';

// Helper function to generate URL-friendly slugs
const generateSlug = (title: string) => {
  return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
};

const BlogEditor = ({ postId }: { postId?: string }) => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<SupabaseBlogCategory[]>([]);
  const [authors, setAuthors] = useState<SupabaseBlogAuthor[]>([]);
  const [loading, setLoading] = useState(true);
  const [editorContent, setEditorContent] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      category_id: '',
      author_id: '',
      published_date: null,
      read_time: '',
      is_featured: false,
      featured_image: '',
      status: 'draft',
      meta_title: '',
      meta_description: '',
      focus_keywords: [],
      canonical_url: '',
      robots_directive: 'index, follow',
      og_title: '',
      og_description: '',
      og_image: '',
      twitter_title: '',
      twitter_description: '',
      twitter_image: '',
    },
  });

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [categoriesData, authorsData] = await Promise.all([
          supabaseBlogService.getAllCategories(),
          supabaseBlogService.getAllAuthors(),
        ]);
        setCategories(categoriesData);
        setAuthors(authorsData);

        if (postId) {
          const post = await supabaseBlogService.getPostById(postId);
          if (post) {
            // Populate the form with the post data
            setValue('title', post.title);
            setValue('slug', post.slug);
            setValue('excerpt', post.excerpt || '');
            setEditorContent(post.content || '');
            setValue('category_id', post.category_id || '');
            setValue('author_id', post.author_id || '');
            setSelectedDate(post.published_date ? parseISO(post.published_date) : undefined);
            setValue('published_date', post.published_date ? parseISO(post.published_date) : null);
            setValue('read_time', post.read_time || '');
            setValue('is_featured', post.is_featured || false);
            setValue('featured_image', post.featured_image || '');
            setValue('status', post.status);
            setValue('meta_title', post.meta_title || '');
            setValue('meta_description', post.meta_description || '');
            setValue('focus_keywords', post.focus_keywords || []);
            setValue('canonical_url', post.canonical_url || '');
            setValue('robots_directive', post.robots_directive || 'index, follow');
            setValue('og_title', post.og_title || '');
            setValue('og_description', post.og_description || '');
            setValue('og_image', post.og_image || '');
            setValue('twitter_title', post.twitter_title || '');
            setValue('twitter_description', post.twitter_description || '');
            setValue('twitter_image', post.twitter_image || '');
          }
        }
      } catch (error) {
        console.error('Error loading data:', error);
        toast.error('Error loading data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [postId, setValue]);

  const onSubmit = async (formData: any) => {
    try {
      setLoading(true);

      // Ensure published_date is correctly formatted as an ISO string
      const formattedDate = selectedDate ? format(selectedDate, 'yyyy-MM-dd') : null;

      const postData = {
        title: formData.title,
        slug: generateSlug(formData.title),
        excerpt: formData.excerpt,
        content: editorContent,
        category_id: formData.category_id,
        author_id: formData.author_id,
        published_date: formattedDate,
        read_time: formData.read_time,
        is_featured: formData.is_featured,
        featured_image: formData.featured_image || null,
        status: formData.status,
        meta_title: formData.meta_title || formData.title,
        meta_description: formData.meta_description,
        focus_keywords: formData.focus_keywords,
        seo_score: 0,
        canonical_url: formData.canonical_url || null,
        robots_directive: formData.robots_directive || 'index, follow',
        og_title: formData.og_title || formData.title,
        og_description: formData.og_description || formData.meta_description,
        og_image: formData.og_image || null,
        twitter_title: formData.twitter_title || formData.title,
        twitter_description: formData.twitter_description || formData.meta_description,
        twitter_image: formData.twitter_image || null,
      };

      if (postId) {
        // Update existing post
        await supabaseBlogService.updatePost(postId, postData);
        toast.success('Post updated successfully!');
      } else {
        // Create new post
        await supabaseBlogService.createPost(postData);
        toast.success('Post created successfully!');
      }

      navigate('/admin/blog'); // Redirect to admin blog list
    } catch (error) {
      console.error('Error saving post:', error);
      toast.error('Error saving post');
    } finally {
      setLoading(false);
    }
  };

  const handleEditorChange = useCallback((content: string) => {
    setEditorContent(content);
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>{postId ? 'Edit Blog Post' : 'Create New Blog Post'}</CardTitle>
          <CardDescription>Manage your blog posts here.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Controller
                  name="title"
                  control={control}
                  rules={{ required: 'Title is required' }}
                  render={({ field }) => (
                    <Input id="title" {...field} placeholder="Enter title" />
                  )}
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message as string}</p>}
              </div>
              <div>
                <Label htmlFor="slug">Slug</Label>
                <Controller
                  name="slug"
                  control={control}
                  render={({ field }) => (
                    <Input id="slug" {...field} placeholder="Enter slug" disabled />
                  )}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="excerpt">Excerpt</Label>
              <Controller
                name="excerpt"
                control={control}
                render={({ field }) => (
                  <Textarea id="excerpt" {...field} placeholder="Enter excerpt" />
                )}
              />
            </div>

            <div>
              <Label htmlFor="content">Content</Label>
              <RichTextEditor
                value={editorContent}
                onChange={handleEditorChange}
                placeholder="Write your blog post content here..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="category_id">Category</Label>
                <Controller
                  name="category_id"
                  control={control}
                  rules={{ required: 'Category is required' }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.category_id && <p className="text-red-500 text-sm mt-1">{errors.category_id.message as string}</p>}
              </div>
              <div>
                <Label htmlFor="author_id">Author</Label>
                <Controller
                  name="author_id"
                  control={control}
                  rules={{ required: 'Author is required' }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select an author" />
                      </SelectTrigger>
                      <SelectContent>
                        {authors.map((author) => (
                          <SelectItem key={author.id} value={author.id}>
                            {author.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.author_id && <p className="text-red-500 text-sm mt-1">{errors.author_id.message as string}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="published_date" className="flex items-center">
                  Publish Date
                  <Calendar className="ml-2 h-4 w-4 opacity-70" />
                </Label>
                <Controller
                  name="published_date"
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      id="published_date"
                      mode="single"
                      selected={selectedDate}
                      onSelect={(date) => {
                        setSelectedDate(date);
                        field.onChange(date); // Update the form value
                      }}
                      placeholder="Select date"
                    />
                  )}
                />
              </div>
              <div>
                <Label htmlFor="read_time">Read Time</Label>
                <Controller
                  name="read_time"
                  control={control}
                  render={({ field }) => (
                    <Input id="read_time" {...field} placeholder="e.g., 5 min" />
                  )}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="featured_image">Featured Image URL</Label>
              <Controller
                name="featured_image"
                control={control}
                render={({ field }) => (
                  <Input id="featured_image" {...field} placeholder="Enter image URL" />
                )}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Label htmlFor="is_featured">Featured Post</Label>
              <Controller
                name="is_featured"
                control={control}
                render={({ field }) => (
                  <Switch
                    id="is_featured"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                )}
              />
            </div>

            <div>
              <Label htmlFor="status">Status</Label>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <h2>SEO Settings</h2>
            <div>
              <Label htmlFor="meta_title">Meta Title</Label>
              <Controller
                name="meta_title"
                control={control}
                render={({ field }) => (
                  <Input id="meta_title" {...field} placeholder="Enter meta title" />
                )}
              />
            </div>
            <div>
              <Label htmlFor="meta_description">Meta Description</Label>
              <Controller
                name="meta_description"
                control={control}
                render={({ field }) => (
                  <Textarea id="meta_description" {...field} placeholder="Enter meta description" />
                )}
              />
            </div>
             <div>
              <Label htmlFor="focus_keywords">Focus Keywords</Label>
              <Controller
                name="focus_keywords"
                control={control}
                render={({ field }) => (
                  <Input id="focus_keywords" {...field} placeholder="Enter focus keywords" />
                )}
              />
            </div>

            <CardFooter>
              <Button type="submit" disabled={loading}>
                {loading ? 'Saving...' : 'Save Post'}
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogEditor;
