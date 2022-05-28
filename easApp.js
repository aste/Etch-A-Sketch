const gridContainer = document.getElementById("gridContainer");
const gridCell = document.querySelectorAll("gridCell");


const makeGrid = (columnsRows) => {
    while (gridContainer.firstChild) gridContainer.removeChild(gridContainer.firstChild);
    gridContainer.style.setProperty('grid-template-columns', `repeat(${columnsRows}, 1fr`);
    gridContainer.style.setProperty('grid-template-rows', `repeat(${columnsRows}, 1fr`);
    for (i = 0; i < (columnsRows * columnsRows); i++) {
        let gridCell = document.createElement("div");
        gridContainer.appendChild(gridCell).className = "gridCell";
    }
}

makeGrid(16);


const resetGrid = () => {
    let cellCount = null;
    while (cellCount < 8 || cellCount > 64) {
        cellCount = parseInt(prompt("How many rows and columns would you like the grid to have? \nPick a number between 8 and 64"), 10)
    }
    makeGrid(cellCount);
}


let currentColor = 'black';


const setColor = (color) => {
    currentColor = color;
}


document.addEventListener('mouseover', e => {
    if (e.target.matches(".gridCell")) {
        if (currentColor === "rainbow") {
            e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else if (currentColor === "black") {
            e.target.style.backgroundColor = `hsl(0, 0%, 0%)`;
        } else if (currentColor === "eraser") {
            e.target.style.backgroundColor = `hsl(0, 0%, 100%)`;
        }
    }
})