import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import MutualFunds from "./pages/MutualFunds";
import Insurance from "./pages/Insurance";
import HealthInsurance from "./pages/HealthInsurance";
import TermInsurance from "./pages/TermInsurance";
import VehicleInsurance from "./pages/VehicleInsurance";
import Loans from "./pages/Loans";
import PersonalLoan from "./pages/PersonalLoan";
import HomeLoan from "./pages/HomeLoan";
import BusinessLoan from "./pages/BusinessLoan";
import CarLoan from "./pages/CarLoan";
import EducationLoan from "./pages/EducationLoan";
import LoanAgainstMutualFunds from "./pages/LoanAgainstMutualFunds";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import SupabaseBlog from "./pages/SupabaseBlog";
import SupabaseBlogPost from "./pages/SupabaseBlogPost";
import SipCalculator from "./pages/SipCalculator";
import EmiCalculator from "./pages/EmiCalculator";
import TaxSaving from "./pages/TaxSaving";
import Booking from "./pages/Booking";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

// Admin Pages
import AdminLogin from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import BookingManager from "./pages/admin/BookingManager";
import BlogManager from "./pages/admin/BlogManager";
import BlogEditor from "./pages/admin/BlogEditor";
import SupabaseBlogManager from "@/components/cms/SupabaseBlogManager";
import SupabaseBlogEditor from "@/components/cms/SupabaseBlogEditor";

// Investor Pages
import InvestorLogin from "./pages/investor/InvestorLogin";
import InvestorSignup from "./pages/investor/InvestorSignup";
import InvestorDashboard from "./pages/investor/InvestorDashboard";
import InvestorClients from "./pages/investor/InvestorClients";
import InvestorBankAccount from "./pages/investor/InvestorBankAccount";

// Contexts
import { AuthProvider } from "./context/AuthContext";
import { BlogProvider } from "./context/BlogContext";
import { BookingProvider } from "./context/BookingContext";
import { InvestorAuthProvider } from "./context/InvestorAuthContext";

// Protected Routes
import ProtectedRoute from "./components/ProtectedRoute";
import InvestorProtectedRoute from "./components/InvestorProtectedRoute";

const queryClient = new QueryClient();

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <BrowserRouter>
            <AuthProvider>
              <InvestorAuthProvider>
                <BlogProvider>
                  <BookingProvider>
                    <Toaster />
                    <Sonner />
                    <ScrollToTop />
                    <Routes>
                      {/* Public Routes */}
                      <Route path="/" element={<Index />} />
                      <Route path="/mutual-funds" element={<MutualFunds />} />
                      <Route path="/insurance" element={<Insurance />} />
                      <Route path="/health-insurance" element={<HealthInsurance />} />
                      <Route path="/term-insurance" element={<TermInsurance />} />
                      <Route path="/vehicle-insurance" element={<VehicleInsurance />} />
                      <Route path="/loans" element={<Loans />} />
                      <Route path="/personal-loan" element={<PersonalLoan />} />
                      <Route path="/home-loan" element={<HomeLoan />} />
                      <Route path="/business-loan" element={<BusinessLoan />} />
                      <Route path="/car-loan" element={<CarLoan />} />
                      <Route path="/education-loan" element={<EducationLoan />} />
                      <Route path="/loan-against-mutual-funds" element={<LoanAgainstMutualFunds />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/about" element={<AboutUs />} />
                      
                      {/* Blog Routes - Legacy */}
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/blog/:slug" element={<BlogPost />} />
                      
                      {/* Blog Routes - Supabase */}
                      <Route path="/blog/supabase" element={<SupabaseBlog />} />
                      <Route path="/blog/supabase/:slug" element={<SupabaseBlogPost />} />
                      
                      <Route path="/sip-calculator" element={<SipCalculator />} />
                      <Route path="/emi-calculator" element={<EmiCalculator />} />
                      <Route path="/tax-saving" element={<TaxSaving />} />
                      <Route path="/booking" element={<Booking />} />
                      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                      <Route path="/terms-of-service" element={<TermsOfService />} />
                      <Route path="/sitemap" element={<Sitemap />} />

                      {/* Admin Routes */}
                      <Route path="/admin/login" element={<AdminLogin />} />
                      <Route 
                        path="/admin/dashboard" 
                        element={
                          <ProtectedRoute>
                            <Dashboard />
                          </ProtectedRoute>
                        } 
                      />
                      <Route 
                        path="/admin/bookings" 
                        element={
                          <ProtectedRoute>
                            <BookingManager />
                          </ProtectedRoute>
                        } 
                      />
                      <Route 
                        path="/admin/blogs" 
                        element={
                          <ProtectedRoute>
                            <BlogManager />
                          </ProtectedRoute>
                        } 
                      />
                      <Route 
                        path="/admin/blogs/new" 
                        element={
                          <ProtectedRoute>
                            <BlogEditor />
                          </ProtectedRoute>
                        } 
                      />
                      <Route 
                        path="/admin/blogs/edit/:id" 
                        element={
                          <ProtectedRoute>
                            <BlogEditor />
                          </ProtectedRoute>
                        } 
                      />

                      {/* Supabase Blog Admin Routes */}
                      <Route 
                        path="/admin/blogs/supabase" 
                        element={<SupabaseBlogManager />}
                      />
                      <Route 
                        path="/admin/blogs/supabase/new" 
                        element={<SupabaseBlogEditor />}
                      />
                      <Route 
                        path="/admin/blogs/supabase/edit/:id" 
                        element={<SupabaseBlogEditor />}
                      />

                      {/* Investor Routes */}
                      <Route path="/investor/login" element={<InvestorLogin />} />
                      <Route path="/investor/signup" element={<InvestorSignup />} />
                      <Route 
                        path="/investor/dashboard" 
                        element={
                          <InvestorProtectedRoute>
                            <InvestorDashboard />
                          </InvestorProtectedRoute>
                        } 
                      />
                      <Route 
                        path="/investor/clients" 
                        element={
                          <InvestorProtectedRoute>
                            <InvestorClients />
                          </InvestorProtectedRoute>
                        } 
                      />
                      <Route 
                        path="/investor/bank-account" 
                        element={
                          <InvestorProtectedRoute>
                            <InvestorBankAccount />
                          </InvestorProtectedRoute>
                        } 
                      />

                      {/* 404 Route */}
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </BookingProvider>
                </BlogProvider>
              </InvestorAuthProvider>
            </AuthProvider>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
