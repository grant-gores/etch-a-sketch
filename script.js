// Create 16x16 grid of divs
const container = document.querySelector("#container");

for(i=0;i<256;i++){
    const div = document.createElement("div");
    div.innerText = "hello";
    div.style.backgroundColor = "gray";
    // div.style.color = "gray";
    container.appendChild(div);
}