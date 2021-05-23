const grid = document.querySelector('#grid');
const sizeButton = document.querySelector('#size-button');
const clearButton = document.querySelector('#clear-button');

function setGrid() {
  grid.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
  
  for (let i = 0; i < rows * rows; i++) {
    let gridSquare = document.createElement('div');
    gridSquare.setAttribute('class', 'grid-square');
    gridSquare.addEventListener('mouseover', () => {
      gridSquare.style.background = 'black';
    })
  
    grid.appendChild(gridSquare);
  }
}

function resetGrid() {
  rows = parseInt(prompt('How many squares per side? [1-100]'));
  
  if (rows < 1 || rows > 100) {
    alert('Please enter a number between 1 and 100');
    return;
  } else if (isNaN(rows)) {
    return;
  }

  clearGrid();
  setGrid();
}

function clearGrid() {
  let gridSquares = document.querySelectorAll('.grid-square');

  gridSquares.forEach((gridSquare) => {
    gridSquare.remove();
  })
}

function clearSketch() {
  let gridSquares = document.querySelectorAll('.grid-square');

  gridSquares.forEach((gridSquare) => {
    gridSquare.style.background = 'white';
  })
}

let rows = 16;
sizeButton.addEventListener('click', resetGrid);
clearButton.addEventListener('click', clearSketch);

setGrid();