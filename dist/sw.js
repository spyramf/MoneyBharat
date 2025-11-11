const CACHE_NAME = 'money-bharat-v2';

// Install: activate immediately
self.addEventListener('install', () => self.skipWaiting());

// Activate: claim clients immediately
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => 
      Promise.all(keys.map(key => key !== CACHE_NAME && caches.delete(key)))
    ).then(() => clients.claim())
  );
});

// Fetch: network-first for HTML, cache-first for assets
self.addEventListener('fetch', (event) => {
  const req = event.request;
  
  // Navigation requests: network-first (prevents blank page from stale cache)
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .catch(() => caches.match('/offline.html'))
    );
    return;
  }
  
  // Static assets: cache-first
  if (req.url.match(/\.(js|css|png|jpg|jpeg|svg|webp|woff2?)$/)) {
    event.respondWith(
      caches.match(req).then(cached => {
        if (cached) return cached;
        return fetch(req).then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, clone));
          return response;
        });
      })
    );
    return;
  }
  
  // Everything else: network-first
  event.respondWith(fetch(req));
});
