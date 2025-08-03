
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/components/auth/AuthProvider';
import { BlogProvider } from '@/context/BlogContext';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { ProtectedAdminRoute } from '@/components/ProtectedAdminRoute';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { Suspense, lazy } from 'react';

// Lazy load pages for better performance
const HomePage = lazy(() => import('@/pages/HomePage'));
const MutualFundsPage = lazy(() => import('@/pages/MutualFundsPage'));
const InsurancePage = lazy(() => import('@/pages/InsurancePage'));
const HealthInsurancePage = lazy(() => import('@/pages/HealthInsurancePage'));
const LoansPage = lazy(() => import('@/pages/LoansPage'));
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const BlogPostPage = lazy(() => import('@/pages/BlogPostPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const RegisterPage = lazy(() => import('@/pages/RegisterPage'));
const DashboardPage = lazy(() => import('@/pages/DashboardPage'));
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
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BlogProvider>
            <div className="min-h-screen bg-background">
              <Suspense fallback={
                <div className="flex items-center justify-center min-h-screen">
                  <LoadingSpinner />
                </div>
              }>
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/mutual-funds" element={<MutualFundsPage />} />
                  <Route path="/insurance" element={<InsurancePage />} />
                  <Route path="/health-insurance" element={<HealthInsurancePage />} />
                  <Route path="/loans" element={<LoansPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/:slug" element={<BlogPostPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  
                  {/* Protected User Routes */}
                  <Route path="/dashboard" element={
                    <ProtectedRoute>
                      <DashboardPage />
                    </ProtectedRoute>
                  } />
                  
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
  );
}

export default App;
