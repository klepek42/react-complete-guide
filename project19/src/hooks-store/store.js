import { useEffect, useState } from "react";

let globalState = {};
let listeners = []; // Listening to all components that should update when the global data changes
let actions = {};

export const useStore = () => {
  // Only interested in the updater function in order to update the global state and rerender the component that uses this custom hook
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier) => {
    const newState = actions[actionIdentifier](globalState);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  // Only register listener once the components mounts
  useEffect(() => {
    listeners.push(setState);

    // Clean up listeners after usage
    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
