import React from "react";
import styled from "styled-components";

import AlgorithmOptions from "./AlgorithmOptions";
import SizeSelector from "./SizeSelector";
import SpeedSelector from "./SpeedSelector";
import ButtonRow from "./ButtonRow";
import Options from "./Options";
import { devices } from "../../../styles/deviceSizes";
import ColorSelection from "./ColorSelection";

const Container = styled.div`
  width: 100%;
  overflow-y: auto;
  padding: 0 1rem;
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme.blue} #ccc;

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.blue};
    border-radius: 10px;
  }

  @media ${devices.tablet} {
    margin-top: 1rem;
  }

  @media ${devices.laptopL} {
    padding: 0 1.5rem;
  }
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
