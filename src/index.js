import '@littleq/core-lite';
import { fragments } from './utils/fragments.js';
import { updateState } from './utils/ui-state.js';
const core = document.querySelector('core-lite');
core.addEventListener('current-route-change', currentRouteChanged);
core.addEventListener('router-param-object-change', routeParamObjectChanged);
window.addEventListener('click', closeSidebar);

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
