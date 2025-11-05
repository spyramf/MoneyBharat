import { getCanonicalUrl } from "./urlCanonicalizer";

export interface CanonicalURLReport {
  currentUrl: string;
  canonicalUrl: string;
  isCanonical: boolean;
  issues: string[];
  recommendations: string[];
}

export class CanonicalURLService {
  /**
   * Analyze current URL and provide canonical compliance report
   */
  analyzeCurrentUrl(): CanonicalURLReport {
    if (typeof window === "undefined") {
      return {
        currentUrl: "",
        canonicalUrl: "",
        isCanonical: true,
        issues: [],
        recommendations: [],
      };
    }

    const currentUrl = window.location.href;
    const currentPath = window.location.pathname;
    const canonicalUrl = getCanonicalUrl(currentPath);

    const report: CanonicalURLReport = {
      currentUrl,
      canonicalUrl,
      isCanonical: currentUrl === canonicalUrl,
      issues: [],
      recommendations: [],
    };

    // Check for common non-canonical issues
    this.checkForIssues(currentUrl, canonicalUrl, report);

    return report;
  }

  private checkForIssues(currentUrl: string, canonicalUrl: string, report: CanonicalURLReport): void {
    try {
      const current = new URL(currentUrl);
      const canonical = new URL(canonicalUrl);

      // Protocol check
      if (current.protocol !== canonical.protocol) {
        report.issues.push(`Protocol mismatch: ${current.protocol} vs ${canonical.protocol}`);
        report.recommendations.push("Use HTTPS for all URLs");
      }

      // Host check
      if (current.host !== canonical.host) {
        report.issues.push(`Host mismatch: ${current.host} vs ${canonical.host}`);
        if (current.host.startsWith("www.")) {
          report.recommendations.push("Remove www subdomain - redirect to non-www version");
        } else {
          report.recommendations.push("Use canonical domain: moneybharatfinance.com");
        }
      }

      // Path check
      if (current.pathname !== canonical.pathname) {
        report.issues.push(`Path mismatch: ${current.pathname} vs ${canonical.pathname}`);

        if (current.pathname.endsWith("/") && canonical.pathname !== "/") {
          report.recommendations.push("Remove trailing slash from URL");
        }

        if (current.pathname !== current.pathname.toLowerCase()) {
          report.recommendations.push("Use lowercase URLs");
        }
      }

      // Query parameters check
      if (current.search && !canonical.search) {
        report.issues.push("URL contains query parameters");
        report.recommendations.push("Remove tracking parameters for canonical URL");
      }

      // Fragment check
      if (current.hash) {
        report.recommendations.push("Fragment identifiers (#) are not included in canonical URLs");
      }
    } catch (error) {
      report.issues.push(`Invalid URL format: ${error}`);
    }
  }

  /**
   * Get all known canonical URLs for the site
   */
  getAllCanonicalUrls(): string[] {
    const paths = [
      "/",
      "/mutual-funds",
      "/insurance",
      "/health-insurance",
      "/term-insurance",
      "/vehicle-insurance",
      "/loans",
      "/loans/personal",
      "/loans/business",
      "/loans/car",
      "/loans/home",
      "/loans/education",
      "/loans/mutual-funds",
      "/tools/sip-calculator",
      "/tools/emi-calculator",
      "/tools/tax-saving",
      "/about",
      "/booking",
      "/blog",
      "/privacy-policy",
      "/terms-of-service",
      "/sitemap",
    ];

    return paths.map((path) => getCanonicalUrl(path));
  }

  /**
   * Validate URL against canonical format
   */
  validateCanonicalFormat(url: string): boolean {
    try {
      const urlObj = new URL(url);
      const expectedCanonical = getCanonicalUrl(urlObj.pathname);
      return url === expectedCanonical;
    } catch {
      return false;
    }
  }

  /**
   * Generate sitemap validation for all known URLs
   */
  validateSitemapUrls(): { valid: string[]; invalid: string[] } {
    const allUrls = this.getAllCanonicalUrls();
    const valid: string[] = [];
    const invalid: string[] = [];

    allUrls.forEach((url) => {
      if (this.validateCanonicalFormat(url)) {
        valid.push(url);
      } else {
        invalid.push(url);
      }
    });

    return { valid, invalid };
  }
}

export const canonicalUrlService = new CanonicalURLService();
