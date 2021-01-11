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
let j = 1;
let index = 0;
let minValue = 0;
let noSwap = true;
const record = [];
let referenceBar = true;
let selectBar = false;
let selectNewMin = false;
let unselectBar = false;
let barSwap = false;
let unselectBars = false;

export function recursiveSelectionSort(delay = timeout) {
  const bars = document.querySelectorAll(".bar");

  algorithmTimeout(() => {
    saveStep();

    if (referenceBar) {
      modifyBar("reference", bars[i]);
      minValue = array[i];
      referenceBar = false;
      selectBar = true;
      recursiveSelectionSort();
      return;
    }
    if (selectBar) {
      console.log(j);
      // Color the previous bar unsorted again (only if it's not the min value)
      if (j - 1 > i && j - 1 !== index) {
        modifyBar("unsorted", bars[j - 1]);
      }
      modifyBar("selected", bars[j]);
      if (array[j] < minValue) {
        // Only execute if the bar has the smallest value so far (stored in minValue)
        selectBar = false;
        selectNewMin = true;
        recursiveSelectionSort();
        return;
      }
      selectBar = false;
    }
    if (selectNewMin) {
      if (index !== 0) {
        modifyBar("unsorted", bars[index]);
      }
      index = j;
      minValue = array[j];
      noSwap = false;
      selectNewMin = false;
      modifyBar("reference", bars[j]);
    }
    if (unselectBar) {
      modifyBar("unsorted", bars[j - 1]);
      unselectBar = false;
    }
    if (barSwap) {
      swapArrayElements(i, index);
      swapBars(bars[i], bars[index]);
      barSwap = false;
      unselectBars = true;
      recursiveSelectionSort();
      return;
    }
    if (unselectBars) {
      // only execute if the current value of i makes a new iteration possible. If i is already the previous to last value in the array, then it's already sorted, so color both bars orange.
      if (i < array.length - 2) {
        modifyBar("sorted", bars[i]);
        if (index !== 0) {
          modifyBar("unsorted", bars[index]);
        }
        unselectBars = false;
        referenceBar = true;
        i++;
        index = 0;
        noSwap = true;
        j = i + 1;
        recursiveSelectionSort();
      } else {
        // Sorting finished
        modifyBar("sorted", bars[i], bars[i + 1]);
        setIsSorted(true);
        console.log("SORTED");
      }
      return;
    }

    j++;

    if (j < array.length) {
      selectBar = true;
    } else if (j === array.length && j - 1 !== index) {
      unselectBar = true;
    } else {
      if (!noSwap) {
        barSwap = true;
      } else {
        unselectBars = true;
      }
    }
    recursiveSelectionSort();
  }, delay);
}

function saveStep() {
  const step = {
    i,
    j,
    index,
    minValue,
    noSwap,
    referenceBar,
    selectBar,
    selectNewMin,
    unselectBar,
    barSwap,
    unselectBars,
  };
  record.push(step);
}

export function selectionSortStepForward(delay) {
  recursiveSelectionSort(delay);
  setTimeout(stopAlgorithm, delay);
}

export function selectionSortStepBack(setHasStarted) {
  setIsSorted(false);
  const lastElement = record[record.length - 1];
  i = lastElement.i;
  j = lastElement.j;
  index = lastElement.index;
  minValue = lastElement.minValue;
  noSwap = lastElement.noSwap;
  referenceBar = lastElement.referenceBar;
  selectBar = lastElement.selectBar;
  selectNewMin = lastElement.selectNewMin;
  unselectBar = lastElement.unselectBar;
  barSwap = lastElement.barSwap;
  unselectBars = lastElement.unselectBars;
  record.pop();
  reverseSelectionSort();
  if (record.length === 0) {
    setHasStarted(false);
  }
}

function reverseSelectionSort() {
  const bars = document.querySelectorAll(".bar");
  if (referenceBar) {
    modifyBar("unsorted", bars[i]);
  } else if (selectBar) {
    if (j - 1 > i && j - 1 !== index) {
      modifyBar("selected", bars[j - 1]);
    }
    modifyBar("unsorted", bars[j]);
  } else if (selectNewMin) {
    if (index !== 0) {
      modifyBar("reference", bars[index]);
    }
    modifyBar("selected", bars[j]);
  } else if (unselectBar) {
    modifyBar("selected", bars[j - 1]);
  } else if (barSwap) {
    swapArrayElements(i, index);
    swapBars(bars[i], bars[index]);
  } else if (unselectBars) {
    modifyBar("reference", bars[i]);
    modifyBar("unsorted", bars[i + 1]);
    if (index !== 0) {
      modifyBar("reference", bars[index]);
    }
  }
}
