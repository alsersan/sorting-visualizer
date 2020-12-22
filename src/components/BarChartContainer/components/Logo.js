import React from "react";
import styled from "styled-components";
import logoLight from "../../../images/logoLight.png";
import logoDark from "../../../images/logoDark.png";

const Container = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const Logo = ({ option }) => {
  return (
    <Container>
      <img
        src={option === "light" ? logoLight : logoDark}
        alt="logo"
        style={{ height: "6rem" }}
      />
    </Container>
  );
};

export default Logo;
