
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useInvestorAuth } from '@/context/InvestorAuthContext';

interface InvestorProtectedRouteProps {
  children: ReactNode;
}

const InvestorProtectedRoute = ({ children }: InvestorProtectedRouteProps) => {
  const { user, isLoading } = useInvestorAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/investor/login" replace />;
  }

  return <>{children}</>;
};

export default InvestorProtectedRoute;
