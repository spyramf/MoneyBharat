
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
import Blog from '@/pages/Blog';
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

// Admin Pages
import AdminLogin from '@/pages/admin/AdminLogin';
import Dashboard from '@/pages/admin/Dashboard';
import BlogDashboard from '@/pages/admin/BlogDashboard';
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
                        <Blog />
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
