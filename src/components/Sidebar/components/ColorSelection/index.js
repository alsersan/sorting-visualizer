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
  } = useSortingOptionsContext();
  const { isRunning } = useAlgorithmContext();

  return (
    <Container isRunning={isRunning}>
      <Title>Color Picker</Title>
      <FlexWrapper>
        <ColorPicker
          value={unsortedColor}
          onChange={(e) => setUnsortedColor(e.target.value)}
          description="Unsorted"
        />
        <ColorPicker
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          description="Selected"
        />
        <ColorPicker
          value={referenceColor}
          onChange={(e) => setReferenceColor(e.target.value)}
          description="Reference"
        />
        <ColorPicker
          value={sortedColor}
          onChange={(e) => setSortedColor(e.target.value)}
          description="Sorted"
        />
      </FlexWrapper>
    </Container>
  );
};

export default ColorSelection;
