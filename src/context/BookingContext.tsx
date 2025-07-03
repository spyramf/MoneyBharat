
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useToast } from '@/hooks/use-toast';

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
  const [isLoading, setIsLoading] = useState(false);
  const [error] = useState<Error | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "+91-9876543210",
      service: "Financial Planning",
      date: "2024-01-15",
      time: "10:00 AM",
      message: "Need help with retirement planning",
      status: "pending",
      createdAt: "2024-01-10T10:00:00Z"
    },
    {
      id: 2,
      name: "Sarah Smith",
      email: "sarah@example.com",
      phone: "+91-9876543211",
      service: "Investment Advisory",
      date: "2024-01-16",
      time: "2:00 PM",
      message: "Looking for mutual fund investment options",
      status: "confirmed",
      createdAt: "2024-01-11T14:00:00Z"
    }
  ]);

  const addBooking = async (booking: Omit<Booking, 'id' | 'status' | 'createdAt'>) => {
    setIsLoading(true);
    
    try {
      // Create FormSubmit form data
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

      // Submit to FormSubmit
      const response = await fetch('https://formsubmit.co/spyraexim@gmail.com', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        // Add to local state
        const newBooking: Booking = {
          ...booking,
          id: Math.max(...bookings.map(b => b.id), 0) + 1,
          status: 'pending',
          createdAt: new Date().toISOString()
        };
        setBookings(prev => [...prev, newBooking]);
        
        toast({
          title: "Booking submitted successfully!",
          description: "We'll get back to you within 24 hours to confirm your appointment.",
        });
      } else {
        throw new Error('Failed to submit booking');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      toast({
        title: "Error submitting booking",
        description: "Please try again or contact us directly at spyraexim@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateBookingStatus = (id: number, status: 'confirmed' | 'cancelled') => {
    setBookings(prevBookings =>
      prevBookings.map(booking =>
        booking.id === id ? { ...booking, status } : booking
      )
    );
  };

  const deleteBooking = (id: number) => {
    setBookings(prevBookings => prevBookings.filter(booking => booking.id !== id));
  };

  const value = {
    bookings,
    addBooking,
    updateBookingStatus,
    deleteBooking,
    isLoading,
    error,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};
