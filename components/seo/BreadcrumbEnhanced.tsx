import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  name: string;
  url: string;
}

const BreadcrumbEnhanced = () => {
  const location = useLocation();

  const generateBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [{ name: "Home", url: "https://moneybharatfinance.com" }];

    const pathSegments = pathname.split("/").filter((segment) => segment);
    let currentPath = "";

    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;

      const breadcrumbMap: Record<string, string> = {
        "mutual-funds": "Mutual Funds",
        insurance: "Insurance",
        "health-insurance": "Health Insurance",
        "term-insurance": "Term Insurance",
        "vehicle-insurance": "Vehicle Insurance",
        loans: "Loans",
        personal: "Personal Loans",
        business: "Business Loans",
        car: "Car Loans",
        home: "Home Loans",
        education: "Education Loans",
        "against-mutual-funds": "Loans Against Mutual Funds",
        tools: "Financial Tools",
        "sip-calculator": "SIP Calculator",
        "emi-calculator": "EMI Calculator",
        "tax-saving": "Tax Saving",
        blog: "Blog",
        about: "About Us",
        booking: "Book Consultation",
        "privacy-policy": "Privacy Policy",
        "terms-of-service": "Terms of Service",
      };

      const name = breadcrumbMap[segment] || segment.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
      breadcrumbs.push({
        name,
        url: `https://moneybharatfinance.com${currentPath}`,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs(location.pathname);

  if (breadcrumbs.length <= 1) return null;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};

export default BreadcrumbEnhanced;
