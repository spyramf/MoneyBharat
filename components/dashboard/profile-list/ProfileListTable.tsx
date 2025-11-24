
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MoreVertical, Eye, Edit, Trash2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { UCCProfile } from './types';

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
  const endIndex = startIndex + itemsPerPage;
  const currentProfiles = profiles.slice(startIndex, endIndex);

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      'Active': { variant: 'default' as const, className: 'bg-green-100 text-green-800 hover:bg-green-100' },
      'Inactive': { variant: 'secondary' as const, className: 'bg-red-100 text-red-800 hover:bg-red-100' },
      'Pending': { variant: 'outline' as const, className: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100' }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig['Pending'];
    
    return (
      <Badge variant={config.variant} className={config.className}>
        {status}
      </Badge>
    );
  };

  const getKycStatusBadge = (status: string) => {
    const statusConfig = {
      'Verified': { variant: 'default' as const, className: 'bg-green-100 text-green-800 hover:bg-green-100' },
      'Pending': { variant: 'outline' as const, className: 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100' },
      'Rejected': { variant: 'secondary' as const, className: 'bg-red-100 text-red-800 hover:bg-red-100' }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig['Pending'];
    
    return (
      <Badge variant={config.variant} className={config.className}>
        {status}
      </Badge>
    );
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2 text-gray-600">Loading profiles...</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50">
                  <TableHead className="font-semibold text-gray-700">BSE Name/PAN</TableHead>
                  <TableHead className="font-semibold text-gray-700">UCC</TableHead>
                  <TableHead className="font-semibold text-gray-700">ARN</TableHead>
                  <TableHead className="font-semibold text-gray-700">Tax Status</TableHead>
                  <TableHead className="font-semibold text-gray-700">Mode of Holding</TableHead>
                  <TableHead className="font-semibold text-gray-700">Joint Name 1</TableHead>
                  <TableHead className="font-semibold text-gray-700">Joint Name 2</TableHead>
                  <TableHead className="font-semibold text-gray-700">Guardian</TableHead>
                  <TableHead className="font-semibold text-gray-700">Mandate Amount</TableHead>
                  <TableHead className="font-semibold text-gray-700">Type</TableHead>
                  <TableHead className="font-semibold text-gray-700">BSE Create Date</TableHead>
                  <TableHead className="font-semibold text-gray-700">Nomination Auth Date</TableHead>
                  <TableHead className="font-semibold text-gray-700">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentProfiles.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={13} className="text-center py-8 text-gray-500">
                      No profiles found
                    </TableCell>
                  </TableRow>
                ) : (
                  currentProfiles.map((profile) => (
                    <TableRow key={profile.id} className="hover:bg-gray-50">
                      <TableCell>
                        <div className="space-y-1">
                          <div className="font-medium text-gray-900">{profile.name}</div>
                          <div className="text-sm text-gray-500">{profile.pan_number}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-blue-600 font-medium">{profile.ucc_code}</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-gray-600">ARN-{profile.id.slice(0, 6)}</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-gray-600">Individual</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-gray-600">{profile.holding_type}</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-gray-600">-</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-gray-600">-</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-gray-600">-</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-blue-600 font-medium">
                          {formatCurrency(profile.aum)}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="text-gray-600">Physical</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-gray-600">{formatDate(profile.created_date)}</span>
                      </TableCell>
                      <TableCell>
                        <span className="text-gray-600">{formatDate(profile.last_transaction)}</span>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuItem>
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="h-4 w-4 mr-2" />
                              Edit Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Pagination */}
      {profiles.length > 0 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">
            Showing {startIndex + 1} to {Math.min(endIndex, profiles.length)} of {profiles.length} profiles
          </div>
          
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                />
              </PaginationItem>
              
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const pageNumber = i + 1;
                return (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink
                      onClick={() => setCurrentPage(pageNumber)}
                      isActive={currentPage === pageNumber}
                      className="cursor-pointer"
                    >
                      {pageNumber}
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
      )}
    </div>
  );
};

export default ProfileListTable;
