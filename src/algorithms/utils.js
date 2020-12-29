// ARRAY

export let array = [];

export const getArray = (arr) => {
  array = [...arr];
};

// TIMEOUT AND CLEAR TIMEOUT

export let timeout = 0;

export const getTimeout = (value) => {
  timeout = value;
  console.log(timeout);
};

let timer;

export const algorithmTimeout = (callback, timeout) => {
  timer = setTimeout(callback, timeout);
};

export const stopAlgorithm = () => {
  clearTimeout(timer);
};

// SWAP ELEMENTS

export const swapArrayElements = (index1, index2) => {
  [array[index1], array[index2]] = [array[index2], array[index1]];
};

export const swapBars = (a, b) => {
  a.style.height = `${b.firstElementChild.textContent}%`;
  b.style.height = `${a.firstElementChild.textContent}%`;
  [a.firstElementChild.textContent, b.firstElementChild.textContent] = [
    b.firstElementChild.textContent,
    a.firstElementChild.textContent,
  ];
};

// MODIFY COLOR AND CLASS OF BARS
// colors and classes arrays must have the same order of elements, in order to compare the elements in each index

const classes = ["unsorted", "selected", "reference", "sorted"];
let colors = [];

export const getColors = (colorsArray) => {
  colors = colorsArray;
};

const changeClass = (element, classAdd) => {
  classes.forEach((el) => {
    if (element.classList.contains(el)) {
      element.classList.remove(el);
    }
  });
  element.classList.add(classAdd);
};

const changeBarColor = (element) => {
  classes.forEach((el, index) => {
    if (element.classList.contains(el)) {
      element.style.background = colors[index];
    }
  });
};

export const modifyBar = (classAdd, ...elements) => {
  elements.forEach((element) => {
    changeClass(element, classAdd);
    changeBarColor(element);
  });
};
