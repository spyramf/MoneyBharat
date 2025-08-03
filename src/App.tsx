import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'sonner';
import { AuthProvider } from '@/context/AuthContext';
import { BookingProvider } from '@/context/BookingContext';
import ScrollToTop from '@/components/ScrollToTop';
import PerformanceMonitor from '@/components/PerformanceMonitor';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Dashboard from '@/pages/Dashboard';
import Bookings from '@/pages/Bookings';
import AdminDashboard from '@/pages/admin/AdminDashboard';
import AdminBookings from '@/pages/admin/AdminBookings';
import AdminUsers from '@/pages/admin/AdminUsers';
import NotFound from '@/pages/NotFound';
import Unauthorized from '@/pages/Unauthorized';
import RequireAuth from '@/components/RequireAuth';
import RequireAdmin from '@/components/RequireAdmin';
import SupabaseBlogManager from '@/components/cms/SupabaseBlogManager';
import SupabaseBlogEditor from '@/components/cms/SupabaseBlogEditor';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import { BlogProvider } from '@/context/BlogContext';

function App() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BlogProvider>
          <BookingProvider>
            <BrowserRouter>
              <ScrollToTop />
              <PerformanceMonitor />
              <div className="min-h-screen bg-white">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/unauthorized" element={<Unauthorized />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />

                  {/* Protected Routes */}
                  <Route element={<RequireAuth />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/bookings" element={<Bookings />} />
                  </Route>

                  {/* Admin Routes */}
                  <Route element={<RequireAdmin />}>
                    <Route path="/admin" element={<AdminDashboard />} />
                    <Route path="/admin/bookings" element={<AdminBookings />} />
                    <Route path="/admin/users" element={<AdminUsers />} />
                    <Route path="/admin/blogs/supabase" element={<SupabaseBlogManager />} />
                    <Route path="/admin/blogs/supabase/new" element={<SupabaseBlogEditor />} />
                    <Route path="/admin/blogs/supabase/edit/:id" element={<SupabaseBlogEditor />} />
                  </Route>

                  {/* Catch All Route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <Toaster />
            </BrowserRouter>
          </BookingProvider>
        </BlogProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
