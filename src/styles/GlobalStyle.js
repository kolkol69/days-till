import { createGlobalStyle } from 'styled-components';

export const theme = {
  primaryColorDark: '#313638',
  primaryColorLight: '#E8E9EB',
  orange: '#F09D51',
  red: '#F06543',
  grey: '#E0DFD5',
  fontFamily: "'Nunito', sans-serif",

  fs1: '36px',
  fs2: '24px',
  fs3: '16px',
  fs4: '12px',
};

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito:400,700');

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.fontFamily};
    font-size: ${theme.fs3};
    color: ${theme.primaryColorLight};
    background: ${theme.primaryColorDark};
  }
`;