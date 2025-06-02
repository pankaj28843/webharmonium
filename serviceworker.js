const staticDevCoffee = "web-harmonium";
const assets = [
  "/",
  "/index.html",
  "/harmonium-kannan-orig.wav",
  "/reverb.wav",
  "/serviceworker.js",
  "/favicon.ico"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});