import {
  algorithmTimeout,
  stopAlgorithm,
  swapBars,
  swapArrayElements,
  modifyBar,
  array,
} from "./utils";

let i = 0;
let j = 0;
let barSwap = false;
let unselectBars = false;
let compareBars = true;
let noSwap = true;
let record = [];
let sorted = false;

export function recursiveBubbleSort(args) {
  const { speed, setIsSorted } = args;
  const bars = document.querySelectorAll(".bar");
  if (record.length === 0) i = array.length - 1;

  algorithmTimeout(() => {
    saveStep();

    if (compareBars) {
      modifyBar("selected", bars[j], bars[j + 1]);
      if (array[j] > array[j + 1]) {
        compareBars = false;
        barSwap = true;
        recursiveBubbleSort(args);
        return;
      } else {
        compareBars = false;
        unselectBars = true;
        recursiveBubbleSort(args);
        return;
      }
    }
    if (barSwap) {
      swapArrayElements(j, j + 1);
      swapBars(bars[j], bars[j + 1]);
      noSwap = false;
      barSwap = false;
      unselectBars = true;
      recursiveBubbleSort(args);
      return;
    }
    if (unselectBars) {
      if (j + 1 === i) {
        // If condition is true, then j+1 is the last bar, and it's sorted
        modifyBar("unsorted", bars[j]);
        modifyBar("sorted", bars[j + 1]);
      } else {
        modifyBar("unsorted", bars[j], bars[j + 1]);
      }
      unselectBars = false;
      compareBars = true;
    }

    j++;

    if (j < i) {
      // if j < i, the cycle has not been yet completed
      recursiveBubbleSort(args);
    } else if (j === i && i > 1 && !noSwap) {
      // if j === i, the cycle  has been completed, but only execute again if there have been swaps in this cycle (otherwise the array is already sorted) and if i > 1 (making the last possible value of i 1)
      noSwap = true;
      j = 0;
      i--;
      recursiveBubbleSort(args);
    } else {
      // Sorting finished
      bars.forEach((bar) => {
        modifyBar("sorted", bar);
      });
      sorted = true;
      setIsSorted(true);
      console.log("SORTED!!");
    }
  }, speed);
}

function saveStep() {
  const step = {
    i,
    j,
    barSwap,
    unselectBars,
    compareBars,
    noSwap,
  };
  record.push(step);
}

export function bubbleSortStepForward(args) {
  const { speed } = args;
  recursiveBubbleSort(args);
  setTimeout(stopAlgorithm, speed);
}

export function bubbleSortStepBack(args) {
  const { setHasStarted } = args;
  const lastElement = record[record.length - 1];
  i = lastElement.i;
  j = lastElement.j;
  barSwap = lastElement.barSwap;
  unselectBars = lastElement.unselectBars;
  compareBars = lastElement.compareBars;
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
  if (sorted) {
    for (let x = 0; x <= i; x++) {
      modifyBar("unsorted", bars[x]);
    }
    sorted = false;
  }
  if (compareBars) {
    modifyBar("unsorted", bars[j], bars[j + 1]);
  } else if (barSwap) {
    swapArrayElements(j, j + 1);
    swapBars(bars[j], bars[j + 1]);
  } else if (unselectBars) {
    modifyBar("selected", bars[j], bars[j + 1]);
  }
}
