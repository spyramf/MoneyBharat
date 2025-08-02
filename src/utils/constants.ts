
export const APP_CONFIG = {
  name: 'Money Bharat',
  description: 'Your trusted financial partner',
  contact: {
    email: 'info@moneybharat.com',
    phone: '+91-1234567890',
  },
  social: {
    facebook: 'https://facebook.com/moneybharat',
    twitter: 'https://twitter.com/moneybharat',
    linkedin: 'https://linkedin.com/company/moneybharat',
  }
};

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  BLOG: '/blog',
  ADMIN: '/admin',
} as const;

export const API_ENDPOINTS = {
  AUTH: {
    SIGN_IN: '/auth/signin',
    SIGN_UP: '/auth/signup',
    SIGN_OUT: '/auth/signout',
    RESET_PASSWORD: '/auth/reset-password',
  },
  BLOG: {
    POSTS: '/blog/posts',
    CATEGORIES: '/blog/categories',
    AUTHORS: '/blog/authors',
  }
} as const;
