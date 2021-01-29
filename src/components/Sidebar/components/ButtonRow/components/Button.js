import React from 'react';
import styled from 'styled-components';

import RippleEffect from '../../RippleEffect';

const StyledButton = styled.button`
  position: relative;
  color: inherit;
  opacity: ${(props) =>
    props.disabled ? props.theme.button.disabledOpacity : '1'};
  overflow: hidden;
  padding: 1rem;
  border-radius: 50%;
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};
  border: none;
  outline: none;
  box-shadow: ${(props) =>
    props.disabled
      ? props.theme.button.disabledBoxShadow
      : props.theme.button.boxShadow};
  background-color: transparent;
  margin: 0 0.5rem;
  animation: ${({ hasStarted, disabled }) =>
    !hasStarted && !disabled ? 'bounce 0.8s ease 0.5s infinite' : 'none'};

  @keyframes bounce {
    50% {
      transform: scale(0.9, 1.1) translateY(-0.8rem);
    }
  }
`;

const Button = (props) => {
  return (
    <StyledButton {...props}>
      <RippleEffect {...props} />
      {props.children}
    </StyledButton>
  );
};

export default Button;
