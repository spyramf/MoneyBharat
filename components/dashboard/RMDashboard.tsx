
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, TrendingUp, DollarSign, Activity } from 'lucide-react';
import StatsCard from './widgets/StatsCard';
import ActivityCard from './widgets/ActivityCard';

const RMDashboard = () => {
  const rmStats = [
    { label: 'My Clients', value: '127', icon: Users, color: 'bg-blue-500' },
    { label: 'Total AUM', value: '₹2.4 cr', icon: DollarSign, color: 'bg-green-500' },
    { label: 'Monthly SIP', value: '₹8.2 lac', icon: TrendingUp, color: 'bg-purple-500' },
    { label: 'Active SIPs', value: '89', icon: Activity, color: 'bg-orange-500' },
  ];

  const activities = [
    {
      title: "New Client Onboarding",
      description: "3 clients pending KYC completion",
      borderColor: "border-blue-500",
      bgColor: "bg-blue-50"
    },
    {
      title: "SIP Collections",
      description: "Monthly target: 85% achieved",
      borderColor: "border-green-500",
      bgColor: "bg-green-50"
    },
    {
      title: "Portfolio Review",
      description: "12 clients due for review this month",
      borderColor: "border-orange-500",
      bgColor: "bg-orange-50"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Relationship Manager Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {rmStats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Client Activities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <ActivityCard key={index} {...activity} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RMDashboard;
