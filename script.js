const colorPalleteId = '#color-palette';
const colorPalleteSize = 45;

function createPalette(className, bgColor, size) {
  const parent = document.querySelector(colorPalleteId);
  const color = document.createElement('div');

  color.className = className;

  color.style.display = 'inline-block';
  color.style.backgroundColor = bgColor;

  color.style.margin = '5px';
  color.style.border = '1px solid black';

  color.style.width = `${size}px`;
  color.style.height = `${size}px`;

  parent.appendChild(color);
}
createPalette('color selected', 'black', colorPalleteSize);
createPalette('color', 'green', colorPalleteSize);
createPalette('color', 'yellow', colorPalleteSize);
createPalette('color', 'blue', colorPalleteSize);

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

let lastSelected = document.querySelector(colorPalleteId).firstElementChild;
document.querySelector(colorPalleteId).addEventListener('click', (event) => {
  const element = event.target;
  if (element.classList.contains('color')) {
    element.classList.toggle('selected');
    lastSelected.classList.toggle('selected');
    lastSelected = element;
  }
});

document.querySelectorAll('.pixel').forEach((pixel) => {
  pixel.addEventListener('click', (event) => {
    const element = event.target;
    element.style.backgroundColor = lastSelected.style.backgroundColor;
  });
});
