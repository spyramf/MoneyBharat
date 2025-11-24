
import { Booking } from '@/context/BookingContext';

const BOOKING_STORAGE_KEY = 'moneybharat_bookings';

export class BookingDataService {
  private static instance: BookingDataService;
  private bookings: Booking[] = [];

  private constructor() {
    this.loadBookings();
  }

  static getInstance(): BookingDataService {
    if (!BookingDataService.instance) {
      BookingDataService.instance = new BookingDataService();
    }
    return BookingDataService.instance;
  }

  private loadBookings(): void {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(BOOKING_STORAGE_KEY);
        if (stored) {
          this.bookings = JSON.parse(stored);
        } else {
          // Initialize with sample data for first time
          this.bookings = [
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
        ];
        this.saveBookings();
      }
    } catch (error) {
      console.error('Error loading bookings from localStorage:', error);
      this.bookings = [];
    }
    } // End of if (typeof window !== 'undefined')
  }

  private saveBookings(): void {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(this.bookings));
      } catch (error) {
        console.error('Error saving bookings to localStorage:', error);
      }
    }
  }

  getAllBookings(): Booking[] {
    return [...this.bookings];
  }

  addBooking(booking: Omit<Booking, 'id' | 'status' | 'createdAt'>): Booking {
    const newBooking: Booking = {
      ...booking,
      id: this.getNextId(),
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    
    this.bookings.push(newBooking);
    this.saveBookings();
    return newBooking;
  }

  updateBookingStatus(id: number, status: 'confirmed' | 'cancelled'): boolean {
    const bookingIndex = this.bookings.findIndex(booking => booking.id === id);
    if (bookingIndex !== -1) {
      this.bookings[bookingIndex].status = status;
      this.saveBookings();
      return true;
    }
    return false;
  }

  deleteBooking(id: number): boolean {
    const initialLength = this.bookings.length;
    this.bookings = this.bookings.filter(booking => booking.id !== id);
    if (this.bookings.length < initialLength) {
      this.saveBookings();
      return true;
    }
    return false;
  }

  private getNextId(): number {
    return this.bookings.length > 0 ? Math.max(...this.bookings.map(b => b.id)) + 1 : 1;
  }

  exportBookings(): string {
    return JSON.stringify(this.bookings, null, 2);
  }

  importBookings(jsonData: string): { success: boolean; error?: string } {
    try {
      const importedBookings = JSON.parse(jsonData);
      if (Array.isArray(importedBookings)) {
        this.bookings = importedBookings;
        this.saveBookings();
        return { success: true };
      } else {
        return { success: false, error: 'Invalid data format' };
      }
    } catch (error) {
      return { success: false, error: 'Invalid JSON format' };
    }
  }

  clearAllBookings(): void {
    this.bookings = [];
    this.saveBookings();
  }
}

export const bookingDataService = BookingDataService.getInstance();
