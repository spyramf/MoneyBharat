
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BarChart3, Settings, Shield, TrendingUp, AlertTriangle } from 'lucide-react';
import ClientSearchBar from './ClientSearchBar';
import ComplianceAlertsWidget from './ComplianceAlertsWidget';
import QuickActionsPanel from './QuickActionsPanel';

const EnhancedAdminDashboard = () => {
  const [dashboardStats, setDashboardStats] = useState({
    totalUsers: 0,
    totalClients: 0,
    activeRMs: 0,
    subbrokers: 0,
    totalAUM: 0,
    monthlyGrowth: 0,
    pendingKYC: 0,
    complianceAlerts: 0
  });

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      // Mock data since the required tables don't exist yet
      const mockStats = {
        totalUsers: 145,
        totalClients: 1250,
        activeRMs: 25,
        subbrokers: 15,
        totalAUM: 45000000,
        monthlyGrowth: 12.5,
        pendingKYC: 8,
        complianceAlerts: 5
      };

      setDashboardStats(mockStats);
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      notation: amount > 10000000 ? 'compact' : 'standard',
      maximumFractionDigits: 1
    }).format(amount);
  };

  const adminStats = [
    { label: 'Total Users', value: dashboardStats.totalUsers.toString(), icon: Users, color: 'bg-blue-500' },
    { label: 'Total Clients', value: dashboardStats.totalClients.toString(), icon: Users, color: 'bg-green-500' },
    { label: 'RMs Active', value: dashboardStats.activeRMs.toString(), icon: Shield, color: 'bg-purple-500' },
    { label: 'Subbrokers', value: dashboardStats.subbrokers.toString(), icon: BarChart3, color: 'bg-orange-500' },
    { label: 'Total AUM', value: formatCurrency(dashboardStats.totalAUM), icon: TrendingUp, color: 'bg-emerald-500' },
    { label: 'Monthly Growth', value: `+${dashboardStats.monthlyGrowth}%`, icon: TrendingUp, color: 'bg-blue-600' },
    { label: 'Pending KYC', value: dashboardStats.pendingKYC.toString(), icon: AlertTriangle, color: 'bg-yellow-500' },
    { label: 'Compliance Alerts', value: dashboardStats.complianceAlerts.toString(), icon: AlertTriangle, color: 'bg-red-500' }
  ];

  const handleSearch = (searchTerm: string, filters: any) => {
    console.log('Search:', searchTerm, 'Filters:', filters);
    // Implement search functionality
  };

  const handleExport = () => {
    console.log('Exporting data...');
    // Implement export functionality
  };

  const handleRefresh = () => {
    fetchDashboardStats();
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Administrator Dashboard</h2>
        <div className="text-sm text-gray-600">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>

      <ClientSearchBar 
        onSearch={handleSearch}
        onExport={handleExport}
        onRefresh={handleRefresh}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {adminStats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-xl font-bold">{stat.value}</p>
                </div>
                <div className={`p-2 rounded-full ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ComplianceAlertsWidget />
        </div>
        <div>
          <QuickActionsPanel userRole="admin" />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>System Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg bg-blue-50">
              <h3 className="font-semibold mb-2 text-blue-900">User Management</h3>
              <p className="text-sm text-blue-700">Manage all users, assign roles, and monitor activities</p>
              <div className="mt-2 text-sm text-blue-600">
                <span className="font-medium">{dashboardStats.totalUsers}</span> total users
              </div>
            </div>
            <div className="p-4 border rounded-lg bg-green-50">
              <h3 className="font-semibold mb-2 text-green-900">Business Analytics</h3>
              <p className="text-sm text-green-700">View comprehensive reports and analytics</p>
              <div className="mt-2 text-sm text-green-600">
                <span className="font-medium">{formatCurrency(dashboardStats.totalAUM)}</span> total AUM
              </div>
            </div>
            <div className="p-4 border rounded-lg bg-orange-50">
              <h3 className="font-semibold mb-2 text-orange-900">Compliance Monitoring</h3>
              <p className="text-sm text-orange-700">Track compliance status and pending actions</p>
              <div className="mt-2 text-sm text-orange-600">
                <span className="font-medium">{dashboardStats.complianceAlerts}</span> pending alerts
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnhancedAdminDashboard;
