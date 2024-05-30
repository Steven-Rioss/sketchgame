// Function to create the grid
function createGrid(rows, cols) {
const gridContainer = document.querySelector('#gridContainer');
for (let i = 0; i < rows * cols; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
    }
}

// Call the function to create a 16x16 grid
createGrid(16, 16);

const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach(gridItem => {
    gridItem.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = "purple";
    });
});