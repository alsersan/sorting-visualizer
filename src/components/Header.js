import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 5vh;
  background-color: #ccc;
`;

const Header = ({ speed, setSpeed }) => {
  return (
    <StyledHeader>
      Speed
      <input
        style={{ width: "500px", cursor: "pointer" }}
        type="range"
        max="495"
        min="0"
        value={speed}
        step="1"
        onChange={(e) => setSpeed(500 - e.target.value)}
      />
      <div>{500 - speed}</div>
    </StyledHeader>
  );
};

export default Header;
