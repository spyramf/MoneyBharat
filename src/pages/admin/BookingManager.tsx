
import { useState, useEffect } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { Calendar } from '@/components/ui/calendar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useBooking } from '@/context/BookingContext';
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
import { CalendarCheck, CalendarX, Trash2 } from 'lucide-react';

const BookingManager = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTab, setSelectedTab] = useState('all');
  const [bookingToDelete, setBookingToDelete] = useState<number | null>(null);
  const [bookingToUpdate, setBookingToUpdate] = useState<{id: number, status: 'confirmed' | 'cancelled'} | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);
  
  const { bookings, updateBookingStatus, deleteBooking } = useBooking();
  
  const filteredBookings = bookings.filter(booking => {
    // Filter by status tab
    if (selectedTab !== 'all') {
      if (booking.status !== selectedTab) return false;
    }
    
    // Filter by selected date if a date is selected
    if (date) {
      const bookingDate = booking.date;
      const selectedDate = format(date, 'yyyy-MM-dd');
      return bookingDate === selectedDate;
    }
    
    return true;
  });

  const handleUpdateStatus = (id: number, status: 'confirmed' | 'cancelled') => {
    setBookingToUpdate({id, status});
    setIsUpdateDialogOpen(true);
  };
  
  const confirmUpdateStatus = () => {
    if (bookingToUpdate) {
      updateBookingStatus(bookingToUpdate.id, bookingToUpdate.status);
      
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
  
  const confirmDelete = () => {
    if (bookingToDelete) {
      deleteBooking(bookingToDelete);
      toast.success('Booking deleted successfully');
      setIsDeleteDialogOpen(false);
      setBookingToDelete(null);
    }
  };

  // Get the bookings for the selected date to display in the calendar card
  const selectedDateBookings = date 
    ? bookings.filter(booking => booking.date === format(date, 'yyyy-MM-dd'))
    : [];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'confirmed': return 'bg-green-500 text-white';
      case 'cancelled': return 'bg-red-500 text-white';
      default: return 'bg-yellow-500 text-white';
    }
  };

  return (
    <AdminLayout>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-8">Booking Management</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2">
            <CardContent className="p-6">
              <Tabs defaultValue="all" onValueChange={setSelectedTab}>
                <div className="flex justify-between items-center mb-6">
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="pending">Pending</TabsTrigger>
                    <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
                    <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value={selectedTab} className="mt-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Client</TableHead>
                        <TableHead>Service</TableHead>
                        <TableHead>Date & Time</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredBookings.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={5} className="text-center py-6">
                            No bookings found
                          </TableCell>
                        </TableRow>
                      ) : (
                        filteredBookings.map(booking => (
                          <TableRow key={booking.id}>
                            <TableCell>
                              <div>
                                <div className="font-medium">{booking.name}</div>
                                <div className="text-sm text-gray-500">{booking.email}</div>
                                <div className="text-sm text-gray-500">{booking.phone}</div>
                              </div>
                            </TableCell>
                            <TableCell>{booking.service}</TableCell>
                            <TableCell>
                              <div>{booking.date}</div>
                              <div className="text-sm text-gray-500">{booking.time}</div>
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={booking.status === 'confirmed' ? 'default' : 
                                        booking.status === 'pending' ? 'outline' : 'destructive'}
                              >
                                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex justify-end gap-2">
                                {booking.status === 'pending' && (
                                  <Button 
                                    size="sm" 
                                    className="bg-green-600 hover:bg-green-700"
                                    onClick={() => handleUpdateStatus(booking.id, 'confirmed')}
                                  >
                                    <CalendarCheck className="h-4 w-4 mr-1" /> 
                                    Confirm
                                  </Button>
                                )}
                                {booking.status !== 'cancelled' && (
                                  <Button 
                                    size="sm" 
                                    variant="destructive" 
                                    onClick={() => handleUpdateStatus(booking.id, 'cancelled')}
                                  >
                                    <CalendarX className="h-4 w-4 mr-1" />
                                    Cancel
                                  </Button>
                                )}
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="text-red-500"
                                  onClick={() => handleDeleteClick(booking.id)}
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Booking Calendar</CardTitle>
            </CardHeader>
            <CardContent className="pb-6">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border mb-4"
                initialFocus
              />
              
              <div className="mt-4">
                <h3 className="font-medium mb-2">
                  {date ? format(date, 'EEEE, MMMM d, yyyy') : 'No date selected'}
                </h3>
                
                {selectedDateBookings.length > 0 ? (
                  <div className="space-y-2">
                    {selectedDateBookings.map(booking => (
                      <div key={booking.id} className="p-3 rounded bg-gray-50 text-sm border">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{booking.time}</span>
                          <Badge className={getStatusColor(booking.status)}>
                            {booking.status}
                          </Badge>
                        </div>
                        <div className="font-medium mt-1">{booking.name}</div>
                        <div className="text-gray-500">{booking.service}</div>
                      </div>
                    ))}
                  </div>
                ) : date ? (
                  <div className="text-center p-4 bg-gray-50 rounded-md">
                    <p className="text-gray-500">No bookings for this date</p>
                  </div>
                ) : null}
              </div>
            </CardContent>
          </Card>
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
                ? 'Are you sure you want to confirm this booking? This will update the booking status to confirmed.'
                : 'Are you sure you want to cancel this booking? This will update the booking status to cancelled.'}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmUpdateStatus}
              className={bookingToUpdate?.status === 'confirmed' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'}
            >
              {bookingToUpdate?.status === 'confirmed' ? 'Yes, Confirm Booking' : 'Yes, Cancel Booking'}
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
              Are you sure you want to delete this booking? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Yes, Delete Booking
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </AdminLayout>
  );
};

export default BookingManager;
