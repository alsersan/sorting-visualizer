import React from 'react';
import styled from 'styled-components';

import Slider from './components/Slider';

const TextWrapper = styled.div`
  margin-bottom: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SecondaryText = styled.span`
  font-weight: inherit;
  font-size: 0.9rem;
`;

const MainText = styled.label`
  font-weight: 500;
  font-size: 1.2rem;
`;

const Selector = (props) => {
  return (
    <>
      <TextWrapper>
        <MainText htmlFor={props.mainText}>{props.mainText}</MainText>
        <SecondaryText>{props.secondaryText}</SecondaryText>
      </TextWrapper>
      <Slider id={props.mainText} {...props} />
    </>
  );
};

export default Selector;
