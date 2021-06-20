import {TextInputProps} from 'react-native';

export interface InputFieldProps extends TextInputProps {
  label?: string;
  caption?: string;
  hasError?: boolean;
  margined?: boolean;
}
