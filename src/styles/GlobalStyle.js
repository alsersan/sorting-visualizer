import { createGlobalStyle } from 'styled-components';

import UbuntuWoff from '../fonts/Ubuntu.woff';
import UbuntuWoff2 from '../fonts/Ubuntu.woff2';
import UbuntuMediumWoff from '../fonts/UbuntuMedium.woff';
import UbuntuMediumWoff2 from '../fonts/UbuntuMedium.woff2';

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Ubuntu';
  src: url(${UbuntuWoff2}) format('woff2'),
  url(${UbuntuWoff}) format('woff');   
  font-weight: normal;
  font-style: normal   
}

@font-face {
  font-family: 'Ubuntu';
  src: url(${UbuntuMediumWoff2}) format('woff2'),
  url(${UbuntuMediumWoff}) format('woff');   
  font-weight: 500;
  font-style: normal   
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
font-family: 'Ubuntu', sans-serif;
color: ${(props) => props.theme.textColor}
}
`;
