import React from "react";
import styled from "styled-components";

const StyledBar = styled.div`
  background-color: red;
  margin: 0 3px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  margin-top: 5px;
  display: none;
`;

const Bar = (props) => {
  return (
    <StyledBar
      className={props.className}
      style={{ height: `${props.number}%` }}
    >
      <Text>{props.number}</Text>
    </StyledBar>
  );
};

export default Bar;

// height: ${(props) => props.height}%;
