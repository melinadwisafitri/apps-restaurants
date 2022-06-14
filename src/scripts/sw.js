import { CacheableResponse, CacheableResponsePlugin } from 'workbox-cacheable-response';
import 'regenerator-runtime';
import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';

clientsClaim();

self.skipWaiting();
precacheAndRoute(self.__WB_MANIFEST);

// font from google cache

registerRoute(
  ({ url }) => url.origin === 'https://fonts.gstatic.com',
  new CacheFirst({
    cacheName: 'google-fonts-statis',
    plugins: [
      new CacheableResponse({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 10,
        maxAgeSeconds: 60 * 24 * 365,
      }),
    ],
  }),
);

registerRoute(
  ({ url }) => url.origin === 'https://fonts.googleapis.com/',
  new StaleWhileRevalidate({
    cacheName: 'google-fonts-apies',
  }),
);

registerRoute(
  ({ request }) => request.destination === 'script',
  new StaleWhileRevalidate({
    cacheName: 'script-resource',
  }),
);

// image cache

registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'image-data',
    plugins: [
      new ExpirationPlugin({ maxEntries: 1000 }),
    ],
  }),
);

// api cache
registerRoute(
  ({ url }) => url.origin === 'https://restaurant-api.dicoding.dev' || url.pathName === '/list',
  new StaleWhileRevalidate({
    cacheName: 'api-restaurant',
    plugins: [
      new CacheableResponsePlugin({ statuses: [0, 200] }),
      new ExpirationPlugin({ maxEntries: 100 }),
    ],
  }),
);
