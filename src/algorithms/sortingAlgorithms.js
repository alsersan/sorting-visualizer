export const bubbleSort = async (arr) => {
  const bars = document.querySelectorAll(".bar");
  for (let i = arr.length - 1; i > 1; i--) {
    let noSwaps = true;
    for (let j = 0; j < i; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      changeBarColor(bars[j], bars[j + 1], "blue");
      await timer(5);

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        switchBars(bars[j], bars[j + 1]);
        noSwaps = false;
        await timer(5);
      }
      changeBarColor(bars[j], bars[j + 1], "red");
    }
    if (noSwaps) break;
  }
  // return arr;
};

function timer(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

function switchBars(a, b) {
  a.style.height = `${b.firstElementChild.textContent}%`;
  b.style.height = `${a.firstElementChild.textContent}%`;
  [a.firstElementChild.textContent, b.firstElementChild.textContent] = [
    b.firstElementChild.textContent,
    a.firstElementChild.textContent,
  ];
}

function changeBarColor(a, b, color) {
  a.style.background = color;
  b.style.background = color;
}
