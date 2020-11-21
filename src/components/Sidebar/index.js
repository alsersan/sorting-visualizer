import React from "react";
import styled from "styled-components";

import SizeSelector from "./components/SizeSelector";
import SpeedSelector from "./components/SpeedSelector";
import AlgorithmOptions from "./components/AlgorithmOptions";
import ColorSelection from "./components/ColorSelection";

const StyledSidebar = styled.div`
  height: 100%;
  width: 40rem;
  background-color: #f6f6f6;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <AlgorithmOptions />
      <SizeSelector />
      <SpeedSelector />
      <ColorSelection />
    </StyledSidebar>
  );
};

export default Sidebar;
