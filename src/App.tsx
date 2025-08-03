
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/context/AuthContext';
import { BlogProvider } from '@/context/BlogContext';
import ProtectedRoute from '@/components/ProtectedRoute';
import ProtectedAdminRoute from '@/components/ProtectedAdminRoute';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import ScrollToTop from '@/components/ScrollToTop';
import { Suspense, lazy } from 'react';

// Lazy load pages for better performance
const Index = lazy(() => import('@/pages/Index'));
const MutualFunds = lazy(() => import('@/pages/MutualFunds'));
const Insurance = lazy(() => import('@/pages/Insurance'));
const HealthInsurance = lazy(() => import('@/pages/HealthInsurance'));
const Loans = lazy(() => import('@/pages/Loans'));
const Blog = lazy(() => import('@/pages/Blog'));
const BlogPost = lazy(() => import('@/pages/BlogPost'));
const Contact = lazy(() => import('@/pages/Contact'));
const SupabaseBlog = lazy(() => import('@/pages/SupabaseBlog'));
const SupabaseBlogPost = lazy(() => import('@/pages/SupabaseBlogPost'));
const NotFound = lazy(() => import('@/pages/NotFound'));

// Admin Pages
const AdminDashboard = lazy(() => import('@/pages/admin/Dashboard'));
const CMSDashboard = lazy(() => import('@/components/cms/CMSDashboard'));
const SEOBlogManager = lazy(() => import('@/components/cms/SEOBlogManager'));
const SupabaseBlogEditor = lazy(() => import('@/components/cms/SupabaseBlogEditor'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <BlogProvider>
              <div className="min-h-screen bg-background">
                <ScrollToTop />
                <Suspense fallback={
                  <div className="flex items-center justify-center min-h-screen">
                    <LoadingSpinner />
                  </div>
                }>
                  <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<Index />} />
                    <Route path="/mutual-funds" element={<MutualFunds />} />
                    <Route path="/insurance" element={<Insurance />} />
                    <Route path="/health-insurance" element={<HealthInsurance />} />
                    <Route path="/loans" element={<Loans />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/contact" element={<Contact />} />
                    
                    {/* Admin Routes */}
                    <Route path="/admin" element={
                      <ProtectedAdminRoute>
                        <AdminDashboard />
                      </ProtectedAdminRoute>
                    } />
                    
                    <Route path="/admin/cms" element={
                      <ProtectedAdminRoute>
                        <CMSDashboard />
                      </ProtectedAdminRoute>
                    } />
                    
                    <Route path="/admin/blogs" element={
                      <ProtectedAdminRoute>
                        <SEOBlogManager />
                      </ProtectedAdminRoute>
                    } />
                    
                    <Route path="/admin/blogs/new" element={
                      <ProtectedAdminRoute>
                        <SupabaseBlogEditor />
                      </ProtectedAdminRoute>
                    } />
                    
                    <Route path="/admin/blogs/edit/:id" element={
                      <ProtectedAdminRoute>
                        <SupabaseBlogEditor />
                      </ProtectedAdminRoute>
                    } />
                    
                    {/* 404 Route */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
                <Toaster />
              </div>
            </BlogProvider>
          </AuthProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
