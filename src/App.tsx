
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
import { BlogProvider } from '@/context/BlogContext';

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
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />

                    {/* Admin Routes - Simplified for now */}
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
