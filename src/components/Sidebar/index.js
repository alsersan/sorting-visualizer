import React from "react";
import styled from "styled-components";

import SizeSelector from "./components/SizeSelector";
import SpeedSelector from "./components/SpeedSelector";
import AlgorithmOptions from "./components/AlgorithmOptions";
import ColorSelection from "./components/ColorSelection";
import ThemeToggler from "./components/ThemeToggler";
import Options from "./components/Options";

const StyledSidebar = styled.div`
  height: 100%;
  width: 35rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.backgroundColor.secondary};
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      {console.log("SIDEBAR")}
      <ThemeToggler />
      <AlgorithmOptions />
      <SizeSelector />
      <SpeedSelector />
      <ColorSelection />
      <Options />
    </StyledSidebar>
  );
};

export default Sidebar;
