import { useEffect, useState } from "react";

let globalState = {};
let listeners = []; // Listening to all components that should update when the global data changes
let actions = {};

const useStore = () => {
  // Only interested in the updater function in order to update the global state and rerender the component that uses this custom hook
  const setState = useState(globalState)[1];

  // Only register listener once the components mounts
  useEffect(() => {
    listeners.push(setState);

    // Clean up listeners after usage
    return () => {
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState]);
};
