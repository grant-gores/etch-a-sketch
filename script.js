// Select container
const container = document.querySelector("#container");

// Set grid size dynamically
const gridSize = 16;
const totalDivs = gridSize * gridSize;

function createGrid(size) {
    container.innerHTML = ""; // Clear previous grid

    // Calculate the number of items based on the grid size
    const totalDivs = size * size;

    // Create the divs for the grid
    for (let i = 0; i < totalDivs; i++) {
        const div = document.createElement("div");
        div.classList.add("content");
        container.appendChild(div);
    }

    // Set each div's width to be a fraction of the container's width
    const divs = document.querySelectorAll(".content");
    const divWidth = 100 / size; // Percentage width based on grid size

    divs.forEach(div => {
        div.style.width = `${divWidth}%`;
    });

    // Add hover effect
    divs.forEach(div => {
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "blue";
        });
    });
}

// Create initial grid
createGrid(gridSize);

