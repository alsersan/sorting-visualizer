import { swapBars, changeBarColor, changeClass } from "./generalUseFunctions";

let timer;
let i = 0;
let j = 0;
let barSwap = false;
let unselectBars = false;
let compareBars = true;
let noSwap = true;
let arr = [];
let record = [];
let sorted = false;

export function recursiveBubbleSort(
  initialSpeed,
  speed,
  setIsSorted,
  unsortedColor,
  selectedColor,
  sortedColor
) {
  const bars = document.querySelectorAll(".bar");

  timer = setTimeout(() => {
    saveStep();
    if (compareBars) {
      changeBarColor(selectedColor, bars[j], bars[j + 1]);
      changeClass("selected", bars[j], bars[j + 1]);

      if (arr[j] > arr[j + 1]) {
        // If first bar is bigger than second bar, swap them
        compareBars = false;
        barSwap = true;
        recursiveBubbleSort(
          speed,
          speed,
          setIsSorted,
          unsortedColor,
          selectedColor,
          sortedColor
        );
        return;
      } else {
        // If not, execute unselectBars to color them again with unselectedColor
        compareBars = false;
        unselectBars = true;
        recursiveBubbleSort(
          speed,
          speed,
          setIsSorted,
          unsortedColor,
          selectedColor,
          sortedColor
        );
        return;
      }
    } else if (barSwap) {
      // Swap the bars
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      swapBars(bars[j], bars[j + 1]);
      noSwap = false;
      barSwap = false;
      unselectBars = true;
      recursiveBubbleSort(
        speed,
        speed,
        setIsSorted,
        unsortedColor,
        selectedColor,
        sortedColor
      );
      return;
    } else if (unselectBars) {
      if (j + 1 === i) {
        // If the last bar is sorted, color it with sortedColor
        changeBarColor(unsortedColor, bars[j]);
        changeClass("unsorted", bars[j]);
        changeBarColor(sortedColor, bars[j + 1]);
        changeClass("sorted", bars[j + 1]);
      } else {
        // If the last bar is not sorted, after checking and/or swapping the bars, color them with unsortedColor
        changeBarColor(unsortedColor, bars[j], bars[j + 1]);
        changeClass("unsorted", bars[j], bars[j + 1]);
      }
      unselectBars = false;
      compareBars = true;
    }

    // Each time, increase the value of j one unit and check if the function has to be executed again
    j++;

    if (j < i) {
      // if j < i, the cycle has not been yet completed
      recursiveBubbleSort(
        speed,
        speed,
        setIsSorted,
        unsortedColor,
        selectedColor,
        sortedColor
      );
    } else if (j === i && i > 1 && !noSwap) {
      // if j === i, the cycle  has been completed, but only execute again if there have been swaps in this cycle (otherwise the array is already sorted) and if i > 1 (making the last possible value of i 1)
      noSwap = true;
      j = 0;
      i--;
      recursiveBubbleSort(
        speed,
        speed,
        setIsSorted,
        unsortedColor,
        selectedColor,
        sortedColor
      );
    } else {
      // if the conditions above are not met, then the array is sorted
      bars.forEach((bar) => {
        changeBarColor(sortedColor, bar);
        changeClass("sorted", bar);
      });
      sorted = true;
      setIsSorted(true);
      console.log("SORTED!!");
    }
  }, initialSpeed);
}

export function bubbleSortStop() {
  clearTimeout(timer);
}

// save all variables of each step in an array, to be able to go back in time
function saveStep() {
  const step = {
    i,
    j,
    barSwap,
    unselectBars,
    compareBars,
    noSwap,
    arr: [...arr],
  };
  record.push(step);
}

// get the size of the array every time the size slider changes its value (imported in SortingOptionsContext)
export function bubbleSortGetArray(newArray) {
  arr = [...newArray];
  i = newArray.length - 1;
}

export function bubbleSortStepForward(
  initialSpeed,
  speed,
  setIsSorted,
  unsortedColor,
  selectedColor,
  sortedColor
) {
  bubbleSortStop();
  recursiveBubbleSort(
    initialSpeed,
    speed,
    setIsSorted,
    unsortedColor,
    selectedColor,
    sortedColor
  );
}

export function bubbleSortStepBack(
  setHasStarted,
  unsortedColor,
  selectedColor
) {
  bubbleSortStop();
  const lastElement = record[record.length - 1];

  i = lastElement.i;
  j = lastElement.j;
  barSwap = lastElement.barSwap;
  unselectBars = lastElement.unselectBars;
  compareBars = lastElement.compareBars;
  noSwap = lastElement.noSwap;
  arr = [...lastElement.arr];

  record.pop();
  visualBubbleSort(unsortedColor, selectedColor);

  if (record.length === 0) {
    setHasStarted(false);
  }
}

function visualBubbleSort(unsortedColor, selectedColor) {
  // If the array was already sorted, all the bars that were colored with sortedColor in the last step are colored with unsortedColor
  const bars = document.querySelectorAll(".bar");
  if (sorted) {
    for (let x = 0; x <= i; x++) {
      changeBarColor(unsortedColor, bars[x]);
    }
    sorted = false;
  }

  // only DOM changes. All the real data comes from the record
  if (compareBars) {
    changeBarColor(unsortedColor, bars[j], bars[j + 1]);
    changeClass("unsorted", bars[j], bars[j + 1]);
  } else if (barSwap) {
    swapBars(bars[j], bars[j + 1]);
  } else if (unselectBars) {
    changeBarColor(selectedColor, bars[j], bars[j + 1]);
    changeClass("selected", bars[j], bars[j + 1]);
    changeClass("selected", bars[j], bars[j + 1]);
  }
}
