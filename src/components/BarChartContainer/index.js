import React from 'react';
import styled from 'styled-components';

import { devices } from '../../styles/deviceSizes';
import BarChart from './BarChart';
import Logo from '../Logo';

const Container = styled.div`
  min-height: 20rem;
  background-color: ${(props) => props.theme.backgroundColor.primary};
  margin-bottom: ${(props) => props.theme.spacingSmall};
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: ${(props) => props.theme.borderRadius};

  @media ${devices.tablet} {
    height: 100%;
    flex-grow: 1;
    margin-right: ${(props) => props.theme.spacingSmall};
    padding-top: 0;
    margin-bottom: 0;
  }

  @media ${devices.laptop} {
    margin-right: ${(props) => props.theme.spacingBig};
  }
`;

const StyledLogo = styled(Logo)`
  display: flex;
  margin-bottom: 1rem;

  @media ${devices.tablet} {
    display: none;
  }
`;

const BarChartContainer = () => {
  return (
    <Container>
      <StyledLogo />
      <BarChart />
    </Container>
  );
};

export default BarChartContainer;
