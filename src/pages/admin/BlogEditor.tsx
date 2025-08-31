
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useBlog } from '@/context/BlogContext';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { RichTextEditor } from '@/components/ui/rich-text-editor';
import AdminLayout from '@/layouts/AdminLayout';
import { ArrowLeft, Save, Eye, AlertCircle } from 'lucide-react';
import { supabaseBlogService, type SupabaseBlogAuthor } from '@/services/supabaseBlogService';
import { AddAuthorDialog } from '@/components/cms/AddAuthorDialog';

const BlogEditor = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { addPost, updatePost, getPostById, categories, authors, refreshPosts } = useBlog();
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [localAuthors, setLocalAuthors] = useState<SupabaseBlogAuthor[]>([]);

  // Form state
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [readTime, setReadTime] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [featuredImage, setFeaturedImage] = useState('');
  const [status, setStatus] = useState<'draft' | 'published'>('draft');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [focusKeywords, setFocusKeywords] = useState('');

  // Initialize local authors from context
  useEffect(() => {
    if (authors) {
      setLocalAuthors(authors);
    }
  }, [authors]);

  // Generate slug from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  // Auto-generate slug when title changes
  useEffect(() => {
    if (title && !id) {
      const newSlug = generateSlug(title);
      setSlug(newSlug);
    }
  }, [title, id]);

  // Auto-generate meta title when title changes
  useEffect(() => {
    if (title && !metaTitle) {
      setMetaTitle(title);
    }
  }, [title, metaTitle]);

  // Load existing post data
  useEffect(() => {
    const loadPost = async () => {
      if (id) {
        setIsLoading(true);
        try {
          const post = getPostById(id);
          if (post) {
            setEditingPost(post);
            setTitle(post.title);
            setSlug(post.slug);
            setExcerpt(post.excerpt || '');
            setContent(post.content || '');
            setCategoryId(post.category?.id || '');
            setAuthorId(post.author?.id || '');
            setPublishedDate(post.published_date || '');
            setReadTime(post.read_time || '');
            setIsFeatured(post.is_featured || false);
            setFeaturedImage(post.featured_image || '');
            setStatus(post.status as 'draft' | 'published' || 'draft');
            setMetaTitle(post.meta_title || post.title);
            setMetaDescription(post.meta_description || post.excerpt || '');
            setFocusKeywords(post.focus_keywords?.join(', ') || '');
          } else {
            toast.error('Post not found');
            navigate('/admin/blogs');
          }
        } catch (error) {
          console.error('Error loading post:', error);
          toast.error('Failed to load post');
        } finally {
          setIsLoading(false);
        }
      }
    };

    loadPost();
  }, [id, getPostById, navigate]);

  // Form validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!title.trim()) {
      newErrors.title = 'Title is required';
    }

    if (!slug.trim()) {
      newErrors.slug = 'Slug is required';
    }

    if (!excerpt.trim()) {
      newErrors.excerpt = 'Excerpt is required';
    }

    if (!content.trim()) {
      newErrors.content = 'Content is required';
    }

    if (!categoryId) {
      newErrors.categoryId = 'Category is required';
    }

    if (!authorId) {
      newErrors.authorId = 'Author is required';
    }

    if (status === 'published' && !publishedDate) {
      newErrors.publishedDate = 'Published date is required for published posts';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateSEOScore = () => {
    return supabaseBlogService.calculateSEOScore({
      title,
      meta_description: metaDescription,
      focus_keywords: focusKeywords.split(',').map(k => k.trim()).filter(k => k),
      content,
      featured_image: featuredImage,
      canonical_url: `https://moneybharat.co/blog/${slug}`,
    });
  };

  const handleAuthorCreated = async (newAuthorId: string) => {
    // Refresh authors list
    const updatedAuthors = await supabaseBlogService.getAllAuthors();
    setLocalAuthors(updatedAuthors);
    setAuthorId(newAuthorId);
    // Clear author error if it exists
    if (errors.authorId) {
      setErrors({ ...errors, authorId: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSaving(true);
    
    try {
      const postData = {
        title: title.trim(),
        slug: slug.trim(),
        excerpt: excerpt.trim(),
        content: content.trim(),
        category_id: categoryId,
        author_id: authorId,
        published_date: publishedDate || new Date().toISOString(),
        read_time: readTime.trim(),
        is_featured: isFeatured,
        featured_image: featuredImage.trim(),
        meta_title: metaTitle.trim() || title.trim(),
        meta_description: metaDescription.trim() || excerpt.trim(),
        status,
        focus_keywords: focusKeywords.split(',').map(k => k.trim()).filter(k => k),
        seo_score: calculateSEOScore(),
      };

      if (id && editingPost) {
        await updatePost(id, postData);
        toast.success('Post updated successfully!');
      } else {
        await addPost(postData);
        toast.success('Post created successfully!');
      }
      
      await refreshPosts();
      navigate('/admin/blogs');
    } catch (error) {
      console.error('Error saving post:', error);
      toast.error('Failed to save post');
    } finally {
      setIsSaving(false);
    }
  };

  const seoScore = calculateSEOScore();
  const getSEOScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="p-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading post...</p>
            </div>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="p-6 max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/admin/blogs')}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Posts
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {id ? 'Edit Blog Post' : 'Create New Blog Post'}
              </h1>
              <p className="text-gray-600 mt-1">
                {id ? 'Update your existing blog post' : 'Create a new blog post for your website'}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            {slug && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(`/blog/${slug}`, '_blank')}
                disabled={!slug}
              >
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </Button>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Enter post title"
                      className={errors.title ? 'border-red-300' : ''}
                    />
                    {errors.title && (
                      <p className="text-sm text-red-600 mt-1 flex items-center">
                        <AlertCircle className="mr-1 h-3 w-3" />
                        {errors.title}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="slug">URL Slug *</Label>
                    <Input
                      id="slug"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      placeholder="url-friendly-slug"
                      className={errors.slug ? 'border-red-300' : ''}
                    />
                    {errors.slug && (
                      <p className="text-sm text-red-600 mt-1 flex items-center">
                        <AlertCircle className="mr-1 h-3 w-3" />
                        {errors.slug}
                      </p>
                    )}
                    {slug && (
                      <p className="text-sm text-gray-500 mt-1">
                        URL: /blog/{slug}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="excerpt">Excerpt *</Label>
                    <Textarea
                      id="excerpt"
                      value={excerpt}
                      onChange={(e) => setExcerpt(e.target.value)}
                      placeholder="Brief description of the post"
                      rows={3}
                      className={errors.excerpt ? 'border-red-300' : ''}
                    />
                    {errors.excerpt && (
                      <p className="text-sm text-red-600 mt-1 flex items-center">
                        <AlertCircle className="mr-1 h-3 w-3" />
                        {errors.excerpt}
                      </p>
                    )}
                    <p className="text-sm text-gray-500 mt-1">
                      {excerpt.length}/160 characters (recommended for SEO)
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Content */}
              <Card>
                <CardHeader>
                  <CardTitle>Content *</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={errors.content ? 'border border-red-300 rounded-md' : ''}>
                    <RichTextEditor 
                      value={content} 
                      onChange={setContent}
                      placeholder="Write your blog post content here. Use the toolbar above for formatting options..."
                    />
                  </div>
                  {errors.content && (
                    <p className="text-sm text-red-600 mt-1 flex items-center">
                      <AlertCircle className="mr-1 h-3 w-3" />
                      {errors.content}
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* SEO Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    SEO Settings
                    <Badge className={getSEOScoreColor(seoScore)}>
                      SEO Score: {seoScore}/100
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="metaTitle">Meta Title</Label>
                    <Input
                      id="metaTitle"
                      value={metaTitle}
                      onChange={(e) => setMetaTitle(e.target.value)}
                      placeholder="SEO optimized title"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      {metaTitle.length}/60 characters (recommended)
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="metaDescription">Meta Description</Label>
                    <Textarea
                      id="metaDescription"
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                      placeholder="SEO optimized description"
                      rows={2}
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      {metaDescription.length}/160 characters (recommended)
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="focusKeywords">Focus Keywords</Label>
                    <Input
                      id="focusKeywords"
                      value={focusKeywords}
                      onChange={(e) => setFocusKeywords(e.target.value)}
                      placeholder="keyword1, keyword2, keyword3"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Comma-separated keywords for SEO optimization
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Publish Settings */}
              <Card>
                <CardHeader>
                  <CardTitle>Publish Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="status">Status</Label>
                    <Select value={status} onValueChange={(value: 'draft' | 'published') => setStatus(value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="publishedDate">Published Date {status === 'published' && '*'}</Label>
                    <Input
                      id="publishedDate"
                      type="datetime-local"
                      value={publishedDate}
                      onChange={(e) => setPublishedDate(e.target.value)}
                      className={errors.publishedDate ? 'border-red-300' : ''}
                    />
                    {errors.publishedDate && (
                      <p className="text-sm text-red-600 mt-1 flex items-center">
                        <AlertCircle className="mr-1 h-3 w-3" />
                        {errors.publishedDate}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="isFeatured"
                      checked={isFeatured}
                      onCheckedChange={setIsFeatured}
                    />
                    <Label htmlFor="isFeatured">Featured Post</Label>
                  </div>
                </CardContent>
              </Card>

              {/* Post Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Post Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="category">Category *</Label>
                    <Select value={categoryId} onValueChange={(value) => {
                      setCategoryId(value);
                      if (errors.categoryId) {
                        setErrors({ ...errors, categoryId: '' });
                      }
                    }}>
                      <SelectTrigger className={errors.categoryId ? 'border-red-300' : ''}>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories?.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.categoryId && (
                      <p className="text-sm text-red-600 mt-1 flex items-center">
                        <AlertCircle className="mr-1 h-3 w-3" />
                        {errors.categoryId}
                      </p>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Label htmlFor="author">Author *</Label>
                      <AddAuthorDialog onAuthorCreated={handleAuthorCreated} />
                    </div>
                    <Select value={authorId} onValueChange={(value) => {
                      setAuthorId(value);
                      if (errors.authorId) {
                        setErrors({ ...errors, authorId: '' });
                      }
                    }}>
                      <SelectTrigger className={errors.authorId ? 'border-red-300' : ''}>
                        <SelectValue placeholder={
                          localAuthors.length === 0 
                            ? "No authors available - create one first" 
                            : "Select an author"
                        } />
                      </SelectTrigger>
                      <SelectContent>
                        {localAuthors.length === 0 ? (
                          <div className="p-2 text-sm text-gray-500 text-center">
                            No authors found. Create one using the "Add Author" button above.
                          </div>
                        ) : (
                          localAuthors.map((author) => (
                            <SelectItem key={author.id} value={author.id}>
                              <div className="flex flex-col">
                                <span>{author.name}</span>
                                {author.role && (
                                  <span className="text-xs text-gray-500">{author.role}</span>
                                )}
                              </div>
                            </SelectItem>
                          ))
                        )}
                      </SelectContent>
                    </Select>
                    {errors.authorId && (
                      <p className="text-sm text-red-600 mt-1 flex items-center">
                        <AlertCircle className="mr-1 h-3 w-3" />
                        {errors.authorId}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="readTime">Read Time</Label>
                    <Input
                      id="readTime"
                      value={readTime}
                      onChange={(e) => setReadTime(e.target.value)}
                      placeholder="5 min read"
                    />
                  </div>

                  <div>
                    <Label htmlFor="featuredImage">Featured Image URL</Label>
                    <Input
                      id="featuredImage"
                      value={featuredImage}
                      onChange={(e) => setFeaturedImage(e.target.value)}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Save Actions */}
              <Card>
                <CardContent className="pt-6">
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSaving}
                  >
                    {isSaving ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        {id ? 'Update Post' : 'Create Post'}
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default BlogEditor;
