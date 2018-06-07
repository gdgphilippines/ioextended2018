import '@littleq/core-lite';
import './components/snackbar-lite/index.js';
import { fragments } from './utils/fragments.js';
import { updateState } from './utils/ui-state.js';
const core = document.querySelector('core-lite');
core.addEventListener('current-route-change', currentRouteChanged);
core.addEventListener('router-param-object-change', routeParamObjectChanged);
window.addEventListener('click', closeSidebar);
const loader = document.querySelector('.core-lite-loader');

function currentRouteChanged ({ detail: route }) {
  lazyLoad(fragments[route]);
  updateState('currentRoute', route);
}

function routeParamObjectChanged ({ detail: params }) {
  updateState('routeParamObject', params);
}

function closeSidebar ({ target }) {
  const sidebar = document.querySelector('project-sidebar');
  if (sidebar.__open && sidebar !== target) sidebar.close();
}

async function lazyLoad (fragment) {
  try {
    if (fragment && typeof fragment === 'function') {
      await fragment();
      if (loader && loader.style.opacity !== 0) {
        loader.style.opacity = 0;
        setTimeout(() => {
          loader.style.display = 'none';
        }, 1000);
      }
    } else {
      await Promise.reject(new Error('No fragment found'));
    }
  } catch (error) {
    console.log(error);
  }
}

import('./components/project-header/index.js').then(() => {
  const header = document.querySelector('project-header');
  header.addEventListener('click', closeSidebar);
});

// service worker
const snacker = document.querySelector('.snackbar-lite');
let text;
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js', {
    scope: '/'
  }).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;
      if (installingWorker) {
        installingWorker.onstatechange = function () {
          text = null;
          switch (installingWorker.state) {
            case 'installed':
              if ('controller' in navigator.serviceWorker) {
                text = 'Caching Complete! Future visits will work offline.';
              }
              break;
            case 'redundant':
              text = 'Service worker already installed.';
              console.log('The installing service worker became redundant.');
          }
          if (text) {
            snacker.auto = true;
            snacker.textContent = text;
            snacker.show();
          }
        };
      }
    };
    text = 'controller' in navigator.serviceWorker
      ? 'This will now work offline.'
      : 'Please reload this page to allow the service worker to handle network operations.';
    console.log(text);
    // snacker.auto = true;
    // snacker.textContent = text;
    // snacker.show();
  });
  // Check to see if the service worker controlling the page at initial load
  // has become redundant, since this implies there's a new service worker with fresh content.
  if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.onstatechange = function (event) {
      if (event.target.state === 'redundant') {
        // Define a handler that will be used for the next io-toast tap, at which point it
        // be automatically removed.

        if ('controller' in navigator.serviceWorker) {
          snacker.auto = true;
          snacker.textContent = 'Reloading Web App to accommodate updates...';
          snacker.show();

          setTimeout(() => {
            window.location.reload();
          }, snacker.timeout + 1000);
        }
      }
    };
  }
}
