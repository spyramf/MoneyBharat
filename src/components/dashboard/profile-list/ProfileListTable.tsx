
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Eye, Edit, MoreHorizontal } from 'lucide-react';

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

interface ProfileListTableProps {
  profiles: UCCProfile[];
  loading: boolean;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  itemsPerPage: number;
  setItemsPerPage: (items: number) => void;
}

const ProfileListTable = ({
  profiles,
  loading,
  currentPage,
  setCurrentPage,
  itemsPerPage,
  setItemsPerPage
}: ProfileListTableProps) => {
  const totalPages = Math.ceil(profiles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProfiles = profiles.slice(startIndex, startIndex + itemsPerPage);

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

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading profiles...</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>UCC Profiles</CardTitle>
        <Badge variant="secondary">{profiles.length} profiles</Badge>
      </CardHeader>
      <CardContent>
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
              {startIndex + 1}-{Math.min(startIndex + itemsPerPage, profiles.length)} of {profiles.length}
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
      </CardContent>
    </Card>
  );
};

export default ProfileListTable;
