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
            let hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            div.style.backgroundColor = hue;
        });
    });
}

// Create initial grid
createGrid(gridSize);

// add button logic to resize grid
const resizeButton = document.querySelector(".resize-button");

resizeButton.addEventListener("click", () =>{
    newSize = +prompt("Enter a number to resize the grid!");
    if(Number.isInteger(newSize) && newSize >=1 && newSize <=100){
        createGrid(newSize);
    }
    else{
        return alert("enter an integer between 1 and 100 please!");
    }
})



