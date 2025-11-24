
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, TrendingUp, PieChart, Activity } from 'lucide-react';
import StatsCard from './widgets/StatsCard';

const ClientDashboard = () => {
  const clientStats = [
    { label: 'Portfolio Value', value: '₹2,45,000', icon: DollarSign, color: 'bg-blue-500' },
    { label: 'Total Investment', value: '₹1,80,000', icon: TrendingUp, color: 'bg-green-500' },
    { label: 'Current Gain', value: '₹65,000', icon: PieChart, color: 'bg-purple-500' },
    { label: 'SIP Amount', value: '₹8,000', icon: Activity, color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">My Portfolio</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {clientStats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 border-b">
              <div>
                <p className="font-medium">SIP - HDFC Equity Fund</p>
                <p className="text-sm text-gray-600">Jan 15, 2025</p>
              </div>
              <span className="text-green-600 font-semibold">₹5,000</span>
            </div>
            <div className="flex justify-between items-center p-4 border-b">
              <div>
                <p className="font-medium">SIP - ICICI Bluechip Fund</p>
                <p className="text-sm text-gray-600">Jan 15, 2025</p>
              </div>
              <span className="text-green-600 font-semibold">₹3,000</span>
            </div>
            <div className="flex justify-between items-center p-4">
              <div>
                <p className="font-medium">Lumpsum - Axis Small Cap Fund</p>
                <p className="text-sm text-gray-600">Jan 10, 2025</p>
              </div>
              <span className="text-green-600 font-semibold">₹25,000</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientDashboard;
