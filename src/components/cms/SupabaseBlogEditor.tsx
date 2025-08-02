
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabaseBlogService, type SupabaseBlogPost, type SupabaseBlogAuthor, type SupabaseBlogCategory, type SupabaseBlogTag } from '@/services/supabaseBlogService';
import AdminLayout from '@/components/AdminLayout';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LocalImageUpload } from '@/components/ui/local-image-upload';
import { RichTextEditor } from '@/components/ui/rich-text-editor';
import { Badge } from '@/components/ui/badge';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from "sonner";
import { Loader2, Save, Eye, ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  slug: z.string().min(3, "Slug must be at least 3 characters")
    .regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens"),
  excerpt: z.string().min(20, "Excerpt must be at least 20 characters"),
  content: z.string().min(50, "Content must be at least 50 characters"),
  meta_title: z.string().optional(),
  meta_description: z.string().max(160, "Meta description should not exceed 160 characters").optional(),
  focus_keywords: z.string().optional(),
  canonical_url: z.string().optional(),
  robots_directive: z.string().optional(),
  og_title: z.string().optional(),
  og_description: z.string().optional(),
  og_image: z.string().optional(),
  twitter_title: z.string().optional(),
  twitter_description: z.string().optional(),
  twitter_image: z.string().optional(),
  category_id: z.string().min(1, "Please select a category"),
  author_id: z.string().min(1, "Please select an author"),
  published_date: z.string().min(1, "Please provide a published date"),
  read_time: z.string().min(1, "Please provide a read time"),
  tags: z.string().optional(),
  is_featured: z.boolean().default(false),
  featured_image: z.string().min(1, "Please provide a featured image"),
  status: z.enum(['draft', 'published', 'archived']).default('draft'),
});

const SupabaseBlogEditor = () => {
  const { id } = useParams<{ id: string }>();
  const isEditing = id !== "new" && !!id;
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(isEditing);
  const [seoScore, setSeoScore] = useState(0);
  
  const [authors, setAuthors] = useState<SupabaseBlogAuthor[]>([]);
  const [categories, setCategories] = useState<SupabaseBlogCategory[]>([]);
  const [tags, setTags] = useState<SupabaseBlogTag[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      meta_title: "",
      meta_description: "",
      focus_keywords: "",
      canonical_url: "",
      robots_directive: "index,follow",
      og_title: "",
      og_description: "",
      og_image: "",
      twitter_title: "",
      twitter_description: "",
      twitter_image: "",
      category_id: "",
      author_id: "",
      published_date: new Date().toISOString().split('T')[0],
      read_time: "5 min read",
      tags: "",
      is_featured: false,
      featured_image: "",
      status: "draft",
    },
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [authorsData, categoriesData, tagsData] = await Promise.all([
        supabaseBlogService.getAllAuthors(),
        supabaseBlogService.getAllCategories(),
        supabaseBlogService.getAllTags()
      ]);

      setAuthors(authorsData);
      setCategories(categoriesData);
      setTags(tagsData);

      if (isEditing && id) {
        const post = await supabaseBlogService.getPostById(id);
        if (post) {
          form.reset({
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt || "",
            content: post.content || "",
            meta_title: post.meta_title || "",
            meta_description: post.meta_description || "",
            focus_keywords: post.focus_keywords?.join(", ") || "",
            canonical_url: post.canonical_url || "",
            robots_directive: post.robots_directive || "index,follow",
            og_title: post.og_title || "",
            og_description: post.og_description || "",
            og_image: post.og_image || "",
            twitter_title: post.twitter_title || "",
            twitter_description: post.twitter_description || "",
            twitter_image: post.twitter_image || "",
            category_id: post.category_id || "",
            author_id: post.author_id || "",
            published_date: post.published_date ? post.published_date.split('T')[0] : new Date().toISOString().split('T')[0],
            read_time: post.read_time || "5 min read",
            tags: post.tags?.map(t => t.name).join(", ") || "",
            is_featured: post.is_featured || false,
            featured_image: post.featured_image || "",
            status: post.status || "draft",
          });
          setSeoScore(post.seo_score || 0);
        } else {
          toast.error("Blog post not found");
          navigate("/admin/blogs/supabase");
        }
      }
    } catch (error) {
      console.error('Error loading data:', error);
      toast.error('Failed to load data');
    } finally {
      setIsLoading(false);
    }
  };

  // Auto-generate slug from title
  const watchTitle = form.watch('title');
  useEffect(() => {
    if (watchTitle && !isEditing) {
      const slug = watchTitle
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      form.setValue('slug', slug);
    }
  }, [watchTitle, isEditing, form]);

  // Calculate SEO score in real-time
  const watchFields = form.watch();
  useEffect(() => {
    const mockPost: SupabaseBlogPost = {
      id: '',
      title: watchFields.title,
      slug: watchFields.slug,
      excerpt: watchFields.excerpt,
      content: watchFields.content,
      meta_description: watchFields.meta_description,
      focus_keywords: watchFields.focus_keywords ? watchFields.focus_keywords.split(',').map(k => k.trim()) : [],
      featured_image: watchFields.featured_image,
      og_title: watchFields.og_title,
      og_description: watchFields.og_description,
      read_time: watchFields.read_time,
    };
    
    const score = supabaseBlogService.calculateSEOScore(mockPost);
    setSeoScore(score);
  }, [watchFields]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      const postData = {
        title: values.title,
        slug: values.slug,
        excerpt: values.excerpt,
        content: values.content,
        meta_title: values.meta_title || values.title,
        meta_description: values.meta_description || values.excerpt,
        focus_keywords: values.focus_keywords ? values.focus_keywords.split(',').map(k => k.trim()) : [],
        canonical_url: values.canonical_url || `https://moneybharat.co/blog/${values.slug}`,
        robots_directive: values.robots_directive || 'index,follow',
        og_title: values.og_title || values.title,
        og_description: values.og_description || values.excerpt,
        og_image: values.og_image || values.featured_image,
        twitter_title: values.twitter_title || values.title,
        twitter_description: values.twitter_description || values.excerpt,
        twitter_image: values.twitter_image || values.featured_image,
        category_id: values.category_id,
        author_id: values.author_id,
        featured_image: values.featured_image,
        published_date: values.status === 'published' ? new Date().toISOString() : values.published_date + 'T00:00:00Z',
        read_time: values.read_time,
        is_featured: values.is_featured,
        status: values.status,
        seo_score: seoScore,
      };
      
      if (isEditing && id) {
        await supabaseBlogService.updatePost(id, postData);
        toast.success('Blog post updated successfully!');
      } else {
        await supabaseBlogService.createPost(postData);
        toast.success('Blog post created successfully!');
      }
      
      navigate("/admin/blogs/supabase");
    } catch (error) {
      console.error("Error saving blog post:", error);
      toast.error("Failed to save blog post");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getSEOScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getSEOScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="h-4 w-4 text-green-500" />;
    if (score >= 60) return <AlertCircle className="h-4 w-4 text-yellow-500" />;
    return <AlertCircle className="h-4 w-4 text-red-500" />;
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center min-h-96">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-fintech-purple"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="mb-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => navigate('/admin/blogs/supabase')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Posts
            </Button>
            <div>
              <h1 className="text-3xl font-bold">
                {isEditing ? "Edit Blog Post" : "Create New Blog Post"}
              </h1>
              <p className="text-gray-500">
                {isEditing ? "Update the existing blog post." : "Create a new blog post with SEO optimization."}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {getSEOScoreIcon(seoScore)}
              <span className={`font-medium ${getSEOScoreColor(seoScore)}`}>
                SEO Score: {seoScore}/100
              </span>
            </div>
          </div>
        </div>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <Tabs defaultValue="content" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="content">Content</TabsTrigger>
                <TabsTrigger value="seo">SEO & Meta</TabsTrigger>
                <TabsTrigger value="social">Social Media</TabsTrigger>
              </TabsList>

              <TabsContent value="content" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Title *</FormLabel>
                            <FormControl>
                              <Input placeholder="Blog post title" {...field} />
                            </FormControl>
                            <FormDescription>
                              Keep it between 30-60 characters for optimal SEO
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="slug"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>URL Slug *</FormLabel>
                            <FormControl>
                              <Input placeholder="blog-post-slug" {...field} />
                            </FormControl>
                            <FormDescription>Used in the URL, e.g., /blog/blog-post-slug</FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="excerpt"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Excerpt *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Brief summary of the blog post" 
                              {...field}
                              className="resize-none"
                              rows={3}
                            />
                          </FormControl>
                          <FormDescription>A compelling summary that appears on the blog card</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="content"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Content *</FormLabel>
                          <FormControl>
                            <RichTextEditor
                              value={field.value}
                              onChange={field.onChange}
                              placeholder="Write your blog post content here..."
                            />
                          </FormControl>
                          <FormDescription>
                            Write comprehensive content (1500+ words recommended for better SEO)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Post Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="category_id"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category *</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a category" />
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
                      
                      <FormField
                        control={form.control}
                        name="author_id"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Author *</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select an author" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {authors.map((author) => (
                                  <SelectItem key={author.id} value={author.id}>
                                    {author.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="published_date"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Published Date</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="read_time"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Read Time</FormLabel>
                            <FormControl>
                              <Input placeholder="5 min read" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="tags"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tags</FormLabel>
                          <FormControl>
                            <Input placeholder="Investing, SIP, Mutual Funds" {...field} />
                          </FormControl>
                          <FormDescription>Separate tags by commas</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="featured_image"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Featured Image *</FormLabel>
                          <FormControl>
                            <LocalImageUpload
                              value={field.value}
                              onChange={field.onChange}
                              placeholder="Upload featured image for your blog post"
                            />
                          </FormControl>
                          <FormDescription>
                            Upload an image (recommended: 1200x600px) for the blog post thumbnail
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex items-center justify-between space-y-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
                        <FormField
                          control={form.control}
                          name="is_featured"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                              <div className="space-y-0.5">
                                <FormLabel className="text-base">Feature this post</FormLabel>
                                <FormDescription>
                                  Featured posts appear at the top of the blog page
                                </FormDescription>
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
                          name="status"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Status</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                                value={field.value}
                              >
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
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="seo" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>SEO Optimization</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <FormField
                      control={form.control}
                      name="meta_title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Meta Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Custom meta title for search engines" {...field} />
                          </FormControl>
                          <FormDescription>
                            Leave empty to use the post title. Optimal length: 50-60 characters
                          </FormDescription>
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
                              placeholder="Compelling description for search engine results" 
                              {...field}
                              className="resize-none"
                              rows={3}
                            />
                          </FormControl>
                          <FormDescription>
                            Leave empty to use excerpt. Optimal length: 120-160 characters
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="focus_keywords"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Focus Keywords</FormLabel>
                          <FormControl>
                            <Input placeholder="mutual funds, investment, SIP" {...field} />
                          </FormControl>
                          <FormDescription>
                            Main keywords you want to rank for (comma-separated)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="canonical_url"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Canonical URL</FormLabel>
                            <FormControl>
                              <Input placeholder="https://moneybharat.co/blog/post-slug" {...field} />
                            </FormControl>
                            <FormDescription>
                              Leave empty for auto-generation
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="robots_directive"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Robots Directive</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                              value={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select robots directive" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="index,follow">Index, Follow</SelectItem>
                                <SelectItem value="noindex,follow">No Index, Follow</SelectItem>
                                <SelectItem value="index,nofollow">Index, No Follow</SelectItem>
                                <SelectItem value="noindex,nofollow">No Index, No Follow</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="social" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Open Graph (Facebook, LinkedIn)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <FormField
                      control={form.control}
                      name="og_title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Open Graph Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Title for social media shares" {...field} />
                          </FormControl>
                          <FormDescription>
                            Leave empty to use the post title
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="og_description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Open Graph Description</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Description for social media shares" 
                              {...field}
                              className="resize-none"
                              rows={2}
                            />
                          </FormControl>
                          <FormDescription>
                            Leave empty to use the excerpt
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="og_image"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Open Graph Image</FormLabel>
                          <FormControl>
                            <LocalImageUpload
                              value={field.value}
                              onChange={field.onChange}
                              placeholder="Upload image for social media shares"
                            />
                          </FormControl>
                          <FormDescription>
                            Leave empty to use the featured image. Recommended: 1200x630px
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Twitter Card</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <FormField
                      control={form.control}
                      name="twitter_title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Twitter Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Title for Twitter shares" {...field} />
                          </FormControl>
                          <FormDescription>
                            Leave empty to use the post title
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="twitter_description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Twitter Description</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Description for Twitter shares" 
                              {...field}
                              className="resize-none"
                              rows={2}
                            />
                          </FormControl>
                          <FormDescription>
                            Leave empty to use the excerpt
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="twitter_image"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Twitter Image</FormLabel>
                          <FormControl>
                            <LocalImageUpload
                              value={field.value}
                              onChange={field.onChange}
                              placeholder="Upload image for Twitter shares"
                            />
                          </FormControl>
                          <FormDescription>
                            Leave empty to use the featured image. Recommended: 1200x600px
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            
            <div className="flex justify-end gap-4 pt-6 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/admin/blogs/supabase")}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {isEditing ? "Updating..." : "Creating..."}
                  </>
                ) : (
                  <>
                    <Save className="mr-2 h-4 w-4" />
                    {isEditing ? "Update Post" : "Create Post"}
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </AdminLayout>
  );
};

export default SupabaseBlogEditor;
