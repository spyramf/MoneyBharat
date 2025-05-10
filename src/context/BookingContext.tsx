
import { createContext, useContext, useState, ReactNode } from 'react';

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
  addBooking: (booking: Omit<Booking, 'id' | 'status' | 'createdAt'>) => void;
  updateBookingStatus: (id: number, status: 'pending' | 'confirmed' | 'cancelled') => void;
  deleteBooking: (id: number) => void;
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
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: 1,
      name: 'Rahul Sharma',
      email: 'rahul.sharma@example.com',
      phone: '+91 9876543210',
      service: 'Financial Planning',
      date: '2025-05-15',
      time: '10:00 AM',
      status: 'confirmed',
      createdAt: '2025-05-10T10:00:00Z',
    },
    {
      id: 2,
      name: 'Priya Patel',
      email: 'priya.patel@example.com',
      phone: '+91 9876543211',
      service: 'Investment Consultation',
      date: '2025-05-16',
      time: '2:30 PM',
      status: 'pending',
      createdAt: '2025-05-10T11:30:00Z',
    },
  ]);

  const addBooking = (booking: Omit<Booking, 'id' | 'status' | 'createdAt'>) => {
    const newBooking: Booking = {
      ...booking,
      id: bookings.length > 0 ? Math.max(...bookings.map(b => b.id)) + 1 : 1,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    setBookings([...bookings, newBooking]);
  };

  const updateBookingStatus = (id: number, status: 'pending' | 'confirmed' | 'cancelled') => {
    setBookings(
      bookings.map(booking => 
        booking.id === id ? { ...booking, status } : booking
      )
    );
  };

  const deleteBooking = (id: number) => {
    setBookings(bookings.filter(booking => booking.id !== id));
  };

  const value = {
    bookings,
    addBooking,
    updateBookingStatus,
    deleteBooking,
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};
