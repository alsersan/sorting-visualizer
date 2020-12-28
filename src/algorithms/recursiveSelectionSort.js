import {
  swapBars,
  swapArrayElements,
  modifyBar,
  array,
} from "./generalUseFunctions";

let timer;
let i = 0;
let j = 1;
let index = 0;
let minValue = 0;
let noSwap = true;
let record = [];
let referenceBar = true;
let selectBar = false;
let selectNewMin = false;
let unselectBar = false;
let barSwap = false;
let unselectBars = false;
let sorted = false;

export function recursiveSelectionSort(args) {
  const {
    speed,
    setIsSorted,
    unsortedColor,
    referenceColor,
    selectedColor,
    sortedColor,
  } = args;
  const bars = document.querySelectorAll(".bar");

  timer = setTimeout(() => {
    saveStep();

    if (referenceBar) {
      modifyBar(referenceColor, "reference", bars[i]);

      minValue = array[i];
      referenceBar = false;
      selectBar = true;
      recursiveSelectionSort(args);
      return;
    }

    if (selectBar) {
      modifyBar(selectedColor, "selected", bars[j]);

      if (array[j] < minValue) {
        // Only execute if the bar has the smallest value so far (stored in minValue)
        selectBar = false;
        selectNewMin = true;
        recursiveSelectionSort(args);
        return;
      } else {
        // else, just go to unselectBar
        selectBar = false;
        unselectBar = true;
        recursiveSelectionSort(args);
        return;
      }
    }

    if (selectNewMin) {
      if (index !== 0) {
        modifyBar(unsortedColor, "unsorted", bars[index]);
      }
      index = j;
      minValue = array[j];
      noSwap = false;
      selectNewMin = false;
      modifyBar(referenceColor, "reference", bars[j]);
    }

    if (unselectBar) {
      modifyBar(unsortedColor, "unsorted", bars[j]);
      unselectBar = false;
    }

    if (barSwap) {
      swapArrayElements(i, index);
      swapBars(bars[i], bars[index]);
      barSwap = false;
      unselectBars = true;
      recursiveSelectionSort(args);
      return;
    }

    if (unselectBars) {
      // only execute if the current value of i makes a new iteration possible. If i is already the previous to last value in the array, then it's already sorted, so color both bars orange.
      if (i < array.length - 2) {
        modifyBar(sortedColor, "sorted", bars[i]);
        if (index !== 0) {
          modifyBar(unsortedColor, "unsorted", bars[index]);
        }
        unselectBars = false;
        referenceBar = true;
        i++;
        index = 0;
        noSwap = true;
        j = i + 1;
        recursiveSelectionSort(args);
        return;
      } else {
        modifyBar(sortedColor, "sorted", bars[i], bars[i + 1]);
        setIsSorted(true);
        sorted = true;
        console.log("SORTED");
        return;
      }
    }

    j++;

    if (j < array.length) {
      selectBar = true;
      recursiveSelectionSort(args);
    } else {
      if (!noSwap) {
        barSwap = true;
        recursiveSelectionSort(args);
      } else {
        unselectBars = true;
        recursiveSelectionSort(args);
      }
    }
  }, speed);
}

export function selectionSortStop() {
  clearTimeout(timer);
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

export function selectionSortStepForward(args) {
  const { speed } = args;
  recursiveSelectionSort(args);
  setTimeout(selectionSortStop, speed);
}

export function selectionSortStepBack(args) {
  const { setHasStarted, unsortedColor, referenceColor, selectedColor } = args;
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
  visualSelectionSort(unsortedColor, referenceColor, selectedColor);

  if (record.length === 0) {
    setHasStarted(false);
  }
}

// only DOM changes. All the real data comes from the record
function visualSelectionSort(unsortedColor, referenceColor, selectedColor) {
  const bars = document.querySelectorAll(".bar");

  if (sorted) {
    for (let x = array.length - 1; x >= i; x--) {
      modifyBar(unsortedColor, "unsorted", bars[x]);
    }
    sorted = false;
  }

  if (referenceBar) {
    modifyBar(unsortedColor, "unsorted", bars[i]);
  } else if (selectBar) {
    modifyBar(unsortedColor, "unsorted", bars[j]);
  } else if (selectNewMin) {
    if (index !== 0) {
      modifyBar(referenceColor, "reference", bars[index]);
    }
    modifyBar(selectedColor, "selected", bars[j]);
  } else if (unselectBar) {
    modifyBar(selectedColor, "selected", bars[j]);
  } else if (barSwap) {
    swapArrayElements(i, index);
    swapBars(bars[i], bars[index]);
  } else if (unselectBars) {
    modifyBar(referenceColor, "reference", bars[i]);

    if (index !== 0) {
      modifyBar(referenceColor, "reference", bars[index]);
    }
  }
}
