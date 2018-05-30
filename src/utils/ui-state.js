import { worker } from './worker-connector.js';

const functions = {};
const lastValues = {};

const subscribe = (path, fn) => {
  if (!functions[path]) functions[path] = [];
  if (functions[path].indexOf(fn) < 0) functions[path].push(fn);
  if (lastValues[path]) fn(lastValues[path]);
};

const unsubscribe = (path, fn) => {
  const index = functions[path].indexOf(fn);
  if (index >= 0) functions[path].splice(index, 1);
};

async function dispatch (path, value) {
  await Promise.resolve();
  const fns = functions[path];
  lastValues[path] = value;
  if (fns) {
    for (let i = 0; i < fns.length; i++) {
      const fn = fns[i];
      fn(value);
    }
  }
}

function updateState (path, value) {
  worker.postMessage({
    action: 'state-change',
    path,
    value
  });
}

worker.addEventListener('message', ({ data }) => {
  const { action } = data;
  if (action === 'state-change') return dispatch(data.path, data.value);
});

export { subscribe, unsubscribe, dispatch, updateState };
