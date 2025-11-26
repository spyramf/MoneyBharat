import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { 
  Plus, 
  BarChart3, 
  Users, 
  FileText, 
  Settings, 
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  TrendingUp,
  Calendar,
  Star
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { toast } from 'sonner';
import AdminLayout from '@/layouts/AdminLayout';
import { supabaseBlogService, SupabaseBlogAuthor, SupabaseBlogCategory, SupabaseBlogPost } from '@/services/supabaseBlogService';

interface BlogDashboardProps {
  blogPosts: SupabaseBlogPost[];
  categories: SupabaseBlogCategory[];
  authors: SupabaseBlogAuthor[];
}

const normalizeStatus = (status?: string | null) => (status ?? '').trim().toLowerCase();

const BlogDashboard = ({ blogPosts, categories, authors }: BlogDashboardProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [postToDelete, setPostToDelete] = useState<string | null>(null);

  const stats = {
    totalPosts: blogPosts.length,
    publishedPosts: blogPosts.filter(post => normalizeStatus(post.status) === 'published').length,
    draftPosts: blogPosts.filter(post => normalizeStatus(post.status) === 'draft').length,
    featuredPosts: blogPosts.filter(post => post.is_featured).length,
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    const postStatus = normalizeStatus(post.status);
    const matchesTab = activeTab === 'all' || postStatus === activeTab;
    return matchesSearch && matchesTab;
  });

  const handleDeletePost = async () => {
    if (!postToDelete) return;
    
    // TODO: Create an API route to handle post deletion
    console.log("Deleting post with ID:", postToDelete);
    setPostToDelete(null);
    toast.success("Success", {
      description: "Post deleted successfully (placeholder)",
    });
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusBadge = (status: string) => {
    const normalizedStatus = normalizeStatus(status);
    const variants = {
      published: "default",
      draft: "secondary",
      archived: "outline"
    } as const;
    
    return (
      <Badge variant={variants[normalizedStatus as keyof typeof variants] || "secondary"}>
        {normalizedStatus.charAt(0).toUpperCase() + normalizedStatus.slice(1)}
      </Badge>
    );
  };

  return (
    <AdminLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Blog Dashboard</h1>
            <p className="text-muted-foreground">Manage your blog content and track performance</p>
          </div>
          <Link href="/admin/blog/new">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              New Post
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Total Posts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalPosts}</div>
              <p className="text-xs text-muted-foreground">All time posts</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Published
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.publishedPosts}</div>
              <p className="text-xs text-muted-foreground">Live on website</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Edit className="h-4 w-4" />
                Drafts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{stats.draftPosts}</div>
              <p className="text-xs text-muted-foreground">In progress</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Star className="h-4 w-4" />
                Featured
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{stats.featuredPosts}</div>
              <p className="text-xs text-muted-foreground">Highlighted posts</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Filter by status</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Posts Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Blog Posts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All ({stats.totalPosts})</TabsTrigger>
                <TabsTrigger value="published">Published ({stats.publishedPosts})</TabsTrigger>
                <TabsTrigger value="draft">Drafts ({stats.draftPosts})</TabsTrigger>
                <TabsTrigger value="archived">Archived</TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab} className="mt-6">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredPosts.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-8">
                            <div className="flex flex-col items-center gap-2">
                              <FileText className="h-8 w-8 text-muted-foreground" />
                              <p className="text-muted-foreground">No posts found</p>
                            </div>
                          </TableCell>
                        </TableRow>
                      ) : (
                        filteredPosts.map((post) => (
                          <TableRow key={post.id}>
                            <TableCell>
                              <div className="flex items-center gap-2">
                                {post.is_featured && (
                                  <Star className="h-4 w-4 text-accent fill-current" />
                                )}
                                <div>
                                  <div className="font-medium">{post.title}</div>
                                  <div className="text-sm text-muted-foreground line-clamp-1">
                                    {post.excerpt}
                                  </div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>
                              {getStatusBadge(post.status)}
                            </TableCell>
                            <TableCell>
                              <Badge variant="outline">{post.category?.name || 'Uncategorized'}</Badge>
                            </TableCell>
                            <TableCell>{post.author?.name || 'Unknown'}</TableCell>
                            <TableCell>
                              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Calendar className="h-3 w-3" />
                                {formatDate(post.published_at || post.created_at)}
                              </div>
                            </TableCell>
                            <TableCell className="text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="sm">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem asChild>
                                    <Link href={`/blog/${post.slug}`} className="flex items-center gap-2">
                                      <Eye className="h-4 w-4" />
                                      View
                                    </Link>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem asChild>
                                    <Link href={`/admin/blog/edit/${post.id}`} className="flex items-center gap-2">
                                      <Edit className="h-4 w-4" />
                                      Edit
                                    </Link>
                                  </DropdownMenuItem>
                                  <DropdownMenuItem 
                                    onClick={() => setPostToDelete(post.id)}
                                    className="text-destructive flex items-center gap-2"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                    Delete
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Delete Confirmation Dialog */}
        <AlertDialog open={!!postToDelete} onOpenChange={() => setPostToDelete(null)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the blog post.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeletePost} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </AdminLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createPagesServerClient(ctx);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false,
      },
    };
  }

  const { data: userRole } = await supabase
    .from('user_roles')
    .select('role')
    .eq('user_id', session.user.id)
    .single();

  if (userRole?.role !== 'admin') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  
  const [blogPosts, categories, authors] = await Promise.all([
    supabaseBlogService.getAllPosts(true),
    supabaseBlogService.getAllCategories(),
    supabaseBlogService.getAllAuthors(),
  ]);

  return {
    props: {
      initialSession: session,
      user: session.user,
      blogPosts: blogPosts || [],
      categories: categories || [],
      authors: authors || [],
    },
  };
};

export default BlogDashboard;
