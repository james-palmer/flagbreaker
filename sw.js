const version = 1.2.1;

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/flagbreaker/sw.js').then(function (registration) {
            console.log('Service worker successfully registered on scope', registration.scope);
            console.log('Version', version);
        }).catch(function (error) {
            console.log('Service worker failed to register');
            console.log('Version', version);
        });
    });
}

var cacheName = 'flagbreaker';
var filesToCache = [
  '/',
  '/flagbreaker/index.html',
  '/flagbreaker/public/main.css'
];
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});