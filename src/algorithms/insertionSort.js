import {
  algorithmTimeout,
  stopAlgorithm,
  swapBars,
  swapArrayElements,
  modifyBar,
  array,
  timeout,
  setIsSorted,
} from './utils';

const initialState = getInitialState();

let {
  i,
  j,
  record,
  currentVal,
  referenceBar,
  selectBar,
  barSwap,
  unselectBars,
} = initialState;

export const insertionSort = (delay = timeout) => {
  const bars = document.querySelectorAll('.bar');

  algorithmTimeout(() => {
    saveStep();

    if (referenceBar) {
      currentVal = array[i];
      modifyBar('reference', bars[i]);
      referenceBar = false;
      selectBar = true;
      insertionSort();
      return;
    }
    if (selectBar) {
      modifyBar('selected', bars[j]);
      // Color the previously selected bar as 'sorted', except if that bar has an index of i+1, in which case that bar was never selected and is still unsorted
      if (bars[j + 2] && j + 2 !== i + 1) {
        modifyBar('sorted', bars[j + 2]);
      }
      if (array[j] > currentVal) {
        selectBar = false;
        barSwap = true;
        insertionSort();
        return;
      } else {
        selectBar = false;
        unselectBars = true;
        insertionSort();
        return;
      }
    }
    if (barSwap) {
      modifyBar('selected', bars[j + 1]);
      modifyBar('reference', bars[j]);
      swapArrayElements(j, j + 1);
      swapBars(bars[j], bars[j + 1]);
      barSwap = false;
    }
    if (unselectBars) {
      i++;
      modifyBar('sorted', bars[j], bars[j + 1]);
      if (i < array.length) {
        j = i - 1;
        unselectBars = false;
        referenceBar = true;
        insertionSort();
        return;
      }
      // Sorting finished
      setIsSorted(true);
      return;
    }
    // only decrease j if that index exists in the array
    if (j > 0) {
      j--;
      selectBar = true;
      insertionSort();
      return;
    } else {
      unselectBars = true;
      insertionSort();
      return;
    }
  }, delay);
};

function getInitialState() {
  return {
    i: 1,
    j: 0,
    record: [],
    currentVal: 0,
    referenceBar: true,
    selectBar: false,
    barSwap: false,
    unselectBars: false,
  };
}

export function insertionSetInitialState() {
  i = initialState.i;
  j = initialState.j;
  record = [];
  currentVal = initialState.currentVal;
  referenceBar = initialState.referenceBar;
  selectBar = initialState.selectBar;
  barSwap = initialState.barSwap;
  unselectBars = initialState.unselectBars;
}

export function insertionSortStepForward(delay) {
  insertionSort(delay);
  setTimeout(stopAlgorithm, delay);
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

export function insertionSortStepBack(setHasStarted) {
  setIsSorted(false);
  const lastElement = record[record.length - 1];
  i = lastElement.i;
  j = lastElement.j;
  currentVal = lastElement.currentVal;
  referenceBar = lastElement.referenceBar;
  selectBar = lastElement.selectBar;
  barSwap = lastElement.barSwap;
  unselectBars = lastElement.unselectBars;
  record.pop();
  reverseInsertionSort();
  if (record.length === 0) {
    setHasStarted(false);
  }
}

function reverseInsertionSort() {
  const bars = document.querySelectorAll('.bar');
  if (referenceBar) {
    modifyBar('unsorted', bars[i]);
  } else if (selectBar) {
    if (i === 1) {
      modifyBar('unsorted', bars[j]);
    } else {
      modifyBar('sorted', bars[j]);
    }
    if (bars[j + 2] && j + 2 !== i + 1) {
      modifyBar('selected', bars[j + 2]);
    }
  } else if (barSwap) {
    modifyBar('reference', bars[j + 1]);
    modifyBar('selected', bars[j]);
    swapArrayElements(j, j + 1);
    swapBars(bars[j], bars[j + 1]);
  } else if (unselectBars) {
    modifyBar('selected', bars[j]);
    modifyBar('reference', bars[j + 1]);
  }
}
