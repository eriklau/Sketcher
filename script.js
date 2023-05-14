// declare const variables
const grid = document.getElementById('grid-container')
const chooseColour = document.getElementById('choose-colour')
const drawButton = document.getElementById('draw-button')
const eraserButton = document.getElementById('eraser-button')
const clearButton = document.getElementById('clear-button')
const size = document.getElementById('size')
const defaultSize = 16
const defaultColour = '#000000'
const defaultSetting = 'draw'
 
let currentSize = defaultSize
let currentColour = defaultColour
let currentSetting = defaultSetting

function changeCurrentSetting(newSetting) {
    buttonAction(newSetting)
    currentSetting = newSetting
}

function changeNewColour(colour) {
    currentColour = colour
}


function changeColour(e) {
    // if (e.type === 'mouseover' && !mouseDown) return
    if (currentSetting === 'draw') {
      e.target.style.backgroundColor = currentColour
    } else if (currentSetting === 'eraser') {
      e.target.style.backgroundColor = '#FFFFFF'
    }
}

function buttonAction(newSetting) {
    if (currentSetting === 'draw') {
        drawButton.classList.remove('on')
    } 
    else if (currentSetting === 'eraser') {
        eraserButton.classList.remove('on')
    }
    
    if (newSetting === 'draw') {
        drawButton.classList.add('on')
    }
    else if (newSetting === 'eraser') {
        eraserButton.classList.add('on')
    }
}

// grid minimum 16x16 pixels, maximum 64x64 pixels
function createGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size*size; i++) {
        const pixel = document.createElement('div')
        pixel.classList.add('pixel')
        pixel.addEventListener('mouseover', changeColour)
        pixel.addEventListener('mousedown', changeColour)
        grid.appendChild(pixel)
    }
}

chooseColour.oninput = (e) => changeNewColour(e.target.value)
drawButton.onclick = () => changeCurrentSetting('draw')
eraserButton.onclick = () => changeCurrentSetting('eraser')
// clearButton.onclick = () => changeCurrentSetting('clear')
clearButton.onclick = () => {
    grid.innerHTML = ''
    createGrid(currentSize)
}

createGrid(currentSize)
buttonAction(defaultSetting)