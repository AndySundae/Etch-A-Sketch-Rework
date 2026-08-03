let container = document.getElementById("container")
let sizeBtn = document.getElementById("size")
let pixels;

function gridMaker() {
    container.replaceChildren()
    gridSize = window.prompt("Pixels (max 100)")
    if (gridSize > 100) return
    containerSize = gridSize * gridSize
    container.style.width = `${gridSize*8}px`
    container.style.height = `${gridSize*8}px`
    for (let i = 0; i < containerSize; i++) {
        div = document.createElement("div")
        div.classList.add("pixel")
        container.appendChild(div)
    }
    getPixels()
    pixelHover()
}


function getPixels() {
    pixels = document.querySelectorAll(".pixel")
}

function pixelHover(){
    pixels.forEach(pixel => {
        pixel.addEventListener("mouseenter", () => {
            pixel.classList.add("pixelHover")
        })
    });
}

sizeBtn.addEventListener("click", gridMaker)


