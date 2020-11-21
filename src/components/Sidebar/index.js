import React from "react";
import styled from "styled-components";

import PlaygroundMode from "./components/PlaygroundMode";

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
      <PlaygroundMode />
    </StyledSidebar>
  );
};

export default Sidebar;
