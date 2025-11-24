
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BarChart3, Shield } from 'lucide-react';
import StatsCard from './widgets/StatsCard';

const AdminDashboard = () => {
  const adminStats = [
    { label: 'Total Users', value: '1,234', icon: Users, color: 'bg-blue-500' },
    { label: 'Total Clients', value: '856', icon: Users, color: 'bg-green-500' },
    { label: 'RMs Active', value: '45', icon: Shield, color: 'bg-purple-500' },
    { label: 'Subbrokers', value: '23', icon: BarChart3, color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {adminStats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Admin Controls</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">User Management</h3>
              <p className="text-sm text-gray-600">Manage all users, assign roles, and monitor activities</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">System Settings</h3>
              <p className="text-sm text-gray-600">Configure system-wide settings and preferences</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Reports & Analytics</h3>
              <p className="text-sm text-gray-600">View comprehensive reports and analytics</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
