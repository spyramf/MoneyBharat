
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  UserPlus, 
  FileText, 
  TrendingUp, 
  CreditCard, 
  Download, 
  Settings,
  AlertTriangle,
  BarChart3,
  Users,
  PieChart
} from 'lucide-react';

interface QuickActionsPanelProps {
  userRole: string;
}

const QuickActionsPanel = ({ userRole }: QuickActionsPanelProps) => {
  const getActionsForRole = () => {
    switch (userRole) {
      case 'admin':
        return [
          { icon: Users, label: 'User Management', color: 'bg-blue-500', href: '#' },
          { icon: BarChart3, label: 'Business Analytics', color: 'bg-green-500', href: '#' },
          { icon: Settings, label: 'System Settings', color: 'bg-purple-500', href: '#' },
          { icon: AlertTriangle, label: 'Compliance Monitor', color: 'bg-red-500', href: '#' },
          { icon: Download, label: 'Export Reports', color: 'bg-orange-500', href: '#' },
          { icon: FileText, label: 'Audit Logs', color: 'bg-gray-500', href: '#' }
        ];
      
      case 'rm':
        return [
          { icon: UserPlus, label: 'Add Client', color: 'bg-blue-500', href: '#' },
          { icon: FileText, label: 'New Transaction', color: 'bg-green-500', href: '#' },
          { icon: TrendingUp, label: 'Setup SIP', color: 'bg-purple-500', href: '#' },
          { icon: CreditCard, label: 'Process KYC', color: 'bg-orange-500', href: '#' },
          { icon: Download, label: 'Generate Report', color: 'bg-indigo-500', href: '#' },
          { icon: PieChart, label: 'Portfolio Review', color: 'bg-pink-500', href: '#' }
        ];
      
      case 'subbroker':
        return [
          { icon: Users, label: 'Referral Tracker', color: 'bg-blue-500', href: '#' },
          { icon: TrendingUp, label: 'Commission Report', color: 'bg-green-500', href: '#' },
          { icon: FileText, label: 'Client Status', color: 'bg-purple-500', href: '#' },
          { icon: Download, label: 'Export Data', color: 'bg-orange-500', href: '#' }
        ];
      
      case 'client':
        return [
          { icon: PieChart, label: 'Portfolio View', color: 'bg-blue-500', href: '#' },
          { icon: FileText, label: 'Transaction History', color: 'bg-green-500', href: '#' },
          { icon: TrendingUp, label: 'SIP Status', color: 'bg-purple-500', href: '#' },
          { icon: Download, label: 'Download Statement', color: 'bg-orange-500', href: '#' }
        ];
      
      default:
        return [];
    }
  };

  const actions = getActionsForRole();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-gray-50"
              onClick={() => window.location.href = action.href}
            >
              <div className={`p-2 rounded-full ${action.color}`}>
                <action.icon className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs text-center leading-tight">{action.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActionsPanel;
