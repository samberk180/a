import {TouchableNativeFeedbackProps} from 'react-native';

export type ButtonType = 'primary' | 'secondary' | 'transparent' | 'link';

export interface ButtonProps extends TouchableNativeFeedbackProps {
  label: string;
  loading?: boolean;
  type?: ButtonType;
}
