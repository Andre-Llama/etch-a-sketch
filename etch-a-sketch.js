const grid = document.querySelector('#grid');
const resetButton = document.querySelector('#reset-button');
let rows = 16;

resetButton.addEventListener('click', resetGrid);

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
  let gridSquares = document.querySelectorAll('.grid-square');

  gridSquares.forEach((gridSquare) => {
    gridSquare.style.background = 'white';
  })
}

setGrid();