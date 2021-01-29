import React from 'react';
import styled from 'styled-components';

import Button from '../../Button';

import { resetAlgorithmInitialState } from '../../../../../algorithms/utils';
import { useAlgorithmContext } from '../../../../../contexts/AlgorithmContext';
import { useArraySizeContext } from '../../../../../contexts/ArraySizeContext';
import { useSpeedContext } from '../../../../../contexts/SpeedContext';
import { useBarColorContext } from '../../../../../contexts/BarColorContext';

const StyledButton = styled(Button)`
  height: 2rem;
  width: 8rem;
  max-width: 8rem;
  margin: 0.5rem;
`;

const ResetDefaultsButton = () => {
  const { resetDefaults } = useAlgorithmContext();
  const { resetArraySize } = useArraySizeContext();
  const { resetDefaultColors } = useBarColorContext();
  const { resetSpeed } = useSpeedContext();

  const handleResetDefaults = () => {
    resetAlgorithmInitialState();
    resetDefaults();
    resetDefaultColors();
    resetSpeed();
    resetArraySize();
  };

  return (
    <StyledButton onClick={handleResetDefaults}>Reset Defaults</StyledButton>
  );
};

export default ResetDefaultsButton;
