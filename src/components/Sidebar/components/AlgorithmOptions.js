import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import ComponentContainer from './ComponentContainer';
import { useAlgorithmContext } from 'contexts/AlgorithmContext';

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Radio = styled.input`
  display: none;
`;

const StyledLabel = styled(Button)`  
  flex-grow: 1;  
  height: 2rem;
  width: 8rem;
  max-width: 8rem;
  margin: 0.5rem; 

  ${Radio}:checked + & {
    color: ${({ theme }) => theme.button.activeText};
    background-color: ${({ theme }) => theme.button.activeBackground};
    box-shadow: ${({ theme }) => theme.button.activeBoxShadow}
`;

const AlgorithmOptions = () => {
  const { hasStarted, activeOption, setActiveOption } = useAlgorithmContext();

  return (
    <ComponentContainer title="Sorting Algorithm" hasStarted={hasStarted}>
      <FlexWrapper>
        {[
          'Bubble Sort',
          'Selection Sort',
          'Insertion Sort',
          'Merge Sort',
          'Quick Sort',
          'HeapSort',
        ].map((option, index) => (
          <React.Fragment key={index}>
            <Radio
              type="radio"
              checked={index === activeOption}
              name="sorting-algorithm"
              id={`${option} button`.toLowerCase().replace(/ /g, '-')}
              onChange={() => setActiveOption(index)}
            />
            <StyledLabel
              forwardedAs="label"
              htmlFor={`${option} button`.toLowerCase().replace(/ /g, '-')}
            >
              {option}
            </StyledLabel>
          </React.Fragment>
        ))}
      </FlexWrapper>
    </ComponentContainer>
  );
};

export default AlgorithmOptions;
