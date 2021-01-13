import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 3rem;
  outline: none;
  font-size: 1rem;
  font-family: inherit;
  cursor: pointer;
  background-color: ${(props) => props.theme.backgroundColor.secondary};
  color: inherit;
  box-shadow: ${(props) => props.theme.button.boxShadow};
`;

const Button = (props) => {
  return (
    <StyledButton className={props.className} {...props}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
