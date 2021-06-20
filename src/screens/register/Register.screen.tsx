import {CommonStyles as CUI} from '@components/common.styles';
import {InputField} from '@components/input_field';
import React from 'react';

import {RegisterHooks} from './Register.hooks';
import {RegisterStyles as UI} from './Register.styles';

export const RegisterScreen: React.FC = () => {
  const {toToLogin} = useRegister();
  return (
    <CUI.SafeAreaView>
      <CUI.KeyboardAvoidingView>
        <CUI.ScrollView>
          <UI.Container>
            <UI.Title>Create an account</UI.Title>
            <UI.SubTitle>
              Let's get started by providing your account credentials
            </UI.SubTitle>
            <InputField label="Full name" placeholder="John Doe" margined />
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
              returnKeyLabel="continue"
            />
            <UI.Button label="Continue" />
            <UI.Link onPress={toToLogin} label="Already on Buxis? login here" />
          </UI.Container>
        </CUI.ScrollView>
      </CUI.KeyboardAvoidingView>
    </CUI.SafeAreaView>
  );
};

const {useRegister} = RegisterHooks;
