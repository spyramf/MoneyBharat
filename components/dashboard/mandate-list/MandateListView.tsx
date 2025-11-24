
import React, { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Upload, 
  RefreshCw, 
  Plus,
  MoreHorizontal,
  Calendar,
  Download
} from 'lucide-react';

interface Mandate {
  id: string;
  name: string;
  ucc: string;
  arn: string;
  account: string;
  bank: string;
  startDate: string;
  endDate: string;
  umrn: string;
  bseMandateCode: string;
  amount: number;
  status: 'active' | 'pending' | 'expired';
}

const MandateListView = () => {
  const { toast } = useToast();
  const [mandates, setMandates] = useState<Mandate[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Mock data - replace with actual API call
  const mockMandates: Mandate[] = [
    {
      id: '1',
      name: 'RUSHIKESH DNYANDEV KARDILE',
      ucc: 'IW08402378',
      arn: 'ARN-225204',
      account: '40027370462',
      bank: 'State Bank of India',
      startDate: '22-05-2025',
      endDate: '21-05-2065',
      umrn: 'SBIN70222052520532296',
      bseMandateCode: '51166994',
      amount: 100000,
      status: 'active'
    },
    {
      id: '2',
      name: 'RUSHIKESH DNYANDEV KARDILE',
      ucc: 'IW31982552',
      arn: 'ARN-225204',
      account: '11298100001996',
      bank: 'Bank of Baroda',
      startDate: '28-01-2025',
      endDate: '27-01-2065',
      umrn: '',
      bseMandateCode: '47461828',
      amount: 200000,
      status: 'active'
    },
    {
      id: '3',
      name: 'DIVYA RAJENDRA GATE',
      ucc: 'BH10000185',
      arn: 'ARN-284751',
      account: '60211419174',
      bank: 'Bank of Maharashtra',
      startDate: '24-01-2025',
      endDate: '23-01-2065',
      umrn: '',
      bseMandateCode: '47328919',
      amount: 200000,
      status: 'active'
    },
    {
      id: '4',
      name: 'MILIND BAJARANG MANE',
      ucc: 'BH10000183',
      arn: 'ARN-284751',
      account: '31028499417',
      bank: 'State Bank of India',
      startDate: '18-01-2025',
      endDate: '17-01-2065',
      umrn: 'SBIN70318012510572205',
      bseMandateCode: '47175555',
      amount: 1000000,
      status: 'active'
    },
    {
      id: '5',
      name: 'SUNIL SAMBHAJI CHANDANSHIVE CHANDANS...',
      ucc: 'IW03371625',
      arn: 'ARN-225204',
      account: '924010033913942',
      bank: 'AXIS BANK',
      startDate: '17-01-2025',
      endDate: '16-01-2065',
      umrn: 'UTIB70317012510077746',
      bseMandateCode: '47144055',
      amount: 200000,
      status: 'active'
    }
  ];

  useEffect(() => {
    setMandates(mockMandates);
  }, []);

  const filteredMandates = mandates.filter(mandate =>
    mandate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mandate.ucc.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mandate.account.includes(searchQuery)
  );

  const stats = {
    all: mandates.length,
    active: mandates.filter(m => m.status === 'active').length,
    pending: mandates.filter(m => m.status === 'pending').length
  };

  const paginatedMandates = filteredMandates.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      toast({
        title: "File Upload",
        description: `Mandate list file uploaded: ${file.name}`,
      });
      // Process file upload here
    }
  };

  const handleSync = () => {
    setLoading(true);
    toast({
      title: "Syncing Mandates",
      description: "Synchronizing mandate data with BSE...",
    });
    
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Sync Complete",
        description: "Mandate data synchronized successfully.",
      });
    }, 2000);
  };

  const handleCreateMandate = () => {
    toast({
      title: "Create Mandate",
      description: "Opening mandate creation form...",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-orange-100 text-orange-800';
      case 'expired': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Search Mandates</h1>
        
        {/* Search and Upload Section */}
        <div className="flex items-center justify-between mb-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search Name and UCC"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Upload :</span>
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept=".csv,.xlsx,.xls"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <Button variant="outline" size="sm" className="text-blue-600 border-blue-600">
                  <Upload className="h-4 w-4 mr-1" />
                  Mandate List
                </Button>
              </label>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="flex items-center gap-6 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium">All Mandates: {stats.all}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium">Active : {stats.active}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
            <span className="text-sm font-medium">Pending : {stats.pending}</span>
          </div>
          
          <div className="ml-auto flex items-center gap-3">
            <Button onClick={handleSync} variant="outline" size="sm" disabled={loading}>
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Sync
            </Button>
            <Button onClick={handleCreateMandate} size="sm" className="bg-cyan-500 hover:bg-cyan-600">
              <Plus className="h-4 w-4 mr-2" />
              Create Mandate
            </Button>
          </div>
        </div>
      </div>

      {/* Mandate Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableHead className="font-semibold">Name</TableHead>
                <TableHead className="font-semibold">UCC</TableHead>
                <TableHead className="font-semibold">ARN</TableHead>
                <TableHead className="font-semibold">Account</TableHead>
                <TableHead className="font-semibold">Bank</TableHead>
                <TableHead className="font-semibold">
                  <div className="flex items-center gap-1">
                    Start Date
                    <Calendar className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead className="font-semibold">End Date</TableHead>
                <TableHead className="font-semibold">UMRN</TableHead>
                <TableHead className="font-semibold">BSE Mandate Code</TableHead>
                <TableHead className="font-semibold">Amount</TableHead>
                <TableHead className="font-semibold">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={11} className="text-center py-8">
                    Loading mandates...
                  </TableCell>
                </TableRow>
              ) : paginatedMandates.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={11} className="text-center py-8">
                    No mandates found
                  </TableCell>
                </TableRow>
              ) : (
                paginatedMandates.map((mandate) => (
                  <TableRow key={mandate.id} className="hover:bg-gray-50">
                    <TableCell className="font-medium text-sm">
                      {mandate.name}
                    </TableCell>
                    <TableCell className="text-sm text-blue-600">
                      {mandate.ucc}
                    </TableCell>
                    <TableCell className="text-sm">{mandate.arn}</TableCell>
                    <TableCell className="text-sm">{mandate.account}</TableCell>
                    <TableCell className="text-sm">{mandate.bank}</TableCell>
                    <TableCell className="text-sm">{mandate.startDate}</TableCell>
                    <TableCell className="text-sm">{mandate.endDate}</TableCell>
                    <TableCell className="text-sm font-mono">
                      {mandate.umrn || '-'}
                    </TableCell>
                    <TableCell className="text-sm">{mandate.bseMandateCode}</TableCell>
                    <TableCell className="text-sm font-semibold">
                      ₹{mandate.amount.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">
            Showing {paginatedMandates.length} of {filteredMandates.length} mandates
          </span>
          <Select value={itemsPerPage.toString()} onValueChange={(value) => setItemsPerPage(Number(value))}>
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span className="text-sm text-gray-600">
            Page {currentPage} of {Math.ceil(filteredMandates.length / itemsPerPage)}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.min(Math.ceil(filteredMandates.length / itemsPerPage), currentPage + 1))}
            disabled={currentPage >= Math.ceil(filteredMandates.length / itemsPerPage)}
          >
            Next
          </Button>
        </div>
      </div>

      {/* Export Options */}
      <div className="mt-4 flex justify-end">
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export Data
        </Button>
      </div>
    </div>
  );
};

export default MandateListView;
