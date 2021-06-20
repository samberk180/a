import {AppUnAuthenticatedRoute} from '@navigation/helpers';
import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
const useLogin = () => {
  const {navigate} = useNavigation();
  const toToRegister = useCallback(() => {
    navigate(AppUnAuthenticatedRoute.Register);
  }, []);

  const toToPasswordReset = useCallback(() => {
    navigate(AppUnAuthenticatedRoute.ResetPassword);
  }, []);

  return {toToRegister, toToPasswordReset};
};

export const LoginHooks = {useLogin};
