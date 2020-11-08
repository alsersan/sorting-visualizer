import React from "react";
import styled from "styled-components";

const StyledSlider = styled.input`
  width: 100%;
  cursor: pointer;
`;

const Slider = (props) => {
  return <StyledSlider type="range" {...props} />;
};

export default Slider;
