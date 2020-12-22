import React from "react";
import styled from "styled-components";

import logoLight from "../../../images/logoLight.png";
import logoDark from "../../../images/logoDark.png";
import { useThemeTogglerContext } from "../../../contexts/ThemeTogglerContext";

const Container = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const Logo = () => {
  const { theme } = useThemeTogglerContext();

  return (
    <Container>
      <img
        src={theme === "light" ? logoLight : logoDark}
        alt="logo"
        style={{ height: "6rem" }}
      />
    </Container>
  );
};

export default Logo;
