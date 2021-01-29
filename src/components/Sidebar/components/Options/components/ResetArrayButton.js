import React from 'react';
import styled from 'styled-components';

import Button from '../../Button';

import { resetAlgorithmInitialState } from '../../../../../algorithms/utils';
import { useAlgorithmContext } from '../../../../../contexts/AlgorithmContext';
import { useArraySizeContext } from '../../../../../contexts/ArraySizeContext';

const StyledButton = styled(Button)`
  height: 2rem;
  width: 8rem;
  max-width: 8rem;
  margin: 0.5rem;
`;

const ResetArrayButton = () => {
  const { reset } = useAlgorithmContext();
  const { handleUpdate } = useArraySizeContext();

  const handleResetArray = () => {
    resetAlgorithmInitialState();
    reset();
    handleUpdate();
  };

  return <StyledButton onClick={handleResetArray}>Reset Array</StyledButton>;
};

export default ResetArrayButton;
