const CACHE_NAME = 'parken-und-belege-v74';
const APP_SHELL = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './db.js',
  './crop.js',
  './voice.js',
  './manifest.json',
  './impressum.html',
  './datenschutz.html',
  './icon-192.png',
  './icon-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Netzwerk zuerst (sowohl für eigene Dateien als auch externe Bibliotheken) —
  // dadurch kommen neue Versionen sofort an, sobald online. Der Cache dient nur
  // noch als Rückfallebene, wenn gerade keine Internetverbindung besteht.
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        const resClone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, resClone));
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});
