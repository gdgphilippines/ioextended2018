let currentState = {};
const stateTimeline = [];

const reducer = (path, state = {}, value) => {
  const obj = {};
  obj[path] = value;
  return { ...state, ...obj };
};

const stateManager = (data) => {
  const { action } = data;
  if (action === 'state-change') {
    const { path, value } = data;
    currentState = reducer(path, currentState, value);
    if (stateTimeline.length >= 1000) {
      stateTimeline.pop();
    }
    stateTimeline.unshift(currentState);
    global.postMessage({ action, path, value });
  } else if (data.action === 'get-state') {
    global.postMessage({ action, value: currentState });
  }
};

export { stateManager };
