const CACHE = 'receipt-budget-v5'; // change the number when you update any file
const FILES = [
  './', './index.html', './manifest.json',
  './icon-180.png', './icon-192.png', './icon-512.png',
  './ocr/tesseract.min.js', './ocr/worker.min.js',
  './ocr/core/tesseract-core-lstm.wasm.js',
  './ocr/core/tesseract-core-simd-lstm.wasm.js',
  './ocr/lang/eng.traineddata.gz',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  if (e.request.url.includes('supabase.co')) return;

  const isHtml = e.request.mode === 'navigate' ||
                 (e.request.headers.get('accept') && e.request.headers.get('accept').includes('text/html')) ||
                 e.request.url.endsWith('/') ||
                 e.request.url.endsWith('index.html');

  if (isHtml) {
    // Network-first for HTML: phones always see the newest version immediately when online, falls back to cache offline
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(e.request, copy));
          }
          return res;
        })
        .catch(() => caches.match(e.request, { ignoreSearch: true }))
    );
    return;
  }

  // Cache-first for heavy static assets (WASM, language models, icons)
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request))
  );
});

