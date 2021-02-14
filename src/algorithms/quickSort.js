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
  stack,
  record,
} = initialState;

export function quickSort(delay = timeout) {
  const bars = document.querySelectorAll('.bar');

  if (record.length === 0) j = endIdx = array.length - 1;
  if (getIndex) {
    if (stack.length > 0) {
      const [iTemp, jTemp] = stack.pop();
      startIdx = i = iTemp;
      endIdx = j = jTemp;
      pivot = i;
      prev = null;
      getIndex = false;
      selectPivot = true;
      quickSort();
    } else {
      // Sorting finished
      setIsSorted(true);
    }
    return;
  }
  algorithmTimeout(() => {
    saveStep();
    if (selectPivot) {
      modifyBar('reference', bars[pivot]);
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
        modifyBar('unsorted', bars[i - 1], bars[j + 1]);
      } else if (prev !== null) {
        modifyBar('unsorted', bars[prev]);
      }
      if (i < j) {
        modifyBar('selected', bars[i], bars[j]);
        if (array[i] < array[pivot]) {
          prev = i;
          i++;
        } else if (array[j] < array[pivot]) {
          compareBars = false;
          barSwap = true;
        } else {
          prev = j;
          j--;
        }
        quickSort();
        return;
      } else if (i === j) {
        modifyBar('selected', bars[j]);
        if (array[j] >= array[pivot]) {
          prev = j;
          j--;
          quickSort();
          return;
        }
      } else if (j === pivot) {
        // no need to go to swapPivot, since it's the same element
        modifyBar('selected', bars[j]);
        compareBars = false;
        unselectBars = true;
        quickSort();
        return;
      }
      modifyBar('selected', bars[j]);
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
      modifyBar('reference', bars[j]);
      modifyBar('selected', bars[pivot]);
      swapPivot = false;
      unselectBars = true;
      quickSort();
      return;
    }
    if (unselectBars) {
      // now j is the position of pivot bar
      modifyBar('unsorted', bars[pivot]);
      modifyBar('sorted', bars[j]);
      if (j + 1 <= endIdx) stack.push([j + 1, endIdx]);
      if (j - 1 >= startIdx) stack.push([startIdx, j - 1]);
      unselectBars = false;
      getIndex = true;
      quickSort();
      return;
    }
  }, delay);
}

function getInitialState() {
  return {
    pivot: 0,
    i: 0,
    j: 0,
    startIdx: 0,
    endIdx: 0,
    prev: 1,
    getIndex: false,
    selectPivot: true,
    compareBars: false,
    barSwap: false,
    swapPivot: false,
    unselectBars: false,
    stack: [],
    record: [],
  };
}

export function quickSetInitialState() {
  pivot = initialState.pivot;
  i = initialState.i;
  j = initialState.j;
  startIdx = initialState.startIdx;
  endIdx = initialState.end;
  prev = initialState.prev;
  getIndex = initialState.getIndex;
  selectPivot = initialState.selectPivot;
  compareBars = initialState.compareBars;
  barSwap = initialState.barSwap;
  swapPivot = initialState.swapPivot;
  unselectBars = initialState.unselectBars;
  stack = [];
  record = [];
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

export function quickSortStepBack(setHasStarted) {
  setIsSorted(false);
  const lastElement = record[record.length - 1];
  pivot = lastElement.pivot;
  i = lastElement.i;
  j = lastElement.j;
  startIdx = lastElement.startIdx;
  endIdx = lastElement.endIdx;
  prev = lastElement.prev;
  getIndex = lastElement.getIndex;
  selectPivot = lastElement.selectPivot;
  compareBars = lastElement.compareBars;
  barSwap = lastElement.barSwap;
  swapPivot = lastElement.swapPivot;
  unselectBars = lastElement.unselectBars;
  stack = lastElement.stack;
  record.pop();
  reverseQuickSort();
  if (record.length === 0) {
    setHasStarted(false);
  }
}

function reverseQuickSort() {
  const bars = document.querySelectorAll('.bar');

  if (selectPivot) {
    modifyBar('unsorted', bars[pivot]);
  } else if (compareBars) {
    if (prev === -1) {
      modifyBar('selected', bars[i - 1], bars[j + 1]);
    } else if (prev !== null) {
      modifyBar('selected', bars[prev]);
    }
    if (i < j) {
      if (prev === j + 1) {
        modifyBar('unsorted', bars[j]);
      } else if (prev === i - 1) {
        modifyBar('unsorted', bars[i]);
      } else {
        modifyBar('unsorted', bars[i], bars[j]);
      }
    } else if (i === j) {
      if (prev === -1 || prev === null) {
        modifyBar('unsorted', bars[j]);
      }
    } else if (j === pivot) {
      modifyBar('reference', bars[j]);
    } else {
      if (prev !== -1) modifyBar('unsorted', bars[j]);
    }
  } else if (barSwap) {
    swapBars(bars[i], bars[j]);
    swapArrayElements(i, j);
  } else if (swapPivot) {
    swapBars(bars[pivot], bars[j]);
    swapArrayElements(pivot, j);
    modifyBar('reference', bars[pivot]);
    modifyBar('selected', bars[j]);
  } else if (unselectBars) {
    if (i === j && i === pivot) {
      modifyBar('reference', bars[j]);
    } else if (j === pivot) {
      modifyBar('selected', bars[j]);
    } else {
      modifyBar('selected', bars[pivot]);
      modifyBar('reference', bars[j]);
    }
  }
}
