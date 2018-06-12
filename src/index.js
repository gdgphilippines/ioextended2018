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

if (window.SnackerMessages && window.SnackerMessages.length) {
  const snacker = document.querySelector('.snackbar-lite');
  for (let message of window.SnackerMessages) {
    const { auto, textContent } = message;
    snacker.auto = auto;
    snacker.textContent = textContent;
    snacker.show();
  }
}

// throw new Error();
