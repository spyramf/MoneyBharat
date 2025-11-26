import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Save, 
  ArrowLeft, 
  Eye, 
  Upload, 
  Link as LinkIcon,
  Calendar,
  Tag,
  FileText,
  Settings,
  User,
  Folder
} from 'lucide-react';
import { ImageUpload } from '@/components/ui/image-upload';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { RichTextEditor } from '@/components/admin/RichTextEditor';
import type { SupabaseBlogPost, SupabaseBlogCategory, SupabaseBlogAuthor } from '@/services/supabaseBlogService';

const blogPostSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  excerpt: z.string().min(1, 'Excerpt is required'),
  content: z.string().min(1, 'Content is required'),
  category_id: z.string().min(1, 'Category is required'),
  featured_image: z.string().optional(),
  is_featured: z.boolean(),
  status: z.enum(['draft', 'published', 'archived']),
  meta_title: z.string().optional(),
  meta_description: z.string().optional(),
  tags: z.array(z.string()),
  read_time: z.number().min(1),
});

type BlogPostForm = z.infer<typeof blogPostSchema>;

interface BlogEditorProps {
  post?: SupabaseBlogPost;
  categories: SupabaseBlogCategory[];
  authors: SupabaseBlogAuthor[];
}

const BlogEditor = ({ post: existingPost, categories, authors }: BlogEditorProps) => {
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const [tagInput, setTagInput] = useState('');
  const { toast } = useToast();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const isEditing = !!existingPost;

  const defaultAuthorId = React.useMemo(() => {
    if (existingPost?.author_id) return existingPost.author_id;
    const preferred = authors.find((author) => author.name?.toLowerCase() === 'money bharat team');
    return preferred?.id || authors[0]?.id || '';
  }, [authors, existingPost]);

  const form = useForm<BlogPostForm>({
    resolver: zodResolver(blogPostSchema),
    defaultValues: {
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      category_id: '',
      featured_image: '',
      is_featured: false,
      status: 'draft',
      meta_title: '',
      meta_description: '',
      tags: [],
      read_time: 5,
    },
  });
  const previewValues = form.watch();

  useEffect(() => {
    if (existingPost) {
      form.reset({
        title: existingPost.title,
        slug: existingPost.slug,
        excerpt: existingPost.excerpt || '',
        content: existingPost.content || '',
        category_id: existingPost.category_id || '',
        featured_image: existingPost.featured_image || '',
        is_featured: existingPost.is_featured,
        status: existingPost.status,
        meta_title: existingPost.meta_title || '',
        meta_description: existingPost.meta_description || '',
        tags: existingPost.tags || [],
        read_time: existingPost.read_time || 5,
      });
    }
  }, [existingPost, form]);

  useEffect(() => {
    if (!existingPost && categories.length > 0) {
      form.setValue('category_id', categories[0].id);
    }
  }, [categories, existingPost, form]);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (title: string) => {
    form.setValue('title', title);
    if (!isEditing) {
      form.setValue('slug', generateSlug(title));
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !form.getValues('tags').includes(tagInput.trim())) {
      const currentTags = form.getValues('tags');
      form.setValue('tags', [...currentTags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    const currentTags = form.getValues('tags');
    form.setValue('tags', currentTags.filter(tag => tag !== tagToRemove));
  };

  const onSubmit = async (data: BlogPostForm) => {
    setIsSaving(true);
    try {
      const resolvedAuthorId = existingPost?.author_id || defaultAuthorId;
      if (!resolvedAuthorId) {
        toast({
          title: "Missing author",
          description: "No default author found. Please create a Money Bharat Team author in Supabase.",
          variant: "destructive",
        });
        setIsSaving(false);
        return;
      }

      const payload = {
        ...data,
        tags: (data.tags || []).filter(Boolean),
        author_id: resolvedAuthorId,
        category_id: data.category_id,
        featured_image: data.featured_image || '',
        meta_title: data.meta_title || '',
        meta_description: data.meta_description || '',
        published_at:
          data.status === 'published'
            ? existingPost?.published_at ?? new Date().toISOString()
            : null,
      };

      const endpoint = isEditing && existingPost ? `/api/admin/blogs/${existingPost.id}` : '/api/admin/blogs';
      const method = isEditing ? 'PUT' : 'POST';

      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        console.error('Blog save failed', response.status, result);
        throw new Error(result.error || 'Failed to save post');
      }

      toast({
        title: "Success",
        description: isEditing ? "Post updated successfully" : "Post created successfully",
      });

      router.push('/admin/blogs');
    } catch (error) {
      console.error('Failed to save blog post:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to save post",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => router.push('/admin/blogs')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div>
              <h1 className="text-2xl font-bold">
                {isEditing ? 'Edit Post' : 'Create New Post'}
              </h1>
              <p className="text-muted-foreground">
                {isEditing ? 'Update your blog post' : 'Write and publish a new blog post'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" type="button" onClick={() => setIsPreviewOpen(true)}>
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button 
              onClick={form.handleSubmit(onSubmit)}
              disabled={isSaving}
              className="gap-2"
            >
              <Save className="h-4 w-4" />
              {isSaving ? 'Saving...' : 'Save'}
            </Button>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Basic Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      Basic Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter post title..."
                              {...field}
                              onChange={(e) => handleTitleChange(e.target.value)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="slug"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Slug</FormLabel>
                          <FormControl>
                            <div className="flex items-center gap-2">
                              <LinkIcon className="h-4 w-4 text-muted-foreground" />
                              <Input placeholder="post-slug" {...field} />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="excerpt"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Excerpt</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Brief description of your post..."
                              rows={3}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>

                {/* Content */}
                <Card>
                  <CardHeader>
                    <CardTitle>Content</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <FormField
                      control={form.control}
                      name="content"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <RichTextEditor value={field.value} onChange={field.onChange} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>

                {/* SEO */}
                <Card>
                  <CardHeader>
                    <CardTitle>SEO Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="meta_title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Meta Title</FormLabel>
                          <FormControl>
                            <Input placeholder="SEO optimized title..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="meta_description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Meta Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="SEO meta description..."
                              rows={3}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Publishing */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="h-5 w-5" />
                      Publishing
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Status</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="draft">Draft</SelectItem>
                              <SelectItem value="published">Published</SelectItem>
                              <SelectItem value="archived">Archived</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="is_featured"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
                          <div className="space-y-0.5">
                            <FormLabel>Featured Post</FormLabel>
                            <div className="text-sm text-muted-foreground">
                              Show this post in featured section
                            </div>
                          </div>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="read_time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Read Time (minutes)</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              min="1"
                              {...field}
                              onChange={(e) => field.onChange(parseInt(e.target.value))}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>

                {/* Category & Author */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Folder className="h-5 w-5" />
                      Organization
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <FormField
                      control={form.control}
                      name="category_id"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {categories.map((category) => (
                                <SelectItem key={category.id} value={category.id}>
                                  {category.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-1">
                      <FormLabel className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Author
                      </FormLabel>
                      <Input value="Money Bharat Team" disabled readOnly />
                    </div>
                  </CardContent>
                </Card>

                {/* Featured Image */}
                <Card>
                  <CardHeader>
                    <CardTitle>Featured Image</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <FormField
                      control={form.control}
                      name="featured_image"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <ImageUpload
                              value={field.value}
                              onChange={field.onChange}
                              placeholder="Upload featured image or enter URL"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>

                {/* Tags */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Tag className="h-5 w-5" />
                      Tags
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <Input
                          placeholder="Add tag..."
                          value={tagInput}
                          onChange={(e) => setTagInput(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                        />
                        <Button type="button" variant="outline" onClick={addTag}>
                          Add
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {form.watch('tags').map((tag) => (
                          <Badge key={tag} variant="secondary" className="cursor-pointer" onClick={() => removeTag(tag)}>
                            {tag} ×
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </Form>
      </div>

      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              Preview: {previewValues.title || 'Untitled Post'}
            </DialogTitle>
            <DialogDescription>
              This preview uses your current form values. Save the post to persist it.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6">
            <div className="rounded-lg border p-4 text-sm text-muted-foreground space-y-1">
              <p><span className="font-medium text-foreground">Slug:</span> {previewValues.slug || 'auto-generated'}</p>
              <p><span className="font-medium text-foreground">Status:</span> {previewValues.status}</p>
              <p>
                <span className="font-medium text-foreground">Category:</span>{' '}
                {categories.find((category) => category.id === previewValues.category_id)?.name || 'Unassigned'}
              </p>
              <p><span className="font-medium text-foreground">Read time:</span> {previewValues.read_time || 0} min</p>
              <p><span className="font-medium text-foreground">Featured:</span> {previewValues.is_featured ? 'Yes' : 'No'}</p>
            </div>

            {previewValues.featured_image ? (
              <img
                src={previewValues.featured_image}
                alt="Featured"
                className="w-full rounded-xl border object-cover max-h-96"
              />
            ) : (
              <p className="text-sm text-muted-foreground italic">No featured image selected.</p>
            )}

            <div className="space-y-2">
              <h2 className="text-2xl font-bold">{previewValues.title || 'Untitled Post'}</h2>
              <p className="text-muted-foreground">{previewValues.excerpt || 'Add an excerpt to summarize the post.'}</p>
            </div>

            <div className="prose dark:prose-invert max-w-none whitespace-pre-line">
              {previewValues.content || 'Start writing your content to see it here.'}
            </div>

            {previewValues.tags?.length ? (
              <div className="flex flex-wrap gap-2">
                {previewValues.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    #{tag}
                  </Badge>
                ))}
              </div>
            ) : null}

            <div className="space-y-1 text-sm text-muted-foreground">
              <p><span className="font-medium text-foreground">Meta title:</span> {previewValues.meta_title || 'Not set'}</p>
              <p><span className="font-medium text-foreground">Meta description:</span> {previewValues.meta_description || 'Not set'}</p>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="secondary" onClick={() => setIsPreviewOpen(false)}>
              Close Preview
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BlogEditor;
