
import { Booking } from '@/context/BookingContext';
import { bookingDataService } from '@/services/bookingDataService';
import { SupabaseBlogPost } from '@/services/supabaseBlogService';

export interface ExportData {
  blogs: SupabaseBlogPost[];
  bookings: Booking[];
  exportDate: string;
  version: string;
}

export const exportContent = (blogs: SupabaseBlogPost[], bookings: Booking[]): void => {
  const exportData: ExportData = {
    blogs,
    bookings,
    exportDate: new Date().toISOString(),
    version: '1.0.0'
  };

  const dataStr = JSON.stringify(exportData, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `content-backup-${new Date().toISOString().split('T')[0]}.json`;
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
};

export const exportBlogsToCSV = (blogs: SupabaseBlogPost[]): void => {
  const headers = ['ID', 'Title', 'Category', 'Author', 'Published Date', 'Featured', 'Tags'];
  const csvContent = [
    headers.join(','),
    ...blogs.map((blog) => {
      const title = blog.title ? `"${blog.title.replace(/"/g, '""')}"` : '""';
      const category = blog.category?.name ? `"${blog.category.name.replace(/"/g, '""')}"` : '';
      const author = blog.author?.name ? `"${blog.author.name.replace(/"/g, '""')}"` : '';
      const publishedDate = blog.published_at || blog.created_at || '';
      const tags = blog.tags?.length ? `"${blog.tags.join(', ').replace(/"/g, '""')}"` : '';

      return [
        blog.id,
        title,
        category,
        author,
        publishedDate,
        blog.is_featured,
        tags,
      ].join(',');
    }),
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `blogs-export-${new Date().toISOString().split('T')[0]}.csv`;
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
};

export const exportBookingsToCSV = (bookings: Booking[]): void => {
  const headers = ['ID', 'Name', 'Email', 'Phone', 'Service', 'Date', 'Time', 'Status', 'Created At'];
  const csvContent = [
    headers.join(','),
    ...bookings.map(booking => [
      booking.id,
      `"${booking.name.replace(/"/g, '""')}"`,
      booking.email,
      booking.phone,
      `"${booking.service.replace(/"/g, '""')}"`,
      booking.date,
      booking.time,
      booking.status,
      booking.createdAt
    ].join(','))
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `bookings-export-${new Date().toISOString().split('T')[0]}.csv`;
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
};

// Enhanced booking-specific export functions
export const exportBookingsToJSON = (): void => {
  const bookings = bookingDataService.getAllBookings();
  const dataStr = JSON.stringify(bookings, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `bookings-backup-${new Date().toISOString().split('T')[0]}.json`;
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  URL.revokeObjectURL(url);
};

export const importBookingsFromFile = (file: File): Promise<{ success: boolean; error?: string }> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const result = bookingDataService.importBookings(content);
        resolve(result);
      } catch (error) {
        resolve({ success: false, error: 'Failed to read file' });
      }
    };
    reader.onerror = () => {
      resolve({ success: false, error: 'Failed to read file' });
    };
    reader.readAsText(file);
  });
};

export const validateImportData = (data: any): data is ExportData => {
  return (
    typeof data === 'object' &&
    data !== null &&
    Array.isArray(data.blogs) &&
    Array.isArray(data.bookings) &&
    typeof data.exportDate === 'string' &&
    typeof data.version === 'string'
  );
};
