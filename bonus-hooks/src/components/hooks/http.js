import { useCallback, useReducer } from "react";

const httpReducer = (curHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null, data: null };
    case "RESPONSE":
      return { ...curHttpState, loading: false, data: action.responseData };
    case "ERROR":
      return { loading: false, error: action.errorData };
    case "CLEAR":
      return { ...curHttpState, error: null };
    default:
      throw new Error("Should not be reached!");
  }
};

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null,
    data: null,
  });

  // url: https://react-hooks-update-9792d-default-rtdb.europe-west1.firebasedatabase.app/ingredients/${ingredientId}.json
  const sendRequest = useCallback((url, method, body) => {
    dispatchHttp({ type: "SEND" });
    fetch(url, {
      method,
      body,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        dispatchHttp({ type: "RESPONSE", responseData: responseData });
      })
      .catch((error) => {
        dispatchHttp({ type: "ERROR", errorMessage: error.message });
      });
  }, []);

  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest: sendRequest,
  };
};

export default useHttp;
