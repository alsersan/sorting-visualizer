import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin: 1.5rem 0;
  opacity: ${(props) => (props.isRunning || props.hasStarted ? "0.4" : "1")};
  pointer-events: ${(props) =>
    props.isRunning || props.hasStarted ? "none" : "auto"};
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
`;

const ComponentContainer = (props) => {
  return (
    <Container {...props}>
      <Title>{props.title}</Title>
      {props.children}
    </Container>
  );
};

export default ComponentContainer;
