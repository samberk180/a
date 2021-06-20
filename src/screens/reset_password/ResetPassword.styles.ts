import {Button} from '@components/button';
import {CommonStyles as UI} from '@components/common.styles';
import styled from 'styled-components/native';

export const ResetPasswordStyles = {
  Container: styled.View`
    flex: 1;
    padding: 32px;
    justify-content: flex-end;
  `,
  Button: styled(Button)`
    margin-top: 64px;
    margin-bottom: 84px;
  `,
  Title: styled(UI.Title)`
    margin-bottom: 10px;
  `,
  SubTitle: styled(UI.TextRegular)`
    line-height: 25px;
    width: 213px;
    margin-bottom: 45px;
  `,
};
