import React from 'react';
import styled from 'styled-components';

import logoLight from '../images/logoLight.svg';
import logoDark from '../images/logoDark.svg';
import { useThemeTogglerContext } from '../contexts/ThemeTogglerContext';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledLogo = styled.img`
  width: 80%;
  max-width: 22rem;
`;

const Logo = (props) => {
  const { theme } = useThemeTogglerContext();
  return (
    <Container className={props.className}>
      <StyledLogo src={theme === 'light' ? logoLight : logoDark} alt="logo" />
    </Container>
  );
};

export default Logo;
