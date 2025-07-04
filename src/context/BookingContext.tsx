
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';
import { bookingDataService } from '@/services/bookingDataService';

export type Booking = {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
};

interface BookingContextType {
  bookings: Booking[];
  addBooking: (booking: Omit<Booking, 'id' | 'status' | 'createdAt'>) => Promise<void>;
  updateBookingStatus: (id: number, status: 'confirmed' | 'cancelled') => void;
  deleteBooking: (id: number) => void;
  refreshBookings: () => void;
  exportBookings: () => string;
  importBookings: (jsonData: string) => { success: boolean; error?: string };
  isLoading: boolean;
  error: Error | null;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

interface BookingProviderProps {
  children: ReactNode;
}

export const BookingProvider = ({ children }: BookingProviderProps) => {
  const { toast } = useToast();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error] = useState<Error | null>(null);

  // Load bookings on mount
  useEffect(() => {
    refreshBookings();
  }, []);

  const refreshBookings = () => {
    setBookings(bookingDataService.getAllBookings());
  };

  const addBooking = async (booking: Omit<Booking, 'id' | 'status' | 'createdAt'>) => {
    setIsLoading(true);
    
    try {
      // Add to local storage
      const newBooking = bookingDataService.addBooking(booking);
      setBookings(bookingDataService.getAllBookings());

      // Send email notification via FormSubmit
      const formData = new FormData();
      formData.append('name', booking.name);
      formData.append('email', booking.email);
      formData.append('phone', booking.phone);
      formData.append('service', booking.service);
      formData.append('date', booking.date);
      formData.append('time', booking.time);
      formData.append('message', booking.message || '');
      formData.append('_subject', `New Booking Request from ${booking.name}`);
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');

      // Submit to FormSubmit (this will handle email sending)
      const response = await fetch('https://formsubmit.co/spyraexim@gmail.com', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        toast({
          title: "Booking submitted successfully!",
          description: "We'll get back to you within 24 hours to confirm your appointment.",
        });
      } else {
        // Even if email fails, booking is saved locally
        toast({
          title: "Booking saved locally",
          description: "Your booking has been saved, but email notification may have failed.",
        });
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      // Booking is still saved locally even if email fails
      toast({
        title: "Booking saved",
        description: "Your booking has been saved locally. Email notification may have failed.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateBookingStatus = (id: number, status: 'confirmed' | 'cancelled') => {
    const success = bookingDataService.updateBookingStatus(id, status);
    if (success) {
      setBookings(bookingDataService.getAllBookings());
      toast({
        title: status === 'confirmed' ? "Booking confirmed" : "Booking cancelled",
        description: `Booking has been ${status} successfully.`,
      });
    }
  };

  const deleteBooking = (id: number) => {
    const success = bookingDataService.deleteBooking(id);
    if (success) {
      setBookings(bookingDataService.getAllBookings());
      toast({
        title: "Booking deleted",
        description: "Booking has been removed successfully.",
      });
    }
  };

  const exportBookings = (): string => {
    return bookingDataService.exportBookings();
  };

  const importBookings = (jsonData: string): { success: boolean; error?: string } => {
    const result = bookingDataService.importBookings(jsonData);
    if (result.success) {
      setBookings(bookingDataService.getAllBookings());
      toast({
        title: "Bookings imported",
        description: "Bookings have been imported successfully.",
      });
    } else {
      toast({
        title: "Import failed",
        description: result.error || "Failed to import bookings.",
        variant: "destructive",
      });
    }
    return result;
  };

  const value = {
    bookings,
    addBooking,
    updateBookingStatus,
    deleteBooking,
    refreshBookings,
    exportBookings,
    importBookings,
    isLoading,
    error,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};
