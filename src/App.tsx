
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/context/AuthContext';
import Index from '@/pages/Index';
import AboutUs from '@/pages/AboutUs';
import ProtectedRoute from '@/components/ProtectedRoute';
import Dashboard from '@/pages/admin/Dashboard';
import BlogPost from '@/pages/BlogPost';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';
import Login from '@/pages/admin/Login';
import HealthInsurance from '@/pages/HealthInsurance';
import TermInsurance from '@/pages/TermInsurance';
import VehicleInsurance from '@/pages/VehicleInsurance';
import PersonalLoan from '@/pages/PersonalLoan';
import Loans from '@/pages/Loans';
import Insurance from '@/pages/Insurance';
import Booking from '@/pages/Booking';
import MutualFunds from '@/pages/MutualFunds';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mutual-funds" element={<MutualFunds />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/booking" element={<Booking />} />
            
            {/* Insurance Routes */}
            <Route path="/health-insurance" element={<HealthInsurance />} />
            <Route path="/term-insurance" element={<TermInsurance />} />
            <Route path="/vehicle-insurance" element={<VehicleInsurance />} />
            
            {/* Loan Routes */}
            <Route path="/loans/personal" element={<PersonalLoan />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
