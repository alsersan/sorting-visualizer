import { swapBars, changeBarColor, changeClass } from "./generalUseFunctions";

let timer;
let i = 0;
let j = 1;
let index = 0;
let minValue = 0;
let noSwap = true;
let arr = [];
let record = [];
let referenceBar = true;
let selectBar = false;
let selectNewMin = false;
let unselectBar = false;
let barSwap = false;
let unselectBars = false;
let sorted = false;

export function recursiveSelectionSort(initialSpeed, speed, setIsSorted) {
  const bars = document.querySelectorAll(".bar");

  timer = setTimeout(() => {
    saveStep();
    console.log(record);

    if (referenceBar) {
      changeBarColor("blue", bars[i]);
      changeClass("reference", bars[i]);
      minValue = arr[i];
      referenceBar = false;
      selectBar = true;
      recursiveSelectionSort(speed, speed, setIsSorted);
      return;
    }

    if (selectBar) {
      changeBarColor("green", bars[j]);
      changeClass("selected", bars[j]);

      if (arr[j] < minValue) {
        // Only execute if the bar has the smallest value so far (stored in minValue)
        selectBar = false;
        selectNewMin = true;
        recursiveSelectionSort(speed, speed, setIsSorted);
        return;
      } else {
        // else, just go to unselectBar
        selectBar = false;
        unselectBar = true;
        recursiveSelectionSort(speed, speed, setIsSorted);
        return;
      }
    }

    if (selectNewMin) {
      // color the newMin bar blue and color the previous minBar red
      if (index !== 0) {
        changeBarColor("red", bars[index]);
        changeClass("unsorted", bars[index]);
      }
      index = j;
      minValue = arr[j];
      changeClass("reference", bars[j]);
      noSwap = false;
      selectNewMin = false;
      changeBarColor("blue", bars[j]);
    }

    if (unselectBar) {
      // Unselect the bar coloring it red again
      changeBarColor("red", bars[j]);
      changeClass("unsorted", bars[j]);
      unselectBar = false;
    }

    if (barSwap) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      swapBars(bars[i], bars[index]);
      barSwap = false;
      unselectBars = true;
      recursiveSelectionSort(speed, speed, setIsSorted);
      return;
    }

    if (unselectBars) {
      // only execute if the current value of i makes a new iteration possible. If i is already the previous to last value in the array, then it's already sorted, so color both bars orange.
      if (i < arr.length - 2) {
        changeBarColor("orange", bars[i]);
        changeClass("sorted", bars[i]);
        if (index !== 0) {
          changeBarColor("red", bars[index]);
          changeClass("unsorted", bars[index]);
        }
        unselectBars = false;
        referenceBar = true;
        i++;
        index = 0;
        noSwap = true;
        j = i + 1;
        recursiveSelectionSort(speed, speed, setIsSorted);
        return;
      } else {
        changeBarColor("orange", bars[i], bars[i + 1]);
        changeClass("sorted", bars[i], bars[i + 1]);
        setIsSorted(true);
        sorted = true;
        console.log("SORTED");
        return;
      }
    }

    j++;

    if (j < arr.length) {
      selectBar = true;
      recursiveSelectionSort(speed, speed, setIsSorted);
    } else {
      if (!noSwap) {
        barSwap = true;
        recursiveSelectionSort(speed, speed, setIsSorted);
      } else {
        unselectBars = true;
        recursiveSelectionSort(speed, speed, setIsSorted);
      }
    }
  }, initialSpeed);
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
    arr: [...arr],
  };
  record.push(step);
}

export function selectionSortGetArray(newArray) {
  arr = [...newArray];
}

export function selectionSortStepForward(initialSpeed, speed, setIsSorted) {
  selectionSortStop();
  recursiveSelectionSort(initialSpeed, speed, setIsSorted);
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
  arr = [...lastElement.arr];

  record.pop();
  visualSelectionSort();

  if (record.length === 0) {
    setHasStarted(false);
  }
}

// only DOM changes. All the real data comes from the record
function visualSelectionSort() {
  const bars = document.querySelectorAll(".bar");

  if (sorted) {
    for (let x = arr.length - 1; x >= i; x--) {
      changeBarColor("red", bars[x]);
    }
    sorted = false;
  }

  if (referenceBar) {
    changeBarColor("red", bars[i]);
  } else if (selectBar) {
    changeBarColor("red", bars[j]);
  } else if (selectNewMin) {
    if (index !== 0) changeBarColor("blue", bars[index]);
    changeBarColor("green", bars[j]);
  } else if (unselectBar) {
    changeBarColor("green", bars[j]);
  } else if (barSwap) {
    swapBars(bars[i], bars[index]);
  } else if (unselectBars) {
    changeBarColor("blue", bars[i]);
    if (index !== 0) changeBarColor("blue", bars[index]);
  }
}
