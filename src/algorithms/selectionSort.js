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
  index,
  minValue,
  noSwap,
  record,
  referenceBar,
  selectBar,
  selectNewMin,
  unselectBar,
  barSwap,
  unselectBars,
} = initialState;

export function selectionSort(delay = timeout) {
  const bars = document.querySelectorAll('.bar');

  algorithmTimeout(() => {
    saveStep();

    if (referenceBar) {
      modifyBar('reference', bars[i]);
      minValue = array[i];
      referenceBar = false;
      selectBar = true;
      selectionSort();
      return;
    }
    if (selectBar) {
      // Color the previous bar unsorted again (only if it's not the min value)
      if (j - 1 > i && j - 1 !== index) {
        modifyBar('unsorted', bars[j - 1]);
      }
      modifyBar('selected', bars[j]);
      if (array[j] < minValue) {
        // Only execute if the bar has the smallest value so far (stored in minValue)
        selectBar = false;
        selectNewMin = true;
        selectionSort();
        return;
      }
      selectBar = false;
    }
    if (selectNewMin) {
      if (index !== 0) {
        modifyBar('unsorted', bars[index]);
      }
      index = j;
      minValue = array[j];
      noSwap = false;
      selectNewMin = false;
      modifyBar('reference', bars[j]);
    }
    if (unselectBar) {
      modifyBar('unsorted', bars[j - 1]);
      unselectBar = false;
    }
    if (barSwap) {
      swapArrayElements(i, index);
      swapBars(bars[i], bars[index]);
      barSwap = false;
      unselectBars = true;
      selectionSort();
      return;
    }
    if (unselectBars) {
      // only execute if the current value of i makes a new iteration possible. If i is already the previous to last value in the array, then it's already sorted, so color both bars orange.
      if (i < array.length - 2) {
        modifyBar('sorted', bars[i]);
        if (index !== 0) {
          modifyBar('unsorted', bars[index]);
        }
        unselectBars = false;
        referenceBar = true;
        i++;
        index = 0;
        noSwap = true;
        j = i + 1;
        selectionSort();
      } else {
        // Sorting finished
        modifyBar('sorted', bars[i], bars[i + 1]);
        setIsSorted(true);
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
    selectionSort();
  }, delay);
}

function getInitialState() {
  return {
    i: 0,
    j: 1,
    index: 0,
    minValue: 0,
    noSwap: true,
    record: [],
    referenceBar: true,
    selectBar: false,
    selectNewMin: false,
    unselectBar: false,
    barSwap: false,
    unselectBars: false,
  };
}

export function selectionSetInitialState() {
  i = initialState.i;
  j = initialState.j;
  index = initialState.index;
  minValue = initialState.minValue;
  noSwap = initialState.noSwap;
  record = [];
  referenceBar = initialState.referenceBar;
  selectBar = initialState.selectBar;
  selectNewMin = initialState.selectNewMin;
  unselectBar = initialState.unselectBar;
  barSwap = initialState.barSwap;
  unselectBars = initialState.unselectBars;
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
  selectionSort(delay);
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
  const bars = document.querySelectorAll('.bar');
  if (referenceBar) {
    modifyBar('unsorted', bars[i]);
  } else if (selectBar) {
    if (j - 1 > i && j - 1 !== index) {
      modifyBar('selected', bars[j - 1]);
    }
    modifyBar('unsorted', bars[j]);
  } else if (selectNewMin) {
    if (index !== 0) {
      modifyBar('reference', bars[index]);
    }
    modifyBar('selected', bars[j]);
  } else if (unselectBar) {
    modifyBar('selected', bars[j - 1]);
  } else if (barSwap) {
    swapArrayElements(i, index);
    swapBars(bars[i], bars[index]);
  } else if (unselectBars) {
    modifyBar('reference', bars[i]);
    modifyBar('unsorted', bars[i + 1]);
    if (index !== 0) {
      modifyBar('reference', bars[index]);
    }
  }
}
