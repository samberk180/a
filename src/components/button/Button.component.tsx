import React from 'react';

import {ButtonProps} from './Button.interface';
import {ButtonStyles as UI} from './Button.styles';

export const Button: React.FC<ButtonProps> = React.memo(
  ({label, loading, type, ...rest}) => {
    return (
      <UI.Container disabled={loading} type={type} {...rest}>
        {loading ? (
          <UI.Loader />
        ) : (
          <UI.Text isLink={type === 'link'}>{label}</UI.Text>
        )}
      </UI.Container>
    );
  },
);
