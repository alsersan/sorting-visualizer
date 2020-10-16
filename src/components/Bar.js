import React from "react";
import styled from "styled-components";

const StyledBar = styled.div`
  background-color: red;
  margin: 0 5px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

const Bar = (props) => {
  return (
    <StyledBar
      className={props.className}
      style={{ height: `${props.number}%` }}
    >
      <span style={{ marginTop: "5px" }}>{props.number}</span>
    </StyledBar>
  );
};

export default Bar;

// height: ${(props) => props.height}%;
