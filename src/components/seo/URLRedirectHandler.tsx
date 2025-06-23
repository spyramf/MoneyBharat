
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
    if (!enableRedirect || typeof window === 'undefined') return;
    
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
