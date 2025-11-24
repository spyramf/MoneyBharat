
import { getCanonicalUrl } from './urlCanonicalizer';

export interface SitemapValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  totalUrls: number;
  canonicalUrls: number;
}

export class SitemapValidator {
  /**
   * Validate that all URLs in the sitemap are canonical
   */
  validateSitemapUrls(sitemapContent: string): SitemapValidationResult {
    const result: SitemapValidationResult = {
      isValid: true,
      errors: [],
      warnings: [],
      totalUrls: 0,
      canonicalUrls: 0
    };

    try {
      // Parse XML sitemap content
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(sitemapContent, 'text/xml');
      
      // Check for parsing errors
      const parseError = xmlDoc.querySelector('parsererror');
      if (parseError) {
        result.errors.push('Invalid XML format in sitemap');
        result.isValid = false;
        return result;
      }

      // Get all URL elements
      const urlElements = xmlDoc.querySelectorAll('url > loc');
      result.totalUrls = urlElements.length;

      urlElements.forEach((locElement, index) => {
        const url = locElement.textContent?.trim();
        if (!url) {
          result.errors.push(`Empty URL found at position ${index + 1}`);
          result.isValid = false;
          return;
        }

        // Extract path from URL
        try {
          const urlObj = new URL(url);
          const path = urlObj.pathname;
          const canonicalUrl = getCanonicalUrl(path);

          if (url === canonicalUrl) {
            result.canonicalUrls++;
          } else {
            result.errors.push(`Non-canonical URL found: ${url} (should be: ${canonicalUrl})`);
            result.isValid = false;
          }

          // Additional validations
          this.validateUrlStructure(url, result);
          
        } catch (error) {
          result.errors.push(`Invalid URL format: ${url}`);
          result.isValid = false;
        }
      });

      // Check for common issues
      this.checkForCommonIssues(xmlDoc, result);

    } catch (error) {
      result.errors.push(`Failed to parse sitemap: ${error}`);
      result.isValid = false;
    }

    return result;
  }

  private validateUrlStructure(url: string, result: SitemapValidationResult): void {
    // Check for HTTPS
    if (!url.startsWith('https://')) {
      result.warnings.push(`Non-HTTPS URL: ${url}`);
    }

    // Check for www subdomain
    if (url.includes('://www.')) {
      result.errors.push(`WWW subdomain found: ${url}`);
    }

    // Check for trailing slashes (except root)
    const urlObj = new URL(url);
    if (urlObj.pathname !== '/' && urlObj.pathname.endsWith('/')) {
      result.errors.push(`Trailing slash found: ${url}`);
    }

    // Check for query parameters
    if (urlObj.search) {
      result.warnings.push(`Query parameters found: ${url}`);
    }

    // Check for uppercase characters
    if (urlObj.pathname !== urlObj.pathname.toLowerCase()) {
      result.errors.push(`Uppercase characters in URL: ${url}`);
    }
  }

  private checkForCommonIssues(xmlDoc: Document, result: SitemapValidationResult): void {
    // Check for duplicate URLs
    const urls = Array.from(xmlDoc.querySelectorAll('url > loc')).map(el => el.textContent?.trim());
    const uniqueUrls = new Set(urls);
    if (urls.length !== uniqueUrls.size) {
      result.warnings.push('Duplicate URLs found in sitemap');
    }

    // Check for proper namespace
    const urlset = xmlDoc.querySelector('urlset');
    if (!urlset?.getAttribute('xmlns')) {
      result.warnings.push('Missing XML namespace in sitemap');
    }
  }

  /**
   * Generate a validation report
   */
  generateReport(result: SitemapValidationResult): string {
    let report = `Sitemap Validation Report\n`;
    report += `========================\n\n`;
    report += `Total URLs: ${result.totalUrls}\n`;
    report += `Canonical URLs: ${result.canonicalUrls}\n`;
    report += `Status: ${result.isValid ? 'VALID' : 'INVALID'}\n\n`;

    if (result.errors.length > 0) {
      report += `Errors (${result.errors.length}):\n`;
      result.errors.forEach((error, index) => {
        report += `${index + 1}. ${error}\n`;
      });
      report += '\n';
    }

    if (result.warnings.length > 0) {
      report += `Warnings (${result.warnings.length}):\n`;
      result.warnings.forEach((warning, index) => {
        report += `${index + 1}. ${warning}\n`;
      });
    }

    return report;
  }
}

// Utility function to validate sitemap from URL
export const validateSitemapFromUrl = async (sitemapUrl: string): Promise<SitemapValidationResult> => {
  const validator = new SitemapValidator();
  
  try {
    const response = await fetch(sitemapUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch sitemap: ${response.status}`);
    }
    
    const sitemapContent = await response.text();
    return validator.validateSitemapUrls(sitemapContent);
  } catch (error) {
    return {
      isValid: false,
      errors: [`Failed to validate sitemap: ${error}`],
      warnings: [],
      totalUrls: 0,
      canonicalUrls: 0
    };
  }
};

export const sitemapValidator = new SitemapValidator();
