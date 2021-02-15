import React from 'react';
import styled from 'styled-components';

import ColorPicker from './components/ColorPicker';
import ComponentContainer from '../ComponentContainer';

import { useBarColorContext } from 'contexts/BarColorContext';
import { useAlgorithmContext } from 'contexts/AlgorithmContext';

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
    <ComponentContainer title="Color Picker" isRunning={isRunning}>
      <FlexWrapper>
        <ColorPicker
          color={unsortedColor}
          setColor={setUnsortedColor}
          className=".unsorted"
          description="Unsorted"
        />
        <ColorPicker
          color={selectedColor}
          setColor={setSelectedColor}
          className=".selected"
          description="Selected"
        />
        <ColorPicker
          color={referenceColor}
          setColor={setReferenceColor}
          className=".reference"
          description="Reference"
        />
        <ColorPicker
          color={sortedColor}
          setColor={setSortedColor}
          className=".sorted"
          description="Sorted"
        />
      </FlexWrapper>
    </ComponentContainer>
  );
};

export default ColorSelection;
