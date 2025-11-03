
import React from 'react';
import AdminLayout from '@/layouts/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useBlog } from '@/context/BlogContext';
import { useBooking } from '@/context/BookingContext';
import { 
  FileText, 
  Calendar, 
  Eye,
  Users,
  TrendingUp,
  Plus,
  Edit,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

const Dashboard = () => {
  const { blogPosts, isLoading: blogLoading } = useBlog();
  const { bookings } = useBooking();

  // Calculate stats
  const publishedPosts = blogPosts?.filter(post => post.status === 'published').length || 0;
  const draftPosts = blogPosts?.filter(post => post.status === 'draft').length || 0;
  const featuredPosts = blogPosts?.filter(post => post.is_featured).length || 0;
  
  const pendingBookings = bookings?.filter(booking => booking.status === 'pending').length || 0;
  const confirmedBookings = bookings?.filter(booking => booking.status === 'confirmed').length || 0;
  const totalBookings = bookings?.length || 0;

  // Recent posts (last 5)
  const recentPosts = blogPosts?.slice(0, 5) || [];
  
  // Recent bookings (last 5)
  const recentBookings = bookings?.slice(0, 5) || [];

  const stats = [
    {
      title: 'Total Posts',
      value: blogPosts?.length || 0,
      icon: FileText,
      color: 'bg-blue-500',
      change: '+2 this week'
    },
    {
      title: 'Published Posts', 
      value: publishedPosts,
      icon: Eye,
      color: 'bg-green-500',
      change: `${draftPosts} drafts`
    },
    {
      title: 'Total Bookings',
      value: totalBookings,
      icon: Calendar,
      color: 'bg-purple-500',
      change: `${pendingBookings} pending`
    },
    {
      title: 'Featured Posts',
      value: featuredPosts,
      icon: TrendingUp,
      color: 'bg-yellow-500',
      change: 'Featured content'
    }
  ];

  return (
    <AdminLayout>
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your content.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                      <p className="text-sm text-gray-500 mt-1">{stat.change}</p>
                    </div>
                    <div className={`p-3 rounded-lg ${stat.color}`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Blog Posts */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-semibold">Recent Blog Posts</CardTitle>
              <Link to="/admin/blog/new">
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  New Post
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              {blogLoading ? (
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="animate-pulse">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  ))}
                </div>
              ) : recentPosts.length > 0 ? (
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <div key={post.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 truncate">{post.title}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge 
                            variant={post.status === 'published' ? 'default' : 'outline'}
                            className={post.status === 'published' ? 'bg-green-100 text-green-800' : ''}
                          >
                            {post.status}
                          </Badge>
                          {post.is_featured && (
                            <Badge className="bg-yellow-100 text-yellow-800">Featured</Badge>
                          )}
                          <span className="text-sm text-gray-500">
                            {post.published_at ? format(new Date(post.published_at), 'MMM dd') : 'Not published'}
                          </span>
                        </div>
                      </div>
                      <Link to={`/admin/blogs/edit/${post.id}`}>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No blog posts yet</h3>
                  <p className="text-gray-500 mb-4">Get started by creating your first blog post.</p>
                  <Link to="/admin/blog/new">
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Create First Post
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Bookings */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg font-semibold">Recent Bookings</CardTitle>
              <Link to="/admin/bookings">
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              {recentBookings.length > 0 ? (
                <div className="space-y-4">
                  {recentBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900">{booking.name}</h4>
                        <p className="text-sm text-gray-600 truncate">{booking.service}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge 
                            variant={
                              booking.status === 'confirmed' ? 'default' : 
                              booking.status === 'pending' ? 'outline' : 'destructive'
                            }
                          >
                            {booking.status}
                          </Badge>
                          <span className="text-sm text-gray-500 flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {booking.date} at {booking.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings yet</h3>
                  <p className="text-gray-500">Bookings will appear here when customers schedule appointments.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/admin/blog/new">
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="mr-2 h-4 w-4" />
                  Create New Post
                </Button>
              </Link>
              <Link to="/admin/blogs">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Manage Posts
                </Button>
              </Link>
              <Link to="/admin/bookings">
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Bookings
                </Button>
              </Link>
              <Button variant="outline" className="w-full justify-start" disabled>
                <Users className="mr-2 h-4 w-4" />
                Analytics (Coming Soon)
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
