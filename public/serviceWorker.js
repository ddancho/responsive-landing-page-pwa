const staticCache = "static-cache-v1";
const dynamicCache = "dynamic-cache-v1";

const assettsToCache = [
  "/index.html",
  "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",
];

self.addEventListener("install", (e) => {
  console.log("service worker installed...");

  // waiting for the cache to finish
  e.waitUntil(
    caches.open(staticCache).then((cache) => {
      console.log("caching in the process...");
      // cache the resource
      cache.addAll(assettsToCache);
    })
  );
});

self.addEventListener("activate", (e) => {
  console.log("service worker activated...");

  // when a new service worker is activated
  // delete any cache(s) associated with the old service worker
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.filter((key) => key !== staticCache).map((key) => caches.delete(key)));
    })
  );
});

self.addEventListener("fetch", (e) => {
  console.log("fetch event kicked...");

  // process only http(s) protocols
  if (!e.request.url.includes("http") || !e.request.url.includes("https")) return;

  // check if the requested resource is in the cache
  e.respondWith(
    caches.match(e.request).then((cacheResource) => {
      // return the cache if found or fetch it from the server
      return (
        cacheResource ||
        fetch(e.request).then((fetchResource) => {
          // cache new resource as dynamic cache
          return caches.open(dynamicCache).then((cache) => {
            // fetchResource is stream type
            // so to save to dynamic cache and to return it to the app, we call clone method on it
            cache.put(e.request.url, fetchResource.clone());
            // so we can return it properly
            return fetchResource;
          });
        })
      );
    })
  );
});
