const CACHE_NAME = "app-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.webmanifest",
  "/icon-192x192.png",
  "/icon-512x512.png"
];

// Instalacja Service Workera
self.addEventListener("install", (event) => {
  const swEvent = event as ExtendableEvent;
  swEvent.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Obsługa żądań sieciowych
self.addEventListener("fetch", (event) => {
  const swEvent = event as FetchEvent;
  swEvent.respondWith(
    caches.match(swEvent.request).then((response) => response || fetch(swEvent.request))
  );
});
