import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { BlogProvider } from "./context/BlogContext";
import { BookingProvider } from "./context/BookingContext";
import { AuthProvider } from "./context/AuthContext";
import { InvestorAuthProvider } from "./context/InvestorAuthContext";
import ScrollToTop from "./components/ScrollToTop";
import Custom404Handler from "./components/seo/Custom404Handler";
import ProtectedRoute from "./components/ProtectedRoute";
import InvestorProtectedRoute from "./components/InvestorProtectedRoute";
import Index from "./pages/Index";
import MutualFunds from "./pages/MutualFunds";
import Insurance from "./pages/Insurance";
import Loans from "./pages/Loans";
import PersonalLoan from "./pages/PersonalLoan";
import BusinessLoan from "./pages/BusinessLoan";
import CarLoan from "./pages/CarLoan";
import HomeLoan from "./pages/HomeLoan";
import EducationLoan from "./pages/EducationLoan";
import LoanAgainstMutualFunds from "./pages/LoanAgainstMutualFunds";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import SipCalculator from "./pages/SipCalculator";
import EmiCalculator from "./pages/EmiCalculator";
import TaxSaving from "./pages/TaxSaving";
import HealthInsurance from "./pages/HealthInsurance";
import TermInsurance from "./pages/TermInsurance";
import VehicleInsurance from "./pages/VehicleInsurance";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Booking from "./pages/Booking";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Sitemap from "./pages/Sitemap";

// Admin routes
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import BlogManager from "./pages/admin/BlogManager";
import BlogEditor from "./pages/admin/BlogEditor";
import BookingManager from "./pages/admin/BookingManager";

// Investor routes
import InvestorLogin from "./pages/investor/InvestorLogin";
import InvestorSignup from "./pages/investor/InvestorSignup";
import InvestorBankAccount from "./pages/investor/InvestorBankAccount";
import InvestorDashboard from "./pages/investor/InvestorDashboard";
import InvestorClients from "./pages/investor/InvestorClients";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <BlogProvider>
        <BookingProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Custom404Handler />
            <AuthProvider>
              <InvestorAuthProvider>
                <TooltipProvider>
                  <Toaster />
                  <Sonner />
                  <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<Index />} />
                    <Route path="/mutual-funds" element={<MutualFunds />} />
                    <Route path="/insurance" element={<Insurance />} />
                    <Route path="/health-insurance" element={<HealthInsurance />} />
                    <Route path="/term-insurance" element={<TermInsurance />} />
                    <Route path="/vehicle-insurance" element={<VehicleInsurance />} />
                    <Route path="/loans" element={<Loans />} />
                    <Route path="/loans/personal" element={<PersonalLoan />} />
                    <Route path="/loans/business" element={<BusinessLoan />} />
                    <Route path="/loans/car" element={<CarLoan />} />
                    <Route path="/loans/home" element={<HomeLoan />} />
                    <Route path="/loans/education" element={<EducationLoan />} />
                    <Route path="/loans/mutual-funds" element={<LoanAgainstMutualFunds />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/tools/sip-calculator" element={<SipCalculator />} />
                    <Route path="/tools/emi-calculator" element={<EmiCalculator />} />
                    <Route path="/tools/tax-saving" element={<TaxSaving />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:slug" element={<BlogPost />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                    <Route path="/sitemap" element={<Sitemap />} />
                    
                    {/* Investor Routes */}
                    <Route path="/investor/login" element={<InvestorLogin />} />
                    <Route path="/investor/signup" element={<InvestorSignup />} />
                    <Route path="/investor/bank-account" element={
                      <InvestorProtectedRoute>
                        <InvestorBankAccount />
                      </InvestorProtectedRoute>
                    } />
                    <Route path="/investor/dashboard" element={
                      <InvestorProtectedRoute>
                        <InvestorDashboard />
                      </InvestorProtectedRoute>
                    } />
                    <Route path="/investor/clients" element={
                      <InvestorProtectedRoute>
                        <InvestorClients />
                      </InvestorProtectedRoute>
                    } />
                    
                    {/* Admin Auth Route */}
                    <Route path="/admin/login" element={<Login />} />
                    
                    {/* Protected Admin Routes */}
                    <Route path="/admin" element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    } />
                    <Route path="/admin/blogs" element={
                      <ProtectedRoute>
                        <BlogManager />
                      </ProtectedRoute>
                    } />
                    <Route path="/admin/blogs/new" element={
                      <ProtectedRoute>
                        <BlogEditor />
                      </ProtectedRoute>
                    } />
                    <Route path="/admin/blogs/edit/:id" element={
                      <ProtectedRoute>
                        <BlogEditor />
                      </ProtectedRoute>
                    } />
                    <Route path="/admin/bookings" element={
                      <ProtectedRoute>
                        <BookingManager />
                      </ProtectedRoute>
                    } />
                    
                    {/* 404 Route */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </TooltipProvider>
              </InvestorAuthProvider>
            </AuthProvider>
          </BrowserRouter>
        </BookingProvider>
      </BlogProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
