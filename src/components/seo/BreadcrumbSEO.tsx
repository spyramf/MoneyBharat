
import { ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface BreadcrumbItem {
  name: string;
  href: string;
}

const BreadcrumbSEO = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  const breadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', href: '/' }
  ];
  
  // Build breadcrumb path
  let currentPath = '';
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    breadcrumbs.push({
      name: formatSegmentName(segment),
      href: currentPath
    });
  });
  
  // Generate structured data for breadcrumbs
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://moneybharatfinance.com${item.href}`
    }))
  };
  
  // Don't show breadcrumbs on home page
  if (location.pathname === '/') return null;
  
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Visible Breadcrumbs */}
      <nav className="bg-gray-50 py-3" aria-label="Breadcrumb">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((item, index) => (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 text-gray-400 mr-2" />
                )}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-gray-600 font-medium" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link 
                    to={item.href} 
                    className="text-fintech-green hover:text-fintech-green/80 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};

const formatSegmentName = (segment: string): string => {
  const nameMap: Record<string, string> = {
    'mutual-funds': 'Mutual Funds',
    'health-insurance': 'Health Insurance',
    'term-insurance': 'Term Insurance', 
    'vehicle-insurance': 'Vehicle Insurance',
    'loans': 'Loans',
    'personal': 'Personal Loans',
    'business': 'Business Loans',
    'car': 'Car Loans',
    'home': 'Home Loans',
    'education': 'Education Loans',
    'about': 'About Us',
    'blog': 'Blog',
    'booking': 'Book Consultation',
    'tools': 'Tools',
    'sip-calculator': 'SIP Calculator',
    'emi-calculator': 'EMI Calculator',
    'tax-saving': 'Tax Saving',
  };
  
  return nameMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
};

export default BreadcrumbSEO;
