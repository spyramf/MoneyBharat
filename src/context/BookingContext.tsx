
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
      
      console.log('Booking saved to localStorage:', newBooking);
    } catch (error) {
      console.error('Error saving booking:', error);
      throw error;
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
