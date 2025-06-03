
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, TrendingUp, DollarSign, Percent } from 'lucide-react';

const SubbrokerDashboard = () => {
  const subbrokerStats = [
    { label: 'Referred Clients', value: '84', icon: Users, color: 'bg-blue-500' },
    { label: 'Commission Earned', value: '₹45,200', icon: DollarSign, color: 'bg-green-500' },
    { label: 'This Month', value: '₹12,800', icon: TrendingUp, color: 'bg-purple-500' },
    { label: 'Commission Rate', value: '2.5%', icon: Percent, color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Subbroker Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {subbrokerStats.map((stat, index) => (
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
          <CardTitle>Referral Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="font-medium">New Referrals This Month</span>
              <span className="text-xl font-bold text-green-600">8</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="font-medium">Conversion Rate</span>
              <span className="text-xl font-bold text-blue-600">68%</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="font-medium">Pending Commissions</span>
              <span className="text-xl font-bold text-orange-600">₹8,400</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubbrokerDashboard;
