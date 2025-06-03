
import React from 'react';
import { Button } from '@/components/ui/button';
import { useInvestorAuth } from '@/context/InvestorAuthContext';
import { 
  LogOut, 
  Calendar,
  PieChart,
  BarChart3,
  Users,
  TrendingUp,
  FileText,
  Activity,
  Settings,
  Bell
} from 'lucide-react';

interface InvestorLayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

const InvestorLayout = ({ children, currentPage = 'dashboard' }: InvestorLayoutProps) => {
  const { signOut } = useInvestorAuth();

  const navItems = [
    { name: 'Dashboard', path: '/investor/dashboard', icon: BarChart3, key: 'dashboard' },
    { name: 'Clients', path: '/investor/clients', icon: Users, key: 'clients' },
    { name: 'Leads', path: '#', icon: TrendingUp, key: 'leads' },
    { name: 'Exp | Advisor', path: '#', icon: FileText, key: 'advisor' },
    { name: 'Invest Online BSE', path: '#', icon: Activity, key: 'bse' },
    { name: 'Utilities', path: '#', icon: Settings, key: 'utilities' },
    { name: 'Transaction View', path: '#', icon: BarChart3, key: 'transactions' },
    { name: 'Insurance', path: '#', icon: PieChart, key: 'insurance' },
    { name: 'Business Analytics', path: '#', icon: BarChart3, key: 'analytics' },
    { name: 'Data Management', path: '#', icon: FileText, key: 'data' },
    { name: 'Email Scheduler', path: '#', icon: Bell, key: 'email' },
    { name: 'Comprehensive Report', path: '#', icon: Activity, key: 'report' },
    { name: 'Brokerage', path: '#', icon: TrendingUp, key: 'brokerage' },
    { name: 'Investor Data Summary', path: '#', icon: Users, key: 'summary' },
    { name: 'Risk Profiling', path: '#', icon: BarChart3, key: 'risk' },
    { name: 'Billing', path: '#', icon: FileText, key: 'billing' },
  ];

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

        <nav className="space-y-2">
          {navItems.map((item) => (
            <a 
              key={item.key}
              href={item.path} 
              className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                currentPage === item.key 
                  ? 'bg-blue-700 text-white' 
                  : 'hover:bg-blue-700'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h2 className="text-xl font-semibold text-gray-900">Welcome, FINLECINDIA</h2>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">NAV Date: 07 Jun 2025</span>
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

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default InvestorLayout;
