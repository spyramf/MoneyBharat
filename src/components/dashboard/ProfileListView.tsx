import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { useInvestorAuth } from '@/context/InvestorAuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { 
  Search, 
  Upload, 
  RefreshCw,
  ExternalLink,
  Plus,
  MoreHorizontal,
  Users,
  CheckCircle,
  Clock,
  Download,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';

interface UCCProfile {
  id: string;
  name: string;
  ucc_code: string;
  email: string;
  phone: string;
  pan_number: string;
  holding_type: string;
  kyc_status: string;
  ucc_status: string;
  created_date: string;
  last_transaction: string;
  aum: number;
  is_available: boolean;
}

const ProfileListView = () => {
  const { user } = useInvestorAuth();
  const { toast } = useToast();
  const [profiles, setProfiles] = useState<UCCProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [uccAvailableOnly, setUccAvailableOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Mock data for demonstration
  const mockProfiles: UCCProfile[] = [
    {
      id: '1',
      name: 'RAJESH KUMAR',
      ucc_code: 'BSE123456789',
      email: 'rajesh.kumar@email.com',
      phone: '+91 9876543210',
      pan_number: 'ABCDE1234F',
      holding_type: 'Single',
      kyc_status: 'Verified',
      ucc_status: 'Active',
      created_date: '2024-01-15',
      last_transaction: '2024-05-20',
      aum: 250000,
      is_available: true
    },
    {
      id: '2',
      name: 'PRIYA SHARMA',
      ucc_code: 'BSE987654321',
      email: 'priya.sharma@email.com',
      phone: '+91 9876543211',
      pan_number: 'FGHIJ5678K',
      holding_type: 'Joint',
      kyc_status: 'Pending',
      ucc_status: 'Inactive',
      created_date: '2024-02-10',
      last_transaction: '2024-03-15',
      aum: 180000,
      is_available: false
    },
    {
      id: '3',
      name: 'AMIT PATEL',
      ucc_code: 'BSE456789123',
      email: 'amit.patel@email.com',
      phone: '+91 9876543212',
      pan_number: 'KLMNO9012P',
      holding_type: 'Single',
      kyc_status: 'Verified',
      ucc_status: 'Active',
      created_date: '2024-03-01',
      last_transaction: '2024-06-01',
      aum: 320000,
      is_available: true
    }
  ];

  useEffect(() => {
    // For now, using mock data. In real implementation, fetch from Supabase
    setProfiles(mockProfiles);
    setLoading(false);
  }, []);

  const filteredProfiles = profiles.filter(profile => {
    const matchesSearch = profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         profile.ucc_code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         profile.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesAvailability = !uccAvailableOnly || profile.is_available;
    
    return matchesSearch && matchesAvailability;
  });

  const totalPages = Math.ceil(filteredProfiles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProfiles = filteredProfiles.slice(startIndex, startIndex + itemsPerPage);

  const stats = {
    activeUCC: profiles.filter(p => p.ucc_status === 'Active').length,
    pendingUCC: profiles.filter(p => p.ucc_status === 'Inactive' || p.kyc_status === 'Pending').length,
    totalProfiles: profiles.length,
    availableUCC: profiles.filter(p => p.is_available).length
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, type: 'mandate' | 'ucc') => {
    const file = event.target.files?.[0];
    if (file) {
      toast({
        title: "File Upload",
        description: `${type === 'mandate' ? 'Mandate' : 'UCC'} list file uploaded: ${file.name}`,
      });
      // In real implementation, process the file here
    }
  };

  const handleSync = () => {
    setLoading(true);
    toast({
      title: "Syncing Data",
      description: "Synchronizing with BSE portal...",
    });
    
    // Simulate sync operation
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Sync Complete",
        description: "Data synchronized successfully with BSE portal.",
      });
    }, 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
      case 'verified':
        return 'bg-green-100 text-green-800';
      case 'pending':
      case 'inactive':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Profile List (UCC Management)</h1>
          <p className="text-gray-600">Manage BSE UCC profiles and client accounts</p>
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={handleSync} variant="outline" size="sm" disabled={loading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Sync
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href="https://bsestarmf.in" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Login to BSE Portal
            </a>
          </Button>
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
            <Plus className="h-4 w-4 mr-2" />
            Create UCC
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active UCC</p>
                <p className="text-2xl font-bold text-green-600">{stats.activeUCC}</p>
              </div>
              <div className="p-3 rounded-full bg-green-50">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending UCC</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.pendingUCC}</p>
              </div>
              <div className="p-3 rounded-full bg-yellow-50">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Profiles</p>
                <p className="text-2xl font-bold text-blue-600">{stats.totalProfiles}</p>
              </div>
              <div className="p-3 rounded-full bg-blue-50">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Available UCC</p>
                <p className="text-2xl font-bold text-purple-600">{stats.availableUCC}</p>
              </div>
              <div className="p-3 rounded-full bg-purple-50">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Upload Section */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by Name or UCC..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch
                id="ucc-available"
                checked={uccAvailableOnly}
                onCheckedChange={setUccAvailableOnly}
              />
              <label htmlFor="ucc-available" className="text-sm font-medium">
                UCC Available Only
              </label>
            </div>

            <div className="flex gap-2">
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept=".xlsx,.xls,.csv"
                  className="hidden"
                  onChange={(e) => handleFileUpload(e, 'mandate')}
                />
                <Button variant="outline" size="sm" asChild>
                  <span>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Mandate List
                  </span>
                </Button>
              </label>

              <label className="cursor-pointer">
                <input
                  type="file"
                  accept=".xlsx,.xls,.csv"
                  className="hidden"
                  onChange={(e) => handleFileUpload(e, 'ucc')}
                />
                <Button variant="outline" size="sm" asChild>
                  <span>
                    <Upload className="h-4 w-4 mr-2" />
                    Upload UCC List
                  </span>
                </Button>
              </label>

              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Table */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>UCC Profiles</CardTitle>
          <Badge variant="secondary">{filteredProfiles.length} profiles</Badge>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading profiles...</p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>UCC Code</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>PAN</TableHead>
                      <TableHead>Holding Type</TableHead>
                      <TableHead>KYC Status</TableHead>
                      <TableHead>UCC Status</TableHead>
                      <TableHead>AUM</TableHead>
                      <TableHead>Last Transaction</TableHead>
                      <TableHead>Available</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paginatedProfiles.map((profile) => (
                      <TableRow key={profile.id}>
                        <TableCell className="font-medium">{profile.name}</TableCell>
                        <TableCell>
                          <Button variant="link" className="p-0 h-auto text-blue-600">
                            {profile.ucc_code}
                          </Button>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div>{profile.email}</div>
                            <div className="text-gray-500">{profile.phone}</div>
                          </div>
                        </TableCell>
                        <TableCell>{profile.pan_number}</TableCell>
                        <TableCell>{profile.holding_type}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(profile.kyc_status)}>
                            {profile.kyc_status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(profile.ucc_status)}>
                            {profile.ucc_status}
                          </Badge>
                        </TableCell>
                        <TableCell>₹{profile.aum.toLocaleString()}</TableCell>
                        <TableCell>{new Date(profile.last_transaction).toLocaleDateString()}</TableCell>
                        <TableCell>
                          <Badge className={profile.is_available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                            {profile.is_available ? 'Yes' : 'No'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">Rows per page:</span>
                  <Select value={itemsPerPage.toString()} onValueChange={(value) => setItemsPerPage(Number(value))}>
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">
                    {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredProfiles.length)} of {filteredProfiles.length}
                  </span>
                  
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                          className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                        />
                      </PaginationItem>
                      
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        const pageNum = i + 1;
                        return (
                          <PaginationItem key={pageNum}>
                            <PaginationLink
                              onClick={() => setCurrentPage(pageNum)}
                              isActive={currentPage === pageNum}
                              className="cursor-pointer"
                            >
                              {pageNum}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      })}
                      
                      <PaginationItem>
                        <PaginationNext 
                          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                          className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileListView;
