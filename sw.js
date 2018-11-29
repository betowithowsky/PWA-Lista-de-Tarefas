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

self.toolbox.router.get('/(.*)', function(req, vals, opts) {
    return toolbox.networkFirst(req, vals, opts)
      .catch(function(error) {
        if (req.method === 'GET' && req.headers.get('accept').includes('text/html')) {
          return toolbox.cacheOnly(new Request('/'), vals, opts);
        }
        throw error;
      });
  });