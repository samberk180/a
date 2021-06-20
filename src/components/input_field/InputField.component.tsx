import React from 'react';

import {InputFieldHooks} from './InputField.hooks';
import {InputFieldProps} from './InputField.interface';
import {InputFieldStyles as UI} from './InputField.styles';

export const InputField: React.FC<InputFieldProps> = React.memo(
  ({label, caption, hasError, margined, ...rest}) => {
    const {onFocusChanges, hasFocus} = useInputField();
    return (
      <UI.Container margined={margined}>
        {label && <UI.Label hasError={hasError}>{label}</UI.Label>}
        <UI.Input
          hasError={hasError}
          onFocus={onFocusChanges}
          hasFocus={hasFocus}
          onBlur={onFocusChanges}
          autoCapitalize="none"
          autoCorrect={false}
          {...rest}
        />
        {caption && <UI.Caption hasError={hasError}>{caption}</UI.Caption>}
      </UI.Container>
    );
  },
);

const {useInputField} = InputFieldHooks;
