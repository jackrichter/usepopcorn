import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  // Read back from local storage using lazy initial state
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  // Save the watched list (array) to browser local storage. BUT now using an Effect!
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
