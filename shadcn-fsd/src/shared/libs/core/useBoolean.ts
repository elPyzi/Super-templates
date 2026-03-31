import { useCallback, useState } from 'react';

export const useBoolean = (defaultState = false) => {
  const [value, setValue] = useState<boolean>(defaultState);

  const setTrue = useCallback(() => {
    if (!value) {
      setValue(true);
    }
  }, [value]);

  const setFalse = useCallback(() => {
    if (value) {
      setValue(false);
    }
  }, [value]);

  const toggle = useCallback(() => {
    setValue((currState) => !currState);
  }, []);

  return {
    value,
    setTrue,
    setFalse,
    toggle,
  };
};
