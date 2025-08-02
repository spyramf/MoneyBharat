
import { Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { BookingProvider } from "./context/BookingContext";

// Layouts
import MainLayout from "./layouts/MainLayout";

// Pages - Direct imports for critical pages
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRoute from "./components/ProtectedRoute";
import LoadingSpinner from "./components/common/LoadingSpinner";

// Lazy load pages
const About = lazy(() => import("./pages/AboutUs"));
const Blog = lazy(() => import("./pages/Blog"));
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"));
const Booking = lazy(() => import("./pages/Booking"));
const Contact = lazy(() => import("./pages/Contact"));
const MutualFunds = lazy(() => import("./pages/MutualFunds"));
const Insurance = lazy(() => import("./pages/Insurance"));
const Loans = lazy(() => import("./pages/Loans"));
const HealthInsurance = lazy(() => import("./pages/HealthInsurance"));
const TermInsurance = lazy(() => import("./pages/TermInsurance"));
const VehicleInsurance = lazy(() => import("./pages/VehicleInsurance"));
const PersonalLoan = lazy(() => import("./pages/PersonalLoan"));

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <BookingProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <ScrollToTop />
              <Routes>
                {/* Main Pages */}
                <Route path="/" element={<Index />} />
                
                {/* Public Pages with Layout */}
                <Route path="/about" element={
                  <MainLayout>
                    <Suspense fallback={<LoadingSpinner />}>
                      <About />
                    </Suspense>
                  </MainLayout>
                } />
                
                <Route path="/blog" element={
                  <MainLayout>
                    <Suspense fallback={<LoadingSpinner />}>
                      <Blog />
                    </Suspense>
                  </MainLayout>
                } />
                
                <Route path="/booking" element={
                  <MainLayout>
                    <Suspense fallback={<LoadingSpinner />}>
                      <Booking />
                    </Suspense>
                  </MainLayout>
                } />
                
                <Route path="/contact" element={
                  <MainLayout>
                    <Suspense fallback={<LoadingSpinner />}>
                      <Contact />
                    </Suspense>
                  </MainLayout>
                } />
                
                {/* Financial Service Pages */}
                <Route path="/mutual-funds" element={
                  <MainLayout>
                    <Suspense fallback={<LoadingSpinner />}>
                      <MutualFunds />
                    </Suspense>
                  </MainLayout>
                } />
                
                <Route path="/insurance" element={
                  <MainLayout>
                    <Suspense fallback={<LoadingSpinner />}>
                      <Insurance />
                    </Suspense>
                  </MainLayout>
                } />
                
                <Route path="/loans" element={
                  <MainLayout>
                    <Suspense fallback={<LoadingSpinner />}>
                      <Loans />
                    </Suspense>
                  </MainLayout>
                } />
                
                {/* Insurance Sub-pages */}
                <Route path="/health-insurance" element={
                  <MainLayout>
                    <Suspense fallback={<LoadingSpinner />}>
                      <HealthInsurance />
                    </Suspense>
                  </MainLayout>
                } />
                
                <Route path="/term-insurance" element={
                  <MainLayout>
                    <Suspense fallback={<LoadingSpinner />}>
                      <TermInsurance />
                    </Suspense>
                  </MainLayout>
                } />
                
                <Route path="/vehicle-insurance" element={
                  <MainLayout>
                    <Suspense fallback={<LoadingSpinner />}>
                      <VehicleInsurance />
                    </Suspense>
                  </MainLayout>
                } />
                
                {/* Loan Sub-pages */}
                <Route path="/loans/personal" element={
                  <MainLayout>
                    <Suspense fallback={<LoadingSpinner />}>
                      <PersonalLoan />
                    </Suspense>
                  </MainLayout>
                } />
                
                {/* Admin Routes */}
                <Route 
                  path="/admin" 
                  element={
                    <ProtectedRoute>
                      <Suspense fallback={<LoadingSpinner />}>
                        <AdminDashboard />
                      </Suspense>
                    </ProtectedRoute>
                  } 
                />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </BookingProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
