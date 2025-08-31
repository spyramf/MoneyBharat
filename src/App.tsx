
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'sonner';
import { AuthProvider } from '@/context/AuthContext';
import { BookingProvider } from '@/context/BookingContext';
import { BlogProvider } from '@/context/BlogContext';
import ScrollToTop from '@/components/ScrollToTop';
import PerformanceMonitor from '@/components/PerformanceMonitor';
import MainLayout from '@/layouts/MainLayout';
import ProtectedAdminRoute from '@/components/ProtectedAdminRoute';

// Pages
import Index from '@/pages/Index';
import AboutUs from '@/pages/AboutUs';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import BlogPost from '@/pages/BlogPost';
import SupabaseBlog from '@/pages/SupabaseBlog';

// Admin Pages
import AdminLogin from '@/pages/admin/AdminLogin';
import Dashboard from '@/pages/admin/Dashboard';
import BlogManager from '@/pages/admin/BlogManager';
import BlogEditor from '@/pages/admin/BlogEditor';
import BookingManager from '@/pages/admin/BookingManager';

// Initialize QueryClient once at module scope (no React hook needed)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
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
                    {/* Public Routes */}
                    <Route path="/" element={
                      <MainLayout>
                        <Index />
                      </MainLayout>
                    } />
                    <Route path="/about" element={
                      <MainLayout>
                        <AboutUs />
                      </MainLayout>
                    } />
                    <Route path="/contact" element={
                      <MainLayout>
                        <Contact />
                      </MainLayout>
                    } />
                    <Route path="/blog" element={
                      <MainLayout>
                        <SupabaseBlog />
                      </MainLayout>
                    } />
                    <Route path="/blog/:slug" element={
                      <MainLayout>
                        <BlogPost />
                      </MainLayout>
                    } />

                    {/* Admin Login - Public */}
                    <Route path="/admin/login" element={<AdminLogin />} />

                    {/* Protected Admin Routes */}
                    <Route path="/admin" element={
                      <ProtectedAdminRoute>
                        <Dashboard />
                      </ProtectedAdminRoute>
                    } />
                    
                    <Route path="/admin/dashboard" element={
                      <ProtectedAdminRoute>
                        <Dashboard />
                      </ProtectedAdminRoute>
                    } />
                    
                    <Route path="/admin/blogs" element={
                      <ProtectedAdminRoute>
                        <BlogManager />
                      </ProtectedAdminRoute>
                    } />

                    <Route path="/admin/blogs/new" element={
                      <ProtectedAdminRoute>
                        <BlogEditor />
                      </ProtectedAdminRoute>
                    } />

                    <Route path="/admin/blog/new" element={
                      <ProtectedAdminRoute>
                        <BlogEditor />
                      </ProtectedAdminRoute>
                    } />

                    <Route path="/admin/blogs/edit/:id" element={
                      <ProtectedAdminRoute>
                        <BlogEditor />
                      </ProtectedAdminRoute>
                    } />

                    <Route path="/admin/blog/edit/:id" element={
                      <ProtectedAdminRoute>
                        <BlogEditor />
                      </ProtectedAdminRoute>
                    } />

                    <Route path="/admin/bookings" element={
                      <ProtectedAdminRoute>
                        <BookingManager />
                      </ProtectedAdminRoute>
                    } />

                    {/* Catch All Route */}
                    <Route path="*" element={
                      <MainLayout>
                        <NotFound />
                      </MainLayout>
                    } />
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
