import React from "react";
import styled from "styled-components";

const StyledSlider = styled.input`
  width: 100%;
  cursor: pointer;
  appearance: none;
  outline: none;
  height: 2px;
  background-color: #555;

  &::-webkit-slider-thumb {
    appearance: none;
    height: 26px;
    width: 26px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.backgroundColor.secondary};
    border: 2px solid #555;

    &:hover {
      border: 2px solid #1e88e5;
    }

    &:active {
      background-color: #1e88e5;
    }
  }

  &::-moz-range-thumb {
    appearance: none;
    height: 22px;
    width: 22px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.backgroundColor.secondary};
    border: 2px solid #555;

    &:hover {
      border: 2px solid #1e88e5;
    }

    &:active {
      background-color: #1e88e5;
    }
  }
`;

const Slider = (props) => {
  return <StyledSlider type="range" {...props} />;
};

export default Slider;
