import React from "react";
import styled from "styled-components";
import logoLight from "../../../images/logoLight.png";

const Container = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const Logo = () => {
  return (
    <Container>
      <img src={logoLight} alt="logo" style={{ height: "6rem" }} />
    </Container>
  );
};

export default Logo;
