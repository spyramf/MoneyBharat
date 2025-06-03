
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Filter, 
  Download, 
  RefreshCw, 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign,
  Calendar,
  Eye,
  Edit,
  Plus,
  FileText,
  Settings,
  Bell
} from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const FinlecStyleDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const stats = [
    { 
      title: 'Total AUM', 
      value: '₹2,45,67,890', 
      change: '+12.5%', 
      color: 'text-green-600',
      icon: DollarSign,
      bgColor: 'bg-green-50'
    },
    { 
      title: 'Active Clients', 
      value: '1,234', 
      change: '+8.2%', 
      color: 'text-blue-600',
      icon: Users,
      bgColor: 'bg-blue-50'
    },
    { 
      title: 'Monthly SIP', 
      value: '₹8,23,456', 
      change: '+15.3%', 
      color: 'text-purple-600',
      icon: TrendingUp,
      bgColor: 'bg-purple-50'
    },
    { 
      title: 'New Transactions', 
      value: '156', 
      change: '+5.7%', 
      color: 'text-orange-600',
      icon: BarChart3,
      bgColor: 'bg-orange-50'
    }
  ];

  const recentTransactions = [
    { id: 1, client: 'Rajesh Kumar', fund: 'HDFC Top 100 Fund', amount: '₹25,000', type: 'Purchase', status: 'Completed', date: '2025-01-15' },
    { id: 2, client: 'Priya Sharma', fund: 'ICICI Prudential Bluechip', amount: '₹5,000', type: 'SIP', status: 'Processing', date: '2025-01-15' },
    { id: 3, client: 'Amit Singh', fund: 'Axis Small Cap Fund', amount: '₹15,000', type: 'Redemption', status: 'Pending', date: '2025-01-14' },
    { id: 4, client: 'Neha Gupta', fund: 'SBI Large & Midcap', amount: '₹10,000', type: 'Purchase', status: 'Completed', date: '2025-01-14' },
    { id: 5, client: 'Rohit Agarwal', fund: 'Mirae Asset Large Cap', amount: '₹3,000', type: 'SIP', status: 'Completed', date: '2025-01-13' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Processing': return 'bg-yellow-100 text-yellow-800';
      case 'Pending': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Purchase': return 'text-green-600';
      case 'SIP': return 'text-blue-600';
      case 'Redemption': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your portfolio today.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            New Transaction
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className={`text-sm ${stat.color}`}>{stat.change} from last month</p>
                </div>
                <div className={`p-3 rounded-full ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filter Bar */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search transactions, clients, funds..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Filter by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Transactions</SelectItem>
                  <SelectItem value="purchase">Purchase</SelectItem>
                  <SelectItem value="sip">SIP</SelectItem>
                  <SelectItem value="redemption">Redemption</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions Table */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Transactions</CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{recentTransactions.length} transactions</Badge>
            <Button variant="ghost" size="sm">
              <Eye className="h-4 w-4 mr-2" />
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Client</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Fund</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Amount</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Type</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Date</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="font-medium text-gray-900">{transaction.client}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm text-gray-600">{transaction.fund}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-medium text-gray-900">{transaction.amount}</div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`font-medium ${getTypeColor(transaction.type)}`}>
                        {transaction.type}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <Badge className={getStatusColor(transaction.status)}>
                        {transaction.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <div className="text-sm text-gray-600">{transaction.date}</div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <FileText className="h-12 w-12 mx-auto mb-4 text-blue-600" />
            <h3 className="font-semibold mb-2">New Investment</h3>
            <p className="text-sm text-gray-600">Start a new mutual fund investment</p>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-12 w-12 mx-auto mb-4 text-green-600" />
            <h3 className="font-semibold mb-2">SIP Setup</h3>
            <p className="text-sm text-gray-600">Setup systematic investment plan</p>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <BarChart3 className="h-12 w-12 mx-auto mb-4 text-purple-600" />
            <h3 className="font-semibold mb-2">Reports</h3>
            <p className="text-sm text-gray-600">View detailed portfolio reports</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FinlecStyleDashboard;
