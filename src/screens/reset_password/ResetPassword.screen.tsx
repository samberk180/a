import {CommonStyles as CUI} from '@components/common.styles';
import {InputField} from '@components/input_field';
import React from 'react';

import {ResetPasswordStyles as UI} from './ResetPassword.styles';

export const ResetPasswordScreen: React.FC = () => {
  return (
    <CUI.SafeAreaView>
      <CUI.KeyboardAvoidingView>
        <CUI.ScrollView>
          <UI.Container>
            <UI.Title>Reset Password</UI.Title>
            <UI.SubTitle>
              Provide your account email to reset your account
            </UI.SubTitle>
            <InputField
              label="Email address"
              placeholder="you@example.com"
              keyboardType="email-address"
              returnKeyType="done"
            />
            <UI.Button label="Continue" />
          </UI.Container>
        </CUI.ScrollView>
      </CUI.KeyboardAvoidingView>
    </CUI.SafeAreaView>
  );
};
