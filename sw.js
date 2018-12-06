'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["index.html","compiled.min.css"]);

toolbox.router.get('/images/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
