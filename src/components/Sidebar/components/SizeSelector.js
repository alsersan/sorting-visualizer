import React from "react";
import styled from "styled-components";
import Slider from "./Slider";

const Container = styled.div`
  width: 90%;
  margin: 2rem 0;
`;

const SizeSelector = ({ size, setSize }) => {
  return (
    <Container>
      Size
      <Slider
        max="110"
        min="9"
        value={size}
        step="1"
        onChange={(e) => {
          setSize(parseInt(e.target.value, 10));
        }}
      />
      <div style={{ display: "inline-block" }}>{size}</div>
    </Container>
  );
};

export default SizeSelector;
