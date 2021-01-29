import React from 'react';
import styled from 'styled-components';

import ComponentContainer from '../ComponentContainer';
import ThemeToggler from './components/ThemeToggler';
import ResetDefaultsButton from './components/ResetDefaultsButton';
import ResetArrayButton from './components/ResetArrayButton';

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Options = () => {
  return (
    <ComponentContainer title="Options">
      <FlexWrapper>
        <ResetArrayButton />
        <ResetDefaultsButton />
        <ThemeToggler />
      </FlexWrapper>
    </ComponentContainer>
  );
};

export default Options;
