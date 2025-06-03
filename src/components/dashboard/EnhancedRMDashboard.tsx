
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, TrendingUp, DollarSign, Activity, Target, AlertCircle } from 'lucide-react';
import ClientSearchBar from './ClientSearchBar';
import PortfolioSummaryCard from './PortfolioSummaryCard';
import QuickActionsPanel from './QuickActionsPanel';
import { supabase } from '@/integrations/supabase/client';

const EnhancedRMDashboard = () => {
  const [rmStats, setRmStats] = useState({
    myClients: 0,
    totalAUM: 0,
    monthlySIP: 0,
    activeSIPs: 0,
    targetAchievement: 0,
    newClients: 0,
    pendingKYC: 0,
    sipCollectionRate: 0
  });

  const [portfolioSummary, setPortfolioSummary] = useState({
    totalValue: 0,
    totalInvestment: 0,
    gainLoss: 0,
    gainLossPercentage: 0,
    activeSIPs: 0,
    sipAmount: 0
  });

  useEffect(() => {
    fetchRMStats();
    fetchPortfolioSummary();
  }, []);

  const fetchRMStats = async () => {
    try {
      // In a real implementation, this would filter by RM ID
      const { count: clientsCount } = await supabase
        .from('clients')
        .select('*', { count: 'exact', head: true });

      const { data: sipData } = await supabase
        .from('sip_registrations')
        .select('sip_amount, status');

      const activeSIPs = sipData?.filter(sip => sip.status === 'active').length || 0;
      const monthlySIP = sipData?.reduce((sum, sip) => sum + (sip.sip_amount || 0), 0) || 0;

      const { count: pendingKYCCount } = await supabase
        .from('kyc_details')
        .select('*', { count: 'exact', head: true })
        .eq('verification_status', 'pending');

      setRmStats({
        myClients: clientsCount || 0,
        totalAUM: 24000000, // This would come from portfolios aggregation
        monthlySIP,
        activeSIPs,
        targetAchievement: 85,
        newClients: 12,
        pendingKYC: pendingKYCCount || 0,
        sipCollectionRate: 94
      });
    } catch (error) {
      console.error('Error fetching RM stats:', error);
    }
  };

  const fetchPortfolioSummary = async () => {
    try {
      const { data: portfolios } = await supabase
        .from('portfolios')
        .select('current_value, invested_amount, gain_loss');

      const totalValue = portfolios?.reduce((sum, p) => sum + (p.current_value || 0), 0) || 0;
      const totalInvestment = portfolios?.reduce((sum, p) => sum + (p.invested_amount || 0), 0) || 0;
      const gainLoss = portfolios?.reduce((sum, p) => sum + (p.gain_loss || 0), 0) || 0;

      const { data: sipData } = await supabase
        .from('sip_registrations')
        .select('sip_amount, status');

      const activeSIPs = sipData?.filter(sip => sip.status === 'active').length || 0;
      const sipAmount = sipData?.reduce((sum, sip) => sum + (sip.sip_amount || 0), 0) || 0;

      setPortfolioSummary({
        totalValue,
        totalInvestment,
        gainLoss,
        gainLossPercentage: totalInvestment > 0 ? (gainLoss / totalInvestment) * 100 : 0,
        activeSIPs,
        sipAmount
      });
    } catch (error) {
      console.error('Error fetching portfolio summary:', error);
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

  const rmStatCards = [
    { label: 'My Clients', value: rmStats.myClients.toString(), icon: Users, color: 'bg-blue-500' },
    { label: 'Total AUM', value: formatCurrency(rmStats.totalAUM), icon: DollarSign, color: 'bg-green-500' },
    { label: 'Monthly SIP', value: formatCurrency(rmStats.monthlySIP), icon: TrendingUp, color: 'bg-purple-500' },
    { label: 'Active SIPs', value: rmStats.activeSIPs.toString(), icon: Activity, color: 'bg-orange-500' },
    { label: 'Target Achievement', value: `${rmStats.targetAchievement}%`, icon: Target, color: 'bg-emerald-500' },
    { label: 'New Clients (MTD)', value: rmStats.newClients.toString(), icon: Users, color: 'bg-blue-600' },
    { label: 'Pending KYC', value: rmStats.pendingKYC.toString(), icon: AlertCircle, color: 'bg-yellow-500' },
    { label: 'SIP Collection', value: `${rmStats.sipCollectionRate}%`, icon: TrendingUp, color: 'bg-green-600' }
  ];

  const handleSearch = (searchTerm: string, filters: any) => {
    console.log('RM Search:', searchTerm, 'Filters:', filters);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Relationship Manager Dashboard</h2>
        <div className="text-sm text-gray-600">
          Target Achievement: <span className="font-semibold text-green-600">{rmStats.targetAchievement}%</span>
        </div>
      </div>

      <ClientSearchBar onSearch={handleSearch} />

      <PortfolioSummaryCard {...portfolioSummary} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {rmStatCards.map((stat, index) => (
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
          <Card>
            <CardHeader>
              <CardTitle>Client Activities & Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border-l-4 border-blue-500 bg-blue-50">
                  <h4 className="font-medium text-blue-900">New Client Onboarding</h4>
                  <p className="text-sm text-blue-700">{rmStats.pendingKYC} clients pending KYC completion</p>
                  <div className="mt-2 text-xs text-blue-600">Priority: High</div>
                </div>
                <div className="p-4 border-l-4 border-green-500 bg-green-50">
                  <h4 className="font-medium text-green-900">SIP Collections</h4>
                  <p className="text-sm text-green-700">Monthly target: {rmStats.sipCollectionRate}% achieved</p>
                  <div className="mt-2 text-xs text-green-600">On Track</div>
                </div>
                <div className="p-4 border-l-4 border-orange-500 bg-orange-50">
                  <h4 className="font-medium text-orange-900">Portfolio Review</h4>
                  <p className="text-sm text-orange-700">12 clients due for review this month</p>
                  <div className="mt-2 text-xs text-orange-600">Action Required</div>
                </div>
                <div className="p-4 border-l-4 border-purple-500 bg-purple-50">
                  <h4 className="font-medium text-purple-900">Goal Tracking</h4>
                  <p className="text-sm text-purple-700">Monthly AUM target: ₹2.5 cr (Current: {formatCurrency(rmStats.totalAUM)})</p>
                  <div className="mt-2 text-xs text-purple-600">{rmStats.targetAchievement}% Complete</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <QuickActionsPanel userRole="rm" />
        </div>
      </div>
    </div>
  );
};

export default EnhancedRMDashboard;
