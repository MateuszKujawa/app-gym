var CACHE_NAME = "app-cache-v1";
var urlsToCache = [
    "/",
    "/index.html",
    "/manifest.webmanifest",
    "/icon-192x192.png",
    "/icon-512x512.png"
];
// Instalacja Service Workera
self.addEventListener("install", function (event) {
    var swEvent = event;
    swEvent.waitUntil(caches.open(CACHE_NAME).then(function (cache) { return cache.addAll(urlsToCache); }));
});
// Obsługa żądań sieciowych
self.addEventListener("fetch", function (event) {
    var swEvent = event;
    swEvent.respondWith(caches.match(swEvent.request).then(function (response) { return response || fetch(swEvent.request); }));
});
