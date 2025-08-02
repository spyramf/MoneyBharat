
import React from 'react';
import SEOHead from "@/components/seo/SEOHead";
import StructuredData from "@/components/seo/StructuredData";

interface PageWrapperProps {
  children: React.ReactNode;
  title: string;
  description: string;
  keywords?: string;
  structuredData?: any;
}

const PageWrapper = ({ 
  children, 
  title, 
  description, 
  keywords,
  structuredData 
}: PageWrapperProps) => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title={title}
        description={description}
        keywords={keywords}
      />
      
      {structuredData && (
        <StructuredData {...structuredData} />
      )}
      
      {children}
    </div>
  );
};

export default PageWrapper;
