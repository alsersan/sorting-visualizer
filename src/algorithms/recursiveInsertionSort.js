import { swapBars, modifyBar } from "./generalUseFunctions";

let timer;
let i = 1;
let j = 0;
let arr = [];
let record = [];
let currentVal = 0;
let sorted = false;
let referenceBar = true;
let selectBar = false;
let barSwap = false;
let unselectBars = false;

let index = 0;
let unselectBar = false;

export const recursiveInsertionSort = (initialSpeed, speed, setIsSorted) => {
  const bars = document.querySelectorAll(".bar");

  timer = setTimeout(() => {
    if (referenceBar) {
      currentVal = arr[i];
      modifyBar("blue", "reference", bars[i]);
      referenceBar = false;
      selectBar = true;
      recursiveInsertionSort(speed, speed, setIsSorted);
      return;
    }

    if (selectBar) {
      modifyBar("green", "selected", bars[j]);

      // Color the previously selected bar as 'sorted, except if that bar has an index of i+1, in which case that bar was never selected and is still unsorted
      if (bars[j + 2] && j + 2 !== i + 1) {
        modifyBar("orange", "sorted", bars[j + 2]);
      }

      if (arr[j] > currentVal) {
        selectBar = false;
        barSwap = true;
        recursiveInsertionSort(speed, speed, setIsSorted);
        return;
      } else {
        selectBar = false;
        unselectBars = true;
        recursiveInsertionSort(speed, speed, setIsSorted);
        return;
      }
    }

    if (barSwap) {
      modifyBar("green", "selected", bars[j + 1]);
      modifyBar("blue", "reference", bars[j]);
      swapBars(bars[j], bars[j + 1]);

      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      barSwap = false;
    }

    if (unselectBars) {
      i++;
      modifyBar("orange", "sorted", bars[j], bars[j + 1]);
      if (i < arr.length) {
        j = i - 1;
        unselectBars = false;
        referenceBar = true;
        recursiveInsertionSort(speed, speed, setIsSorted);
        return;
      }
      // Sorting finished
      sorted = true;
      setIsSorted(true);
      console.log("SORTED");
      return;
    }

    // only decrease j if that index exists in the array
    if (j > 0) {
      j--;
      selectBar = true;
      recursiveInsertionSort(speed, speed, setIsSorted);
      return;
    } else {
      unselectBars = true;
      recursiveInsertionSort(speed, speed, setIsSorted);
      return;
    }
  }, initialSpeed);
};

export function insertionSortStop() {
  clearTimeout(timer);
}

export function insertionSortGetArray(newArray) {
  arr = [...newArray];
}
