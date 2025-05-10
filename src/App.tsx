
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import MutualFunds from "./pages/MutualFunds";
import Insurance from "./pages/Insurance";
import Loans from "./pages/Loans";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import SipCalculator from "./pages/SipCalculator";
import EmiCalculator from "./pages/EmiCalculator";
import TaxSaving from "./pages/TaxSaving";
import HealthInsurance from "./pages/HealthInsurance";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/mutual-funds" element={<MutualFunds />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/health-insurance" element={<HealthInsurance />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/tools/sip-calculator" element={<SipCalculator />} />
            <Route path="/tools/emi-calculator" element={<EmiCalculator />} />
            <Route path="/tools/tax-saving" element={<TaxSaving />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
