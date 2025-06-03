
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useInvestorAuth } from '@/context/InvestorAuthContext';
import { 
  LogOut, 
  Search, 
  Calendar,
  TrendingUp, 
  TrendingDown,
  Users,
  PieChart,
  AlertTriangle,
  FileText,
  BarChart3,
  Settings,
  Bell,
  DollarSign,
  Activity
} from 'lucide-react';

const InvestorDashboard = () => {
  const { user, signOut } = useInvestorAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPortfolio, setSelectedPortfolio] = useState('portfolio-valuation');

  // Sample data - in real app, this would come from API
  const lastTransactions = [
    { entity: 'ARN-284751', cams: '02-06-2025', karvy: '02-06-2025' },
    { entity: 'ARN-223504', cams: '02-06-2025', karvy: '02-06-2025' }
  ];

  const credentialStatus = [
    { entity: 'ARN-284751', cams: 'Ok', karvy: 'Ok', bse: 'Ok', edge360: 'Ok' },
    { entity: 'ARN-223504', cams: 'Ok', karvy: 'Ok', bse: 'Ok', edge360: 'Not Verified' }
  ];

  const portfolioStats = [
    { label: 'AUM', value: '₹ 3.58 cr', icon: DollarSign, color: 'bg-blue-500' },
    { label: 'Equity', value: '₹ 3.36 cr', icon: TrendingUp, color: 'bg-green-500' },
    { label: 'Non Equity', value: '₹ 21.46 lac', icon: TrendingDown, color: 'bg-red-500' },
    { label: 'No of Investor', value: '492', icon: Users, color: 'bg-purple-500' },
    { label: 'SIP Clients', value: '185', icon: Activity, color: 'bg-yellow-500' },
    { label: 'SIP Amount in May\'25', value: '₹ 12.26 lac', icon: PieChart, color: 'bg-indigo-500' },
    { label: 'SIP Count in May\'25', value: '2,404', icon: BarChart3, color: 'bg-pink-500' }
  ];

  const businessUpdates = [
    { category: 'Investment', debt: '0.10%', equity: '52.54%', hybrid: '0', liquid: '1.60%', arbitrage: '0', other: '0', total: '53.64%' },
    { category: 'Redemption', debt: '0', equity: '42.79%', hybrid: '0', liquid: '0', arbitrage: '0', other: '0', total: '42.79%' },
    { category: 'Net Investment', debt: '0.10%', equity: '9.75%', hybrid: '0', liquid: '1.60%', arbitrage: '0', other: '0', total: '10.85%' }
  ];

  const complianceData = [
    { type: 'AadHaar Link Missing', count: 1, color: 'text-red-500' },
    { type: 'Email ID Missing', count: 0, color: 'text-green-500' },
    { type: 'Unity Registration', count: 0, color: 'text-green-500' },
    { type: 'SIP Missing', count: 1, color: 'text-red-500' },
    { type: 'RTA Missing', count: 0, color: 'text-green-500' }
  ];

  const alertsData = [
    { type: 'SIP Upcoming', count: 161, color: 'text-red-500' },
    { type: 'Memo on Major AMH', count: 0, color: 'text-green-500' },
    { type: 'Purchase Review', count: 0, color: 'text-green-500' },
    { type: 'Valuation Update', count: 0, color: 'text-green-500' },
    { type: 'SIP Rejection', count: 0, color: 'text-green-500' },
    { type: 'Inventory Renewal', count: 0, color: 'text-green-500' }
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
          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg bg-blue-700 text-white">
            <BarChart3 className="h-5 w-5" />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <Users className="h-5 w-5" />
            <span>Clients</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <TrendingUp className="h-5 w-5" />
            <span>Leads</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <FileText className="h-5 w-5" />
            <span>Exp | Advisor</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <Activity className="h-5 w-5" />
            <span>Invest Online BSE</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <Settings className="h-5 w-5" />
            <span>Utilities</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <BarChart3 className="h-5 w-5" />
            <span>Transaction View</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <PieChart className="h-5 w-5" />
            <span>Insurance</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <BarChart3 className="h-5 w-5" />
            <span>Business Analytics</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <FileText className="h-5 w-5" />
            <span>Data Management</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <Bell className="h-5 w-5" />
            <span>Email Scheduler</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <Activity className="h-5 w-5" />
            <span>Comprehensive Report</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <TrendingUp className="h-5 w-5" />
            <span>Brokerage</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <Users className="h-5 w-5" />
            <span>Investor Data Summary</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <BarChart3 className="h-5 w-5" />
            <span>Risk Profiling</span>
          </a>
          <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <FileText className="h-5 w-5" />
            <span>Billing</span>
          </a>
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

          {/* Search and Portfolio Selection */}
          <div className="flex items-center space-x-4 mt-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Client Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedPortfolio} onValueChange={setSelectedPortfolio}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="portfolio-valuation">Portfolio Valuation</SelectItem>
                <SelectItem value="performance">Performance</SelectItem>
                <SelectItem value="allocation">Asset Allocation</SelectItem>
              </SelectContent>
            </Select>
            <Button className="bg-blue-600 hover:bg-blue-700">Go to Report</Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Last Transaction Date */}
          <Card>
            <CardHeader>
              <CardTitle>Last Transaction Date</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Entity</TableHead>
                    <TableHead>CAMS</TableHead>
                    <TableHead>Karvy</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lastTransactions.map((transaction, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{transaction.entity}</TableCell>
                      <TableCell>{transaction.cams}</TableCell>
                      <TableCell>{transaction.karvy}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Credentials Status */}
          <Card>
            <CardHeader>
              <CardTitle>Credentials Status</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Entity</TableHead>
                    <TableHead>CAMS</TableHead>
                    <TableHead>Karvy</TableHead>
                    <TableHead>BSE</TableHead>
                    <TableHead>Edge360</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {credentialStatus.map((status, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{status.entity}</TableCell>
                      <TableCell className="text-green-600">{status.cams}</TableCell>
                      <TableCell className="text-green-600">{status.karvy}</TableCell>
                      <TableCell className="text-green-600">{status.bse}</TableCell>
                      <TableCell className={status.edge360 === 'Ok' ? 'text-green-600' : 'text-red-600'}>
                        {status.edge360}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Portfolio Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {portfolioStats.map((stat, index) => (
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

          {/* Business Update */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Business Update <span className="text-sm font-normal text-gray-500">(Current Month)</span></CardTitle>
                <Button variant="link" className="text-blue-600">View more →</Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead></TableHead>
                    <TableHead>Debt</TableHead>
                    <TableHead>Equity</TableHead>
                    <TableHead>Hybrid</TableHead>
                    <TableHead>Liquid</TableHead>
                    <TableHead>Arbitrage</TableHead>
                    <TableHead>Other</TableHead>
                    <TableHead>Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {businessUpdates.map((update, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{update.category}</TableCell>
                      <TableCell>{update.debt}</TableCell>
                      <TableCell>{update.equity}</TableCell>
                      <TableCell>{update.hybrid}</TableCell>
                      <TableCell>{update.liquid}</TableCell>
                      <TableCell>{update.arbitrage}</TableCell>
                      <TableCell>{update.other}</TableCell>
                      <TableCell className="font-medium">{update.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Compliance and Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Compliance */}
            <Card>
              <CardHeader>
                <CardTitle>Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {complianceData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm">{item.type}</span>
                      <span className={`font-semibold ${item.color}`}>{item.count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Alerts */}
            <Card>
              <CardHeader>
                <CardTitle>Alerts <span className="text-sm font-normal text-gray-500">(Till 06 Jun 2025)</span></CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {alertsData.map((alert, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm">{alert.type}</span>
                      <span className={`font-semibold ${alert.color}`}>{alert.count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Business Insights Toggle */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-blue-600 cursor-pointer">Hide Business Insights</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Hide Marking</span>
                  <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-500">
                    <span className="inline-block h-4 w-4 translate-x-6 rounded-full bg-white transition" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default InvestorDashboard;
