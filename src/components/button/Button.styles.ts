import {CommonStyles as UI} from '@components/common.styles';
import styled, {css} from 'styled-components/native';

import {ButtonType} from './Button.interface';

export const ButtonStyles = {
  Container: styled.TouchableOpacity.attrs({
    activeOpacity: 0.85,
  })<{type?: ButtonType}>`
    padding: ${(p: any) => (p.type === 'link' ? 4 : 16)}px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background-color: ${(p: any) =>
      p.type === 'link' || p.type === 'transparent'
        ? 'transparent'
        : p.disabled
        ? p.theme.buttonDisabledBackground
        : p.theme.buttonBackground};
  `,
  Text: styled(UI.TextBold)<{isLink: boolean}>`
    font-size: ${(p: any) => (p.isLink ? 14 : 16)}px;
    text-transform: ${(p: any) => (p.isLink ? 'none' : 'uppercase')};
    color: ${(p: any) =>
      p.isLink ? p.theme.linkTextColor : p.theme.buttonTextColor};
    ${(p: any) =>
      p.isLink &&
      css`
        text-decoration: underline ${p.theme.linkTextColor};
        font-family: AvenirNextLTPro-Regular;
      `}
  `,
  Loader: styled.ActivityIndicator.attrs((p: any) => ({
    size: 20,
    color: p.theme.buttonBackground,
  }))``,
};
