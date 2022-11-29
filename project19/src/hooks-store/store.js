import { useEffect, useState } from "react";

let globalState = {};
let listeners = []; // Listening to all components that should update when the global data changes
let actions = {};

export const useStore = (shouldListen = true) => {
  // Only interested in the updater function in order to update the global state and rerender the component that uses this custom hook
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  // Only register listener once the components mounts
  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }

    // Clean up listeners after usage
    return () => {
      if (shouldListen) {
        listeners = listeners.filter((li) => li !== setState);
      }
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
