import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabaseBlogService, type SupabaseBlogPost, type SupabaseBlogCategory, type SupabaseBlogAuthor } from '@/services/supabaseBlogService';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { ArrowLeft, Save, Eye, Globe } from 'lucide-react';

type BlogStatus = 'draft' | 'published' | 'archived';

interface BlogFormData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  meta_title: string;
  meta_description: string;
  focus_keywords: string[];
  canonical_url: string;
  robots_directive: string;
  og_title: string;
  og_description: string;
  og_image: string;
  twitter_title: string;
  twitter_description: string;
  twitter_image: string;
  featured_image: string;
  author_id: string;
  category_id: string;
  status: BlogStatus;
  is_featured: boolean;
  read_time: string;
  published_date: string;
}

const SupabaseBlogEditor = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
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
    featured_image: '',
    author_id: '',
    category_id: '',
    status: 'draft',
    is_featured: false,
    read_time: '5 min read',
    published_date: new Date().toISOString().split('T')[0],
  });

  const [categories, setCategories] = useState<SupabaseBlogCategory[]>([]);
  const [authors, setAuthors] = useState<SupabaseBlogAuthor[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [keywordInput, setKeywordInput] = useState('');
  const [seoScore, setSeoScore] = useState(0);

  useEffect(() => {
    loadInitialData();
  }, [id]);

  const loadInitialData = async () => {
    setIsLoading(true);
    try {
      const [categoriesData, authorsData] = await Promise.all([
        supabaseBlogService.getAllCategories(),
        supabaseBlogService.getAllAuthors()
      ]);

      setCategories(categoriesData);
      setAuthors(authorsData);

      if (isEditing && id) {
        const post = await supabaseBlogService.getPostById(id);
        if (post) {
          setFormData({
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt || '',
            content: post.content || '',
            meta_title: post.meta_title || '',
            meta_description: post.meta_description || '',
            focus_keywords: post.focus_keywords || [],
            canonical_url: post.canonical_url || '',
            robots_directive: post.robots_directive || 'index, follow',
            og_title: post.og_title || '',
            og_description: post.og_description || '',
            og_image: post.og_image || '',
            twitter_title: post.twitter_title || '',
            twitter_description: post.twitter_description || '',
            twitter_image: post.twitter_image || '',
            featured_image: post.featured_image || '',
            author_id: post.author_id || '',
            category_id: post.category_id || '',
            status: post.status as BlogStatus,
            is_featured: post.is_featured || false,
            read_time: post.read_time || '5 min read',
            published_date: post.published_date ? new Date(post.published_date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
          });
        }
      }
    } catch (error) {
      toast.error('Failed to load data');
      console.error('Error loading initial data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Update SEO score when relevant fields change
  useEffect(() => {
    const score = supabaseBlogService.calculateSEOScore({
      title: formData.title,
      meta_description: formData.meta_description,
      focus_keywords: formData.focus_keywords,
      content: formData.content,
      featured_image: formData.featured_image,
      canonical_url: formData.canonical_url,
    });
    setSeoScore(score);
  }, [formData.title, formData.meta_description, formData.focus_keywords, formData.content, formData.featured_image, formData.canonical_url]);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleSave = async () => {
    if (!formData.title || !formData.content || !formData.author_id || !formData.category_id) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSaving(true);
    try {
      const postData = {
        ...formData,
        slug: formData.slug || generateSlug(formData.title),
        meta_title: formData.meta_title || formData.title,
        canonical_url: formData.canonical_url || `/blog/${formData.slug || generateSlug(formData.title)}`,
        og_title: formData.og_title || formData.title,
        og_description: formData.og_description || formData.meta_description || formData.excerpt,
        twitter_title: formData.twitter_title || formData.title,
        twitter_description: formData.twitter_description || formData.meta_description || formData.excerpt,
        seo_score: seoScore,
      };

      if (isEditing && id) {
        await supabaseBlogService.updatePost(id, postData);
        toast.success('Post updated successfully');
      } else {
        await supabaseBlogService.createPost(postData);
        toast.success('Post created successfully');
      }
      
      navigate('/admin/blogs/supabase');
    } catch (error) {
      toast.error('Failed to save post');
      console.error('Error saving post:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const addKeyword = () => {
    if (keywordInput.trim() && !formData.focus_keywords.includes(keywordInput.trim())) {
      setFormData({
        ...formData,
        focus_keywords: [...formData.focus_keywords, keywordInput.trim()]
      });
      setKeywordInput('');
    }
  };

  const removeKeyword = (keyword: string) => {
    setFormData({
      ...formData,
      focus_keywords: formData.focus_keywords.filter(k => k !== keyword)
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate('/admin/blogs/supabase')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Posts
          </Button>
          <h1 className="text-3xl font-bold">
            {isEditing ? 'Edit Post' : 'Create New Post'}
          </h1>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setFormData({...formData, status: 'draft'})}>
            Save Draft
          </Button>
          <Button onClick={handleSave} disabled={isSaving}>
            <Save className="h-4 w-4 mr-2" />
            {isSaving ? 'Saving...' : 'Save Post'}
          </Button>
        </div>
      </div>

      <Tabs defaultValue="content" className="space-y-6">
        <TabsList>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="seo">SEO & Meta</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="slug">Slug</Label>
                    <Input
                      id="slug"
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="excerpt">Excerpt</Label>
                    <Textarea
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      className="min-h-[300px]"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>SEO Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">{seoScore}%</div>
                    <div className="text-sm text-muted-foreground">
                      {seoScore >= 80 ? 'Excellent' : seoScore >= 60 ? 'Good' : seoScore >= 40 ? 'Fair' : 'Poor'}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="seo" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>SEO & Meta Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="meta_title">Meta Title</Label>
                <Input
                  id="meta_title"
                  value={formData.meta_title}
                  onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="meta_description">Meta Description</Label>
                <Textarea
                  id="meta_description"
                  value={formData.meta_description}
                  onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="focus_keywords">Focus Keywords</Label>
                <div className="flex items-center space-x-2">
                  <Input
                    type="text"
                    placeholder="Add keyword"
                    value={keywordInput}
                    onChange={(e) => setKeywordInput(e.target.value)}
                  />
                  <Button type="button" size="sm" onClick={addKeyword}>
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-1">
                  {formData.focus_keywords.map((keyword) => (
                    <Badge key={keyword} variant="secondary" className="gap-x-2">
                      {keyword}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeKeyword(keyword)}
                      >
                        <span className="sr-only">Remove</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                          <path d="M18 6 6 18" />
                          <path d="M6 6 18 18" />
                        </svg>
                      </Button>
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="canonical_url">Canonical URL</Label>
                <Input
                  id="canonical_url"
                  value={formData.canonical_url}
                  onChange={(e) => setFormData({ ...formData, canonical_url: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="robots_directive">Robots Directive</Label>
                <Input
                  id="robots_directive"
                  value={formData.robots_directive}
                  onChange={(e) => setFormData({ ...formData, robots_directive: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="og_title">OG Title</Label>
                <Input
                  id="og_title"
                  value={formData.og_title}
                  onChange={(e) => setFormData({ ...formData, og_title: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="og_description">OG Description</Label>
                <Textarea
                  id="og_description"
                  value={formData.og_description}
                  onChange={(e) => setFormData({ ...formData, og_description: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="og_image">OG Image URL</Label>
                <Input
                  id="og_image"
                  value={formData.og_image}
                  onChange={(e) => setFormData({ ...formData, og_image: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="twitter_title">Twitter Title</Label>
                <Input
                  id="twitter_title"
                  value={formData.twitter_title}
                  onChange={(e) => setFormData({ ...formData, twitter_title: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="twitter_description">Twitter Description</Label>
                <Textarea
                  id="twitter_description"
                  value={formData.twitter_description}
                  onChange={(e) => setFormData({ ...formData, twitter_description: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="twitter_image">Twitter Image URL</Label>
                <Input
                  id="twitter_image"
                  value={formData.twitter_image}
                  onChange={(e) => setFormData({ ...formData, twitter_image: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Post Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="featured_image">Featured Image URL</Label>
                <Input
                  id="featured_image"
                  value={formData.featured_image}
                  onChange={(e) => setFormData({ ...formData, featured_image: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="author_id">Author</Label>
                <Select value={formData.author_id} onValueChange={(value) => setFormData({ ...formData, author_id: value })}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select author" />
                  </SelectTrigger>
                  <SelectContent>
                    {authors.map((author) => (
                      <SelectItem key={author.id} value={author.id}>
                        {author.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="category_id">Category</Label>
                <Select value={formData.category_id} onValueChange={(value) => setFormData({ ...formData, category_id: value })}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="status">Status</Label>
                <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value as BlogStatus })}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Label htmlFor="is_featured">Featured</Label>
                <Input
                  type="checkbox"
                  id="is_featured"
                  checked={formData.is_featured}
                  onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="read_time">Read Time</Label>
                <Input
                  id="read_time"
                  value={formData.read_time}
                  onChange={(e) => setFormData({ ...formData, read_time: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="published_date">Published Date</Label>
                <Input
                  type="date"
                  id="published_date"
                  value={formData.published_date}
                  onChange={(e) => setFormData({ ...formData, published_date: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

      </Tabs>
    </div>
  );
};

export default SupabaseBlogEditor;
