let container = document.getElementById("container")
let sizeBtn = document.getElementById("sizeBtn")
let gridSize;

function gridMaker() {
    container.replaceChildren()
    userPrompt = window.prompt("Size")
    if (userPrompt > 100) return
    gridSize = userPrompt ** 2
    for(let i = 0; i < gridSize; i++)
        div = document.createElement("div")
        div.classList.add("pixel")
        container.appendChild(div)
}
