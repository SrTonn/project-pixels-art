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
