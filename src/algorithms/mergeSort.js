import {
  algorithmTimeout,
  stopAlgorithm,
  mutateBar,
  modifyBar,
  array,
  timeout,
  setIsSorted,
} from "./utils";

const initialState = getInitialState();

let {
  i,
  j,
  i2,
  j2,
  temp,
  len,
  idx,
  getIndex,
  compareBars,
  overwriteBars,
  prev,
  overwriteIdx,
  record,
  copyArray,
} = initialState;

// let i = 0;
// let j = 0;
// let i2 = 0;
// let j2 = 0;
// let temp = [];
// let len = 1;
// let idx = 0;
// let getIndex = true;
// let compareBars = false;
// let overwriteBars = false;
// let prev = null;
// let overwriteIdx = 0;
// const record = [];
// let copyArray = [];

export function mergeSort(delay = timeout) {
  const bars = document.querySelectorAll(".bar");

  // getIndex outside of algorithTimeout so that this step is executed immediately and does not delay the animation (since nothing visual is happening)
  if (getIndex) {
    // It's necessary to pass the delay to the mergeSort calls inside this if, so that the delay of 1 ms is applied on stepForward
    if (len < array.length) {
      if (idx < array.length) {
        i = idx;
        j = idx + len - 1;
        i2 = idx + len;
        j2 = idx + 2 * len - 1;
        if (i2 >= array.length) {
          len = len * 2;
          idx = 0;
          mergeSort(delay);
          return;
        }
        if (j2 >= array.length) j2 = array.length - 1;
        getIndex = false;
        compareBars = true;
      } else {
        len = len * 2;
        idx = 0;
      }
      mergeSort(delay);
      return;
    }
    // Sorting finished
    setIsSorted(true);
    console.log("SORTED!");
    return;
  }

  algorithmTimeout(() => {
    saveStep();

    if (compareBars) {
      if (prev === null) {
        modifyBar("selected", bars[i], bars[i2]);
      } else {
        modifyBar("unsorted", bars[prev]);
      }

      if (i <= j && i2 <= j2) {
        // check which index (i or i2) has to be colored
        if (prev <= j) {
          modifyBar("selected", bars[i]);
        } else {
          modifyBar("selected", bars[i2]);
        }
        if (array[i] <= array[i2]) {
          prev = i;
          temp.push(array[i++]);
        } else {
          prev = i2;
          temp.push(array[i2++]);
        }
      } else if (i <= j) {
        modifyBar("selected", bars[i]);
        prev = i;
        temp.push(array[i++]);
      } else if (i2 <= j2) {
        modifyBar("selected", bars[i2]);
        prev = i2;
        temp.push(array[i2++]);
      } else {
        prev = null;
        compareBars = false;
        overwriteBars = true;
        mergeSort();
        return;
      }
      mergeSort();
      return;
    }

    if (overwriteBars) {
      if (overwriteIdx - 1 >= 0) {
        if (temp.length === array.length) {
          modifyBar("sorted", bars[idx + overwriteIdx - 1]);
        } else {
          modifyBar("unsorted", bars[idx + overwriteIdx - 1]);
        }
      }
      if (overwriteIdx < temp.length) {
        modifyBar("reference", bars[idx + overwriteIdx]);
        mutateBar(bars[idx + overwriteIdx], temp[overwriteIdx]);
        array[idx + overwriteIdx] = temp[overwriteIdx];
        overwriteIdx++;
        mergeSort();
        return;
      }
      overwriteIdx = 0;
      temp = [];
      overwriteBars = false;
      getIndex = true;
      idx = idx + 2 * len;
      mergeSort();
      return;
    }
  }, delay);
}

function getInitialState() {
  return {
    i: 0,
    j: 0,
    i2: 0,
    j2: 0,
    temp: [],
    len: 1,
    idx: 0,
    getIndex: true,
    compareBars: false,
    overwriteBars: false,
    prev: null,
    overwriteIdx: 0,
    record: [],
    copyArray: [],
  };
}

export function mergeSetInitialState() {
  i = initialState.i;
  j = initialState.j;
  i2 = initialState.i2;
  j2 = initialState.j2;
  temp = [];
  len = initialState.len;
  idx = initialState.idx;
  getIndex = initialState.getIndex;
  compareBars = initialState.compareBars;
  overwriteBars = initialState.overwriteBars;
  prev = initialState.prev;
  overwriteIdx = initialState.overwriteIdx;
  record = [];
  copyArray = [];
}

function saveStep() {
  const step = {
    i,
    j,
    i2,
    j2,
    temp: [...temp],
    len,
    idx,
    getIndex,
    compareBars,
    overwriteBars,
    prev,
    overwriteIdx,
    // copyArray needed to go back, or we wouldn't be able to restore the bar to it's previous value, since the array has been mutated with the new value.
    copyArray: [...array],
  };
  record.push(step);
}

export function mergeSortStepForward(delay) {
  mergeSort(delay);
  setTimeout(stopAlgorithm, delay);
}

export function mergeSortStepBack(setHasStarted) {
  setIsSorted(false);
  const lastElement = record[record.length - 1];
  i = lastElement.i;
  j = lastElement.j;
  i2 = lastElement.i2;
  j2 = lastElement.j2;
  temp = lastElement.temp;
  len = lastElement.len;
  idx = lastElement.idx;
  getIndex = lastElement.getIndex;
  compareBars = lastElement.compareBars;
  overwriteBars = lastElement.overwriteBars;
  prev = lastElement.prev;
  overwriteIdx = lastElement.overwriteIdx;
  copyArray = lastElement.copyArray;
  record.pop();
  reverseMergeSort();
  if (record.length === 0) {
    setHasStarted(false);
  }
}

function reverseMergeSort() {
  const bars = document.querySelectorAll(".bar");

  if (compareBars) {
    if (prev === null) {
      modifyBar("unsorted", bars[i], bars[i2]);
    } else {
      modifyBar("selected", bars[prev]);
    }
    // Check if the selected bar has to be unselected, or can stay as it is
    if (prev <= j && i <= j) {
      modifyBar("unsorted", bars[i]);
    }
    if (prev > j && i2 <= j2) {
      modifyBar("unsorted", bars[i2]);
    }
  } else if (overwriteBars) {
    if (overwriteIdx - 1 >= 0) {
      modifyBar("reference", bars[idx + overwriteIdx - 1]);
    }
    if (overwriteIdx < temp.length) {
      modifyBar("unsorted", bars[idx + overwriteIdx]);
      mutateBar(bars[idx + overwriteIdx], copyArray[idx + overwriteIdx]);
      array[idx + overwriteIdx] = copyArray[idx + overwriteIdx];
    }
  }
}
