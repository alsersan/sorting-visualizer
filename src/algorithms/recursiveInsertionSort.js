import {
  algorithmTimeout,
  stopAlgorithm,
  swapBars,
  swapArrayElements,
  modifyBar,
  array,
} from "./utils";

let i = 1;
let j = 0;
let record = [];
let currentVal = 0;
let referenceBar = true;
let selectBar = false;
let barSwap = false;
let unselectBars = false;

export const recursiveInsertionSort = (args) => {
  const { speed, setIsSorted } = args;
  const bars = document.querySelectorAll(".bar");

  algorithmTimeout(() => {
    saveStep();

    if (referenceBar) {
      currentVal = array[i];
      modifyBar("reference", bars[i]);
      referenceBar = false;
      selectBar = true;
      recursiveInsertionSort(args);
      return;
    }

    if (selectBar) {
      modifyBar("selected", bars[j]);

      // Color the previously selected bar as 'sorted', except if that bar has an index of i+1, in which case that bar was never selected and is still unsorted
      if (bars[j + 2] && j + 2 !== i + 1) {
        modifyBar("sorted", bars[j + 2]);
      }

      if (array[j] > currentVal) {
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
      modifyBar("selected", bars[j + 1]);
      modifyBar("reference", bars[j]);
      swapArrayElements(j, j + 1);
      swapBars(bars[j], bars[j + 1]);
      barSwap = false;
    }

    if (unselectBars) {
      i++;
      modifyBar("sorted", bars[j], bars[j + 1]);
      if (i < array.length) {
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

export function insertionSortStepForward(args) {
  const { speed } = args;
  recursiveInsertionSort(args);
  setTimeout(stopAlgorithm, speed);
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
    modifyBar("unsorted", bars[i]);
  } else if (selectBar) {
    if (i === 1) {
      modifyBar("unsorted", bars[j]);
    } else {
      modifyBar("sorted", bars[j]);
    }
    if (bars[j + 2] && j + 2 !== i + 1) {
      modifyBar("selected", bars[j + 2]);
    }
  } else if (barSwap) {
    modifyBar("reference", bars[j + 1]);
    modifyBar("selected", bars[j]);
    swapArrayElements(j, j + 1);
    swapBars(bars[j], bars[j + 1]);
  } else if (unselectBars) {
    modifyBar("selected", bars[j]);
    modifyBar("reference", bars[j + 1]);
  }
}
