import {CommonStyles as CUI} from '@components/common.styles';
import {InputField} from '@components/input_field';
import React from 'react';

import {LoginHooks} from './Login.hooks';
import {LoginStyles as UI} from './Login.styles';

export const LoginScreen: React.FC = () => {
  const {toToRegister, toToPasswordReset} = useLogin();
  return (
    <CUI.SafeAreaView>
      <CUI.KeyboardAvoidingView>
        <CUI.ScrollView>
          <UI.Container>
            <UI.Title>Welcome back!</UI.Title>
            <UI.SubTitle>
              Let's get you in by providing your account credentials
            </UI.SubTitle>
            <InputField
              label="Email address"
              placeholder="you@example.com"
              keyboardType="email-address"
              margined
            />
            <InputField
              label="Password"
              placeholder="********"
              secureTextEntry
              returnKeyType="done"
              returnKeyLabel="login"
            />
            <UI.Link onPress={toToPasswordReset} label="Forgot Password?" />
            <UI.Button label="Login" />
            <UI.LinkAlt
              onPress={toToRegister}
              label="New to Buxis? create an account"
            />
          </UI.Container>
        </CUI.ScrollView>
      </CUI.KeyboardAvoidingView>
    </CUI.SafeAreaView>
  );
};

const {useLogin} = LoginHooks;
