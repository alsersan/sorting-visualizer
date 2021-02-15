import React from 'react';

import Selector from './Selector';
import ComponentContainer from './ComponentContainer';

import { useArraySizeContext } from 'contexts/ArraySizeContext';
import { useAlgorithmContext } from 'contexts/AlgorithmContext';

const SizeSelector = () => {
  const { size, setSize } = useArraySizeContext();
  const { hasStarted } = useAlgorithmContext();

  return (
    <ComponentContainer hasStarted={hasStarted}>
      <Selector
        mainText="Size"
        secondaryText={size}
        max="60"
        min="5"
        value={size}
        step="1"
        onChange={(e) => {
          setSize(parseInt(e.target.value, 10));
        }}
      />
    </ComponentContainer>
  );
};

export default SizeSelector;
