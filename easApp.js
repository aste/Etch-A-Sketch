const gridContainer = document.getElementById("gridContainer");

const makeGrid = (columns, rows) => {
    gridContainer.style.setProperty('grid-template-columns', `repeat(${columns}, 1fr`);
    gridContainer.style.setProperty('grid-template-rows', `repeat(${rows}, 1fr`);
    for (i = 0; i < (rows * columns); i++) {
        let gridCell = document.createElement("div");
        gridCell.innerText = (i + 1);
        gridContainer.appendChild(gridCell).className = "grid-cell";
    }
}

makeGrid(10, 5);

console.log(gridContainer);
