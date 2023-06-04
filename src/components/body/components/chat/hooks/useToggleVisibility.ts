//libs
import { useState, useCallback } from "react";

export const useToggleVisibility = (initialState: boolean) => {
  const [state, setState] = useState<boolean>(initialState);

  const handleToggle = useCallback(() => {
    setState(!state);
  }, [state]);
  return { state, handleToggle };
};
