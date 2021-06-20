import {AppUnAuthenticatedRoute} from '@navigation/helpers';
import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
const useRegister = () => {
  const {navigate} = useNavigation();
  const toToLogin = useCallback(() => {
    navigate(AppUnAuthenticatedRoute.Login);
  }, []);

  return {toToLogin};
};

export const ResetPasswordHooks = {useRegister};
