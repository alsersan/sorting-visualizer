export const swapBars = (a, b) => {
  a.style.height = `${b.firstElementChild.textContent}%`;
  b.style.height = `${a.firstElementChild.textContent}%`;
  [a.firstElementChild.textContent, b.firstElementChild.textContent] = [
    b.firstElementChild.textContent,
    a.firstElementChild.textContent,
  ];
};

export const changeBarColor = (color, ...elements) => {
  elements.forEach((element) => (element.style.background = color));
};

export const changeClass = (classRemove, classAdd, ...elements) => {
  elements.forEach((element) => {
    element.classList.remove(classRemove);
    element.classList.add(classAdd);
  });
};
