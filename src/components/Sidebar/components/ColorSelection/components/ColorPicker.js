import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0.5rem;
  display: flex;
  flex-grow: 1;
  width: 8rem;
  max-width: 8rem;
  align-items: center;
`;

const ColorInput = styled.input`
  border: none;
  background-color: transparent;
  height: 1.5rem;
  width: 2.5rem;
  outline: none;
  cursor: pointer;

  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  &::-webkit-color-swatch {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #555;
    border-radius: ${(props) => props.theme.borderRadius};
  }

  &::-moz-color-swatch {
    border: 1px solid #555;
    border-radius: ${(props) => props.theme.borderRadius};
  }
`;

const Description = styled.span`
  margin-left: 0.5rem;
`;

const ColorPicker = ({ description, className, initialValue, setColor }) => {
  const [value, setValue] = useState(initialValue);
  const bars = document.querySelectorAll(className);
  useLayoutEffect(() => {
    bars.forEach((bar) => {
      bar.style.background = value;
    });
  });

  return (
    <Container>
      {console.log("RERENDER COLOR PICKER")}
      <ColorInput
        type="color"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onMouseLeave={() => setColor(value)}
      />
      <Description>{description}</Description>
    </Container>
  );
};

export default ColorPicker;
