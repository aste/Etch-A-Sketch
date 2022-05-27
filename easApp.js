const gridContainer = document.getElementById("gridContainer");

const makeGrid = (columns, rows, dimensionPx) => {
    gridContainer.style.setProperty('grid-template-columns', `repeat(${columns}, 1fr`);
    gridContainer.style.setProperty('grid-template-rows', `repeat(${rows}, 1fr`);
    for (i = 0; i < (columns * rows); i++) {
        let gridCell = document.createElement("div");
        gridCell.innerText = (i + 1);
        gridContainer.appendChild(gridCell).className = "gridCell";

    }
}

makeGrid(5, 5, 1600);

