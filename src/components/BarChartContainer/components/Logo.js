import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const Logo = () => {
  return (
    <Container>
      <span style={{ fontSize: "45px", fontWeight: "bold" }}>Logo</span>
    </Container>
  );
};

export default Logo;
