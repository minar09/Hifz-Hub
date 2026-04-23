// Hifz Hub Service Worker v1.0
// Caches the app shell for offline use

const CACHE_NAME = 'hifzhub-v1';
const FONT_CACHE = 'hifzhub-fonts-v1';

// Core app shell — always cached on install
const APP_SHELL = [
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
];

// Google Fonts URLs to cache
const FONT_URLS = [
  'https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Lora:wght@400;500;600&family=Inter:wght@300;400;500;600&family=Amiri:ital,wght@0,400;0,700;1,400&display=swap',
];

// ── INSTALL: cache app shell ──────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: clean old caches ────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_NAME && k !== FONT_CACHE)
          .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH: smart caching strategy ────────────────────
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // 1. Google Fonts — Cache First (fonts rarely change)
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      caches.open(FONT_CACHE).then(cache =>
        cache.match(event.request).then(cached => {
          if (cached) return cached;
          return fetch(event.request).then(response => {
            cache.put(event.request, response.clone());
            return response;
          }).catch(() => cached);
        })
      )
    );
    return;
  }

  // 2. API calls (Quran/Hadith APIs) — Network First, no cache
  //    We always want fresh data from these
  if (
    url.hostname === 'api.alquran.cloud' ||
    url.hostname === 'cdn.jsdelivr.net'
  ) {
    event.respondWith(
      fetch(event.request).catch(() => {
        return new Response(
          JSON.stringify({ error: 'offline', message: 'No internet connection. Please connect to fetch new content.' }),
          { headers: { 'Content-Type': 'application/json' } }
        );
      })
    );
    return;
  }

  // 3. App shell — Cache First, then Network
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cache successful same-origin responses
        if (response.ok && url.origin === self.location.origin) {
          caches.open(CACHE_NAME).then(cache =>
            cache.put(event.request, response.clone())
          );
        }
        return response;
      }).catch(() => {
        // Fallback to index.html for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});

// ── MESSAGE: force update ─────────────────────────────
self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
