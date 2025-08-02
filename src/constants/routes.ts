
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  BLOG: '/blog',
  BOOKING: '/booking',
  CONTACT: '/contact',
  
  // Financial Services
  MUTUAL_FUNDS: '/mutual-funds',
  INSURANCE: '/insurance',
  LOANS: '/loans',
  
  // Insurance Sub-routes
  HEALTH_INSURANCE: '/health-insurance',
  TERM_INSURANCE: '/term-insurance',
  VEHICLE_INSURANCE: '/vehicle-insurance',
  
  // Loan Sub-routes
  PERSONAL_LOAN: '/loans/personal',
  
  // Admin Routes
  ADMIN: '/admin',
  ADMIN_LOGIN: '/admin/login',
  ADMIN_DASHBOARD: '/admin/dashboard',
  ADMIN_BOOKINGS: '/admin/bookings',
  ADMIN_BLOGS: '/admin/blogs',
} as const;
