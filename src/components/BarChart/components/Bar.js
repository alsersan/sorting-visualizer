import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";

import { useBarColorContext } from "../../../contexts/BarColorContext";

const StyledBar = styled.div`
  margin: ${({ size }) => {
    if (size < 10) {
      return "0 3px";
    } else if (size > 25) {
      return "0 1px";
    } else {
      return "0 2px";
    }
  }};
  position: relative;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  border-radius: 5px 5px 0 0;
`;

const Text = styled.span`
  position: absolute;
  margin-top: -1.5rem;
  display: ${({ size }) => (size > 25 ? "none" : "block")};
`;

const Bar = ({ className, size, number }) => {
  const barEl = useRef();
  const {
    unsortedColor,
    selectedColor,
    sortedColor,
    referenceColor,
  } = useBarColorContext();

  const colors = [unsortedColor, selectedColor, referenceColor, sortedColor];

  useLayoutEffect(() => {
    console.log(unsortedColor);
    const currentBar = barEl.current;
    ["unsorted", "selected", "reference", "sorted"].forEach((el, index) => {
      if (currentBar.classList.contains(el)) {
        currentBar.style.backgroundColor = colors[index];
      }
    });
    console.log(barEl);
  });

  return (
    <StyledBar
      ref={barEl}
      className={className}
      size={size}
      style={{
        height: `${number}%`,
      }}
    >
      {console.log("RENDER BARS")}
      <Text size={size}>{number}</Text>
    </StyledBar>
  );
};

export default Bar;
