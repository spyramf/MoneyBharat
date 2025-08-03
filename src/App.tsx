import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import { AuthProvider } from '@/context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from '@/components/common/LoadingSpinner';
import { BlogProvider } from '@/context/BlogContext';
import { BookingProvider } from '@/context/BookingContext';
import ProtectedAdminRoute from '@/components/ProtectedAdminRoute';

// Lazy load components
const Index = React.lazy(() => import('./pages/Index'));
const MutualFunds = React.lazy(() => import('./pages/MutualFunds'));
const Loans = React.lazy(() => import('./pages/Loans'));
const Insurance = React.lazy(() => import('./pages/Insurance'));
const SupabaseBlog = React.lazy(() => import('./pages/SupabaseBlog'));
const SupabaseBlogPost = React.lazy(() => import('./pages/SupabaseBlogPost'));
const Contact = React.lazy(() => import('./pages/Contact'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const Booking = React.lazy(() => import('./pages/Booking'));
const SipCalculator = React.lazy(() => import('./pages/SipCalculator'));
const EmiCalculator = React.lazy(() => import('./pages/EmiCalculator'));
const TaxSaving = React.lazy(() => import('./pages/TaxSaving'));
const HomeLoan = React.lazy(() => import('./pages/HomeLoan'));
const PersonalLoan = React.lazy(() => import('./pages/PersonalLoan'));
const CarLoan = React.lazy(() => import('./pages/CarLoan'));
const EducationLoan = React.lazy(() => import('./pages/EducationLoan'));
const BusinessLoan = React.lazy(() => import('./pages/BusinessLoan'));
const LoanAgainstMutualFunds = React.lazy(() => import('./pages/LoanAgainstMutualFunds'));
const HealthInsurance = React.lazy(() => import('./pages/HealthInsurance'));
const TermInsurance = React.lazy(() => import('./pages/TermInsurance'));
const VehicleInsurance = React.lazy(() => import('./pages/VehicleInsurance'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Admin components
const AdminLogin = React.lazy(() => import('./pages/admin/AdminLogin'));
const CMSDashboard = React.lazy(() => import('./components/cms/CMSDashboard'));
const SEOBlogManager = React.lazy(() => import('./components/cms/SEOBlogManager'));
const SupabaseBlogEditor = React.lazy(() => import('./components/cms/SupabaseBlogEditor'));
const BookingManager = React.lazy(() => import('./pages/admin/BookingManager'));

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BlogProvider>
            <BookingProvider>
              <BrowserRouter>
                <ScrollToTop />
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<Index />} />
                  <Route path="/mutual-funds" element={<MutualFunds />} />
                  <Route path="/loans" element={<Loans />} />
                  <Route path="/insurance" element={<Insurance />} />
                  <Route path="/blog" element={<SupabaseBlog />} />
                  <Route path="/blog/:slug" element={<SupabaseBlogPost />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/booking" element={<Booking />} />
                  <Route path="/sip-calculator" element={<SipCalculator />} />
                  <Route path="/emi-calculator" element={<EmiCalculator />} />
                  <Route path="/tax-saving" element={<TaxSaving />} />
                  <Route path="/home-loan" element={<HomeLoan />} />
                  <Route path="/personal-loan" element={<PersonalLoan />} />
                  <Route path="/car-loan" element={<CarLoan />} />
                  <Route path="/education-loan" element={<EducationLoan />} />
                  <Route path="/business-loan" element={<BusinessLoan />} />
                  <Route path="/loan-against-mutual-funds" element={<LoanAgainstMutualFunds />} />
                  <Route path="/health-insurance" element={<HealthInsurance />} />
                  <Route path="/term-insurance" element={<TermInsurance />} />
                  <Route path="/vehicle-insurance" element={<VehicleInsurance />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                  <Route path="/sitemap" element={<Sitemap />} />

                  {/* Admin Routes */}
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route 
                    path="/admin" 
                    element={
                      <ProtectedAdminRoute>
                        <Suspense fallback={<LoadingSpinner />}>
                          <CMSDashboard />
                        </Suspense>
                      </ProtectedAdminRoute>
                    } 
                  />
                  <Route 
                    path="/admin/blogs/manage" 
                    element={
                      <ProtectedAdminRoute>
                        <Suspense fallback={<LoadingSpinner />}>
                          <SEOBlogManager />
                        </Suspense>
                      </ProtectedAdminRoute>
                    } 
                  />
                  <Route 
                    path="/admin/blogs/new" 
                    element={
                      <ProtectedAdminRoute>
                        <Suspense fallback={<LoadingSpinner />}>
                          <SupabaseBlogEditor />
                        </Suspense>
                      </ProtectedAdminRoute>
                    } 
                  />
                  <Route 
                    path="/admin/blogs/edit/:id" 
                    element={
                      <ProtectedAdminRoute>
                        <Suspense fallback={<LoadingSpinner />}>
                          <SupabaseBlogEditor />
                        </Suspense>
                      </ProtectedAdminRoute>
                    } 
                  />
                  <Route 
                    path="/admin/bookings" 
                    element={
                      <ProtectedAdminRoute>
                        <Suspense fallback={<LoadingSpinner />}>
                          <BookingManager />
                        </Suspense>
                      </ProtectedAdminRoute>
                    } 
                  />
                  
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </BookingProvider>
          </BlogProvider>
        </AuthProvider>
      </QueryClientProvider>
      <Toaster />
    </HelmetProvider>
  );
}

export default App;
