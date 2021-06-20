import {Platform} from 'react-native';

export const isAndroid = Platform.OS === 'android';
export const onPlatform = (android: any, ios: any) =>
  Platform.select({android, ios});
