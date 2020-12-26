import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";

import { useSortingOptionsContext } from "../../../contexts/SortingOptionsContext";
import { useBarColorContext } from "../../../contexts/BarColorContext";

const StyledBar = styled.div`
  margin: ${({ size }) => {
    if (size < 10) {
      return "0 3px";
    } else if (size > 19) {
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
  display: block;
`;

const Bar = (props) => {
  const barEl = useRef();
  const { size } = useSortingOptionsContext();
  const {
    unsortedColor,
    selectedColor,
    sortedColor,
    referenceColor,
  } = useBarColorContext();

  const colors = [unsortedColor, selectedColor, referenceColor, sortedColor];

  // const checkClassName = (classList) => {
  //   if (classList.contains("unsorted")) {
  //     return unsortedColor;
  //   } else if (classList.contains("selected")) {
  //     return selectedColor;
  //   } else if (classList.contains("sorted")) {
  //     return sortedColor;
  //   } else if (classList.contains("reference")) {
  //     return referenceColor;
  //   }
  // };

  useLayoutEffect(() => {
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
      className={props.className}
      size={size}
      style={{
        height: `${props.number}%`,
      }}
    >
      <Text>{props.number}</Text>
    </StyledBar>
  );
};

export default Bar;
