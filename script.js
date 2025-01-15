// Create 16x16 grid of divs
const container = document.querySelector("#container");

for(i=0;i<256;i++){
    const div = document.createElement("div");
    // div.innerText = `${i}`;
    div.classList.add("content");
    container.appendChild(div);
}

// Add "Hover" effect to grid
const divSelector = document.querySelectorAll(".content");

divSelector.forEach((div)=>{
    // add event listener
    div.addEventListener("mouseenter", () =>{
        div.style.backgroundColor = "blue";
    });
});