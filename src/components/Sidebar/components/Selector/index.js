import React from "react";
import styled from "styled-components";

import Slider from "./components/Slider";

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
    <>
      <TextWrapper>
        <Text mainText>{props.mainText}</Text>
        <Text secondaryText>{props.secondaryText}</Text>
      </TextWrapper>
      <Slider {...props} />
    </>
  );
};

export default Selector;
