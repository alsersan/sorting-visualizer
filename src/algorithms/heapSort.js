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
  parentIdx,
  currentIdx,
  endIdx,
  childOneIdx,
  childTwoIdx,
  idxToSwap,
  findChildren,
  isMaxHeapBuilt,
  selectBars,
  selectSorted,
  barSwap,
  noSwap,
  swapSorted,
  unselectBars,
  unselectSorted,
  record,
} = initialState;

export const heapSort = (delay = timeout) => {
  const bars = document.querySelectorAll('.bar');

  if (record.length === 0) {
    parentIdx = Math.floor((array.length - 2) / 2);
    endIdx = array.length - 1;
  }
  // It's necessary to pass the delay to the mergeSort calls inside this if, so that the delay of 1 ms is applied on stepForward
  if (findChildren) {
    if (endIdx > 0) {
      if (currentIdx === null) currentIdx = parentIdx;
      if (childOneIdx === null) childOneIdx = currentIdx * 2 + 1;

      if (childOneIdx <= endIdx) {
        childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;

        if (childTwoIdx !== -1 && array[childTwoIdx] > array[childOneIdx]) {
          idxToSwap = childTwoIdx;
        } else {
          idxToSwap = childOneIdx;
        }
        selectBars = true;
        findChildren = false;
      } else {
        // sift down is completed
        currentIdx = null;
        childOneIdx = null;
        if (!isMaxHeapBuilt) {
          parentIdx--;
          if (parentIdx < 0) {
            // max heap formation finished
            parentIdx = 0; // when sorting the maxHeap parentIdx will always be 0 (the root element)
            isMaxHeapBuilt = true;
            findChildren = false;
            selectSorted = true;
            console.log('maxHeapFormed');
          }
        } else {
          findChildren = false;
          selectSorted = true;
        }
      }
      heapSort(delay);
    } else {
      setIsSorted(true);
      console.log('sorting finished');
    }
    return;
  }

  algorithmTimeout(() => {
    saveStep();
    console.log(record);

    if (selectBars) {
      modifyBar('reference', bars[currentIdx]);
      modifyBar('selected', bars[childOneIdx]);
      if (childTwoIdx !== -1) modifyBar('selected', bars[childTwoIdx]);

      // check if bars have to be swapped
      array[idxToSwap] > array[currentIdx]
        ? (barSwap = true)
        : (unselectBars = true);
      selectBars = false;
      heapSort();
      return;
    }
    if (barSwap) {
      swapBars(bars[currentIdx], bars[idxToSwap]);
      swapArrayElements(currentIdx, idxToSwap);
      modifyBar('selected', bars[currentIdx]);
      modifyBar('reference', bars[idxToSwap]);
      noSwap = false;
      barSwap = false;
      unselectBars = true;
      heapSort();
      return;
    }
    if (unselectBars) {
      modifyBar('unsorted', bars[currentIdx], bars[childOneIdx]);
      if (childTwoIdx !== -1) modifyBar('unsorted', bars[childTwoIdx]);
      currentIdx = idxToSwap;
      childOneIdx = currentIdx * 2 + 1;
      noSwap = true;
      unselectBars = false;
      findChildren = true;
      heapSort();
      return;
    }
    if (selectSorted) {
      modifyBar('selected', bars[0], bars[endIdx]);
      selectSorted = false;
      swapSorted = true;
      heapSort();
      return;
    }
    if (swapSorted) {
      swapBars(bars[0], bars[endIdx]);
      swapArrayElements(0, endIdx);
      swapSorted = false;
      unselectSorted = true;
      heapSort();
      return;
    }
    if (unselectSorted) {
      modifyBar('sorted', bars[endIdx]);
      endIdx === 1
        ? modifyBar('sorted', bars[0])
        : modifyBar('unsorted', bars[0]);
      endIdx--;
      unselectSorted = false;
      findChildren = true;
      heapSort();
      return;
    }
  }, delay);
};

function getInitialState() {
  return {
    parentIdx: null,
    currentIdx: null,
    endIdx: null,
    childOneIdx: null,
    childTwoIdx: null,
    idxToSwap: null,
    findChildren: true,
    isMaxHeapBuilt: false,
    selectBars: false,
    selectSorted: false,
    barSwap: false,
    noSwap: true,
    swapSorted: false,
    unselectBars: false,
    unselectSorted: false,
    record: [],
  };
}

export function heapSetInitialState() {
  parentIdx = initialState.parentIdx;
  currentIdx = initialState.currentIdx;
  endIdx = initialState.endIdx;
  childOneIdx = initialState.childOneIdx;
  childTwoIdx = initialState.childTwoIdx;
  idxToSwap = initialState.idxToSwap;
  findChildren = initialState.findChildren;
  isMaxHeapBuilt = initialState.isMaxHeapBuilt;
  selectBars = initialState.selectBars;
  selectSorted = initialState.selectSorted;
  barSwap = initialState.barSwap;
  noSwap = initialState.noSwap;
  swapSorted = initialState.swapSorted;
  unselectBars = initialState.unselectBars;
  unselectSorted = initialState.unselectSorted;
  record = [];
}

function saveStep() {
  const step = {
    parentIdx,
    currentIdx,
    endIdx,
    childOneIdx,
    childTwoIdx,
    idxToSwap,
    findChildren,
    isMaxHeapBuilt,
    selectBars,
    selectSorted,
    barSwap,
    noSwap,
    swapSorted,
    unselectBars,
    unselectSorted,
  };
  record.push(step);
}

export function heapSortStepForward(delay) {
  heapSort(delay);
  setTimeout(stopAlgorithm, delay);
}

export function heapSortStepBack(setHasStarted) {
  setIsSorted(false);
  const lastElement = record[record.length - 1];
  parentIdx = lastElement.parentIdx;
  currentIdx = lastElement.currentIdx;
  endIdx = lastElement.endIdx;
  childOneIdx = lastElement.childOneIdx;
  childTwoIdx = lastElement.childTwoIdx;
  idxToSwap = lastElement.idxToSwap;
  findChildren = lastElement.findChildren;
  isMaxHeapBuilt = lastElement.isMaxHeapBuilt;
  selectBars = lastElement.selectBars;
  selectSorted = lastElement.selectSorted;
  barSwap = lastElement.barSwap;
  noSwap = lastElement.noSwap;
  swapSorted = lastElement.swapSorted;
  unselectBars = lastElement.unselectBars;
  unselectSorted = lastElement.unselectSorted;
  record.pop();
  reverseHeapSort();
  if (record.length === 0) {
    setHasStarted(false);
  }
}

function reverseHeapSort() {
  console.log(record);
  const bars = document.querySelectorAll('.bar');
  if (selectBars) {
    modifyBar('unsorted', bars[currentIdx], bars[childOneIdx]);
    if (childTwoIdx !== -1) modifyBar('unsorted', bars[childTwoIdx]);
  } else if (barSwap) {
    swapBars(bars[currentIdx], bars[idxToSwap]);
    swapArrayElements(currentIdx, idxToSwap);
    modifyBar('reference', bars[currentIdx]);
    modifyBar('selected', bars[idxToSwap]);
  } else if (unselectBars) {
    // tengo que comprobar que barra era la 'reference'
    modifyBar('selected', bars[currentIdx], bars[childOneIdx]);
    if (childTwoIdx !== -1) modifyBar('selected', bars[childTwoIdx]);
    noSwap
      ? modifyBar('reference', bars[currentIdx])
      : modifyBar('reference', bars[idxToSwap]);
  } else if (selectSorted) {
    modifyBar('unsorted', bars[0], bars[endIdx]);
  } else if (swapSorted) {
    swapBars(bars[0], bars[endIdx]);
    swapArrayElements(0, endIdx);
  } else if (unselectSorted) {
    modifyBar('selected', bars[0], bars[endIdx]);
  }
}
