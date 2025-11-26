
import { useEffect } from 'react';
import { performCanonicalRedirect, needsCanonicalRedirect } from '@/utils/urlCanonicalizer';

interface URLRedirectHandlerProps {
  enableRedirect?: boolean;
  onRedirect?: () => void;
}

const URLRedirectHandler = ({ 
  enableRedirect = true, 
  onRedirect 
}: URLRedirectHandlerProps) => {
  useEffect(() => {
    // Skip in development or if explicitly disabled
    if (!enableRedirect || process.env.NODE_ENV !== 'production' || typeof window === 'undefined') {
      return;
    }
    
    // Additional safety checks - don't redirect if in iframe or localhost
    const isInIframe = window.self !== window.top;
    const isLocalhost = window.location.hostname === 'localhost' || 
                       window.location.hostname === '127.0.0.1' ||
                       window.location.hostname.includes('lovable.app') ||
                       window.location.hostname.includes('netlify.app') ||
                       window.location.hostname.includes('vercel.app');
    
    if (isInIframe || isLocalhost) {
      console.log('Skipping canonicalization - iframe or development environment detected');
      return;
    }
    
    // Check if redirect is needed and perform it
    if (needsCanonicalRedirect()) {
      console.log('URL canonicalization redirect needed');
      onRedirect?.();
      
      // Small delay to allow any pending operations
      setTimeout(() => {
        performCanonicalRedirect();
      }, 100);
    }
  }, [enableRedirect, onRedirect]);

  // This component doesn't render anything
  return null;
};

export default URLRedirectHandler;
