
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sonner';
import { AuthProvider } from '@/context/AuthContext';
import { BookingProvider } from '@/context/BookingContext';
import ScrollToTop from '@/components/ScrollToTop';
import PerformanceMonitor from '@/components/PerformanceMonitor';
import Index from '@/pages/Index';
import AboutUs from '@/pages/AboutUs';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import SupabaseBlogManager from '@/components/cms/SupabaseBlogManager';
import SupabaseBlogEditor from '@/components/cms/SupabaseBlogEditor';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import SupabaseBlog from '@/pages/SupabaseBlog';
import { BlogProvider } from '@/context/BlogContext';
import AdminLayout from '@/layouts/AdminLayout';
import ProtectedAdminRoute from '@/components/ProtectedAdminRoute';
import AdminLogin from '@/pages/admin/AdminLogin';
import Dashboard from '@/pages/admin/Dashboard';
import BlogManager from '@/pages/admin/BlogManager';
import BlogEditor from '@/pages/admin/BlogEditor';
import BookingManager from '@/pages/admin/BookingManager';

function App() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <BrowserRouter>
          <AuthProvider>
            <BlogProvider>
              <BookingProvider>
                <ScrollToTop />
                <PerformanceMonitor />
                <div className="min-h-screen bg-white">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<SupabaseBlog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />

                    {/* Admin Login */}
                    <Route path="/admin/login" element={<AdminLogin />} />

                    {/* Protected Admin Routes */}
                    <Route path="/admin" element={
                      <ProtectedAdminRoute>
                        <AdminLayout>
                          <Dashboard />
                        </AdminLayout>
                      </ProtectedAdminRoute>
                    } />
                    
                    <Route path="/admin/blogs" element={
                      <ProtectedAdminRoute>
                        <AdminLayout>
                          <BlogManager />
                        </AdminLayout>
                      </ProtectedAdminRoute>
                    } />

                    <Route path="/admin/blogs/new" element={
                      <ProtectedAdminRoute>
                        <AdminLayout>
                          <BlogEditor />
                        </AdminLayout>
                      </ProtectedAdminRoute>
                    } />

                    <Route path="/admin/blogs/edit/:id" element={
                      <ProtectedAdminRoute>
                        <AdminLayout>
                          <BlogEditor />
                        </AdminLayout>
                      </ProtectedAdminRoute>
                    } />

                    <Route path="/admin/bookings" element={
                      <ProtectedAdminRoute>
                        <AdminLayout>
                          <BookingManager />
                        </AdminLayout>
                      </ProtectedAdminRoute>
                    } />

                    {/* Legacy Supabase Blog Routes */}
                    <Route path="/admin/blogs/supabase" element={<SupabaseBlogManager />} />
                    <Route path="/admin/blogs/supabase/new" element={<SupabaseBlogEditor />} />
                    <Route path="/admin/blogs/supabase/edit/:id" element={<SupabaseBlogEditor />} />

                    {/* Catch All Route */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
                <Toaster />
              </BookingProvider>
            </BlogProvider>
          </AuthProvider>
        </BrowserRouter>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
