import React from "react";
import styled from "styled-components";

import Button from "../Button";
import ComponentContainer from "../ComponentContainer";
import ThemeToggler from "./components/ThemeToggler";
import { resetInitialState } from "../../../../algorithms/utils";
import { useAlgorithmContext } from "../../../../contexts/AlgorithmContext";
import { useArraySizeContext } from "../../../../contexts/ArraySizeContext";

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
  const { reset } = useAlgorithmContext();
  const { handleUpdate } = useArraySizeContext();

  const handleClick = () => {
    resetInitialState();
    reset();
    handleUpdate();
  };

  return (
    <ComponentContainer title="Options">
      {console.log("OPTIONS")}
      <FlexWrapper>
        <StyledButton onClick={handleClick}>Reset Array</StyledButton>
        <StyledButton>Reset Defaults</StyledButton>
        <ThemeToggler />
      </FlexWrapper>
    </ComponentContainer>
  );
};

export default Options;
