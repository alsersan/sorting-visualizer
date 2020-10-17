export const bubbleSort = async (arr) => {
  const bars = document.querySelectorAll(".bar");
  for (let i = arr.length - 1; i > 1; i--) {
    let noSwaps = true;
    for (let j = 0; j < i; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      changeBarColor("blue", bars[j], bars[j + 1]);
      await timer(10);

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapBars(bars[j], bars[j + 1]);
        noSwaps = false;
        await timer(10);
      }
      changeBarColor("red", bars[j], bars[j + 1]);
    }
    if (noSwaps) break;
  }
  // return arr;
};

export const selectionSort = async (arr) => {
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
      await timer(10);

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
      await timer(10);
      changeBarColor("red", bars[index]);
    }
    // Always change color of the sorted bar
    changeBarColor("orange", bars[i]);
  }
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
