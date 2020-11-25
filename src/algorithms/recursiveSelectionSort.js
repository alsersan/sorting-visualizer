let timer;
let i = 0;
let j = 1;
let index = 0;
let minValue = 0;
let noSwap = true;
let arr = [];
let referenceBar = true;
let selectBar = false;
let selectNewMin = false;
let unselectBar = false;
let barSwap = false;
let unselectBars = false;

export function recursiveSelectionSort(initialSpeed, speed, setIsSorted) {
  const bars = document.querySelectorAll(".bar");

  timer = setTimeout(() => {
    if (referenceBar) {
      changeBarColor("blue", bars[i]);
      minValue = arr[i];
      referenceBar = false;
      selectBar = true;
      recursiveSelectionSort(speed, speed, setIsSorted);
      return;
    }

    if (selectBar) {
      changeBarColor("green", bars[j]);

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
      if (index !== 0) changeBarColor("red", bars[index]);
      index = j;
      minValue = arr[j];
      noSwap = false;
      selectNewMin = false;
      changeBarColor("blue", bars[j]);
    }

    if (unselectBar) {
      // Unselect the bar coloring it red again
      changeBarColor("red", bars[j]);
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
        if (index !== 0) changeBarColor("red", bars[index]);
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
        setIsSorted(true);
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

export function selectionSortGetArray(newArray) {
  arr = [...newArray];
}

function swapBars(a, b) {
  a.style.height = `${b.firstElementChild.textContent}%`;
  b.style.height = `${a.firstElementChild.textContent}%`;
  [a.firstElementChild.textContent, b.firstElementChild.textContent] = [
    b.firstElementChild.textContent,
    a.firstElementChild.textContent,
  ];
}

function changeBarColor(color, ...elements) {
  elements.forEach((element) => (element.style.background = color));
}

export function selectionSortStepForward(initialSpeed, speed, setIsSorted) {
  selectionSortStop();
  recursiveSelectionSort(initialSpeed, speed, setIsSorted);
}
