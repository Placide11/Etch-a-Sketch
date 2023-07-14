const container = document.querySelector('.container');
let gridSize = 16;

function createGrid(size) {
  container.style.setProperty('--grid-size', size);
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    const width = container.style.width;
    const wide = square.style.width = "[width/square.length]";
    square.classList.add('square');
    square.addEventListener('mouseover', changeColor);
    container.appendChild(square);
  }
}

function changeColor(e) {
  const square = e.target;
  const currentColor = square.style.backgroundColor || 'rgb(80, 80, 80)';
  const randomRGB = generateRandomRGB();
  const newColor = darkenColor(randomRGB, currentColor);
  square.style.backgroundColor = newColor;
}

function generateRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function darkenColor(rgb, currentColor) {
  const [r, g, b] = currentColor.slice(4, -1).split(', ');
  const newR = Math.floor((r * 9 + parseInt(rgb.slice(4, -1).split(', ')[0])) / 10);
  const newG = Math.floor((g * 9 + parseInt(rgb.slice(4, -1).split(', ')[1])) / 10);
  const newB = Math.floor((b * 9 + parseInt(rgb.slice(4, -1).split(', ')[2])) / 10);
  return `rgb(${newR}, ${newG}, ${newB})`;
}

function createNewGrid() {
  const newSize = prompt('Enter the number of squares per side for the new grid (maximum 100):');
  if (newSize && newSize > 0 && newSize <= 100) {
    gridSize = newSize;
    container.innerHTML = '';
    container.style.width = `${gridSize * 50}px`; // Adjust container width to form a square grid
    createGrid(gridSize);
  }
}

createGrid(gridSize);



