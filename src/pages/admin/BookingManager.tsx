
import { useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { Calendar } from '@/components/ui/calendar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useBooking } from '@/context/BookingContext';
import { toast } from 'sonner';

const BookingManager = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTab, setSelectedTab] = useState('all');
  
  const { bookings, updateBookingStatus, deleteBooking } = useBooking();
  
  const filteredBookings = bookings.filter(booking => {
    if (selectedTab === 'all') return true;
    return booking.status === selectedTab;
  });

  const formattedDate = date ? date.toISOString().split('T')[0] : '';
  
  const handleConfirm = (id: number) => {
    updateBookingStatus(id, 'confirmed');
    toast.success('Booking confirmed successfully');
  };
  
  const handleCancel = (id: number) => {
    updateBookingStatus(id, 'cancelled');
    toast.error('Booking cancelled');
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      deleteBooking(id);
      toast.success('Booking deleted successfully');
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
                                  <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => handleConfirm(booking.id)}>
                                    Confirm
                                  </Button>
                                )}
                                {booking.status !== 'cancelled' && (
                                  <Button size="sm" variant="destructive" onClick={() => handleCancel(booking.id)}>
                                    Cancel
                                  </Button>
                                )}
                                <Button variant="outline" size="sm" className="text-red-500" onClick={() => handleDelete(booking.id)}>
                                  Delete
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
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">Booking Calendar</h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
              />
              <div className="mt-4">
                <h3 className="font-medium mb-2">
                  {date ? date.toLocaleDateString('en-US', { dateStyle: 'full' }) : 'No date selected'}
                </h3>
                {date && (
                  <div className="space-y-2">
                    {bookings
                      .filter(booking => booking.date === formattedDate)
                      .map(booking => (
                        <div key={booking.id} className="p-2 rounded bg-gray-50 text-sm">
                          <div className="font-medium">{booking.time} - {booking.name}</div>
                          <div className="text-gray-500">{booking.service}</div>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default BookingManager;
