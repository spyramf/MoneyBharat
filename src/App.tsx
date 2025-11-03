import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import MutualFunds from '@/pages/MutualFunds';
import Insurance from '@/pages/Insurance';
import HealthInsurance from '@/pages/HealthInsurance';
import TermInsurance from '@/pages/TermInsurance';
import VehicleInsurance from '@/pages/VehicleInsurance';
import Loans from '@/pages/Loans';
import PersonalLoan from '@/pages/PersonalLoan';
import HomeLoan from '@/pages/HomeLoan';
import CarLoan from '@/pages/CarLoan';
import BusinessLoan from '@/pages/BusinessLoan';
import EducationLoan from '@/pages/EducationLoan';
import LoanAgainstMutualFunds from '@/pages/LoanAgainstMutualFunds';
import SipCalculator from '@/pages/SipCalculator';
import EmiCalculator from '@/pages/EmiCalculator';
import TaxSaving from '@/pages/TaxSaving';
import Booking from '@/pages/Booking';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import Sitemap from '@/pages/Sitemap';
import BlogDataSeeder from '@/pages/BlogDataSeeder';

// Admin Pages
import AdminLogin from '@/pages/admin/AdminLogin';
import CreateAdminUser from '@/pages/admin/CreateAdminUser';
import Dashboard from '@/pages/admin/Dashboard';
import BlogDashboard from '@/pages/admin/BlogDashboard';
import BlogEditor from '@/pages/admin/BlogEditor';
import BookingManager from '@/pages/admin/BookingManager';

// Initialize QueryClient with simpler config
const queryClient = new QueryClient();

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
                           <Blog />
                         </MainLayout>
                       } />
                       <Route path="/blog/:slug" element={
                         <MainLayout>
                           <BlogPost />
                         </MainLayout>
                       } />

                      {/* Financial Services */}
                      <Route path="/mutual-funds" element={
                        <MainLayout>
                          <MutualFunds />
                        </MainLayout>
                      } />
                      <Route path="/insurance" element={
                        <MainLayout>
                          <Insurance />
                        </MainLayout>
                      } />
                      <Route path="/health-insurance" element={
                        <MainLayout>
                          <HealthInsurance />
                        </MainLayout>
                      } />
                      <Route path="/term-insurance" element={
                        <MainLayout>
                          <TermInsurance />
                        </MainLayout>
                      } />
                      <Route path="/vehicle-insurance" element={
                        <MainLayout>
                          <VehicleInsurance />
                        </MainLayout>
                      } />
                      <Route path="/loans" element={
                        <MainLayout>
                          <Loans />
                        </MainLayout>
                      } />
                      <Route path="/loans/personal" element={
                        <MainLayout>
                          <PersonalLoan />
                        </MainLayout>
                      } />
                      <Route path="/loans/home" element={
                        <MainLayout>
                          <HomeLoan />
                        </MainLayout>
                      } />
                      <Route path="/loans/car" element={
                        <MainLayout>
                          <CarLoan />
                        </MainLayout>
                      } />
                      <Route path="/loans/business" element={
                        <MainLayout>
                          <BusinessLoan />
                        </MainLayout>
                      } />
                      <Route path="/loans/education" element={
                        <MainLayout>
                          <EducationLoan />
                        </MainLayout>
                      } />
                      <Route path="/loans/mutual-funds" element={
                        <MainLayout>
                          <LoanAgainstMutualFunds />
                        </MainLayout>
                      } />

                      {/* Calculators */}
                      <Route path="/calculators/sip" element={
                        <MainLayout>
                          <SipCalculator />
                        </MainLayout>
                      } />
                      <Route path="/calculators/emi" element={
                        <MainLayout>
                          <EmiCalculator />
                        </MainLayout>
                      } />
                      <Route path="/tax-saving" element={
                        <MainLayout>
                          <TaxSaving />
                        </MainLayout>
                      } />

                      {/* Other Pages */}
                      <Route path="/booking" element={
                        <MainLayout>
                          <Booking />
                        </MainLayout>
                      } />
                      <Route path="/privacy-policy" element={
                        <MainLayout>
                          <PrivacyPolicy />
                        </MainLayout>
                      } />
                      <Route path="/terms-of-service" element={
                        <MainLayout>
                          <TermsOfService />
                        </MainLayout>
                      } />
                      <Route path="/sitemap" element={
                        <MainLayout>
                          <Sitemap />
                        </MainLayout>
                      } />
                      <Route path="/seed-blog-data" element={<BlogDataSeeder />} />

                      {/* Admin Routes - Public */}
                      <Route path="/admin/login" element={<AdminLogin />} />
                      <Route path="/admin/create-user" element={<CreateAdminUser />} />

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
                      
                      <Route path="/admin/blog" element={
                        <ProtectedAdminRoute>
                          <BlogDashboard />
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

                      {/* Redirects for old URLs (for SEO) */}
                      <Route path="/personal-loan" element={<Navigate to="/loans/personal" replace />} />
                      <Route path="/home-loan" element={<Navigate to="/loans/home" replace />} />
                      <Route path="/car-loan" element={<Navigate to="/loans/car" replace />} />
                      <Route path="/business-loan" element={<Navigate to="/loans/business" replace />} />
                      <Route path="/education-loan" element={<Navigate to="/loans/education" replace />} />
                      <Route path="/loan-against-mutual-funds" element={<Navigate to="/loans/mutual-funds" replace />} />
                      <Route path="/sip-calculator" element={<Navigate to="/calculators/sip" replace />} />
                      <Route path="/emi-calculator" element={<Navigate to="/calculators/emi" replace />} />

                      {/* Catch All Route */}
                      <Route path="*" element={
                        <MainLayout>
                          <NotFound />
                        </MainLayout>
                      } />
                    </Routes>
                  </div>
                  <Toaster 
                    position="top-right"
                    richColors
                    closeButton
                    duration={5000}
                  />
                </BookingProvider>
              </BlogProvider>
            </AuthProvider>
          </BrowserRouter>
        </HelmetProvider>
      </QueryClientProvider>
  );
}

export default App;
