import {Button} from '@components/button';
import {CommonStyles as UI} from '@components/common.styles';
import styled from 'styled-components/native';

export const LoginStyles = {
  Container: styled.View`
    flex: 1;
    padding: 32px;
    justify-content: flex-end;
  `,
  Link: styled(Button).attrs({
    type: 'link',
  })`
    width: 125px;
    margin-top: 4px;
    align-self: flex-end;
  `,
  Button: styled(Button)`
    margin-top: 64px;
  `,
  LinkAlt: styled(Button).attrs({
    type: 'link',
  })`
    margin-top: 40px;
    margin-bottom: 20px;
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
