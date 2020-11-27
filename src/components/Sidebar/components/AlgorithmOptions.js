import React from "react";
import styled from "styled-components";

import { useSortingOptionsContext } from "../../../contexts/SortingOptionsContext";
import { useAlgorithmContext } from "../../../contexts/AlgorithmContext";

const Container = styled.div`
  width: 100%;
  margin: 3rem 0;
  opacity: ${(props) => (props.hasStarted ? "0.4" : "1")};
  pointer-events: ${(props) => (props.hasStarted ? "none" : "auto")};
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Label = styled.label`
  display: flex;
  flex-grow: 1;
  padding: 2px;
  height: 2rem;
  width: 8rem;
  max-width: 8rem;
  margin: 0.5rem;
  background-color: ${(props) => (props.active ? "blue" : "red")};
  cursor: pointer;
`;

const AlgorithmOptions = () => {
  const { activeOption, setActiveOption } = useSortingOptionsContext();
  const { hasStarted } = useAlgorithmContext();

  return (
    <Container hasStarted={hasStarted}>
      <div>Sorting Algorithm</div>
      <FlexWrapper>
        {[
          "BubbleSort",
          "SelectionSort",
          "option3",
          "option4",
          "option5",
          "option6",
        ].map((option, index) => (
          <React.Fragment key={index}>
            <input
              style={{ display: "none" }}
              hide="hide"
              type="radio"
              id={option}
              name="option"
              onClick={() => setActiveOption(index)}
            />
            <Label active={index === activeOption} htmlFor={option}>
              <span>{option}</span>
            </Label>
          </React.Fragment>
        ))}
      </FlexWrapper>
    </Container>
  );
};

export default AlgorithmOptions;
