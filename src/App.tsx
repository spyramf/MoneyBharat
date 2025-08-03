import { Suspense, lazy } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { BlogProvider } from '@/context/BlogContext';
import { BookingProvider } from '@/context/BookingContext';
import ProtectedAdminRoute from '@/components/ProtectedAdminRoute';
import './App.css';

// Initialize react query client
const queryClient = new QueryClient();

const Index = lazy(() => import('./pages/Index'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Booking = lazy(() => import('./pages/Booking'));
const Contact = lazy(() => import('./pages/Contact'));
const MutualFunds = lazy(() => import('./pages/MutualFunds'));
const Insurance = lazy(() => import('./pages/Insurance'));
const Loans = lazy(() => import('./pages/Loans'));
const HealthInsurance = lazy(() => import('./pages/HealthInsurance'));
const TermInsurance = lazy(() => import('./pages/TermInsurance'));
const VehicleInsurance = lazy(() => import('./pages/VehicleInsurance'));
const PersonalLoan = lazy(() => import('./pages/PersonalLoan'));
const HomeLoan = lazy(() => import('./pages/HomeLoan'));
const CarLoan = lazy(() => import('./pages/CarLoan'));
const BusinessLoan = lazy(() => import('./pages/BusinessLoan'));
const EducationLoan = lazy(() => import('./pages/EducationLoan'));
const LoanAgainstMutualFunds = lazy(() => import('./pages/LoanAgainstMutualFunds'));
const SipCalculator = lazy(() => import('./pages/SipCalculator'));
const EmiCalculator = lazy(() => import('./pages/EmiCalculator'));
const TaxSaving = lazy(() => import('./pages/TaxSaving'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const SupabaseBlog = lazy(() => import('./pages/SupabaseBlog'));
const SupabaseBlogPost = lazy(() => import('./pages/SupabaseBlogPost'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Admin Pages
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const BlogManager = lazy(() => import('./pages/admin/BlogManager'));
const BookingManager = lazy(() => import('./pages/admin/BookingManager'));
const BlogEditor = lazy(() => import('./pages/admin/BlogEditor'));
const SupabaseBlogManager = lazy(() => import('./components/cms/SupabaseBlogManager'));

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <BlogProvider>
            <BookingProvider>
              <BrowserRouter>
                <ScrollToTop />
                <div className="min-h-screen bg-background font-sans antialiased">
                  <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                      {/* Public Routes */}
                      <Route path="/" element={<Index />} />
                      <Route path="/about" element={<AboutUs />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/blog/:slug" element={<BlogPost />} />
                      <Route path="/booking" element={<Booking />} />
                      <Route path="/contact" element={<Contact />} />
                      
                      {/* Financial Services */}
                      <Route path="/mutual-funds" element={<MutualFunds />} />
                      <Route path="/insurance" element={<Insurance />} />
                      <Route path="/loans" element={<Loans />} />
                      
                      {/* Insurance Routes */}
                      <Route path="/health-insurance" element={<HealthInsurance />} />
                      <Route path="/term-insurance" element={<TermInsurance />} />
                      <Route path="/vehicle-insurance" element={<VehicleInsurance />} />
                      
                      {/* Loan Routes */}
                      <Route path="/loans/personal" element={<PersonalLoan />} />
                      <Route path="/loans/home" element={<HomeLoan />} />
                      <Route path="/loans/car" element={<CarLoan />} />
                      <Route path="/loans/business" element={<BusinessLoan />} />
                      <Route path="/loans/education" element={<EducationLoan />} />
                      <Route path="/loans/mutual-funds" element={<LoanAgainstMutualFunds />} />
                      
                      {/* Calculators */}
                      <Route path="/calculators/sip" element={<SipCalculator />} />
                      <Route path="/calculators/emi" element={<EmiCalculator />} />
                      <Route path="/tax-saving" element={<TaxSaving />} />
                      
                      {/* Legal Pages */}
                      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                      <Route path="/terms-of-service" element={<TermsOfService />} />
                      <Route path="/sitemap" element={<Sitemap />} />
                      
                      {/* Supabase Blog Routes */}
                      <Route path="/supabase-blog" element={<SupabaseBlog />} />
                      <Route path="/supabase-blog/:slug" element={<SupabaseBlogPost />} />
                      
                      {/* Admin Routes */}
                      <Route path="/admin/login" element={<AdminLogin />} />
                      <Route path="/admin/dashboard" element={
                        <ProtectedAdminRoute>
                          <Dashboard />
                        </ProtectedAdminRoute>
                      } />
                      <Route path="/admin/bookings" element={
                        <ProtectedAdminRoute>
                          <BookingManager />
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
                      <Route path="/admin/blogs/edit/:id" element={
                        <ProtectedAdminRoute>
                          <BlogEditor />
                        </ProtectedAdminRoute>
                      } />
                      <Route path="/admin/blogs/supabase" element={
                        <ProtectedAdminRoute>
                          <SupabaseBlogManager />
                        </ProtectedAdminRoute>
                      } />
                      
                      {/* Catch-all route */}
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Suspense>
                </div>
                <Toaster />
              </BrowserRouter>
            </BookingProvider>
          </BlogProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
