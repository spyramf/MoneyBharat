
export const APP_CONFIG = {
  name: 'Money Bharat',
  tagline: 'Your Financial Freedom Partner',
  description: 'Expert financial services including mutual funds, insurance, and investment planning',
  contact: {
    phone: '+91-XXXXXXXXXX',
    email: 'info@moneybharat.co',
    address: 'Your Business Address Here'
  }
};

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  MUTUAL_FUNDS: '/mutual-funds',
  INSURANCE: '/insurance',
  HEALTH_INSURANCE: '/health-insurance',
  TERM_INSURANCE: '/term-insurance',
  VEHICLE_INSURANCE: '/vehicle-insurance',
  LOANS: '/loans',
  PERSONAL_LOAN: '/loans/personal',
  BLOG: '/blog',
  BOOKING: '/booking',
  ADMIN: '/admin',
  ADMIN_LOGIN: '/admin/login',
  ADMIN_DASHBOARD: '/admin/dashboard',
} as const;

export const SEO_CONFIG = {
  defaultTitle: 'Money Bharat - Your Financial Freedom Partner',
  titleTemplate: '%s | Money Bharat',
  defaultDescription: 'Expert financial services including mutual funds, insurance, and investment planning',
  siteUrl: 'https://moneybharat.co',
  twitterHandle: '@moneybharat',
};
