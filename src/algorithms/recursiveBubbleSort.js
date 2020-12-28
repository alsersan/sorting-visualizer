import {
  swapBars,
  swapArrayElements,
  modifyBar,
  array,
} from "./generalUseFunctions";

let timer;
let i = 0;
let j = 0;
let barSwap = false;
let unselectBars = false;
let compareBars = true;
let noSwap = true;
let record = [];
let sorted = false;

export function recursiveBubbleSort(args) {
  const {
    speed,
    setIsSorted,
    unsortedColor,
    selectedColor,
    sortedColor,
  } = args;
  const bars = document.querySelectorAll(".bar");
  if (record.length === 0) i = array.length - 1;
  timer = setTimeout(() => {
    saveStep();
    if (compareBars) {
      modifyBar(selectedColor, "selected", bars[j], bars[j + 1]);

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
    } else if (barSwap) {
      swapArrayElements(j, j + 1);
      swapBars(bars[j], bars[j + 1]);
      noSwap = false;
      barSwap = false;
      unselectBars = true;
      recursiveBubbleSort(args);
      return;
    } else if (unselectBars) {
      if (j + 1 === i) {
        // If the last bar is sorted, color it with sortedColor
        modifyBar(unsortedColor, "unsorted", bars[j]);
        modifyBar(sortedColor, "sorted", bars[j + 1]);
      } else {
        // If the last bar is not sorted, after checking and/or swapping the bars, color them with unsortedColor
        modifyBar(unsortedColor, "unsorted", bars[j], bars[j + 1]);
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
      // if the conditions above are not met, then the array is sorted
      bars.forEach((bar) => {
        modifyBar(sortedColor, "sorted", bar);
      });
      sorted = true;
      setIsSorted(true);
      console.log("SORTED!!");
    }
  }, speed);
}

export function bubbleSortStop() {
  clearTimeout(timer);
}

// save all variables of each step in an array, to be able to go back in time
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
  setTimeout(bubbleSortStop, speed);
}

export function bubbleSortStepBack(args) {
  const { setHasStarted, unsortedColor, selectedColor } = args;
  bubbleSortStop();
  const lastElement = record[record.length - 1];

  i = lastElement.i;
  j = lastElement.j;
  barSwap = lastElement.barSwap;
  unselectBars = lastElement.unselectBars;
  compareBars = lastElement.compareBars;
  noSwap = lastElement.noSwap;

  record.pop();
  visualBubbleSort(unsortedColor, selectedColor);

  if (record.length === 0) {
    setHasStarted(false);
  }
}

// only DOM changes. All the real data comes from the record
function visualBubbleSort(unsortedColor, selectedColor) {
  // If the array was already sorted, all the bars that were colored with sortedColor in the last step are colored with unsortedColor
  const bars = document.querySelectorAll(".bar");
  if (sorted) {
    for (let x = 0; x <= i; x++) {
      modifyBar(unsortedColor, "unsorted", bars[x]);
    }
    sorted = false;
  }
  if (compareBars) {
    modifyBar(unsortedColor, "unsorted", bars[j], bars[j + 1]);
  } else if (barSwap) {
    swapArrayElements(j, j + 1);
    swapBars(bars[j], bars[j + 1]);
  } else if (unselectBars) {
    modifyBar(selectedColor, "selected", bars[j], bars[j + 1]);
  }
}
