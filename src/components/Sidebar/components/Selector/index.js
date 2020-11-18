import React from "react";
import styled from "styled-components";

import Slider from "./components/Slider";

const Container = styled.div`
  width: 90%;
  margin: 2rem 0;
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Selector = (props) => {
  return (
    <Container>
      <TextWrapper>
        <span>{props.mainText}</span>
        <span>{props.secondaryText}</span>
      </TextWrapper>
      <Slider {...props} />
    </Container>
  );
};

export default Selector;
