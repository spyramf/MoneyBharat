
import { Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/ScrollToTop";
import { BookingProvider } from "./context/BookingContext";

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
                <Route path="/" element={<Index />} />
                <Route path="/about" element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <About />
                  </Suspense>
                } />
                <Route path="/blog" element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Blog />
                  </Suspense>
                } />
                <Route path="/booking" element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Booking />
                  </Suspense>
                } />
                <Route path="/contact" element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Contact />
                  </Suspense>
                } />
                <Route path="/mutual-funds" element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <MutualFunds />
                  </Suspense>
                } />
                <Route path="/insurance" element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Insurance />
                  </Suspense>
                } />
                <Route path="/loans" element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Loans />
                  </Suspense>
                } />
                <Route path="/health-insurance" element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <HealthInsurance />
                  </Suspense>
                } />
                <Route path="/term-insurance" element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <TermInsurance />
                  </Suspense>
                } />
                <Route path="/vehicle-insurance" element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <VehicleInsurance />
                  </Suspense>
                } />
                <Route path="/loans/personal" element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <PersonalLoan />
                  </Suspense>
                } />
                
                {/* Admin Routes */}
                <Route 
                  path="/admin" 
                  element={
                    <ProtectedRoute>
                      <Suspense fallback={<div>Loading...</div>}>
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
