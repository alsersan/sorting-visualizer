import React from "react";
import styled from "styled-components";

import ColorPicker from "./components/ColorPicker";

import { useBarColorContext } from "../../../../contexts/BarColorContext";
import { useAlgorithmContext } from "../../../../contexts/AlgorithmContext";

const Container = styled.div`
  width: 100%;
  margin: 2rem 0;
  opacity: ${(props) => (props.isRunning ? "0.4" : "1")};
  pointer-events: ${(props) => (props.isRunning ? "none" : "auto")};
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ColorSelection = () => {
  const {
    unsortedColor,
    setUnsortedColor,
    selectedColor,
    setSelectedColor,
    sortedColor,
    setSortedColor,
    referenceColor,
    setReferenceColor,
  } = useBarColorContext();
  const { isRunning } = useAlgorithmContext();

  return (
    <Container isRunning={isRunning}>
      {console.log("COLOR SELECTION")}
      <Title>Color Picker</Title>
      <FlexWrapper>
        <ColorPicker
          initialValue={unsortedColor}
          setColor={setUnsortedColor}
          className=".unsorted"
          description="Unsorted"
        />
        <ColorPicker
          initialValue={selectedColor}
          setColor={setSelectedColor}
          className=".selected"
          description="Selected"
        />
        <ColorPicker
          initialValue={referenceColor}
          setColor={setReferenceColor}
          className=".reference"
          description="Reference"
        />
        <ColorPicker
          initialValue={sortedColor}
          setColor={setSortedColor}
          className=".sorted"
          description="Sorted"
        />
      </FlexWrapper>
    </Container>
  );
};

export default ColorSelection;
