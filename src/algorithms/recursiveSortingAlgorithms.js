let timer;
let i = 8;
let j = 0;
let barSwap = false;
let unselectBars = false;
let compareBars = true;
let noSwap = true;

export function recursiveBubbleSort(speed, arr) {
  const bars = document.querySelectorAll(".bar");
  timer = setTimeout(() => {
    if (compareBars) {
      changeBarColor("blue", bars[j], bars[j + 1]);

      if (arr[j] > arr[j + 1]) {
        // If first bar id bigger than second bar, swap them
        noSwap = false;
        compareBars = false;
        barSwap = true;
        recursiveBubbleSort(speed, arr);
        return;
      } else {
        // If not, execute unselectBars to color the bars red again
        compareBars = false;
        unselectBars = true;
        recursiveBubbleSort(speed, arr);
        return;
      }
    } else if (barSwap) {
      // Swap the bars
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      swapBars(bars[j], bars[j + 1]);
      barSwap = false;
      unselectBars = true;
      recursiveBubbleSort(speed, arr);
      return;
    } else if (unselectBars) {
      // After checking and/or swapping the bars, color them red again
      changeBarColor("red", bars[j], bars[j + 1]);
      unselectBars = false;
      compareBars = true;
    }

    // Each time, increase the value of j one unit and check if the function has to be executed again
    j++;
    if (j < i) {
      noSwap = true;
      recursiveBubbleSort(speed, arr);
    } else if (j === i && !noSwap) {
      j = 0;
      i--;
      recursiveBubbleSort(speed, arr);
    }
  }, speed);
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
