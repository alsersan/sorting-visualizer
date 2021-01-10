import {
  algorithmTimeout,
  stopAlgorithm,
  swapBars,
  swapArrayElements,
  modifyBar,
  array,
  timeout,
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
let sorted = false;

export function recursiveSelectionSort(setIsSorted, delay = timeout) {
  const bars = document.querySelectorAll(".bar");

  algorithmTimeout(() => {
    saveStep();

    if (referenceBar) {
      modifyBar("reference", bars[i]);
      minValue = array[i];
      referenceBar = false;
      selectBar = true;
      recursiveSelectionSort(setIsSorted);
      return;
    }
    if (selectBar) {
      modifyBar("selected", bars[j]);
      if (array[j] < minValue) {
        // Only execute if the bar has the smallest value so far (stored in minValue)
        selectBar = false;
        selectNewMin = true;
        recursiveSelectionSort(setIsSorted);
        return;
      } else {
        // else, just go to unselectBar
        selectBar = false;
        unselectBar = true;
        recursiveSelectionSort(setIsSorted);
        return;
      }
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
      modifyBar("unsorted", bars[j]);
      unselectBar = false;
    }
    if (barSwap) {
      swapArrayElements(i, index);
      swapBars(bars[i], bars[index]);
      barSwap = false;
      unselectBars = true;
      recursiveSelectionSort(setIsSorted);
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
        recursiveSelectionSort(setIsSorted);
        return;
      } else {
        // Sorting finished
        modifyBar("sorted", bars[i], bars[i + 1]);
        setIsSorted(true);
        sorted = true;
        console.log("SORTED");
        return;
      }
    }

    j++;

    if (j < array.length) {
      selectBar = true;
      recursiveSelectionSort(setIsSorted);
    } else {
      if (!noSwap) {
        barSwap = true;
        recursiveSelectionSort(setIsSorted);
      } else {
        unselectBars = true;
        recursiveSelectionSort(setIsSorted);
      }
    }
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

export function selectionSortStepForward(setIsSorted, delay) {
  recursiveSelectionSort(setIsSorted, delay);
  setTimeout(stopAlgorithm, delay);
}

export function selectionSortStepBack(setHasStarted) {
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
  if (sorted) {
    for (let x = array.length - 1; x >= i; x--) {
      modifyBar("unsorted", bars[x]);
    }
    sorted = false;
  }
  if (referenceBar) {
    modifyBar("unsorted", bars[i]);
  } else if (selectBar) {
    modifyBar("unsorted", bars[j]);
  } else if (selectNewMin) {
    if (index !== 0) {
      modifyBar("reference", bars[index]);
    }
    modifyBar("selected", bars[j]);
  } else if (unselectBar) {
    modifyBar("selected", bars[j]);
  } else if (barSwap) {
    swapArrayElements(i, index);
    swapBars(bars[i], bars[index]);
  } else if (unselectBars) {
    modifyBar("reference", bars[i]);
    if (index !== 0) {
      modifyBar("reference", bars[index]);
    }
  }
}
