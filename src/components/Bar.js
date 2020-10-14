import React from "react";
import styled from "styled-components";

const StyledBar = styled.div`
  background-color: red;
  height: ${(props) => props.height}%;
  margin: 0 5px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

const Bar = (props) => {
  return (
    <StyledBar {...props}>
      <span style={{ marginTop: "5px" }}>{`${props.number}`}</span>
    </StyledBar>
  );
};

export default Bar;
