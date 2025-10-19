
export interface CanonicalUrlConfig {
  preferWww: boolean;
  baseUrl: string;
  forceHttps: boolean;
}

const DEFAULT_CONFIG: CanonicalUrlConfig = {
  preferWww: true, // Enforce www subdomain
  baseUrl: 'moneybharatfinance.com',
  forceHttps: true,
};

export class URLCanonicalizer {
  private config: CanonicalUrlConfig;

  constructor(config: Partial<CanonicalUrlConfig> = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
  }

  /**
   * Check if we're in an iframe
   */
  private isInIframe(): boolean {
    if (typeof window === 'undefined') return false;
    try {
      return window.self !== window.top;
    } catch {
      return true; // If we can't access window.top, we're likely in an iframe
    }
  }

  /**
   * Check if current host is allowed for canonicalization
   */
  private isAllowedHost(): boolean {
    if (typeof window === 'undefined') return false;
    
    const currentHost = window.location.hostname;
    const allowedHosts = [
      this.config.baseUrl,
      `www.${this.config.baseUrl}`,
    ];
    
    return allowedHosts.includes(currentHost);
  }

  /**
   * Detect if current URL needs canonicalization
   */
  needsRedirect(): boolean {
    if (typeof window === 'undefined') return false;
    
    // Skip redirect if in iframe or not on allowed host
    if (this.isInIframe() || !this.isAllowedHost()) {
      return false;
    }
    
    const currentUrl = window.location.href;
    const canonicalUrl = this.getCanonicalUrl(window.location.pathname);
    
    return currentUrl !== canonicalUrl;
  }

  /**
   * Get the canonical URL for a given path
   */
  getCanonicalUrl(path: string = ''): string {
    const protocol = this.config.forceHttps ? 'https' : 'http';
    const domain = this.config.preferWww ? `www.${this.config.baseUrl}` : this.config.baseUrl;
    
    // Normalize the path
    let normalizedPath = path.startsWith('/') ? path : `/${path}`;
    
    // Remove trailing slash except for root
    if (normalizedPath !== '/' && normalizedPath.endsWith('/')) {
      normalizedPath = normalizedPath.slice(0, -1);
    }
    
    // Ensure lowercase
    normalizedPath = normalizedPath.toLowerCase();
    
    return `${protocol}://${domain}${normalizedPath}`;
  }

  /**
   * Perform client-side redirect if needed
   */
  redirectIfNeeded(): boolean {
    if (!this.needsRedirect()) return false;
    
    // Additional safety check
    if (this.isInIframe() || !this.isAllowedHost()) {
      return false;
    }
    
    const canonicalUrl = this.getCanonicalUrl(window.location.pathname + window.location.search);
    
    console.log(`Redirecting to canonical URL: ${canonicalUrl}`);
    window.location.replace(canonicalUrl);
    
    return true;
  }

  /**
   * Validate if a URL is canonical
   */
  isCanonical(url: string): boolean {
    try {
      const urlObj = new URL(url);
      const canonicalUrl = this.getCanonicalUrl(urlObj.pathname);
      return url === canonicalUrl;
    } catch {
      return false;
    }
  }

  /**
   * Get domain preference info
   */
  getDomainInfo() {
    return {
      preferredDomain: this.config.preferWww ? `www.${this.config.baseUrl}` : this.config.baseUrl,
      alternativeDomain: this.config.preferWww ? this.config.baseUrl : `www.${this.config.baseUrl}`,
      forceHttps: this.config.forceHttps,
    };
  }
}

// Default instance
export const urlCanonicalizer = new URLCanonicalizer();

// Utility functions
export const getCanonicalUrl = (path: string = ''): string => {
  return urlCanonicalizer.getCanonicalUrl(path);
};

export const needsCanonicalRedirect = (): boolean => {
  return urlCanonicalizer.needsRedirect();
};

export const performCanonicalRedirect = (): boolean => {
  return urlCanonicalizer.redirectIfNeeded();
};
