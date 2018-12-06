'use strict';

importScripts('https://daisy-pwa.netlify.com/sw-toolbox.js');

toolbox.precache(["https://daisy-pwa.netlify.com/index.html","https://daisy-pwa.netlify.com/compiled.min.css"]);

toolbox.router.get('https://daisy-pwa.netlify.com/images/*', toolbox.cacheFirst);

toolbox.router.get('/*', toolbox.networkFirst, {
  networkTimeoutSeconds: 5
});
