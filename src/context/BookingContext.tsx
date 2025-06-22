import React, { createContext, useContext, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

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
  updateBookingStatus: (id: number, status: 'pending' | 'confirmed' | 'cancelled') => Promise<void>;
  deleteBooking: (id: number) => Promise<void>;
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

// Function to fetch bookings from Supabase
const fetchBookings = async (): Promise<Booking[]> => {
  try {
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching bookings:', error);
      throw new Error('Failed to fetch bookings');
    }

    // Map from Supabase format to our app's format
    return (data || []).map(booking => ({
      id: booking.id,
      name: booking.name,
      email: booking.email,
      phone: booking.phone,
      service: booking.service,
      date: booking.date,
      time: booking.time,
      message: booking.message,
      status: booking.status as 'pending' | 'confirmed' | 'cancelled',
      createdAt: booking.created_at
    }));
  } catch (error) {
    console.error('Error in fetchBookings:', error);
    return [];
  }
};

export const BookingProvider = ({ children }: BookingProviderProps) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Query to fetch bookings
  const { data: bookings = [], isLoading, error } = useQuery({
    queryKey: ['bookings'],
    queryFn: fetchBookings,
  });

  // Add booking mutation
  const addBookingMutation = useMutation({
    mutationFn: async (booking: Omit<Booking, 'id' | 'status' | 'createdAt'>) => {
      try {
        const { data, error } = await supabase
          .from('bookings')
          .insert({
            name: booking.name,
            email: booking.email,
            phone: booking.phone,
            service: booking.service,
            date: booking.date,
            time: booking.time,
            message: booking.message,
            status: 'pending'
          })
          .select()
          .single();

        if (error) {
          console.error('Supabase insert error:', error);
          throw new Error(error.message);
        }
        
        return data;
      } catch (error) {
        console.error('Error adding booking:', error);
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
      toast({
        title: "Booking received",
        description: "Your booking has been submitted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error submitting booking",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      });
    }
  });

  // Update booking status mutation
  const updateBookingStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: number, status: 'pending' | 'confirmed' | 'cancelled' }) => {
      try {
        const { error } = await supabase
          .from('bookings')
          .update({ status })
          .eq('id', id);

        if (error) throw new Error(error.message);
        return { id, status };
      } catch (error) {
        console.error('Error updating booking status:', error);
        throw error;
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
      toast({
        title: `Booking ${data.status}`,
        description: `The booking has been ${data.status}`,
      });
    },
    onError: (error) => {
      toast({
        title: "Error updating booking",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      });
    }
  });

  // Delete booking mutation
  const deleteBookingMutation = useMutation({
    mutationFn: async (id: number) => {
      try {
        const { error } = await supabase
          .from('bookings')
          .delete()
          .eq('id', id);

        if (error) throw new Error(error.message);
        return id;
      } catch (error) {
        console.error('Error deleting booking:', error);
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
      toast({
        title: "Booking deleted",
        description: "The booking has been deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error deleting booking",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      });
    }
  });

  const addBooking = async (booking: Omit<Booking, 'id' | 'status' | 'createdAt'>) => {
    await addBookingMutation.mutateAsync(booking);
  };

  const updateBookingStatus = async (id: number, status: 'pending' | 'confirmed' | 'cancelled') => {
    await updateBookingStatusMutation.mutateAsync({ id, status });
  };

  const deleteBooking = async (id: number) => {
    await deleteBookingMutation.mutateAsync(id);
  };

  const value = {
    bookings,
    addBooking,
    updateBookingStatus,
    deleteBooking,
    isLoading,
    error: error as Error | null,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};
