import React from "react";
import styled from "styled-components";
import SizeSelector from "./components/SizeSelector";
import SpeedSelector from "./components/SpeedSelector";

import Tabs from "./components/Tabs";

const StyledSidebar = styled.div`
  height: 100%;
  width: 40rem;
  background-color: #f6f6f6;
  border-radius: 4px;
`;

const Header = ({ speed, setSpeed, size, setSize }) => {
  return (
    <StyledSidebar>
      <Tabs />
      <SpeedSelector speed={speed} setSpeed={setSpeed} />
      <SizeSelector size={size} setSize={setSize} />
    </StyledSidebar>
  );
};

export default Header;
