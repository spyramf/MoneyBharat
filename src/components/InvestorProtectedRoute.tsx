
import { ReactNode } from 'react';

interface InvestorProtectedRouteProps {
  children: ReactNode;
}

const InvestorProtectedRoute = ({ children }: InvestorProtectedRouteProps) => {
  // Remove authentication check - allow access to all pages
  return <>{children}</>;
};

export default InvestorProtectedRoute;
