import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

import { useSortingOptionsContext } from "../../../contexts/SortingOptionsContext";

const StyledBar = styled.div`
  margin: 0 1px;
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  margin-top: 5px;
  display: block;
`;

const Bar = (props) => {
  const barEl = useRef();
  const { color1, color2, color3 } = useSortingOptionsContext();
  const [isMounted, setIsMounted] = useState(false);

  const checkClassName = (classList) => {
    if (classList.contains("unsorted")) {
      return color1;
    } else if (classList.contains("selected")) {
      return color2;
    } else if (classList.contains("sorted")) {
      return color3;
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
      style={{
        height: `${props.number}%`,
        backgroundColor: isMounted
          ? checkClassName(barEl.current.classList)
          : color1,
      }}
    >
      <Text>{props.number}</Text>
    </StyledBar>
  );
};

export default Bar;
