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

toolbox.router.get('produtos.json', toolbox.networkFirst);

toolbox.router.get('*.html', toolbox.cacheFirst);
toolbox.router.get('*.css', toolbox.cacheFirst);
toolbox.router.get('*.js', toolbox.cacheFirst);