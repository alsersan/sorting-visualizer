import React from "react";
import styled from "styled-components";

import Button from "../Button";
import ComponentContainer from "../ComponentContainer";
import ThemeToggler from "./components/ThemeToggler";
import { resetAlgorithmInitialState } from "../../../../algorithms/utils";
import { useAlgorithmContext } from "../../../../contexts/AlgorithmContext";
import { useArraySizeContext } from "../../../../contexts/ArraySizeContext";
import { useSpeedContext } from "../../../../contexts/SpeedContext";
import { useBarColorContext } from "../../../../contexts/BarColorContext";

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
  const { reset, resetDefaults } = useAlgorithmContext();
  const { handleUpdate, resetArraySize } = useArraySizeContext();
  const { resetDefaultColors } = useBarColorContext();
  const { resetSpeed } = useSpeedContext();

  const handleClick = () => {
    resetAlgorithmInitialState();
    reset();
    handleUpdate();
  };

  const handleResetDefaults = () => {
    resetAlgorithmInitialState();
    resetDefaults();
    resetDefaultColors();
    resetSpeed();
    resetArraySize();
  };

  return (
    <ComponentContainer title="Options">
      {console.log("OPTIONS")}
      <FlexWrapper>
        <StyledButton onClick={handleClick}>Reset Array</StyledButton>
        <StyledButton onClick={handleResetDefaults}>
          Reset Defaults
        </StyledButton>
        <ThemeToggler />
      </FlexWrapper>
    </ComponentContainer>
  );
};

export default Options;
