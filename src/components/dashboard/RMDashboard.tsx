
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, TrendingUp, DollarSign, Activity } from 'lucide-react';

const RMDashboard = () => {
  const rmStats = [
    { label: 'My Clients', value: '127', icon: Users, color: 'bg-blue-500' },
    { label: 'Total AUM', value: '₹2.4 cr', icon: DollarSign, color: 'bg-green-500' },
    { label: 'Monthly SIP', value: '₹8.2 lac', icon: TrendingUp, color: 'bg-purple-500' },
    { label: 'Active SIPs', value: '89', icon: Activity, color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Relationship Manager Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {rmStats.map((stat, index) => (
          <Card key={index}>
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

      <Card>
        <CardHeader>
          <CardTitle>Client Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
              <h4 className="font-medium">New Client Onboarding</h4>
              <p className="text-sm text-gray-600">3 clients pending KYC completion</p>
            </div>
            <div className="p-4 border-l-4 border-green-500 bg-green-50">
              <h4 className="font-medium">SIP Collections</h4>
              <p className="text-sm text-gray-600">Monthly target: 85% achieved</p>
            </div>
            <div className="p-4 border-l-4 border-orange-500 bg-orange-50">
              <h4 className="font-medium">Portfolio Review</h4>
              <p className="text-sm text-gray-600">12 clients due for review this month</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RMDashboard;
