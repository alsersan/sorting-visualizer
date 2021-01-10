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

let pivot = 0;
let i = 0;
let j = 0;
let startIdx = 0;
let endIdx = 0;
let prev = 1;
let getIndex = false;
let selectPivot = true;
let compareBars = false;
let barSwap = false;
let swapPivot = false;
let unselectBars = false;
let stack = [];
const record = [];

export function quickSort(delay = timeout) {
  const bars = document.querySelectorAll(".bar");

  if (record.length === 0) j = endIdx = array.length - 1;

  if (getIndex) {
    if (stack.length > 0) {
      const [iTemp, jTemp] = stack.pop();
      startIdx = i = iTemp;
      endIdx = j = jTemp;
      prev = null;
      getIndex = false;
      selectPivot = true;
      quickSort();
    } else {
      setIsSorted(true);
      console.log("SORTED!");
    }
    return;
  }

  algorithmTimeout(() => {
    saveStep();

    if (selectPivot) {
      pivot = i;
      modifyBar("reference", bars[pivot]);
      selectPivot = false;
      if (i === j) {
        // if the "subarray" just consists of 1 element, then it's sorted
        unselectBars = true;
      } else {
        i++;
        compareBars = true;
      }
      quickSort();
      return;
    }

    if (compareBars) {
      if (prev === -1) {
        modifyBar("unsorted", bars[i - 1], bars[j + 1]);
      } else if (prev !== null) {
        modifyBar("unsorted", bars[prev]);
      }
      if (i < j) {
        modifyBar("selected", bars[i], bars[j]);
        if (array[i] < array[pivot]) {
          prev = i;
          i++;
        } else if (array[j] < array[pivot]) {
          compareBars = false;
          barSwap = true;
          quickSort();
          return;
        } else {
          prev = j;
          j--;
        }
        quickSort();
        return;
      } else if (i === j) {
        modifyBar("selected", bars[j]);
        if (array[j] >= array[pivot]) {
          prev = j;
          j--;
          quickSort();
          return;
        }
      } else if (j === pivot) {
        // no need to go to swapPivot, since it's the same element
        modifyBar("selected", bars[j]);
        compareBars = false;
        unselectBars = true;
        quickSort();
        return;
      }
      modifyBar("selected", bars[j]);
      compareBars = false;
      swapPivot = true;
      quickSort();
      return;
    }

    if (barSwap) {
      swapBars(bars[i], bars[j]);
      swapArrayElements(i, j);
      i++;
      j--;
      prev = -1;
      barSwap = false;
      compareBars = true;
      quickSort();
      return;
    }

    if (swapPivot) {
      swapBars(bars[pivot], bars[j]);
      swapArrayElements(pivot, j);
      // now j is the position of pivot bar
      modifyBar("reference", bars[j]);
      modifyBar("selected", bars[pivot]);
      swapPivot = false;
      unselectBars = true;
      quickSort();
      return;
    }

    if (unselectBars) {
      // now j is the position of pivot bar
      modifyBar("unsorted", bars[pivot]);
      modifyBar("sorted", bars[j]);
      if (j + 1 <= endIdx) stack.push([j + 1, endIdx]);
      if (j - 1 >= startIdx) stack.push([startIdx, j - 1]);
      unselectBars = false;
      getIndex = true;
      quickSort();
      return;
    }
  }, delay);
}

function saveStep() {
  const step = {
    pivot,
    i,
    j,
    startIdx,
    endIdx,
    prev,
    getIndex,
    selectPivot,
    compareBars,
    barSwap,
    swapPivot,
    unselectBars,
    stack: [...stack],
  };
  record.push(step);
}

export function quickSortStepForward(delay) {
  quickSort(delay);
  setTimeout(stopAlgorithm, delay);
}
