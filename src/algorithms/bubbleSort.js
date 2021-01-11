import {
  algorithmTimeout,
  stopAlgorithm,
  swapBars,
  swapArrayElements,
  modifyBar,
  array,
  timeout,
  setIsSorted,
} from "./utils";

let i = 0;
let j = 0;
let barSwap = false;
let unselectBars = false;
let compareBars = true;
let sortBars = false;
let noSwap = true;
const record = [];

export function bubbleSort(delay = timeout) {
  const bars = document.querySelectorAll(".bar");
  if (record.length === 0) i = array.length - 1;

  algorithmTimeout(() => {
    saveStep();

    if (compareBars) {
      if (j - 1 >= 0) modifyBar("unsorted", bars[j - 1]);
      modifyBar("selected", bars[j], bars[j + 1]);
      if (array[j] > array[j + 1]) {
        compareBars = false;
        barSwap = true;
        bubbleSort();
        return;
      }
      compareBars = false;
    }
    if (barSwap) {
      swapArrayElements(j, j + 1);
      swapBars(bars[j], bars[j + 1]);
      noSwap = false;
      barSwap = false;
    }
    if (unselectBars) {
      modifyBar("unsorted", bars[j - 1]);
      modifyBar("sorted", bars[j]);
      noSwap = true;
      j = 0;
      i--;
      unselectBars = false;
      compareBars = true;
      bubbleSort();
      return;
    }
    if (sortBars) {
      // Sorting finished
      for (let x = 0; x <= i; x++) {
        modifyBar("sorted", bars[x]);
      }
      setIsSorted(true);
      console.log("SORTED!!");
      return;
    }

    j++;

    if (j < i) {
      // if j < i, the cycle has not been yet completed
      compareBars = true;
    } else if (j === i && i > 1 && !noSwap) {
      // if j === i, the cycle  has been completed, but only execute again if there have been swaps in this cycle (otherwise the array is already sorted) and if i > 1 (making the last possible value of i 1)
      unselectBars = true;
    } else {
      // color the remaining bars as sorted
      sortBars = true;
    }
    bubbleSort();
  }, delay);
}

function saveStep() {
  const step = {
    i,
    j,
    barSwap,
    unselectBars,
    compareBars,
    sortBars,
    noSwap,
  };
  record.push(step);
}

export function bubbleSortStepForward(delay) {
  bubbleSort(delay);
  setTimeout(stopAlgorithm, delay);
}

export function bubbleSortStepBack(setHasStarted) {
  setIsSorted(false);
  const lastElement = record[record.length - 1];
  i = lastElement.i;
  j = lastElement.j;
  barSwap = lastElement.barSwap;
  unselectBars = lastElement.unselectBars;
  compareBars = lastElement.compareBars;
  sortBars = lastElement.sortBars;
  noSwap = lastElement.noSwap;
  record.pop();
  reverseBubbleSort();
  if (record.length === 0) {
    setHasStarted(false);
  }
}

function reverseBubbleSort() {
  // If the array was already sorted, all the bars that were colored with sortedColor in the last step are colored with unsortedColor
  const bars = document.querySelectorAll(".bar");
  if (sortBars) {
    for (let x = 0; x <= i; x++) {
      modifyBar("unsorted", bars[x]);
    }
    modifyBar("selected", bars[j], bars[j - 1]);
  }
  if (compareBars) {
    modifyBar("unsorted", bars[j], bars[j + 1]);
    if (j - 1 >= 0) modifyBar("selected", bars[j], bars[j - 1]);
  } else if (barSwap) {
    swapArrayElements(j, j + 1);
    swapBars(bars[j], bars[j + 1]);
  } else if (unselectBars) {
    modifyBar("selected", bars[j], bars[j - 1]);
  }
}
