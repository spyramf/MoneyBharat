
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
  addBooking: (booking: Omit<Booking, 'id' | 'status' | 'createdAt'>) => Promise<void>;
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

  const value = {
    addBooking,
    isLoading,
    error,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};
