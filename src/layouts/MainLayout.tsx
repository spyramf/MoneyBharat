import React from "react";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import GA4Tracking from "@/components/analytics/GA4Tracking";

interface MainLayoutProps {
  children: React.ReactNode;
  showNavigation?: boolean;
  showFooter?: boolean;
}

const MainLayout = ({ children, showNavigation = true, showFooter = true }: MainLayoutProps) => {
  return (
    <>
      <GA4Tracking />
      <div className="min-h-screen flex flex-col">
        {showNavigation && <Navbar />}
        <main className="flex-1">{children}</main>
        {showFooter && <Footer />}
      </div>
    </>
  );
};

export default MainLayout;
