import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useBlog } from '@/context/BlogContext';
import { blogAuthors } from '@/data/blogData';
import AdminLayout from '@/components/AdminLayout';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent } from '@/components/ui/card';
import { ImageUpload } from '@/components/ui/image-upload';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from "sonner";
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters"),
  slug: z.string().min(3, "Slug must be at least 3 characters")
    .regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens"),
  excerpt: z.string().min(20, "Excerpt must be at least 20 characters"),
  content: z.string().min(50, "Content must be at least 50 characters"),
  category: z.string().min(1, "Please select a category"),
  author: z.string().min(1, "Please select an author"),
  publishedDate: z.string().min(1, "Please provide a published date"),
  readTime: z.string().min(1, "Please provide a read time"),
  tags: z.string().min(1, "Please provide at least one tag"),
  isFeatured: z.boolean().default(false),
  featuredImage: z.string().min(1, "Please provide a featured image"),
});

const BlogEditor = () => {
  const { id } = useParams<{ id: string }>();
  const isEditing = id !== "new" && !!id;
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { blogPosts, addPost, updatePost, getPostById, categories } = useBlog();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      category: "",
      author: "",
      publishedDate: "",
      readTime: "",
      tags: "",
      isFeatured: false,
      featuredImage: "/placeholder.svg",
    },
  });

  useEffect(() => {
    if (isEditing) {
      const post = getPostById(Number(id));
      if (post) {
        form.reset({
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          content: post.content,
          category: post.category,
          author: post.author.name,
          publishedDate: post.publishedDate,
          readTime: post.readTime,
          tags: post.tags.join(", "),
          isFeatured: post.isFeatured,
          featuredImage: post.featuredImage,
        });
      } else {
        toast.error("Blog post not found");
        navigate("/admin/blogs");
      }
    }
  }, [isEditing, id, form, getPostById, navigate]);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      const tags = values.tags.split(",").map(tag => tag.trim());
      const authorObject = Object.values(blogAuthors).find(
        author => author.name === values.author
      ) || blogAuthors.admin;
      
      if (isEditing && id) {
        const updatedPost = {
          id: Number(id),
          title: values.title,
          slug: values.slug,
          excerpt: values.excerpt,
          content: values.content,
          category: values.category,
          author: authorObject,
          publishedDate: values.publishedDate,
          readTime: values.readTime,
          tags: tags,
          isFeatured: values.isFeatured,
          featuredImage: values.featuredImage,
        };
        
        updatePost(updatedPost);
        toast.success("Blog post updated successfully!");
      } else {
        const newPost = {
          title: values.title,
          slug: values.slug,
          excerpt: values.excerpt,
          content: values.content,
          category: values.category,
          author: authorObject,
          publishedDate: values.publishedDate,
          readTime: values.readTime,
          tags: tags,
          isFeatured: values.isFeatured,
          featuredImage: values.featuredImage,
        };
        
        addPost(newPost);
        toast.success("Blog post created successfully!");
      }
      
      navigate("/admin/blogs");
    } catch (error) {
      console.error("Error saving blog post:", error);
      toast.error("Failed to save blog post");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AdminLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{isEditing ? "Edit Blog Post" : "Create New Blog Post"}</h1>
          <p className="text-gray-500">
            {isEditing ? "Update the existing blog post details below." : "Fill out the form below to create a new blog post."}
          </p>
        </div>
        
        <Card>
          <CardContent className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Blog post title" {...field} />
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
                      <FormLabel>Excerpt</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Brief summary of the blog post" 
                          {...field}
                          className="resize-none"
                          rows={2}
                        />
                      </FormControl>
                      <FormDescription>A short description that appears on the blog card</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Content</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Write your blog post content here..." 
                          {...field}
                          className="min-h-[300px]"
                          rows={12}
                        />
                      </FormControl>
                      <FormDescription>
                        Supports HTML formatting for rich text editing
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
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
                            {categories.filter(cat => cat.slug !== 'all').map((category) => (
                              <SelectItem key={category.slug} value={category.name}>
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
                    name="author"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Author</FormLabel>
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
                            {Object.values(blogAuthors).map((author) => (
                              <SelectItem key={author.name} value={author.name}>
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
                    name="publishedDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Published Date</FormLabel>
                        <FormControl>
                          <Input placeholder="May 10, 2025" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="readTime"
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
                  name="featuredImage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Featured Image</FormLabel>
                      <FormControl>
                        <ImageUpload
                          value={field.value}
                          onChange={field.onChange}
                          placeholder="Upload featured image for your blog post"
                        />
                      </FormControl>
                      <FormDescription>
                        Upload an image or provide a URL. This image will be displayed as the blog post thumbnail.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="isFeatured"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Feature this post</FormLabel>
                        <FormDescription>
                          Featured posts will appear at the top of the blog page
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
                
                <div className="flex justify-end gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate("/admin/blogs")}
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
                      isEditing ? "Update Post" : "Create Post"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default BlogEditor;
