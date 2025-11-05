import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home, Search, Mail, ArrowLeft, ExternalLink, AlertTriangle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const NotFound = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    // Track 404 errors for analytics
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "page_not_found", {
        page_path: location.pathname,
        page_title: "404 - Page Not Found",
      });
    }
  }, [location.pathname]);

  const popularPages = [
    { title: "Mutual Funds", path: "/mutual-funds", description: "Start your investment journey" },
    { title: "Health Insurance", path: "/health-insurance", description: "Protect your health and finances" },
    { title: "Personal Loans", path: "/loans/personal", description: "Quick approval loans" },
    { title: "Home Loans", path: "/loans/home", description: "Make your dream home reality" },
    { title: "SIP Calculator", path: "/tools/sip-calculator", description: "Plan your investments" },
    { title: "Blog", path: "/blog", description: "Financial insights and tips" },
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Redirect to a search results page or filter popular pages
      const searchPath = `/blog?search=${encodeURIComponent(searchQuery)}`;
      window.location.href = searchPath;
    }
  };

  const handleReportIssue = () => {
    const subject = `Broken Link Report - ${location.pathname}`;
    const body = `I found a broken link on your website:\n\nURL: ${window.location.href}\nReferrer: ${document.referrer || "Direct access"}\n\nAdditional details: `;
    window.location.href = `mailto:support@moneybharatfinance.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>404 - Page Not Found | Money Bharat Finance</title>
        <meta
          name="description"
          content="The page you're looking for doesn't exist. Explore Money Bharat's financial services including mutual funds, insurance, and loans."
        />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="404 - Page Not Found | Money Bharat Finance" />
        <meta
          property="og:description"
          content="The page you're looking for doesn't exist. Explore our financial services instead."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="404 - Page Not Found | Money Bharat Finance" />
        <meta
          name="twitter:description"
          content="The page you're looking for doesn't exist. Explore our financial services instead."
        />
        <link rel="canonical" href="https://moneybharatfinance.com/404" />

        {/* Structured Data for 404 Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "404 - Page Not Found",
            description: "The requested page could not be found on Money Bharat Finance website.",
            url: `https://moneybharatfinance.com${location.pathname}`,
            isPartOf: {
              "@type": "WebSite",
              name: "Money Bharat Finance",
              url: "https://moneybharatfinance.com",
            },
            mainEntity: {
              "@type": "ErrorPage",
              name: "404 Error",
              description: "Page not found error",
            },
          })}
        </script>
      </Helmet>

      <Navbar />

      <main className="flex-1 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Enhanced Breadcrumbs for SEO */}
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <span className="text-gray-500">404 Error</span>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="text-center">
              {/* Error Icon and Main Message */}
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto mb-6 bg-fintech-orange/10 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-12 h-12 text-fintech-orange" />
                </div>

                <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4">404</h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Oops! This Page Doesn't Exist</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                  Don't worry - this happens sometimes! The page you're looking for might have been moved, deleted, or
                  the URL might be incorrect. Our website is working perfectly, just this specific page is missing.
                </p>
              </div>

              {/* Search Section */}
              <Card className="mb-12 max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="w-5 h-5" />
                    Looking for something specific?
                  </CardTitle>
                  <CardDescription>Try searching for what you need or explore our popular pages below</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Search for mutual funds, insurance, loans..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                      className="flex-1"
                    />
                    <Button onClick={handleSearch} className="bg-fintech-green hover:bg-fintech-green/90">
                      Search
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Pages */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-800 mb-8">Popular Pages</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {popularPages.map((page, index) => (
                    <Link key={index} to={page.path}>
                      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                        <CardHeader>
                          <CardTitle className="text-lg text-fintech-blue">{page.title}</CardTitle>
                          <CardDescription>{page.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link to="/">
                  <Button className="bg-gradient-to-r from-fintech-green to-fintech-blue hover:opacity-90 text-white px-8 py-3">
                    <Home className="w-5 h-5 mr-2" />
                    Go to Homepage
                  </Button>
                </Link>

                <Button variant="outline" onClick={() => window.history.back()} className="px-8 py-3">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Go Back
                </Button>

                <Button variant="ghost" onClick={handleReportIssue} className="px-8 py-3 text-fintech-purple">
                  <Mail className="w-5 h-5 mr-2" />
                  Report Issue
                </Button>
              </div>

              {/* Quick Links */}
              <div className="border-t border-gray-200 pt-8">
                <p className="text-gray-600 mb-4">Quick Links:</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <Link to="/about" className="text-fintech-blue hover:text-fintech-green transition-colors">
                    About Us
                  </Link>
                  <Link to="/booking" className="text-fintech-blue hover:text-fintech-green transition-colors">
                    Book Consultation
                  </Link>
                  <Link to="/sitemap" className="text-fintech-blue hover:text-fintech-green transition-colors">
                    Sitemap
                  </Link>
                  <a
                    href="mailto:support@moneybharatfinance.com"
                    className="text-fintech-blue hover:text-fintech-green transition-colors flex items-center gap-1"
                  >
                    Contact Support
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Reassurance Message */}
              <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg max-w-2xl mx-auto">
                <p className="text-green-800 text-sm">
                  <strong>Good news:</strong> Our website is working perfectly! This is just a missing page, and all our
                  services including mutual funds, insurance, and loans are fully operational.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
