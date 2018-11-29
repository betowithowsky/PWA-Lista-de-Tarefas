if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('dist/ServiceWorker/sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }).catch(function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }

  var CACHE_NAME = 'my-site-cache-v1';
  var urlsToCache = [
    '/',
    'controller/TarefasController.js',
    'dist/js/index.js',
    'models/Tarefa.js',
    'classes/Utils.js'
  ];
  
  self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
        })
    );
  });