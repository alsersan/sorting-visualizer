import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import SizeSelector from "./components/SizeSelector";
import SpeedSelector from "./components/SpeedSelector";

import Tabs from "./components/Tabs";

const StyledSidebar = styled.div`
  height: 100%;
  width: 40rem;
  background-color: #f6f6f6;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Sidebar = ({ speed, setSpeed, size, setSize }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <StyledSidebar>
      {console.log(activeTab)}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <span>
        {activeTab === 0 ? "tab1" : activeTab === 1 ? "tab2" : "tab3"}
      </span>
      <SpeedSelector speed={speed} setSpeed={setSpeed} />
      <SizeSelector size={size} setSize={setSize} />
    </StyledSidebar>
  );
};

export default Sidebar;
