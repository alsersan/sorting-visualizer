import React from 'react';
import styled from 'styled-components';

import AlgorithmOptions from './AlgorithmOptions';
import SizeSelector from './SizeSelector';
import SpeedSelector from './SpeedSelector';
import ButtonRow from './ButtonRow';
import Options from './Options';
import ColorSelection from './ColorSelection';
import Footer from './Footer';
import { devices } from 'styles/deviceSizes';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  overflow-y: auto;
  padding: 0 1rem;
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme.blue} #ccc;

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 1px ${(props) => props.theme.scrollbar.shadow};
    background-color: ${(props) => props.theme.scrollbar.background};
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: ${(props) => props.theme.scrollbar.background};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.blue};
    border-radius: 10px;
  }

  @media ${devices.tablet} {
    margin-top: 1rem;

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 2px ${(props) => props.theme.scrollbar.shadow};
    }
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
      <Footer />
    </Container>
  );
};

export default MainContainer;
