
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
  HOME_LOAN: '/loans/home',
  CAR_LOAN: '/loans/car',
  BUSINESS_LOAN: '/loans/business',
  EDUCATION_LOAN: '/loans/education',
  MUTUAL_FUND_LOAN: '/loans/mutual-funds',
  
  // Calculators
  SIP_CALCULATOR: '/calculators/sip',
  EMI_CALCULATOR: '/calculators/emi',
  TAX_SAVING: '/tax-saving',
  
  // Admin Routes
  ADMIN: '/admin',
  ADMIN_LOGIN: '/admin/login',
  ADMIN_DASHBOARD: '/admin/dashboard',
  ADMIN_BOOKINGS: '/admin/bookings',
  ADMIN_BLOGS: '/admin/blogs',
  ADMIN_BLOGS_NEW: '/admin/blogs/new',
  ADMIN_BLOGS_EDIT: '/admin/blogs/edit',
  ADMIN_BLOGS_SUPABASE: '/admin/blogs/supabase',
} as const;
