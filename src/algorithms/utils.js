let timer;
export let array = [];

export const getArray = (arr) => {
  array = [...arr];
};

export const algorithmTimeout = (callback, timeout) => {
  timer = setTimeout(callback, timeout);
};

export const stopAlgorithm = () => {
  clearTimeout(timer);
};

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

const changeBarColor = (color, element) => {
  element.style.background = color;
};

const changeClass = (classAdd, element) => {
  if (element.classList.contains("unsorted")) {
    element.classList.remove("unsorted");
  } else if (element.classList.contains("reference")) {
    element.classList.remove("reference");
  } else if (element.classList.contains("selected")) {
    element.classList.remove("selected");
  } else if (element.classList.contains("sorted")) {
    element.classList.remove("sorted");
  }

  element.classList.add(classAdd);
};

export const modifyBar = (color, classAdd, ...elements) => {
  elements.forEach((element) => {
    changeBarColor(color, element);
    changeClass(classAdd, element);
  });
};
