
export const APP_CONFIG = {
  name: 'Money Bharat',
  description: 'Your trusted financial partner',
  version: '1.0.0',
} as const;

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  BLOG: '/blog',
  CONTACT: '/contact',
  MUTUAL_FUNDS: '/mutual-funds',
  INSURANCE: '/insurance',
  LOANS: '/loans',
  BOOKING: '/booking',
  ADMIN_LOGIN: '/admin/login',
  ADMIN_DASHBOARD: '/admin/dashboard',
} as const;

export const CONTACT_INFO = {
  email: 'info@moneybharat.com',
  phone: '+91 9999999999',
  address: 'Mumbai, Maharashtra, India',
} as const;
