const colorPalleteId = '#color-palette';
const colorPalleteSize = 45;
const pixelBoardId = '#pixel-board';

function random() {
  return Math.floor(Math.random() * 255 + 1);
}

function generateRandomColor() {
  return `rgb(${random()}, ${random()}, ${random()})`;
}

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
createPalette('color', generateRandomColor(), colorPalleteSize);
createPalette('color', generateRandomColor(), colorPalleteSize);
createPalette('color', generateRandomColor(), colorPalleteSize);

function createPixel(className, parentName, widthSize = 200) {
  const pixelBoard = document.querySelector(parentName);
  const singleBoxPixel = document.createElement('div');
  singleBoxPixel.className = className;
  pixelBoard.style.width = `${widthSize}px`;

  pixelBoard.appendChild(singleBoxPixel);
}

for (let i = 0; i < 25; i += 1) {
  createPixel('pixel', pixelBoardId);
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

document.querySelector('#clear-board').addEventListener('click', () => {
  document.querySelectorAll('.pixel').forEach((pixel) => {
    const element = pixel;
    element.style.backgroundColor = 'white';
  });
});

function resetBoard() {
  const board = document.querySelector(pixelBoardId);
  board.innerHTML = '';
}

function generateBoard(boardSize) {
  resetBoard();
  const widthSize = boardSize * 40;
  for (let i = 0; i < boardSize * boardSize; i += 1) {
    createPixel('pixel', pixelBoardId, widthSize);
  }
}

document.querySelector('#generate-board').addEventListener('click', () => {
  let inputValue = document.querySelector('#board-size').value;
  if (inputValue !== '' && inputValue < 5) inputValue = 5;
  if (inputValue > 50) inputValue = 50;
  if (inputValue !== '') {
    generateBoard(inputValue);
  } else {
    alert('Board inválido!');
  }
});
