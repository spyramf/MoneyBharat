import React, { useState } from 'react';
import { useInvestorAuth } from '@/context/InvestorAuthContext';
import { useUserRole } from '@/hooks/useUserRole';
import { useUserPermissions } from '@/hooks/useUserPermissions';
import EnhancedAdminDashboard from '@/components/dashboard/EnhancedAdminDashboard';
import EnhancedRMDashboard from '@/components/dashboard/EnhancedRMDashboard';
import SubbrokerDashboard from '@/components/dashboard/SubbrokerDashboard';
import ClientDashboard from '@/components/dashboard/ClientDashboard';
import FinlecStyleDashboard from '@/components/dashboard/FinlecStyleDashboard';
import ClientsDashboardView from '@/components/dashboard/ClientsDashboardView';
import ProfileListView from '@/components/dashboard/ProfileListView';
import MandateListView from '@/components/dashboard/mandate-list/MandateListView';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LogOut, PieChart, Settings, Users, BarChart3, TrendingUp, FileText, AlertTriangle, Calendar, ChevronDown, ChevronRight } from 'lucide-react';

const InvestorDashboard = () => {
  const { user, signOut } = useInvestorAuth();
  const { userRole, isLoading: roleLoading } = useUserRole();
  const { hasPermission, isLoading: permissionsLoading } = useUserPermissions();
  const [activeView, setActiveView] = useState('dashboard');
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

  if (roleLoading || permissionsLoading) {
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

  const getNavigationItems = () => {
    const allItems = [
      { name: 'Dashboard', path: '/investor/dashboard', icon: PieChart, key: 'dashboard', permission: 'dashboard_overview' },
      { name: 'Clients', path: '/investor/clients', icon: Users, key: 'clients', permission: 'client_management' },
      { 
        name: 'BSE Online', 
        path: '#', 
        icon: BarChart3, 
        key: 'portfolio', 
        permission: 'portfolio_management',
        hasSubmenu: true,
        submenuItems: [
          { name: 'Profile List', key: 'portfolio_overview', permission: 'portfolio_management' },
          { name: 'Mandate Lists', key: 'my_holdings', permission: 'portfolio_management' },
          { name: 'My Orders', key: 'my_orders', permission: 'portfolio_management' },
          { name: 'SIP Orders', key: 'sip_orders', permission: 'portfolio_management' },
          { name: 'Transaction History', key: 'transaction_history', permission: 'portfolio_management' },
          { name: 'KYC Status', key: 'kyc_status', permission: 'portfolio_management' },
          { name: 'Transfer Holdings', key: 'transfer_holdings', permission: 'portfolio_management' },
          { name: 'Bulk Orders', key: 'bulk_orders', permission: 'portfolio_management' }
        ]
      },
      { name: 'Transaction Management', path: '#', icon: FileText, key: 'transactions', permission: 'transaction_management' },
      { name: 'SIP Management', path: '#', icon: TrendingUp, key: 'sip', permission: 'sip_management' },
      { name: 'KYC Management', path: '#', icon: FileText, key: 'kyc', permission: 'kyc_management' },
      { name: 'Compliance Tracking', path: '#', icon: AlertTriangle, key: 'compliance', permission: 'compliance_tracking' },
      { name: 'Business Analytics', path: '#', icon: BarChart3, key: 'analytics', permission: 'business_analytics' },
      { name: 'User Management', path: '#', icon: Users, key: 'user_mgmt', permission: 'user_management' },
      { name: 'System Settings', path: '#', icon: Settings, key: 'settings', permission: 'system_settings' },
      { name: 'Reports Generation', path: '#', icon: FileText, key: 'reports', permission: 'reports_generation' },
      { name: 'Referral Tracking', path: '#', icon: TrendingUp, key: 'referrals', permission: 'referral_tracking' },
      { name: 'Commission Tracking', path: '#', icon: BarChart3, key: 'commission', permission: 'commission_tracking' }
    ];

    return allItems.filter(item => hasPermission(item.permission));
  };

  const toggleSubmenu = (itemKey: string) => {
    setExpandedMenus(prev => 
      prev.includes(itemKey) 
        ? prev.filter(key => key !== itemKey)
        : [...prev, itemKey]
    );
  };

  const handleNavigation = (itemKey: string, parentKey?: string) => {
    setActiveView(itemKey);
  };

  const renderDashboard = () => {
    switch (activeView) {
      case 'clients':
        return <ClientsDashboardView />;
      case 'portfolio_overview':
        return <ProfileListView />;
      case 'my_holdings':
        return <MandateListView />;
      case 'my_orders':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">My Orders</h2>
            <p className="text-gray-600">Order history and management will be shown here.</p>
          </div>
        );
      case 'sip_orders':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">SIP Orders</h2>
            <p className="text-gray-600">SIP order management interface will be implemented here.</p>
          </div>
        );
      case 'transaction_history':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
            <p className="text-gray-600">Detailed transaction history will be displayed here.</p>
          </div>
        );
      case 'kyc_status':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">KYC Status</h2>
            <p className="text-gray-600">KYC verification status and documents will be shown here.</p>
          </div>
        );
      case 'transfer_holdings':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Transfer Holdings</h2>
            <p className="text-gray-600">Holdings transfer functionality will be implemented here.</p>
          </div>
        );
      case 'bulk_orders':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Bulk Orders</h2>
            <p className="text-gray-600">Bulk order processing interface will be available here.</p>
          </div>
        );
      default:
        return <FinlecStyleDashboard />;
    }
  };

  const navigationItems = getNavigationItems();

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
            <p className="text-xs opacity-75 truncate">{user?.email}</p>
          </div>
        </div>

        <nav className="space-y-1 max-h-96 overflow-y-auto">
          {navigationItems.map((item) => (
            <div key={item.key}>
              <button
                onClick={() => item.hasSubmenu ? toggleSubmenu(item.key) : handleNavigation(item.key)}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors text-left ${
                  activeView === item.key 
                    ? 'bg-blue-700 text-white' 
                    : 'hover:bg-blue-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="h-5 w-5" />
                  <span className="text-sm">{item.name}</span>
                </div>
                {item.hasSubmenu && (
                  <div className="ml-2">
                    {expandedMenus.includes(item.key) ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </div>
                )}
              </button>
              
              {/* Submenu */}
              {item.hasSubmenu && expandedMenus.includes(item.key) && (
                <div className="ml-6 mt-1 space-y-1">
                  {item.submenuItems?.map((subItem) => (
                    <button
                      key={subItem.key}
                      onClick={() => handleNavigation(subItem.key, item.key)}
                      className={`w-full text-left p-2 rounded text-sm transition-colors ${
                        activeView === subItem.key
                          ? 'bg-blue-700 text-white'
                          : 'text-blue-100 hover:bg-blue-700 hover:text-white'
                      }`}
                    >
                      {subItem.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Feature Access Indicator */}
        <div className="mt-6 p-3 bg-blue-700 rounded-lg">
          <div className="text-xs opacity-75 mb-1">Available Features</div>
          <div className="text-sm font-medium">{navigationItems.length} features</div>
          <div className="text-xs opacity-75">Role-based access</div>
        </div>
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
                <Calendar className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">NAV Date: {new Date().toLocaleDateString()}</span>
              </div>
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
        <main className="flex-1">
          {renderDashboard()}
        </main>
      </div>
    </div>
  );
};

export default InvestorDashboard;
