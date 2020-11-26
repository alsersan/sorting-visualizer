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

export const changeClass = (classAdd, ...elements) => {
  elements.forEach((element) => {
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
  });
};
