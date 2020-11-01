let timer;
let i = 0;
let j = 0;
let barSwap = false;
let unselectBars = false;
let compareBars = true;
let noSwap = true;
let arr = [];
let record = [];

export function recursiveBubbleSort(initialSpeed, speed, setIsSorted) {
  const bars = document.querySelectorAll(".bar");

  timer = setTimeout(() => {
    saveStep();
    if (compareBars) {
      changeBarColor("blue", bars[j], bars[j + 1]);

      if (arr[j] > arr[j + 1]) {
        // If first bar id bigger than second bar, swap them
        compareBars = false;
        barSwap = true;
        recursiveBubbleSort(speed, speed, setIsSorted);
        return;
      } else {
        // If not, execute unselectBars to color the bars red again
        compareBars = false;
        unselectBars = true;
        recursiveBubbleSort(speed, speed, setIsSorted);
        return;
      }
    } else if (barSwap) {
      // Swap the bars
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      swapBars(bars[j], bars[j + 1]);
      noSwap = false;
      barSwap = false;
      unselectBars = true;
      recursiveBubbleSort(speed, speed, setIsSorted);
      return;
    } else if (unselectBars) {
      // After checking and/or swapping the bars, color them red again
      changeBarColor("red", bars[j], bars[j + 1]);
      unselectBars = false;
      compareBars = true;
    }

    // Each time, increase the value of j one unit and check if the function has to be executed again
    j++;

    // if j < i, the cycle has not been yet completed
    if (j < i) {
      recursiveBubbleSort(speed, speed, setIsSorted);

      // if j === i, the cycle  has been completed, but only execute again if there have been swaps in this cycle (otherwise the array is already sorted) and if i > 1 (making the last possible value of i 1)
    } else if (j === i && i > 1 && !noSwap) {
      noSwap = true;
      j = 0;
      i--;
      recursiveBubbleSort(speed, speed, setIsSorted);
      // if the conditions above are not met, then the array is sorted
    } else {
      setIsSorted(true);
      console.log("SORTED!!");
    }
  }, initialSpeed);
}

export function stop() {
  clearTimeout(timer);
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

// get the size of the array every time the size slider changes its value (imported in App component)
export function getArray(newArray) {
  arr = [...newArray];
  i = newArray.length - 1;
}

export function oneStepForward(initialSpeed, speed, setIsSorted) {
  stop();
  recursiveBubbleSort(initialSpeed, speed, setIsSorted);
}

export function oneStepBack(setHasStarted) {
  if (record.length !== 0) {
    stop();
    const lastElement = record[record.length - 1];

    i = lastElement.i;
    j = lastElement.j;
    barSwap = lastElement.barSwap;
    unselectBars = lastElement.unselectBars;
    compareBars = lastElement.compareBars;
    noSwap = lastElement.noSwap;
    arr = [...lastElement.arr];

    record.pop();
    visualBubbleSort();

    if (record.length === 0) {
      setHasStarted(false);
    }
  }
}

function visualBubbleSort() {
  // only DOM changes. All the real data comes from the record
  const bars = document.querySelectorAll(".bar");
  if (compareBars) {
    changeBarColor("red", bars[j], bars[j + 1]);
  } else if (barSwap) {
    swapBars(bars[j], bars[j + 1]);
  } else if (unselectBars) {
    changeBarColor("blue", bars[j], bars[j + 1]);
  }
}
