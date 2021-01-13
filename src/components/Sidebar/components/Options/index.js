import React from "react";
import styled from "styled-components";

import Button from "../Button";
import { resetInitialState } from "../../../../algorithms/utils";
import { useAlgorithmContext } from "../../../../contexts/AlgorithmContext";
import { useArraySizeContext } from "../../../../contexts/ArraySizeContext";

const Container = styled.div`
  width: 100%;
  margin: 0 0 2rem;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  height: 2rem;
  width: 8rem;
  max-width: 8rem;
  margin: 0.5rem;
`;

const Options = () => {
  const {
    hasStarted,
    activeOption,
    setActiveOption,
    reset,
  } = useAlgorithmContext();
  const { handleUpdate } = useArraySizeContext();

  const handleClick = () => {
    resetInitialState();
    reset();
    handleUpdate();
  };

  return (
    <Container hasStarted={hasStarted}>
      {console.log("OPTIONS")}
      <Title>Options</Title>
      <FlexWrapper>
        <StyledButton onClick={handleClick}>Reset Array</StyledButton>
        <StyledButton>Reset Defaults</StyledButton>
      </FlexWrapper>
    </Container>
  );
};

export default Options;
