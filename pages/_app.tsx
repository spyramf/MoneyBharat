import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import { BlogProvider } from '@/context/BlogContext';
import { BookingProvider } from '@/context/BookingContext';
import ScrollToTop from '@/components/ScrollToTop';
import PerformanceMonitor from '@/components/PerformanceMonitor';
import MainLayout from '@/layouts/MainLayout';
import '../styles/global.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const [supabaseClient] = React.useState(() => createPagesBrowserClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <QueryClientProvider client={queryClient}>
          <BlogProvider>
            <BookingProvider>
              <ScrollToTop />
              <PerformanceMonitor />
              <MainLayout>
                <Component {...pageProps} />
              </MainLayout>
              <Toaster 
                position="top-right"
                richColors
                closeButton
                duration={5000}
              />
            </BookingProvider>
          </BlogProvider>
      </QueryClientProvider>
    </SessionContextProvider>
  );
}

export default MyApp;
