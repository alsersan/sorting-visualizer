import React from "react";

import {
  recursiveBubbleSort,
  stop,
} from "../algorithms/recursiveSortingAlgorithms";

const ButtonRow = ({ speed, array, arr, setStart, setIsSorted }) => {
  return (
    <React.Fragment>
      <button
        onClick={() => {
          recursiveBubbleSort(speed, arr, setIsSorted);
          setStart(true);
        }}
      >
        Start
      </button>
      {console.log(speed)}
      <button
        onClick={() => {
          stop();
          setStart(false);
        }}
      >
        Stop
      </button>
    </React.Fragment>
  );
};

export default ButtonRow;
