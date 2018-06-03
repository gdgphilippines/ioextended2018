console.log(`Development mode. Will cache files in production mode. Generated: ${new Date().toString()}`);
// The install handler takes care of precaching the resources we always need.
this.addEventListener('install', event => {
  if (this.skipWaiting) { this.skipWaiting(); }
});
// The activate handler takes care of cleaning up old caches.
this.addEventListener('activate', event => {
  console.log('activated');
});
