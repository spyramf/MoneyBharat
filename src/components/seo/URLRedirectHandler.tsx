
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
    // DISABLED: Client-side canonicalization can block production loading
    // All canonicalization is now handled by server-side redirects (.htaccess, _redirects, vercel.json)
    // This ensures the app loads immediately without client-side redirect delays
    
    if (!enableRedirect || typeof window === 'undefined') {
      return;
    }
    
    // Only log in development, never redirect
    if (!import.meta.env.PROD) {
      if (needsCanonicalRedirect()) {
        console.log('[Dev Only] Non-canonical URL detected - would redirect in production via server');
      }
    }
  }, [enableRedirect, onRedirect]);

  // This component doesn't render anything
  return null;
};

export default URLRedirectHandler;
