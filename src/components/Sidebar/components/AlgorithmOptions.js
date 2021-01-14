import React from "react";
import styled from "styled-components";

import ComponentContainer from "./ComponentContainer";
import { useAlgorithmContext } from "../../../contexts/AlgorithmContext";

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Button = styled.button`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 3rem;
  outline: none;
  font-size: 1rem;
  font-family: inherit;
  color: ${(props) =>
    props.active ? props.theme.button.activeText : "inherit"};
  box-shadow: ${(props) =>
    props.active
      ? props.theme.button.activeBoxShadow
      : props.theme.button.boxShadow};
  height: 2rem;
  width: 8rem;
  max-width: 8rem;
  margin: 0.5rem;
  background-color: ${(props) =>
    props.active
      ? props.theme.button.activeBackground
      : props.theme.backgroundColor.secondary};
  cursor: pointer;
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
          "option6",
        ].map((option, index) => (
          <Button
            key={index}
            active={index === activeOption}
            onClick={() => setActiveOption(index)}
          >
            {option}
          </Button>
        ))}
      </FlexWrapper>
    </ComponentContainer>
  );
};

export default AlgorithmOptions;
