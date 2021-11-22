function createPixel(className, parentName, width, height = width) {
  const pixelBoard = document.querySelector(parentName);
  const singleBoxPixel = document.createElement('div');
  singleBoxPixel.className = className;
  singleBoxPixel.style.width = `${width}px`;
  singleBoxPixel.style.height = `${height}px`;
  singleBoxPixel.style.border = '1px solid black';

  pixelBoard.appendChild(singleBoxPixel);
}

for (let i = 0; i < 25; i += 1) {
  createPixel('pixel', '#pixel-board', 40);
}

let lastSelected = document.querySelector('#color-palette').firstElementChild;
console.log(lastSelected);
document.querySelector('#color-palette').addEventListener('click', (event) => {
  const element = event.target;
  element.classList.toggle('selected');
  lastSelected.classList.toggle('selected');
  lastSelected = element;
});
