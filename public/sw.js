const CACHE_NAME = 'your-portfolio-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  // Add other assets to cache
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
}); 