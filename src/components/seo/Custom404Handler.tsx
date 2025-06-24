
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Custom404Handler = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if we're on a 404 page (any route that doesn't match our defined routes)
    const knownRoutes = [
      '/',
      '/mutual-funds',
      '/insurance',
      '/health-insurance',
      '/term-insurance',
      '/vehicle-insurance',
      '/loans',
      '/loans/personal',
      '/loans/business',
      '/loans/car',
      '/loans/home',
      '/loans/education',
      '/loans/mutual-funds',
      '/about',
      '/tools/sip-calculator',
      '/tools/emi-calculator',
      '/tools/tax-saving',
      '/blog',
      '/booking',
      '/privacy-policy',
      '/terms-of-service',
      '/sitemap',
      '/investor/login',
      '/investor/signup',
      '/investor/bank-account',
      '/investor/dashboard',
      '/investor/clients',
      '/admin/login',
      '/admin',
      '/admin/blogs',
      '/admin/blogs/new',
      '/admin/bookings'
    ];

    const currentPath = location.pathname;
    const isBlogPost = currentPath.startsWith('/blog/') && currentPath !== '/blog';
    const isAdminEdit = currentPath.startsWith('/admin/blogs/edit/');
    
    // If it's not a known route, blog post, or admin edit page, it's likely a 404
    if (!knownRoutes.includes(currentPath) && !isBlogPost && !isAdminEdit) {
      // Send 404 status to parent window for proper SEO handling
      if (typeof window !== 'undefined' && window.parent) {
        window.parent.postMessage({
          type: 'SET_HTTP_STATUS',
          status: 404
        }, '*');
      }

      // Also set document title for SEO tools
      document.title = '404 - Page Not Found | Money Bharat Finance';
      
      // Add meta tag for robots
      const existingRobotsTag = document.querySelector('meta[name="robots"]');
      if (!existingRobotsTag) {
        const robotsTag = document.createElement('meta');
        robotsTag.name = 'robots';
        robotsTag.content = 'noindex, nofollow';
        document.head.appendChild(robotsTag);
      }
    }
  }, [location.pathname]);

  return null;
};

export default Custom404Handler;
