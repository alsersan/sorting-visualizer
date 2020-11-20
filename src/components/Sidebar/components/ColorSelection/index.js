import React from "react";
import styled from "styled-components";

import ColorPicker from "./components/ColorPicker";

import { useSortingOptionsContext } from "../../../../contexts/SortingOptionsContext";

const Container = styled.div`
  width: 90%;
  margin: 2rem 0;
`;

const ColorSelection = () => {
  const {
    color1,
    setColor1,
    color2,
    setColor2,
    color3,
    setColor3,
  } = useSortingOptionsContext();

  return (
    <Container>
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
        value={color3}
        onChange={(e) => setColor3(e.target.value)}
        description="Sorted"
      />
    </Container>
  );
};

export default ColorSelection;
