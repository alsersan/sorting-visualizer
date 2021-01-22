import React from "react";
import styled from "styled-components";

import ComponentContainer from "./ComponentContainer";
import { useAlgorithmContext } from "../../../contexts/AlgorithmContext";

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Radio = styled.input`
  display: none;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 3rem;
  outline: none;
  font-size: 1rem;
  font-family: inherit;
  color: inherit;
  box-shadow: ${({ theme }) => theme.button.boxShadow};
  height: 2rem;
  width: 8rem;
  max-width: 8rem;
  margin: 0.5rem;
  background-color: ${({ theme }) => theme.backgroundColor.secondary};
  cursor: pointer;

  ${Radio}:checked + & {
    color: ${({ theme }) => theme.button.activeText};
    background-color: ${({ theme }) => theme.button.activeBackground};
    box-shadow: ${({ theme }) => theme.button.activeBoxShadow}
`;

const AlgorithmOptions = () => {
  const { hasStarted, activeOption, setActiveOption } = useAlgorithmContext();

  return (
    <ComponentContainer title="Sorting Algorithm" hasStarted={hasStarted}>
      {console.log("ALGORITHM OPTIONS")}
      <FlexWrapper>
        {[
          "Bubble Sort",
          "Selection Sort",
          "Insertion Sort",
          "Merge Sort",
          "Quick Sort",
          "HeapSort",
        ].map((option, index) => (
          <React.Fragment key={index}>
            <Radio
              type="radio"
              checked={index === activeOption}
              name="sorting-algorithm"
              id={`${option} button`.toLowerCase().replace(/ /g, "-")}
              onChange={() => setActiveOption(index)}
            />
            <StyledLabel
              htmlFor={`${option} button`.toLowerCase().replace(/ /g, "-")}
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
