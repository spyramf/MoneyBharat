
import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedAdminRouteProps {
  children: React.ReactNode;
}

const ProtectedAdminRoute = ({ children }: ProtectedAdminRouteProps) => {
  // Check for admin authentication
  const isAuthenticated = localStorage.getItem('adminAuth') === 'true';
  
  console.log('ProtectedAdminRoute: isAuthenticated =', isAuthenticated);
  
  if (!isAuthenticated) {
    console.log('ProtectedAdminRoute: Redirecting to login');
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedAdminRoute;
