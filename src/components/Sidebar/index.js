import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';
import { devices } from '../../styles/deviceSizes';

const StyledSidebar = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem 0 2.5rem;
  background-color: ${(props) => props.theme.backgroundColor.primary};
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  overflow: hidden;

  @media ${devices.tablet} {
    flex-grow: initial;
    height: 100%;
    width: 25rem;
  }

  @media ${devices.laptopL} {
    width: 32rem;
    padding: 1rem 0 3.5rem;
  }
`;

const StyledLogo = styled(Logo)`
  display: none;

  @media ${devices.tablet} {
    display: flex;
  }
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <StyledLogo />
      <MainContainer />
      <Footer />
    </StyledSidebar>
  );
};

export default Sidebar;
