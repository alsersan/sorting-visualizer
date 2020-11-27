import React from "react";
import styled from "styled-components";

import Slider from "./components/Slider";

const Container = styled.div`
  width: 100%;
  margin: 2rem 0;
  opacity: ${(props) => (props.hasStarted ? "0.4" : "1")};
  pointer-events: ${(props) => (props.hasStarted ? "none" : "auto")};
`;

const TextWrapper = styled.div`
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.span`
  font-weight: ${(props) => (props.mainText ? "500" : "inherit")};
  font-size: ${(props) => (props.mainText ? "1.2rem" : "0.9rem")};
`;

const Selector = (props) => {
  return (
    <Container hasStarted={props.hasStarted}>
      <TextWrapper>
        <Text mainText>{props.mainText}</Text>
        <Text secondaryText>{props.secondaryText}</Text>
      </TextWrapper>
      <Slider {...props} />
    </Container>
  );
};

export default Selector;
