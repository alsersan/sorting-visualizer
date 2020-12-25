import { swapBars, modifyBar } from "./generalUseFunctions";

let timer;
let i = 1;
let j = 0;
let arr = [];
let record = [];
let currentVal = 0;
let referenceBar = true;
let selectBar = false;
let barSwap = false;
let unselectBars = false;

export const recursiveInsertionSort = (args) => {
  const { speed, setIsSorted } = args;
  const bars = document.querySelectorAll(".bar");

  timer = setTimeout(() => {
    saveStep();

    if (referenceBar) {
      currentVal = arr[i];
      modifyBar("blue", "reference", bars[i]);
      referenceBar = false;
      selectBar = true;
      recursiveInsertionSort(args);
      return;
    }

    if (selectBar) {
      modifyBar("green", "selected", bars[j]);

      // Color the previously selected bar as 'sorted', except if that bar has an index of i+1, in which case that bar was never selected and is still unsorted
      if (bars[j + 2] && j + 2 !== i + 1) {
        modifyBar("orange", "sorted", bars[j + 2]);
      }

      if (arr[j] > currentVal) {
        selectBar = false;
        barSwap = true;
        recursiveInsertionSort(args);
        return;
      } else {
        selectBar = false;
        unselectBars = true;
        recursiveInsertionSort(args);
        return;
      }
    }

    if (barSwap) {
      modifyBar("green", "selected", bars[j + 1]);
      modifyBar("blue", "reference", bars[j]);
      swapBars(bars[j], bars[j + 1]);

      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      barSwap = false;
    }

    if (unselectBars) {
      i++;
      modifyBar("orange", "sorted", bars[j], bars[j + 1]);
      if (i < arr.length) {
        j = i - 1;
        unselectBars = false;
        referenceBar = true;
        recursiveInsertionSort(args);
        return;
      }
      // Sorting finished
      setIsSorted(true);
      console.log("SORTED");
      return;
    }

    // only decrease j if that index exists in the array
    if (j > 0) {
      j--;
      selectBar = true;
      recursiveInsertionSort(args);
      return;
    } else {
      unselectBars = true;
      recursiveInsertionSort(args);
      return;
    }
  }, speed);
};

export function insertionSortStop() {
  clearTimeout(timer);
}

export function insertionSortGetArray(newArray) {
  arr = [...newArray];
}

export function insertionSortStepForward(args) {
  const { speed } = args;
  recursiveInsertionSort(args);
  setTimeout(insertionSortStop, speed);
}

function saveStep() {
  const step = {
    i,
    j,
    currentVal,
    referenceBar,
    selectBar,
    barSwap,
    unselectBars,
    arr: [...arr],
  };
  record.push(step);
}

export function insertionSortStepBack(args) {
  const { setHasStarted } = args;
  const lastElement = record[record.length - 1];

  i = lastElement.i;
  j = lastElement.j;
  currentVal = lastElement.currentVal;
  referenceBar = lastElement.referenceBar;
  selectBar = lastElement.selectBar;
  barSwap = lastElement.barSwap;
  unselectBars = lastElement.unselectBars;
  arr = [...lastElement.arr];

  record.pop();
  visualInsertionSort();

  if (record.length === 0) {
    setHasStarted(false);
  }
}

// only DOM changes. All the real data comes from the record
function visualInsertionSort() {
  const bars = document.querySelectorAll(".bar");

  if (referenceBar) {
    modifyBar("red", "unsorted", bars[i]);
  } else if (selectBar) {
    if (i === 1) {
      modifyBar("red", "unsorted", bars[j]);
    } else {
      modifyBar("orange", "sorted", bars[j]);
    }
    if (bars[j + 2] && j + 2 !== i + 1) {
      modifyBar("green", "selected", bars[j + 2]);
    }
  } else if (barSwap) {
    modifyBar("blue", "reference", bars[j + 1]);
    modifyBar("green", "selected", bars[j]);
    swapBars(bars[j], bars[j + 1]);
  } else if (unselectBars) {
    modifyBar("green", "selected", bars[j]);
    modifyBar("blue", "reference", bars[j + 1]);
  }
}
