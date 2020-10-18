import React from "react";
import styled from "styled-components";

import SpeedSlider from "./component/SpeedSlider";

const StyledHeader = styled.header`
  height: 5vh;
  background-color: #ccc;
`;

const Header = ({ speed, setSpeed }) => {
  return (
    <StyledHeader>
      Speed
      <SpeedSlider speed={speed} setSpeed={setSpeed} />
    </StyledHeader>
  );
};

export default Header;
