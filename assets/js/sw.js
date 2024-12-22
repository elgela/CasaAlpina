//////////para instalar como aplicacion (no está funcionando ahora). Registro de Service Worker//////////////

self.addEventListener('install', function(event) {
    console.log('Service Worker instalado');
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
    