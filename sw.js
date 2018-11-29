importScripts('https://cdnjs.cloudflare.com/ajax/libs/sw-toolbox/3.6.1/sw-toolbox.js');


toolbox.options.debug = true;

toolbox.precache([
    'index.html',
    'classes/Utils.js',
    'models/Tarefa.js',
    'dist/js/index.js',
    'controller/TarefasController.js',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
]);

self.addEventListener('fetch', function(event) {
    event.respondWith(
      fetch(event.request).catch(function() {
        return caches.match(event.request);
      })
    );
  });