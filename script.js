document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('newGridBtn');
    const gridContainer = document.getElementById('grid-container');
    const CONTAINER_SIZE = 1000

    function createNewGrid(squarePerSide) {
    gridContainer.innerHTML = '';

    const squareSize = CONTAINER_SIZE / squarePerSide;

    let totalSquares = squarePerSide * squarePerSide;

    for (i = 0; i < totalSquares; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.style.width = `${squareSize}px`;
        gridSquare.style.height = `${squareSize}px`;

        gridSquare.addEventListener('mouseenter', () => {
            gridSquare.classList.add('hovered');
        });
        gridContainer.appendChild(gridSquare);
    }
    }

    createNewGrid(16);

    button.addEventListener('click', () => {
    let userInput = prompt('Enter the number of squares per side for the new grid (max 100):');
    let squarePerSide = parseInt(userInput);

    if (isNaN(squarePerSide) || squarePerSide <= 0 || squarePerSide > 100) {
        alert('Please enter a valid number between 1 and 100.');
    } else {
        createNewGrid(squarePerSide);
    }
    });
});
