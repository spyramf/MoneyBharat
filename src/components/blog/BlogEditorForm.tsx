
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { format, parseISO } from 'date-fns';
import { supabaseBlogService, type SupabaseBlogPost, type SupabaseBlogCategory, type SupabaseBlogAuthor } from '@/services/supabaseBlogService';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { BasicInfoSection } from './sections/BasicInfoSection';
import { CategoryAuthorSection } from './sections/CategoryAuthorSection';
import { PublishingSection } from './sections/PublishingSection';
import { SEOSection } from './sections/SEOSection';

// Helper function to generate URL-friendly slugs
const generateSlug = (title: string) => {
  return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
};

interface BlogEditorFormProps {
  postId?: string;
}

const BlogEditorForm: React.FC<BlogEditorFormProps> = ({ postId }) => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<SupabaseBlogCategory[]>([]);
  const [authors, setAuthors] = useState<SupabaseBlogAuthor[]>([]);
  const [loading, setLoading] = useState(true);
  const [dataError, setDataError] = useState<string | null>(null);
  const [editorContent, setEditorContent] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<any>({
    mode: 'onBlur',
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

  // Watch title changes to auto-generate slug
  const watchedTitle = watch('title');
  useEffect(() => {
    if (watchedTitle && !postId) {
      setValue('slug', generateSlug(watchedTitle));
    }
  }, [watchedTitle, setValue, postId]);

  const loadData = async () => {
    setLoading(true);
    setDataError(null);
    try {
      console.log('BlogEditorForm: Starting to load categories and authors...');
      
      const [categoriesData, authorsData] = await Promise.all([
        supabaseBlogService.getAllCategories(),
        supabaseBlogService.getAllAuthors(),
      ]);
      
      console.log('BlogEditorForm: Categories loaded:', categoriesData);
      console.log('BlogEditorForm: Authors loaded:', authorsData);
      
      setCategories(categoriesData || []);
      setAuthors(authorsData || []);

      if (postId) {
        const post = await supabaseBlogService.getPostById(postId);
        if (post) {
          // Populate form with existing post data
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
      console.error('BlogEditorForm: Error loading data:', error);
      setDataError('Failed to load categories and authors. Please try refreshing the page.');
      toast.error('Error loading data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [postId, setValue]);

  const onSubmit = async (formData: any) => {
    setHasUserInteracted(true);
    
    try {
      setLoading(true);

      const formattedDate = selectedDate ? format(selectedDate, 'yyyy-MM-dd') : null;

      const postData = {
        title: formData.title,
        slug: formData.slug || generateSlug(formData.title),
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
        await supabaseBlogService.updatePost(postId, postData);
        toast.success('Post updated successfully!');
      } else {
        await supabaseBlogService.createPost(postData);
        toast.success('Post created successfully!');
      }

      navigate('/admin/blog');
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
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Loading blog editor...</p>
        </div>
      </div>
    );
  }

  if (dataError) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{dataError}</p>
          <Button onClick={loadData} variant="outline">
            Try Again
          </Button>
        </div>
      </div>
    );
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
            <BasicInfoSection 
              control={control}
              errors={errors}
              hasUserInteracted={hasUserInteracted}
              setHasUserInteracted={setHasUserInteracted}
              editorContent={editorContent}
              onEditorChange={handleEditorChange}
            />

            <CategoryAuthorSection
              control={control}
              errors={errors}
              hasUserInteracted={hasUserInteracted}
              setHasUserInteracted={setHasUserInteracted}
              categories={categories}
              authors={authors}
            />

            <PublishingSection
              control={control}
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />

            <SEOSection control={control} />

            <CardFooter className="px-0">
              <div className="flex gap-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => navigate('/admin/blog')}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={loading}>
                  {loading ? 'Saving...' : postId ? 'Update Post' : 'Create Post'}
                </Button>
              </div>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogEditorForm;
