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
  display: flex;
  justify-content: space-between;
`;

const Selector = (props) => {
  return (
    <Container hasStarted={props.hasStarted}>
      <TextWrapper>
        <span>{props.mainText}</span>
        <span>{props.secondaryText}</span>
      </TextWrapper>
      <Slider {...props} />
    </Container>
  );
};

export default Selector;
