import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import { useSortingOptionsContext } from "../../../contexts/SortingOptionsContext";

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
  const {
    size,
    unsortedColor,
    selectedColor,
    sortedColor,
    referenceColor,
  } = useSortingOptionsContext();
  const [isMounted, setIsMounted] = useState(false);

  const checkClassName = (classList) => {
    if (classList.contains("unsorted")) {
      return unsortedColor;
    } else if (classList.contains("selected")) {
      return selectedColor;
    } else if (classList.contains("sorted")) {
      return sortedColor;
    } else if (classList.contains("reference")) {
      return referenceColor;
    }
  };

  useEffect(() => {
    console.log(barEl);
    setIsMounted(true);
  }, [isMounted]);

  return (
    <StyledBar
      ref={barEl}
      className={props.className}
      size={size}
      style={{
        height: `${props.number}%`,
        backgroundColor: isMounted
          ? checkClassName(barEl.current.classList)
          : unsortedColor,
      }}
    >
      <Text>{props.number}</Text>
    </StyledBar>
  );
};

export default Bar;
