import React from "react";
import styled from "styled-components";

import { useSortingOptionsContext } from "../../../contexts/SortingOptionsContext";
import { useAlgorithmContext } from "../../../contexts/AlgorithmContext";

const Container = styled.div`
  width: 100%;
  margin: 0 0 2rem;
  opacity: ${(props) => (props.hasStarted ? "0.4" : "1")};
  pointer-events: ${(props) => (props.hasStarted ? "none" : "auto")};
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
  const { activeOption, setActiveOption } = useSortingOptionsContext();
  const { hasStarted } = useAlgorithmContext();

  return (
    <Container hasStarted={hasStarted}>
      {console.log("ALGORITHM OPTIONS")}
      <Title>Sorting Algorithm</Title>
      <FlexWrapper>
        {[
          "Bubble Sort",
          "Selection Sort",
          "Insertion Sort",
          "option4",
          "option5",
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
    </Container>
  );
};

export default AlgorithmOptions;
