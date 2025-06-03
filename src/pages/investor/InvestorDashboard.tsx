
import React from 'react';
import { useInvestorAuth } from '@/context/InvestorAuthContext';
import { useUserRole } from '@/hooks/useUserRole';
import AdminDashboard from '@/components/dashboard/AdminDashboard';
import RMDashboard from '@/components/dashboard/RMDashboard';
import SubbrokerDashboard from '@/components/dashboard/SubbrokerDashboard';
import ClientDashboard from '@/components/dashboard/ClientDashboard';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LogOut, PieChart } from 'lucide-react';

const InvestorDashboard = () => {
  const { user, signOut } = useInvestorAuth();
  const { userRole, isLoading } = useUserRole();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  const getRoleDisplayName = (role: string) => {
    switch (role) {
      case 'admin': return 'Administrator';
      case 'rm': return 'Relationship Manager';
      case 'subbroker': return 'Sub Broker';
      case 'client': return 'Client';
      default: return 'User';
    }
  };

  const renderDashboard = () => {
    switch (userRole) {
      case 'admin':
        return <AdminDashboard />;
      case 'rm':
        return <RMDashboard />;
      case 'subbroker':
        return <SubbrokerDashboard />;
      case 'client':
      default:
        return <ClientDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-blue-600 to-blue-800 text-white p-6">
        <div className="flex items-center mb-8">
          <div className="bg-white text-blue-600 rounded-lg p-2 mr-3">
            <PieChart className="h-6 w-6" />
          </div>
          <h1 className="text-xl font-bold">FINLEC</h1>
        </div>

        <div className="mb-6">
          <div className="bg-blue-700 rounded-lg p-3">
            <p className="text-sm opacity-75">Logged in as</p>
            <p className="font-semibold">{getRoleDisplayName(userRole || 'client')}</p>
          </div>
        </div>

        <nav className="space-y-2">
          <a href="/investor/dashboard" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-700 text-white">
            <PieChart className="h-5 w-5" />
            <span>Dashboard</span>
          </a>
          
          {(userRole === 'admin' || userRole === 'rm') && (
            <a href="/investor/clients" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
              <PieChart className="h-5 w-5" />
              <span>Clients</span>
            </a>
          )}
          
          {userRole === 'admin' && (
            <>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                <PieChart className="h-5 w-5" />
                <span>User Management</span>
              </a>
              <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                <PieChart className="h-5 w-5" />
                <span>System Settings</span>
              </a>
            </>
          )}
          
          {userRole === 'subbroker' && (
            <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
              <PieChart className="h-5 w-5" />
              <span>Referrals</span>
            </a>
          )}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Welcome, {user?.email}
              </h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Role: {getRoleDisplayName(userRole || 'client')}</span>
              </div>
              <Button 
                onClick={signOut}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          {renderDashboard()}
        </main>
      </div>
    </div>
  );
};

export default InvestorDashboard;
