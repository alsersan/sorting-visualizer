import React from "react";
import styled from "styled-components";

import AlgorithmOptions from "./AlgorithmOptions";
import SizeSelector from "./SizeSelector";
import SpeedSelector from "./SpeedSelector";
import ButtonRow from "./ButtonRow";
import Options from "./Options";
import ColorSelection from "./ColorSelection";

const Container = styled.div`
  width: 100%;
  overflow-y: auto;
  margin-top: 1rem;
`;

const MainContainer = () => {
  return (
    <Container>
      <AlgorithmOptions />
      <SizeSelector />
      <SpeedSelector />
      <ButtonRow />
      <Options />
      <ColorSelection />
    </Container>
  );
};

export default MainContainer;
