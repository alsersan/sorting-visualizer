import React from "react";
import styled from "styled-components";

import Logo from "./components/Logo";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";
import { devices } from "../../styles/deviceSizes";

const StyledSidebar = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem 0 3.5rem;
  background-color: ${(props) => props.theme.backgroundColor.secondary};
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.tablet} {
    height: 100%;
    width: 25rem;
  }

  @media ${devices.laptopL} {
    width: 32rem;
  }
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
