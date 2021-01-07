import {
  algorithmTimeout,
  stopAlgorithm,
  mutateBar,
  modifyBar,
  array,
  timeout,
} from "./utils";

let i = 0;
let j = 0;
let i2 = 0;
let j2 = 0;
let temp = [];
let len = 1;
let idx = 0;
let getIndex = true;
let compareBars = false;
let overwriteBars = false;
let prev = null;
let overwriteIdx = 0;

export function mergeSort(setIsSorted, delay = timeout, arr = array) {
  if (getIndex) delay = 0;

  const bars = document.querySelectorAll(".bar");

  algorithmTimeout(() => {
    if (getIndex) {
      if (len < arr.length) {
        if (idx < arr.length) {
          i = idx;
          j = idx + len - 1;
          i2 = idx + len;
          j2 = idx + 2 * len - 1;

          if (i2 >= arr.length) {
            len = len * 2;
            idx = 0;
            mergeSort(setIsSorted);
            return;
          }
          if (j2 >= arr.length) j2 = arr.length - 1;
          getIndex = false;
          compareBars = true;
        } else {
          len = len * 2;
          idx = 0;
        }
        mergeSort(setIsSorted);
        return;
      }
    }

    if (compareBars) {
      if (i > i2 && j > j2) {
        modifyBar("unsorted", bars[i], bars[i2]);
      }
      if (prev !== null) modifyBar("unsorted", bars[prev]);

      if (i <= j && i2 <= j2) {
        modifyBar("selected", bars[i], bars[i2]);
        if (arr[i] <= arr[i2]) {
          prev = i;
          temp.push(arr[i++]);
        } else {
          prev = i2;
          temp.push(arr[i2++]);
        }
      } else if (i <= j) {
        modifyBar("selected", bars[i]);
        prev = i;
        temp.push(arr[i++]);
      } else if (i2 <= j2) {
        modifyBar("selected", bars[i2]);
        prev = i2;
        temp.push(arr[i2++]);
      } else {
        prev = null;
        compareBars = false;
        overwriteBars = true;

        mergeSort(setIsSorted);
        return;
      }

      mergeSort(setIsSorted);
      return;
    }

    if (overwriteBars) {
      if (overwriteIdx - 1 >= 0) {
        modifyBar("unsorted", bars[idx + overwriteIdx - 1]);
      }
      if (overwriteIdx < temp.length) {
        modifyBar("reference", bars[idx + overwriteIdx]);
        mutateBar(bars[idx + overwriteIdx], temp[overwriteIdx]);
        arr[idx + overwriteIdx] = temp[overwriteIdx];
        overwriteIdx++;
        mergeSort(setIsSorted);
        return;
      }
      overwriteIdx = 0;
      temp = [];
      overwriteBars = false;
      getIndex = true;
      idx = idx + 2 * len;

      mergeSort(setIsSorted);
      return;
    }
    setIsSorted(true);
    console.log("SORTED!");
  }, delay);
}
