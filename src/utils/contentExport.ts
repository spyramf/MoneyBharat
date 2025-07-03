
import { BlogPost } from '@/content/blog/types';
import { Booking } from '@/context/BookingContext';

export interface ExportData {
  blogs: BlogPost[];
  bookings: Booking[];
  exportDate: string;
  version: string;
}

export const exportContent = (blogs: BlogPost[], bookings: Booking[]): void => {
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

export const exportBlogsToCSV = (blogs: BlogPost[]): void => {
  const headers = ['ID', 'Title', 'Category', 'Author', 'Published Date', 'Featured', 'Tags'];
  const csvContent = [
    headers.join(','),
    ...blogs.map(blog => [
      blog.id,
      `"${blog.title.replace(/"/g, '""')}"`,
      blog.category,
      blog.author.name,
      blog.publishedDate,
      blog.isFeatured,
      `"${blog.tags.join(', ')}"`
    ].join(','))
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
