export const bubbleSort = async (arr, speed) => {
  const bars = document.querySelectorAll(".bar");

  // First loop from back to front
  for (let i = arr.length - 1; i > 0; i--) {
    let noSwaps = true;

    // second loop from front to back, until j<i (the numbers after that are already sorted)
    for (let j = 0; j < i; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      changeBarColor("blue", bars[j], bars[j + 1]);
      await timer(speed);

      // if first bar id bigger than second bar, swap them
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapBars(bars[j], bars[j + 1]);
        noSwaps = false;
        await timer(speed);
      }
      changeBarColor("red", bars[j], bars[j + 1]);
      // color the sorted bar orange
      if (j + 1 === i) changeBarColor("orange", bars[j + 1]);
      // if the loop run all the way until the end, color the first bar orange
      if (i === 1) changeBarColor("orange", bars[j]);
    }

    // if there have been no swaps in the last loop, then the array is already sorted
    if (noSwaps) {
      bars.forEach((bar) => changeBarColor("orange", bar));
      break;
    }
  }
};

export const selectionSort = async (arr, speed) => {
  const bars = document.querySelectorAll(".bar");

  // First loop, which sets which bar all others are being compared to
  for (let i = 0; i < arr.length; i++) {
    let index = 0;
    let minValue = arr[i];
    let noSwaps = true;
    changeBarColor("blue", bars[i]);

    // Second loop, which compares all bars to the reference one
    for (let j = i + 1; j < arr.length; j++) {
      let smallest = false;
      changeBarColor("green", bars[j]);
      await timer(speed);

      // Only execute if the bar has the smallest value so far (stored in minValue)
      if (arr[j] < minValue) {
        if (index !== 0) changeBarColor("red", bars[index]);
        index = j;
        minValue = arr[j];
        smallest = true;
        noSwaps = false;
        changeBarColor("blue", bars[j]);
      }
      // If the current bar is not the smallest, change the color back to red.
      // If it IS the smallest, don't do anything and keep it blue
      if (!smallest) changeBarColor("red", bars[j]);
    }

    // Only execute if at least one bar which can be swapped has been identified.
    if (!noSwaps) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      changeBarColor("blue", bars[index]);
      swapBars(bars[i], bars[index]);
      await timer(speed);
      changeBarColor("red", bars[index]);
    }
    // Always change color of the sorted bar
    changeBarColor("orange", bars[i]);
  }
};

export const insertionSort = async (arr, speed) => {
  const bars = document.querySelectorAll(".bar");
  console.log(arr);

  // First loop. start from i = 0 since we need a i-1 element to compare to
  for (let i = 1; i < arr.length; i++) {
    const currentVal = arr[i];
    changeBarColor("blue", bars[i]);
    await timer(speed);

    // Second loop from back to front
    for (let j = i - 1; j >= 0; j--) {
      changeBarColor("green", bars[j]);
      await timer(speed);

      // If the value at index j is smaller (or equal) than the reference number, break the loop
      if (arr[j] <= currentVal) {
        changeBarColor("red", bars[j], bars[j + 1]);
        await timer(speed);
        break;
      }

      // Swap the 2 bars being compared
      swapBars(bars[j], bars[j + 1]);
      changeBarColor("blue", bars[j]);
      changeBarColor("green", bars[j + 1]);
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      await timer(speed);

      changeBarColor("red", bars[j + 1]);

      // If index is 0, the current implementation will leave that bar colored blue. This way we make sure that it's red again
      if (j === 0) {
        changeBarColor("red", bars[j]);
        await timer(speed);
      }
    }
  }
  // When the main loop ends, everything is sorted
  bars.forEach((bar) => changeBarColor("orange", bar));
};

function timer(ms) {
  return new Promise((res) => setTimeout(res, ms));
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
