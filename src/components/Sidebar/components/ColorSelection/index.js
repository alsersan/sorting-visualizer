import React from "react";
import styled from "styled-components";

import ColorPicker from "./components/ColorPicker";

import { useSortingOptionsContext } from "../../../../contexts/SortingOptionsContext";
import { useAlgorithmContext } from "../../../../contexts/AlgorithmContext";

const Container = styled.div`
  width: 100%;
  margin: 2rem 0;
  opacity: ${(props) => (props.isRunning ? "0.4" : "1")};
  pointer-events: ${(props) => (props.isRunning ? "none" : "auto")};
`;

const ColorSelection = () => {
  const {
    color1,
    setColor1,
    color2,
    setColor2,
    color3,
    setColor3,
    color4,
    setColor4,
  } = useSortingOptionsContext();
  const { isRunning } = useAlgorithmContext();

  return (
    <Container isRunning={isRunning}>
      <ColorPicker
        value={color1}
        onChange={(e) => setColor1(e.target.value)}
        description="Unsorted"
      />
      <ColorPicker
        value={color2}
        onChange={(e) => setColor2(e.target.value)}
        description="Selected"
      />
      <ColorPicker
        value={color4}
        onChange={(e) => setColor4(e.target.value)}
        description="Reference"
      />
      <ColorPicker
        value={color3}
        onChange={(e) => setColor3(e.target.value)}
        description="Sorted"
      />
    </Container>
  );
};

export default ColorSelection;
