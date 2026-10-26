// Bump this version when you replace the site with changed files.
const CACHE = 'n5-biology-numeracy-pwa-v1';
const APP_FILES = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache)=>cache.addAll(APP_FILES)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys)=>Promise.all(keys.filter((k)=>k.startsWith('n5-biology-numeracy-pwa-') && k!==CACHE).map((k)=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', (event) => {
  const request=event.request;
  if(request.method!=='GET') return;
  const url=new URL(request.url);
  if(url.origin!==self.location.origin || !url.pathname.startsWith(new URL(self.registration.scope).pathname)) return;
  if(request.mode==='navigate') {
    // Go online for updates when possible; open cached app offline.
    event.respondWith(fetch(request).then((res)=>{if(res.ok){const clone=res.clone();caches.open(CACHE).then((cache)=>cache.put('./index.html',clone));}return res;}).catch(()=>caches.match('./index.html')));
  } else {
    event.respondWith(caches.match(request).then((hit)=>hit||fetch(request).then((res)=>{if(res.ok){const clone=res.clone();caches.open(CACHE).then((cache)=>cache.put(request,clone));}return res;})));
  }
});
