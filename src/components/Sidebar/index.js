import React, { useState } from "react";
import styled from "styled-components";

import PlaygroundMode from "./components/PlaygroundMode";
import VisualMode from "./components/VisualMode";

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

const Sidebar = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <StyledSidebar>
      {console.log(activeTab)}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 0 ? (
        <PlaygroundMode {...props} />
      ) : activeTab === 1 ? (
        <VisualMode {...props} />
      ) : (
        <span>Tab 3</span>
      )}
    </StyledSidebar>
  );
};

export default Sidebar;
