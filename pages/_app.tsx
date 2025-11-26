import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster as SonnerToaster } from 'sonner';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import { BlogProvider } from '@/context/BlogContext';
import { BookingProvider } from '@/context/BookingContext';
import ScrollToTop from '@/components/ScrollToTop';
import PerformanceMonitor from '@/components/PerformanceMonitor';
import MainLayout from '@/layouts/MainLayout';
import { useRouter } from 'next/router';
import { Toaster as AppToaster } from '@/components/ui/toaster';
import '../styles/global.css';

const queryClient = new QueryClient();

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const [supabaseClient] = React.useState(() => createPagesBrowserClient());
  const router = useRouter();
  const isAdminRoute = router.pathname.startsWith('/admin');

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
              {isAdminRoute ? (
                <Component {...pageProps} />
              ) : (
                <MainLayout>
                  <Component {...pageProps} />
                </MainLayout>
              )}
              <AppToaster />
              <SonnerToaster 
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
