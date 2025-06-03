
import React from 'react';
import { Button } from '@/components/ui/button';
import { useInvestorAuth } from '@/context/InvestorAuthContext';
import { LogOut, TrendingUp, DollarSign, PieChart, Activity } from 'lucide-react';

const InvestorDashboard = () => {
  const { user, signOut } = useInvestorAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Investor Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user?.email}</p>
            </div>
            <Button 
              onClick={signOut}
              variant="outline"
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Portfolio</p>
                <p className="text-2xl font-bold text-gray-900">₹2,45,670</p>
                <p className="text-sm text-green-600">+12.5% (₹27,340)</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Today's P&L</p>
                <p className="text-2xl font-bold text-gray-900">₹3,240</p>
                <p className="text-sm text-green-600">+1.32%</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Funds</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
                <p className="text-sm text-blue-600">2 SIPs active</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <PieChart className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Monthly SIP</p>
                <p className="text-2xl font-bold text-gray-900">₹15,000</p>
                <p className="text-sm text-blue-600">Next: 5th Dec</p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <Activity className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Start New SIP
            </Button>
            <Button variant="outline">
              Explore Mutual Funds
            </Button>
            <Button variant="outline">
              View Portfolio Analytics
            </Button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <p className="font-medium">HDFC Top 100 Fund</p>
                <p className="text-sm text-gray-600">SIP Investment</p>
              </div>
              <div className="text-right">
                <p className="font-medium">₹5,000</p>
                <p className="text-sm text-gray-600">Dec 1, 2024</p>
              </div>
            </div>
            <div className="flex items-center justify-between py-3 border-b">
              <div>
                <p className="font-medium">Axis Small Cap Fund</p>
                <p className="text-sm text-gray-600">One-time Investment</p>
              </div>
              <div className="text-right">
                <p className="font-medium">₹25,000</p>
                <p className="text-sm text-gray-600">Nov 28, 2024</p>
              </div>
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium">ICICI Prudential Equity Fund</p>
                <p className="text-sm text-gray-600">SIP Investment</p>
              </div>
              <div className="text-right">
                <p className="font-medium">₹10,000</p>
                <p className="text-sm text-gray-600">Nov 25, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InvestorDashboard;
