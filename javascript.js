const resetGridBtn = document.querySelector('.btn');
const gridContainer = document.querySelector('#gridContainer');


// Function to create the grid
function createGrid(numSquares) {
    gridContainer.innerHTML = "";

    // Calculate the width and height of each grid item dynamically
    const itemSize = 100 / numSquares;

    for (let i = 0; i < numSquares * numSquares; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `${itemSize}%`;
        gridItem.style.height = `${itemSize}%`;
        gridContainer.appendChild(gridItem);
    }

    // Update container size
    const containerSize = 300; // Set the desired size of the container
    gridContainer.style.width = `${containerSize}px`;
    gridContainer.style.height = `${containerSize}px`;

    // Add event listeners to grid items
    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach(gridItem => {
        gridItem.addEventListener("mouseenter", (event) => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16); // Generate random color
            event.target.style.backgroundColor = `#${randomColor}`;
        });
    });
}

resetGridBtn.addEventListener("click", function() {
    const userInput = prompt('Number of squares per side:');
    const numSquares = parseInt(userInput);

    if (!isNaN(numSquares) && numSquares > 0 ) {
        createGrid(numSquares);
    } else {
        alert('Please enter a valid number.');
    }
});

createGrid(16);