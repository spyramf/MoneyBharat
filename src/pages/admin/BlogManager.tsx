
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useBlog } from '@/context/BlogContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Search, Edit, Trash2, Eye, Filter, X } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';
import AdminLayout from '@/layouts/AdminLayout';
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

const BlogManager = () => {
  const { blogPosts, deletePost, categories, isLoading, error } = useBlog();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);

  const filteredPosts = blogPosts?.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesStatus = statusFilter === 'all' || post.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || post.category?.id === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  }) || [];

  const handleDeleteClick = (id: string) => {
    setPostToDelete(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    if (postToDelete) {
      try {
        await deletePost(postToDelete);
        toast.success('Post deleted successfully');
      } catch (error) {
        console.error('Error deleting post:', error);
        toast.error('Error deleting post');
      } finally {
        setDeleteDialogOpen(false);
        setPostToDelete(null);
      }
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Published</Badge>;
      case 'draft':
        return <Badge variant="outline" className="text-yellow-600 border-yellow-300">Draft</Badge>;
      case 'archived':
        return <Badge variant="secondary" className="text-gray-600">Archived</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setStatusFilter('all');
    setCategoryFilter('all');
  };

  const hasActiveFilters = searchTerm || statusFilter !== 'all' || categoryFilter !== 'all';

  if (isLoading) {
    return (
      <AdminLayout>
        <div className="p-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading blog posts...</p>
            </div>
          </div>
        </div>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout>
        <div className="p-8">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="text-red-500 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-600 font-medium">Error loading blog posts</p>
              <p className="text-gray-500 text-sm mt-1">{error}</p>
            </div>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Blog Manager</h1>
            <p className="text-gray-600 mt-1">Manage your blog posts and content</p>
          </div>
          <Link to="/admin/blogs/new">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="mr-2 h-4 w-4" />
              New Post
            </Button>
          </Link>
        </div>

        {/* Filters Card */}
        <Card className="mb-6">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Filters</CardTitle>
              {hasActiveFilters && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={clearFilters}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="mr-1 h-4 w-4" />
                  Clear all
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search posts by title or content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>

              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories?.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Posts Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Posts ({filteredPosts.length})</span>
              {hasActiveFilters && (
                <Badge variant="outline" className="text-blue-600 border-blue-200">
                  <Filter className="mr-1 h-3 w-3" />
                  Filtered
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <FileText className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {hasActiveFilters ? 'No posts match your filters' : 'No posts found'}
                </h3>
                <p className="text-gray-500 mb-4">
                  {hasActiveFilters ? 'Try adjusting your search criteria' : 'Get started by creating your first blog post'}
                </p>
                {!hasActiveFilters ? (
                  <Link to="/admin/blogs/new">
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Create your first post
                    </Button>
                  </Link>
                ) : (
                  <Button variant="outline" onClick={clearFilters}>
                    Clear filters
                  </Button>
                )}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="font-semibold">Title</TableHead>
                      <TableHead className="font-semibold">Status</TableHead>
                      <TableHead className="font-semibold">Category</TableHead>
                      <TableHead className="font-semibold">Author</TableHead>
                      <TableHead className="font-semibold">Date</TableHead>
                      <TableHead className="font-semibold">Featured</TableHead>
                      <TableHead className="font-semibold text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPosts.map((post) => (
                      <TableRow key={post.id} className="hover:bg-gray-50">
                        <TableCell>
                          <div className="max-w-xs">
                            <p className="font-medium text-gray-900 truncate">{post.title}</p>
                            {post.excerpt && (
                              <p className="text-sm text-gray-500 truncate mt-1">{post.excerpt}</p>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>{getStatusBadge(post.status || 'draft')}</TableCell>
                        <TableCell>
                          {post.category?.name ? (
                            <Badge variant="outline" className="text-gray-600">
                              {post.category.name}
                            </Badge>
                          ) : (
                            <span className="text-gray-400 text-sm">No Category</span>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <p className="font-medium text-gray-900">{post.author?.name || 'Unknown'}</p>
                            {post.author?.role && (
                              <p className="text-gray-500">{post.author.role}</p>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          {post.published_date ? (
                            <div className="text-sm">
                              <p className="text-gray-900">{format(new Date(post.published_date), 'MMM dd, yyyy')}</p>
                              <p className="text-gray-500">{format(new Date(post.published_date), 'h:mm a')}</p>
                            </div>
                          ) : (
                            <span className="text-gray-400 text-sm">Not published</span>
                          )}
                        </TableCell>
                        <TableCell>
                          {post.is_featured && (
                            <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                              Featured
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center justify-end gap-1">
                            {post.slug && post.status === 'published' && (
                              <Button asChild variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Link to={`/blog/${post.slug}`} target="_blank">
                                  <Eye className="h-4 w-4" />
                                </Link>
                              </Button>
                            )}
                            <Button asChild variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Link to={`/admin/blogs/edit/${post.id}`}>
                                <Edit className="h-4 w-4" />
                              </Link>
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              className="h-8 w-8 p-0 text-red-600 hover:text-red-800 hover:bg-red-50"
                              onClick={() => handleDeleteClick(post.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Delete Confirmation Dialog */}
        <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Blog Post</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to delete this blog post? This action cannot be undone.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setDeleteDialogOpen(false)}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={confirmDelete}
                className="bg-red-600 hover:bg-red-700"
              >
                Delete Post
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </AdminLayout>
  );
};

export default BlogManager;
