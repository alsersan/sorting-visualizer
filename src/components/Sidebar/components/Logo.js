import React from "react";
import styled from "styled-components";

import logoLight from "../../../images/logoLight.png";
import logoDark from "../../../images/logoDark.png";
import { useThemeTogglerContext } from "../../../contexts/ThemeTogglerContext";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5.5rem;
`;

const StyledLogo = styled.img`
  height: 100%;
`;

const Logo = () => {
  const { theme } = useThemeTogglerContext();

  return (
    <Container>
      <StyledLogo src={theme === "light" ? logoLight : logoDark} alt="logo" />
    </Container>
  );
};

export default Logo;
