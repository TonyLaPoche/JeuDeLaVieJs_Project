
const gameboardContainer = document.getElementById("gameboard");

function makeGameboard(baseDivWidth, rowAmount, columnAmount) {

    const totalCells = rowAmount * columnAmount;
    gameboardContainer.style.width = `${baseDivWidth * columnAmount}px`;

    for (let i = 0; i < totalCells; i++){
        let cellule = document.createElement("div");
        cellule.classList.add('cellule');
        cellule.id = `${i}`;
        cellule.style.width = `${baseDivWidth}px`;
        cellule.style.height = cellule.style.width;
        gameboardContainer.appendChild(cellule);
    }
}
