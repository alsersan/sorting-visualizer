import React from "react";
import styled from "styled-components";

import Logo from "./components/Logo";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";

const StyledSidebar = styled.div`
  position: relative;
  height: 100%;
  width: 32rem;
  padding: 1.5rem 0;
  background-color: ${(props) => props.theme.backgroundColor.secondary};
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      {console.log("SIDEBAR")}
      <Logo />
      <MainContainer />
      <Footer />
    </StyledSidebar>
  );
};

export default Sidebar;
