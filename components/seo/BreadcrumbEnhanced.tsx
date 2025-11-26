import Head from "next/head";
import { useRouter } from "next/router";

interface BreadcrumbItem {
  name: string;
  url: string;
}

const BreadcrumbEnhanced = () => {
  const router = useRouter();
  const pathname = (router.asPath || router.pathname || "/").split("?")[0];

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

  const breadcrumbs = generateBreadcrumbs(pathname);

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
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default BreadcrumbEnhanced;
