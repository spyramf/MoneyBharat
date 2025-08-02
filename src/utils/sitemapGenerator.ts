
export const publicRoutes = [
  '/',
  '/about',
  '/contact',
  '/mutual-funds',
  '/insurance',
  '/health-insurance',
  '/term-insurance',
  '/vehicle-insurance',
  '/loans',
  '/loans/personal',
  '/blog',
  '/booking',
];

export const generateSitemap = () => {
  const baseUrl = 'https://moneybharat.co';
  
  const urls = publicRoutes.map(route => ({
    loc: `${baseUrl}${route}`,
    lastmod: new Date().toISOString(),
    changefreq: route === '/' ? 'daily' : 'weekly',
    priority: route === '/' ? '1.0' : '0.8'
  }));

  return urls;
};
