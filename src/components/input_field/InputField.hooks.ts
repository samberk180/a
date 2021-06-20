import {useCallback, useState} from 'react';

const useInputField = () => {
  const [hasFocus, setHasFocus] = useState(false);
  const onFocusChanges = useCallback(() => {
    setHasFocus(!hasFocus);
  }, [hasFocus]);

  return {hasFocus, onFocusChanges};
};

export const InputFieldHooks = {useInputField};
