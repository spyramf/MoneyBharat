import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import AdminLayout from '@/layouts/AdminLayout';
import { Calendar } from '@/components/ui/calendar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog';
import { format } from 'date-fns';
import { CalendarCheck, CalendarX, Trash2, Phone, Mail, Search, Filter, X } from 'lucide-react';
import { bookingDataService } from '@/services/bookingDataService';

const BookingManager = ({ initialBookings }) => {
  const [bookings, setBookings] = useState(initialBookings);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTab, setSelectedTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [bookingToDelete, setBookingToDelete] = useState<number | null>(null);
  const [bookingToUpdate, setBookingToUpdate] = useState<{id: number, status: 'confirmed' | 'cancelled'} | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);
  
  // Filter bookings
  const filteredBookings = bookings?.filter(booking => {
    // Filter by status tab
    if (selectedTab !== 'all' && booking.status !== selectedTab) {
      return false;
    }
    
    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = 
        booking.name.toLowerCase().includes(searchLower) ||
        booking.email.toLowerCase().includes(searchLower) ||
        booking.service.toLowerCase().includes(searchLower) ||
        booking.phone.includes(searchTerm);
      
      if (!matchesSearch) return false;
    }
    
    // Filter by selected date if a date is selected
    if (date) {
      const bookingDate = booking.date;
      const selectedDate = format(date, 'yyyy-MM-dd');
      return bookingDate === selectedDate;
    }
    
    return true;
  }) || [];

  const handleUpdateStatus = (id: number, status: 'confirmed' | 'cancelled') => {
    setBookingToUpdate({id, status});
    setIsUpdateDialogOpen(true);
  };
  
  const confirmUpdateStatus = async () => {
    if (bookingToUpdate) {
      // TODO: Call an API route to update the status
      console.log("Updating booking status:", bookingToUpdate);
      const message = bookingToUpdate.status === 'confirmed' 
        ? 'Booking confirmed successfully'
        : 'Booking cancelled';
        
      toast.success(message);
      setIsUpdateDialogOpen(false);
      setBookingToUpdate(null);
    }
  };
  
  const handleDeleteClick = (id: number) => {
    setBookingToDelete(id);
    setIsDeleteDialogOpen(true);
  };
  
  const confirmDelete = async () => {
    if (bookingToDelete) {
      // TODO: Call an API route to delete the booking
      console.log("Deleting booking with ID:", bookingToDelete);
      toast.success('Booking deleted successfully');
      setIsDeleteDialogOpen(false);
      setBookingToDelete(null);
    }
  };

  // Get the bookings for the selected date to display in the calendar card
  const selectedDateBookings = date 
    ? bookings?.filter(booking => booking.date === format(date, 'yyyy-MM-dd')) || []
    : [];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'cancelled': return 'bg-red-100 text-red-800 border-red-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // Count bookings by status
  const statusCounts = {
    all: bookings?.length || 0,
    pending: bookings?.filter(b => b.status === 'pending').length || 0,
    confirmed: bookings?.filter(b => b.status === 'confirmed').length || 0,
    cancelled: bookings?.filter(b => b.status === 'cancelled').length || 0,
  };

  const clearFilters = () => {
    setSearchTerm('');
    setDate(undefined);
    setSelectedTab('all');
  };

  const hasActiveFilters = searchTerm || date || selectedTab !== 'all';

  return (
    <AdminLayout>
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Booking Management</h1>
          <p className="text-gray-600 mt-1">Manage customer appointments and consultations</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <CardTitle>Bookings</CardTitle>
                  <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                    {/* Search */}
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search bookings..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-full sm:w-64"
                      />
                    </div>
                    
                    {/* Clear Filters */}
                    {hasActiveFilters && (
                      <Button variant="outline" size="sm" onClick={clearFilters}>
                        <X className="mr-1 h-4 w-4" />
                        Clear
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                <Tabs defaultValue="all" value={selectedTab} onValueChange={setSelectedTab}>
                  <div className="px-6 pb-4">
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="all" className="relative">
                        All
                        {statusCounts.all > 0 && (
                          <Badge variant="secondary" className="ml-2 text-xs">
                            {statusCounts.all}
                          </Badge>
                        )}
                      </TabsTrigger>
                      <TabsTrigger value="pending" className="relative">
                        Pending
                        {statusCounts.pending > 0 && (
                          <Badge variant="outline" className="ml-2 text-xs border-yellow-300 text-yellow-600">
                            {statusCounts.pending}
                          </Badge>
                        )}
                      </TabsTrigger>
                      <TabsTrigger value="confirmed" className="relative">
                        Confirmed
                        {statusCounts.confirmed > 0 && (
                          <Badge variant="outline" className="ml-2 text-xs border-green-300 text-green-600">
                            {statusCounts.confirmed}
                          </Badge>
                        )}
                      </TabsTrigger>
                      <TabsTrigger value="cancelled" className="relative">
                        Cancelled
                        {statusCounts.cancelled > 0 && (
                          <Badge variant="outline" className="ml-2 text-xs border-red-300 text-red-600">
                            {statusCounts.cancelled}
                          </Badge>
                        )}
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  
                  <TabsContent value={selectedTab} className="mt-0">
                    {filteredBookings.length === 0 ? (
                      <div className="text-center py-12">
                        <div className="text-gray-400 mb-4">
                          {hasActiveFilters ? (
                            <Filter className="w-12 h-12 mx-auto" />
                          ) : (
                            <CalendarCheck className="w-12 h-12 mx-auto" />
                          )}
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          {hasActiveFilters ? 'No bookings match your filters' : 'No bookings found'}
                        </h3>
                        <p className="text-gray-500 mb-4">
                          {hasActiveFilters 
                            ? 'Try adjusting your search criteria or date selection' 
                            : 'Customer bookings will appear here when they schedule appointments'}
                        </p>
                        {hasActiveFilters && (
                          <Button variant="outline" onClick={clearFilters}>
                            Clear filters
                          </Button>
                        )}
                      </div>
                    ) : (
                      <div className="overflow-x-auto">
                        <Table>
                          <TableHeader>
                            <TableRow className="bg-gray-50">
                              <TableHead className="font-semibold">Client Details</TableHead>
                              <TableHead className="font-semibold">Service</TableHead>
                              <TableHead className="font-semibold">Date & Time</TableHead>
                              <TableHead className="font-semibold">Status</TableHead>
                              <TableHead className="font-semibold text-right">Actions</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {filteredBookings.map(booking => (
                              <TableRow key={booking.id} className="hover:bg-gray-50">
                                <TableCell>
                                  <div className="space-y-1">
                                    <p className="font-medium text-gray-900">{booking.name}</p>
                                    <div className="flex flex-col gap-1 text-sm text-gray-500">
                                      <div className="flex items-center">
                                        <Mail className="h-3 w-3 mr-1" />
                                        <span>{booking.email}</span>
                                      </div>
                                      <div className="flex items-center">
                                        <Phone className="h-3 w-3 mr-1" />
                                        <span>{booking.phone}</span>
                                      </div>
                                    </div>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <div>
                                    <p className="font-medium text-gray-900">{booking.service}</p>
                                    {booking.message && (
                                      <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                                        {booking.message}
                                      </p>
                                    )}
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <div className="text-sm">
                                    <p className="font-medium text-gray-900">{booking.date}</p>
                                    <p className="text-gray-500">{booking.time}</p>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <Badge className={getStatusColor(booking.status)}>
                                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                  </Badge>
                                </TableCell>
                                <TableCell>
                                  <div className="flex justify-end gap-1">
                                    {booking.status === 'pending' && (
                                      <Button 
                                        size="sm" 
                                        variant="outline"
                                        className="text-green-600 border-green-300 hover:bg-green-50"
                                        onClick={() => handleUpdateStatus(booking.id, 'confirmed')}
                                      >
                                        <CalendarCheck className="h-4 w-4 mr-1" /> 
                                        Confirm
                                      </Button>
                                    )}
                                    {booking.status !== 'cancelled' && (
                                      <Button 
                                        size="sm" 
                                        variant="outline"
                                        className="text-red-600 border-red-300 hover:bg-red-50"
                                        onClick={() => handleUpdateStatus(booking.id, 'cancelled')}
                                      >
                                        <CalendarX className="h-4 w-4 mr-1" />
                                        Cancel
                                      </Button>
                                    )}
                                    <Button 
                                      variant="ghost" 
                                      size="sm" 
                                      className="text-red-600 hover:bg-red-50 h-8 w-8 p-0"
                                      onClick={() => handleDeleteClick(booking.id)}
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
          
          {/* Calendar Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  initialFocus
                />
                
                <div className="mt-4">
                  <h3 className="font-medium mb-3">
                    {date ? format(date, 'EEEE, MMMM d') : 'Select a date'}
                  </h3>
                  
                  {selectedDateBookings.length > 0 ? (
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {selectedDateBookings.map(booking => (
                        <div key={booking.id} className="p-3 rounded-lg bg-gray-50 border text-sm">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">{booking.time}</span>
                            <Badge className={getStatusColor(booking.status)}>
                              {booking.status}
                            </Badge>
                          </div>
                          <div className="space-y-1">
                            <p className="font-medium text-gray-900">{booking.name}</p>
                            <p className="text-gray-600">{booking.service}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : date ? (
                    <div className="text-center p-4 bg-gray-50 rounded-md">
                      <p className="text-gray-500">No bookings for this date</p>
                    </div>
                  ) : (
                    <div className="text-center p-4 bg-gray-50 rounded-md">
                      <p className="text-gray-500">Select a date to view bookings</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Status update confirmation dialog */}
      <AlertDialog open={isUpdateDialogOpen} onOpenChange={setIsUpdateDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {bookingToUpdate?.status === 'confirmed' ? 'Confirm Booking' : 'Cancel Booking'}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {bookingToUpdate?.status === 'confirmed'
                ? 'Are you sure you want to confirm this booking? The customer will be notified of the confirmation.'
                : 'Are you sure you want to cancel this booking? The customer will be notified of the cancellation.'}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmUpdateStatus}
              className={bookingToUpdate?.status === 'confirmed' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}
            >
              {bookingToUpdate?.status === 'confirmed' ? 'Confirm Booking' : 'Cancel Booking'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
      {/* Delete confirmation dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Booking</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this booking? This action cannot be undone and all booking data will be permanently removed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Delete Booking
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </AdminLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false,
      },
    };
  }

  const { data: userRole } = await supabase
    .from('user_roles')
    .select('role')
    .eq('user_id', session.user.id)
    .single();

  if (userRole?.role !== 'admin') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  
  const bookings = await bookingDataService.getAllBookings();

  return {
    props: {
      initialSession: session,
      user: session.user,
      initialBookings: bookings || [],
    },
  };
};

export default BookingManager;
