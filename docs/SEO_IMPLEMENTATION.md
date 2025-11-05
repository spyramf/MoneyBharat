# SEO Implementation Guide

## Money Bharat Finance - Spyra Exim Pvt Ltd

**Canonical Domain:** `https://www.moneybharatfinance.com/`  
**Updated:** 2025-01-19

---

## 📋 Table of Contents

1. [Domain Configuration](#domain-configuration)
2. [Canonical URL Strategy](#canonical-url-strategy)
3. [Redirect Rules](#redirect-rules)
4. [Meta Tags & OG Tags](#meta-tags--og-tags)
5. [Structured Data (JSON-LD)](#structured-data-json-ld)
6. [Sitemap & Robots](#sitemap--robots)
7. [Security & Trust Files](#security--trust-files)
8. [Performance Optimization](#performance-optimization)
9. [Implementation Checklist](#implementation-checklist)

---

## 🌐 Domain Configuration

### Primary Domain

- **Canonical URL:** `https://www.moneybharatfinance.com/`
- **Protocol:** HTTPS (enforced)
- **Subdomain:** www (enforced)
- **Company:** Spyra Exim Pvt Ltd

### URL Format Rules

✅ **Correct Format:**

- `https://www.moneybharatfinance.com/` (homepage)
- `https://www.moneybharatfinance.com/mutual-funds` (no trailing slash)
- `https://www.moneybharatfinance.com/blog/post-title` (lowercase, hyphens)

❌ **Incorrect Formats (will redirect):**

- `http://www.moneybharatfinance.com/` → redirects to HTTPS
- `https://moneybharatfinance.com/` → redirects to www version
- `https://www.moneybharatfinance.com/page/` → removes trailing slash
- `https://moneybharatfinance.com/` → redirects to new domain

---

## 🔗 Canonical URL Strategy

### Configuration Files Updated

#### 1. `src/constants/siteConfig.ts`

```typescript
export const SITE_CONFIG = {
  name: 'Money Bharat Finance',
  title: 'Money Bharat Finance - Mutual Funds, Insurance & Loans',
  description: 'Grow your wealth with Money Bharat Finance - India\'s AI-powered platform for mutual funds, SIP investments, health & life insurance, and instant personal loans.',
  url: 'https://www.moneybharatfinance.com',
  canonicalDomain: 'www.moneybharatfinance.com',
  protocol: 'https',
  ogImage: '/images/og-image.jpg',

  // SEO Keywords
  keywords: 'mutual funds India, SIP investment, health insurance, personal loans, financial planning, investment advisory, Money Bharat, wealth management',

  // Contact Information
  contact: {
    email: 'spyraexim@gmail.com',
    phone: '+91-XXXXXXXXXX',
    address: 'India'
  },

  // Social Links
  social: {
    twitter: 'https://twitter.com/moneybharat',
    facebook: 'https://facebook.com/moneybharat',
    linkedin: 'https://linkedin.com/company/moneybharat'
  }
} as const;
```

#### 2. `src/utils/urlCanonicalizer.ts`

```typescript
const DEFAULT_CONFIG: CanonicalUrlConfig = {
  preferWww: true,              // Enforce www subdomain
  baseUrl: 'moneybharatfinance.com',
  forceHttps: true,
};
```

### Usage in Components

```tsx
import { getCanonicalUrl } from '@/utils/seoUtils';

// In any component
const canonicalUrl = getCanonicalUrl('/mutual-funds');
// Returns: https://www.moneybharatfinance.com/mutual-funds
```

---

## ↔️ Redirect Rules

### 1. Netlify/Static Hosting (`public/_redirects`)

```
# Non-www to www
https://moneybharatfinance.com/* https://www.moneybharatfinance.com/:splat 301!
http://moneybharatfinance.com/* https://www.moneybharatfinance.com/:splat 301!

# Old domain to new domain
https://moneybharat.co/* https://www.moneybharatfinance.com/:splat 301!
https://www.moneybharat.co/* https://www.moneybharatfinance.com/:splat 301!

# Force HTTPS
http://www.moneybharatfinance.com/* https://www.moneybharatfinance.com/:splat 301!

# SPA fallback
/* /index.html 200
```

### 2. Vercel Configuration (`public/vercel.json`)

Includes:

- Host-based redirects for non-www → www
- Old domain redirects
- Security headers (X-Content-Type-Options, X-Frame-Options, etc.)
- Cache control for sitemap and robots.txt

### 3. Apache/Hostinger (`.htaccess`)

```apache
RewriteEngine On

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1 [R=301,L]

# Force WWW
RewriteCond %{HTTP_HOST} ^moneybharatfinance\.com [NC]
RewriteRule ^(.*)$ https://www.moneybharatfinance.com/$1 [R=301,L]

# Redirect old domain
RewriteCond %{HTTP_HOST} ^(www\.)?moneybharat\.co [NC]
RewriteRule ^(.*)$ https://www.moneybharatfinance.com/$1 [R=301,L]
```

---

## 🏷️ Meta Tags & OG Tags

### Component: `src/components/seo/MetaTagsTemplate.tsx`

#### Homepage Example

```tsx
<MetaTagsTemplate
  title="Money Bharat Finance - Mutual Funds, Insurance & Loans"
  description="Grow your wealth with Money Bharat Finance - India's AI-powered platform for mutual funds, SIP investments, health & life insurance, and instant personal loans."
  keywords="mutual funds India, SIP investment, health insurance, personal loans"
  url="https://www.moneybharatfinance.com/"
  type="website"
/>
```

#### Blog Post Example

```tsx
<MetaTagsTemplate
  title="Understanding SIP Investment - Complete Guide 2025"
  description="Learn everything about SIP investments, returns, and strategies."
  keywords="SIP, mutual funds, investment guide"
  url="https://www.moneybharatfinance.com/blog/sip-investment-guide"
  type="article"
  publishedTime="2025-01-15T10:00:00+05:30"
  modifiedTime="2025-01-19T14:30:00+05:30"
  author="Money Bharat Finance Team"
  article={{
    section: "Investment",
    tags: ["SIP", "Mutual Funds", "Investment"]
  }}
/>
```

### Key Meta Tags Included

- **Basic SEO:** title, description, keywords, author
- **Canonical URL:** enforces www version
- **Robots:** index, follow directives
- **Open Graph:** complete OG tags for social sharing
- **Twitter Cards:** large image cards
- **Mobile:** viewport, PWA tags
- **Hreflang:** en-IN, hi-IN support
- **Business Info:** company name, contact

---

## 📊 Structured Data (JSON-LD)

### Component: `src/components/seo/OrganizationSchema.tsx`

#### 1. Organization Schema

```json
{
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "Money Bharat Finance",
  "legalName": "Spyra Exim Pvt Ltd",
  "url": "https://www.moneybharatfinance.com/",
  "contactPoint": [{
    "telephone": "+91-9970735694",
    "email": "contact@moneybharatfinance.com"
  }]
}
```

#### 2. Local Business Schema

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Money Bharat Finance",
  "telephone": "+91-9970735694",
  "priceRange": "₹₹",
  "openingHours": "Mo-Sa 09:00-18:00"
}
```

#### 3. Website Schema

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "url": "https://www.moneybharatfinance.com/",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.moneybharatfinance.com/search?q={search_term}"
  }
}
```

#### Usage

```tsx
import { OrganizationSchema } from '@/components/seo/OrganizationSchema';

function App() {
  return (
    <>
      <OrganizationSchema />
      {/* Your app content */}
    </>
  );
}
```

---

## 🗺️ Sitemap & Robots

### Sitemap (`public/sitemap.xml`)

- **Location:** `https://www.moneybharatfinance.com/sitemap.xml`
- **Format:** All URLs use canonical format (https, www, no trailing slash)
- **Updates:** Updated 2025-01-19
- **Priority Levels:**
  - Homepage: 1.00
  - Core services: 0.95
  - Product pages: 0.90
  - Tools: 0.85
  - Blog: 0.80
  - Info pages: 0.70
  - Legal: 0.40

### Robots.txt (`public/robots.txt`)

```
User-agent: *
Allow: /
Crawl-delay: 2

# Disallow admin and tracking parameters
Disallow: /admin/
Disallow: /*?utm_*
Disallow: /*?fbclid=*

# Sitemaps
Sitemap: https://www.moneybharatfinance.com/sitemap.xml
Sitemap: https://www.moneybharatfinance.com/rss.xml

# Preferred domain
Host: https://www.moneybharatfinance.com
```

---

## 🔒 Security & Trust Files

### 1. Security.txt (`public/security.txt` and `public/.well-known/security.txt`)

```
Contact: mailto:security@moneybharatfinance.com
Contact: mailto:spyraexim@gmail.com
Expires: 2026-12-31T23:59:59.000Z
Preferred-Languages: en, hi
Canonical: https://www.moneybharatfinance.com/.well-known/security.txt
```

**Purpose:** Responsible vulnerability disclosure

### 2. Humans.txt (`public/humans.txt`)

```
/* TEAM */
Company: Spyra Exim Pvt Ltd
Website: https://www.moneybharatfinance.com/
Contact: contact@moneybharatfinance.com

/* SITE */
Domain: https://www.moneybharatfinance.com/
Technology: React, TypeScript, Tailwind CSS
Last Update: 2025-01-19
```

**Purpose:** Humanize the website, show team and technology

### 3. Manifest.json (`public/manifest.json`)

```json
{
  "name": "Money Bharat Finance - Spyra Exim Pvt Ltd",
  "short_name": "Money Bharat",
  "start_url": "https://www.moneybharatfinance.com/",
  "scope": "/",
  "display": "standalone",
  "theme_color": "#2EB883"
}
```

**Purpose:** PWA support, app-like experience

---

## ⚡ Performance Optimization

### 1. Resource Preloading

Add to `<head>` for critical resources:

```html
<!-- Preconnect to own domain -->
<link rel="preconnect" href="https://www.moneybharatfinance.com" />
<link rel="dns-prefetch" href="https://www.moneybharatfinance.com" />

<!-- Preload critical assets -->
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin />
<link rel="preload" href="/assets/hero-image.webp" as="image" />
```

### 2. Compression (.htaccess)

```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css application/javascript
    AddOutputFilterByType DEFLATE application/json image/svg+xml
</IfModule>
```

### 3. Caching (.htaccess)

```apache
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType text/html "access plus 0 seconds"
</IfModule>
```

### 4. Image Optimization

- Use WebP format with JPEG fallback
- Lazy loading: `loading="lazy"` attribute
- Responsive images: `srcset` attribute
- Proper alt tags for SEO and accessibility

### 5. Security Headers (vercel.json / .htaccess)

```json
{
  "headers": [{
    "source": "/(.*)",
    "headers": [
      { "key": "X-Content-Type-Options", "value": "nosniff" },
      { "key": "X-Frame-Options", "value": "DENY" },
      { "key": "X-XSS-Protection", "value": "1; mode=block" },
      { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
    ]
  }]
}
```

---

## ✅ Implementation Checklist

### Phase 1: Domain & Redirects

- [x] Update `siteConfig.ts` with new domain
- [x] Update `urlCanonicalizer.ts` to prefer www
- [x] Configure `_redirects` for non-www → www
- [x] Configure `vercel.json` redirects
- [x] Update `.htaccess` for Apache/Hostinger
- [x] Add old domain redirects (moneybharat.co → moneybharatfinance.com)

### Phase 2: SEO Files

- [x] Update `robots.txt` with canonical domain
- [x] Update `sitemap.xml` with all canonical URLs
- [x] Create `security.txt` and `.well-known/security.txt`
- [x] Update `humans.txt` with company info
- [x] Update `manifest.json` for PWA

### Phase 3: Meta Tags & Structured Data

- [x] Create `MetaTagsTemplate.tsx` component
- [x] Create `OrganizationSchema.tsx` component
- [x] Implement OG tags for social sharing
- [x] Add Twitter Card meta tags
- [x] Add hreflang tags for i18n
- [x] Add JSON-LD for Organization, LocalBusiness, Website

### Phase 4: Performance

- [ ] Add preconnect/dns-prefetch links
- [ ] Implement resource preloading for critical assets
- [ ] Configure compression (gzip/brotli)
- [ ] Set up cache headers
- [ ] Optimize images (WebP, lazy loading)
- [ ] Add security headers

### Phase 5: Testing & Validation

- [ ] Test all redirects (non-www → www, http → https, old domain)
- [ ] Validate sitemap.xml in Google Search Console
- [ ] Test structured data with Google Rich Results Test
- [ ] Verify canonical tags on all pages
- [ ] Check meta tags with Facebook Sharing Debugger
- [ ] Test Twitter Cards with Twitter Card Validator
- [ ] Run PageSpeed Insights
- [ ] Check mobile-friendliness

### Phase 6: Search Console Setup

- [ ] Verify domain in Google Search Console
- [ ] Submit sitemap.xml
- [ ] Set preferred domain (www)
- [ ] Monitor indexing status
- [ ] Set up Bing Webmaster Tools
- [ ] Submit to other search engines (Yandex, Baidu if applicable)

---

## 📞 Support & Contact

**Company:** Spyra Exim Pvt Ltd  
**Email:** contact@moneybharatfinance.com  
**Support:** spyraexim@gmail.com  
**Website:** https://www.moneybharatfinance.com/

---

## 🔄 Maintenance

### Monthly Tasks

- Review and update sitemap.xml
- Check for broken links
- Monitor Search Console for errors
- Update meta descriptions for new content

### Quarterly Tasks

- Review and update structured data
- Audit redirects
- Performance optimization review
- Security headers audit

### Yearly Tasks

- Renew security.txt expiration
- Comprehensive SEO audit
- Competitor analysis
- Update humans.txt

---

**Last Updated:** 2025-01-19  
**Version:** 1.0  
**Maintained By:** Money Bharat Finance Team
