function createPixel(className, parentName) {
  const pixelBoard = document.querySelector(parentName);
  const singleBoxPixel = document.createElement('div');
  singleBoxPixel.className = className;
  pixelBoard.appendChild(singleBoxPixel);
}

for (let i = 0; i < 25; i += 1) {
  createPixel('pixel', '#pixel-board');
}
