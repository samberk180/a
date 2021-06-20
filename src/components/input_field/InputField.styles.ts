import {CommonStyles as UI} from '@components/common.styles';
import styled, {css} from 'styled-components/native';
export const InputFieldStyles = {
  Container: styled.View<{margined?: boolean}>`
    ${(p: any) =>
      p.margined &&
      css`
        margin-bottom: 20px;
      `}
  `,
  Label: styled(UI.TextBold)<{hasError?: boolean}>`
    font-size: 16px;
    line-height: 19px;
    font-weight: bold;
    margin-bottom: 10px;
    color: ${(p: any) => p.theme.labelColor};
  `,
  Input: styled.TextInput.attrs((p: any) => ({
    placeholderTextColor: p.theme.inputPlaceholderColor,
  }))<{hasFocus?: boolean; hasError?: boolean}>`
    padding: 16px 15px;
    border-radius: 10px;
    border-width: 1.5px;
    font-size: 16px;
    font-family: AvenirNextLTPro-Regular;
    color: ${(p: any) =>
      p.hasError
        ? p.theme.inputErrorTextColor
        : p.hasFocus
        ? p.theme.inputColor
        : p.theme.inputPlaceholderColor};
    border-color: ${(p: any) =>
      p.hasError
        ? p.theme.inputErrorBorderColor
        : p.hasFocus
        ? p.theme.inputFocusBorderColor
        : p.theme.inputBorderColor};
    background-color: ${(p: any) =>
      p.hasFocus
        ? p.theme.inputBackgroundColor
        : p.hasError
        ? p.theme.inputErrorBackground
        : p.theme.inputBackgroundColor};
  `,
  Caption: styled(UI.TextRegular)<{hasError?: boolean}>`
    font-size: 12px;
    margin-top: 4px;
    color: ${(p: any) =>
      p.hasError ? p.theme.inputErrorTextColor : p.theme.captionColor};
  `,
};
