
import { useEffect, useState } from 'react';
import { validateSitemapFromUrl, SitemapValidationResult } from '@/utils/sitemapValidator';
import { getCanonicalUrl } from '@/utils/urlCanonicalizer';

interface SEOComplianceCheckerProps {
  enabled?: boolean;
  onValidationComplete?: (result: SitemapValidationResult) => void;
}

const SEOComplianceChecker = ({ 
  enabled = false, 
  onValidationComplete 
}: SEOComplianceCheckerProps) => {
  const [validationResult, setValidationResult] = useState<SitemapValidationResult | null>(null);
  const [isValidating, setIsValidating] = useState(false);

  useEffect(() => {
    if (!enabled || typeof window === 'undefined') return;

    const validateSitemap = async () => {
      setIsValidating(true);
      try {
        const sitemapUrl = getCanonicalUrl('/sitemap.xml');
        const result = await validateSitemapFromUrl(sitemapUrl);
        
        setValidationResult(result);
        onValidationComplete?.(result);
        
        // Log validation results in development
        if (process.env.NODE_ENV === 'development') {
          console.group('🔍 SEO Compliance Check');
          console.log('Sitemap URL:', sitemapUrl);
          console.log('Validation Result:', result);
          
          if (!result.isValid) {
            console.warn('❌ Sitemap validation failed:');
            result.errors.forEach(error => console.warn(`  - ${error}`));
          } else {
            console.log('✅ Sitemap validation passed');
          }
          
          if (result.warnings.length > 0) {
            console.warn('⚠️ Warnings:');
            result.warnings.forEach(warning => console.warn(`  - ${warning}`));
          }
          
          console.groupEnd();
        }
        
      } catch (error) {
        console.error('SEO Compliance Check failed:', error);
      } finally {
        setIsValidating(false);
      }
    };

    validateSitemap();
  }, [enabled, onValidationComplete]);

  // This component doesn't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  // Development mode indicator
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-black/80 text-white p-2 rounded text-xs max-w-xs">
      {isValidating ? (
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 border border-white border-t-transparent rounded-full animate-spin"></div>
          SEO Check...
        </div>
      ) : validationResult ? (
        <div>
          <div className={`font-semibold ${validationResult.isValid ? 'text-green-400' : 'text-red-400'}`}>
            {validationResult.isValid ? '✅ SEO Compliant' : '❌ SEO Issues'}
          </div>
          <div className="text-xs opacity-75">
            URLs: {validationResult.canonicalUrls}/{validationResult.totalUrls}
          </div>
          {validationResult.errors.length > 0 && (
            <div className="text-red-300 text-xs">
              {validationResult.errors.length} error(s)
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default SEOComplianceChecker;
