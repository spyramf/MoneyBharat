import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabaseBlogService, type SupabaseBlogPost, type SupabaseBlogCategory } from '@/services/supabaseBlogService';
import AdminLayout from '@/layouts/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Plus, Search, Edit, Trash2, Download, Upload, FileDown, Eye } from 'lucide-react';
import { toast } from 'sonner';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SupabaseBlogManager = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const [blogPosts, setBlogPosts] = useState<SupabaseBlogPost[]>([]);
  const [categories, setCategories] = useState<SupabaseBlogCategory[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setIsLoading(true);
      const [posts, cats] = await Promise.all([
        supabaseBlogService.getAllPosts(),
        supabaseBlogService.getAllCategories()
      ]);
      setBlogPosts(posts);
      setCategories(cats);
    } catch (error) {
      console.error('Error loading blog data:', error);
      toast.error('Failed to load blog data');
    } finally {
      setIsLoading(false);
    }
  };
  
  const filteredBlogs = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = categoryFilter === 'all' ? true : post.category?.slug === categoryFilter;
    
    const matchesStatus = statusFilter === 'all' ? true : post.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleDeleteClick = (id: string) => {
    setPostToDelete(id);
    setIsDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (postToDelete) {
      try {
        await supabaseBlogService.deletePost(postToDelete);
        toast.success('Blog post deleted successfully!');
        loadData();
        setIsDeleteDialogOpen(false);
        setPostToDelete(null);
      } catch (error) {
        console.error('Error deleting post:', error);
        toast.error('Failed to delete blog post');
      }
    }
  };

  const handleStatusChange = async (postId: string, newStatus: 'draft' | 'published' | 'archived') => {
    try {
      await supabaseBlogService.updatePost(postId, { status: newStatus });
      toast.success(`Post ${newStatus} successfully!`);
      loadData();
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update post status');
    }
  };

  const getStatusBadgeColor = (status?: string) => {
    switch (status) {
      case 'published': return 'bg-green-500';
      case 'draft': return 'bg-yellow-500';
      case 'archived': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getSEOScoreColor = (score?: number) => {
    if (!score) return 'text-gray-500';
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
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
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Supabase Blog Management</h1>
            <p className="text-gray-600 mt-1">Manage your blog content with advanced SEO features</p>
          </div>
          <div className="flex gap-2">
            <Button asChild>
              <Link to="/admin/blogs/supabase/new">
                <Plus className="mr-2 h-4 w-4" />
                Create New Post
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="relative flex-1 min-w-[300px]">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search blog posts..."
              className="pl-10"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filter by Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map(category => (
                <SelectItem key={category.id} value={category.slug}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Filter by Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>SEO Score</TableHead>
                <TableHead>Published Date</TableHead>
                <TableHead className="text-center">Featured</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBlogs.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-8">
                    <div className="text-gray-500">
                      {searchTerm || categoryFilter !== 'all' || statusFilter !== 'all' 
                        ? 'No blog posts match your filters' 
                        : 'No blog posts found. Create your first post to get started.'}
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                filteredBlogs.map(post => (
                  <TableRow key={post.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{post.title}</div>
                        <div className="text-sm text-gray-500 truncate max-w-xs">
                          {post.excerpt}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{post.category?.name || 'Uncategorized'}</Badge>
                    </TableCell>
                    <TableCell>{post.author?.name || 'Unknown'}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Badge 
                            className={`cursor-pointer ${getStatusBadgeColor(post.status)}`}
                          >
                            {post.status}
                          </Badge>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem onClick={() => handleStatusChange(post.id, 'draft')}>
                            Draft
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleStatusChange(post.id, 'published')}>
                            Published
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleStatusChange(post.id, 'archived')}>
                            Archived
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                    <TableCell>
                      <span className={`font-medium ${getSEOScoreColor(post.seo_score)}`}>
                        {post.seo_score || 0}/100
                      </span>
                    </TableCell>
                    <TableCell>
                      {post.published_date ? new Date(post.published_date).toLocaleDateString() : '-'}
                    </TableCell>
                    <TableCell className="text-center">
                      {post.is_featured ? (
                        <Badge variant="secondary">Featured</Badge>
                      ) : (
                        '-'
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        {post.slug && (
                          <Button variant="ghost" size="sm" asChild>
                            <Link to={`/blog/${post.slug}`} target="_blank">
                              <Eye className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/admin/blogs/supabase/edit/${post.id}`}>
                            <Edit className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-red-500 hover:text-red-700"
                          onClick={() => handleDeleteClick(post.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        <div className="mt-6 text-sm text-gray-500 text-center">
          Total: {filteredBlogs.length} posts
          {searchTerm && ` matching "${searchTerm}"`}
          {categoryFilter !== 'all' && ` in ${categories.find(c => c.slug === categoryFilter)?.name}`}
          {statusFilter !== 'all' && ` with status "${statusFilter}"`}
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Blog Post</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this blog post? This action cannot be undone and will permanently remove the post from your database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleDeleteConfirm} 
              className="bg-red-500 hover:bg-red-600"
            >
              Delete Post
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </AdminLayout>
  );
};

export default SupabaseBlogManager;
