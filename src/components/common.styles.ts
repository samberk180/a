import styled from 'styled-components/native';

import {onPlatform} from '../utils/platform';

export const CommonStyles = {
  SafeAreaView: styled.SafeAreaView`
    flex: 1;
    background-color: ${(p: any) => p.theme.background};
  `,
  KeyboardAvoidingView: styled.KeyboardAvoidingView.attrs({
    behavior: onPlatform('height', 'padding'),
    flex: 1,
  })``,
  ScrollView: styled.ScrollView.attrs({
    contentContainerStyle: {
      flexGrow: 1,
    },
    showsVerticalScrollIndicator: false,
  })``,
  TextRegular: styled.Text`
    font-family: AvenirNextLTPro-Regular;
    color: ${(p: any) => p.theme.textColor};
  `,
  TextBold: styled.Text`
    font-family: AvenirNextLTPro-Bold;
  `,
  Title: styled.Text`
    font-family: AvenirNextLTPro-Bold;
    font-size: 28px;
    color: ${(p: any) => p.theme.titleColor};
  `,
};
