import React from "react";
import styled from "styled-components";

import Slider from "./components/Slider";

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
`;

const Text = styled.span`
font-size 0.9rem;
width: 3.2rem;
text-align: center;
  
`;

const Selector = (props) => {
  return (
    <FlexWrapper>
      <Slider {...props} />
      <Text>{props.text}</Text>
    </FlexWrapper>
  );
};

export default Selector;
