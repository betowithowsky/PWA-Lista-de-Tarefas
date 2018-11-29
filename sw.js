importScripts('/dist/ServiceWorker/sw-toolbox.js');


toolbox.options.debug = true;

toolbox.precache([
    'index.html',
    'classes/Utils.js',
    'models/Tarefa.js',
    'dist/js/index.js',
    'controller/TarefasController.js',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
]);

toolbox.router.get('*.html', toolbox.cacheFirst);
toolbox.router.get('*.css', toolbox.cacheFirst);
toolbox.router.get('*.js', toolbox.cacheFirst);