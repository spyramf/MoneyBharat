
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useInvestorAuth } from '@/context/InvestorAuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import InvestorLayout from '@/components/InvestorLayout';
import { 
  Search, 
  Plus, 
  Upload, 
  Settings, 
  Edit, 
  Eye, 
  Trash2,
  Filter,
  Download
} from 'lucide-react';

interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  family_head_id: string | null;
  relationship_manager: string;
  investment_amount: number;
  sip_amount: number;
  aum: number;
  kyc_status: string;
  onboarding_status: string;
  family_relationship: string;
  created_at: string;
}

const InvestorClients = () => {
  const { user } = useInvestorAuth();
  const { toast } = useToast();
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFamilyHeadsOnly, setShowFamilyHeadsOnly] = useState(false);
  const [selectedClients, setSelectedClients] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  useEffect(() => {
    if (user) {
      fetchClients();
    }
  }, [user, showFamilyHeadsOnly]);

  const fetchClients = async () => {
    try {
      setLoading(true);
      let query = supabase
        .from('clients')
        .select('*')
        .eq('investor_id', user?.id);

      if (showFamilyHeadsOnly) {
        query = query.is('family_head_id', null);
      }

      const { data, error } = await query.order('created_at', { ascending: false });

      if (error) throw error;
      setClients(data || []);
    } catch (error) {
      console.error('Error fetching clients:', error);
      toast({
        title: "Error",
        description: "Failed to fetch clients",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    client.phone?.includes(searchQuery)
  );

  const paginatedClients = filteredClients.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleSelectAll = (checked: boolean | "indeterminate") => {
    if (checked === true) {
      setSelectedClients(paginatedClients.map(client => client.id));
    } else {
      setSelectedClients([]);
    }
  };

  const handleSelectClient = (clientId: string, checked: boolean | "indeterminate") => {
    if (checked === true) {
      setSelectedClients([...selectedClients, clientId]);
    } else {
      setSelectedClients(selectedClients.filter(id => id !== clientId));
    }
  };

  const handleShowFamilyHeadsChange = (checked: boolean | "indeterminate") => {
    setShowFamilyHeadsOnly(checked === true);
  };

  const getFamilyHeadName = (client: Client) => {
    if (!client.family_head_id) return 'Self';
    const familyHead = clients.find(c => c.id === client.family_head_id);
    return familyHead?.name || 'Unknown';
  };

  const getKycStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'rejected': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <InvestorLayout currentPage="clients">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Clients</h1>
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <Upload className="h-4 w-4 mr-2" />
              Upload
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Customize Columns
            </Button>
            <Button className="bg-teal-600 hover:bg-teal-700">
              <Plus className="h-4 w-4 mr-2" />
              Create New Investor
            </Button>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="family-heads"
                checked={showFamilyHeadsOnly}
                onCheckedChange={handleShowFamilyHeadsChange}
              />
              <label htmlFor="family-heads" className="text-sm font-medium">
                Show Family Heads Only
              </label>
            </div>
            <Button variant="link" className="text-blue-600 p-0" onClick={() => setShowFamilyHeadsOnly(false)}>
              Show All Clients
            </Button>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search clients..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Table */}
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox
                      checked={selectedClients.length === paginatedClients.length && paginatedClients.length > 0}
                      onCheckedChange={handleSelectAll}
                    />
                  </TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Family Head</TableHead>
                  <TableHead>Relationship Manager</TableHead>
                  <TableHead>AUM</TableHead>
                  <TableHead>SIP Amount</TableHead>
                  <TableHead>KYC Status</TableHead>
                  <TableHead>Onboarding</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={11} className="text-center py-8">
                      Loading clients...
                    </TableCell>
                  </TableRow>
                ) : paginatedClients.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={11} className="text-center py-8">
                      No clients found
                    </TableCell>
                  </TableRow>
                ) : (
                  paginatedClients.map((client) => (
                    <TableRow key={client.id}>
                      <TableCell>
                        <Checkbox
                          checked={selectedClients.includes(client.id)}
                          onCheckedChange={(checked) => handleSelectClient(client.id, checked)}
                        />
                      </TableCell>
                      <TableCell className="font-medium">{client.name}</TableCell>
                      <TableCell>{client.email || '-'}</TableCell>
                      <TableCell>{client.phone || '-'}</TableCell>
                      <TableCell>{getFamilyHeadName(client)}</TableCell>
                      <TableCell>{client.relationship_manager || '-'}</TableCell>
                      <TableCell>₹{client.aum?.toLocaleString() || '0'}</TableCell>
                      <TableCell>₹{client.sip_amount?.toLocaleString() || '0'}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getKycStatusColor(client.kyc_status)}`}>
                          {client.kyc_status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${client.onboarding_status === 'completed' ? 'text-green-600 bg-green-100' : 'text-orange-600 bg-orange-100'}`}>
                          {client.onboarding_status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              {paginatedClients.length} rows visible out of {filteredClients.length}
            </span>
            <Select value={rowsPerPage.toString()} onValueChange={(value) => setRowsPerPage(Number(value))}>
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
              Page {currentPage} of {Math.ceil(filteredClients.length / rowsPerPage)}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(Math.min(Math.ceil(filteredClients.length / rowsPerPage), currentPage + 1))}
              disabled={currentPage >= Math.ceil(filteredClients.length / rowsPerPage)}
            >
              Next
            </Button>
          </div>
        </div>

        {/* Bulk Actions */}
        {selectedClients.length > 0 && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg border p-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium">
                {selectedClients.length} client{selectedClients.length > 1 ? 's' : ''} selected
              </span>
              <Button variant="outline" size="sm">
                Email Selected
              </Button>
              <Button variant="outline" size="sm">
                Export Selected
              </Button>
              <Button variant="outline" size="sm">
                Update Status
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedClients([])}
              >
                Clear Selection
              </Button>
            </div>
          </div>
        )}
      </div>
    </InvestorLayout>
  );
};

export default InvestorClients;
