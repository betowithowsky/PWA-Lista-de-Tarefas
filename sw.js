importScripts('https://cdnjs.cloudflare.com/ajax/libs/sw-toolbox/3.6.1/sw-toolbox.js');


toolbox.options.debug = true;

toolbox.precache([
    'index.html',
    'classes/Utils.js',
    'models/Tarefa.js',
    'dist/js/index.js',
    'controller/TarefasController.js',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
    'android-icon-192x192.png'
]);

toolbox.router.get('/PWA-Lista-de-Tarefas/(.*)', toolbox.networkFirst);