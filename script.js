let container = document.getElementById("container")
let sizeBtn = document.getElementById("size")
let crazyBtn = document.getElementById("crazy")

let mode;
let pixels;

// create func that creates the squares
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
        if (mode === "crazy") div.style.backgroundColor = `rgba(${randomInt()}, ${randomInt()}, ${randomInt()})`;
        container.appendChild(div)
    }
    getPixels()
    pixelHover()
}


function getPixels() {
    pixels = document.querySelectorAll(".pixel")
}

sizeBtn.addEventListener("click", () => {
    mode = "normal"
    gridMaker()
    pixelHover()
})

crazyBtn.addEventListener("click", () => {
    mode = "crazy"
    gridMaker()
    pixelHover()
})


function pixelHover(){
    pixels.forEach(pixel => {
        pixel.dataset.alpha = 1;
        pixel.addEventListener("mouseenter", () => {
            pixel.classList.add("pixelHover")
            if (mode === "crazy") pixel.style.opacity = `${pixel.dataset.alpha -= 0.1}`
        })
    });
}

function randomInt() {
    return Math.floor(Math.random() * 256)
}

