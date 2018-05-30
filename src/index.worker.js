import { stateManager } from './workers/state-manager.js';

global.addEventListener('message', ({ data }) => {
  stateManager(data);
});
