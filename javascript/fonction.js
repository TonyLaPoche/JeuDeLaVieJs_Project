
const timerElement = document.getElementById("cycle");
const btnPlay = document.getElementById("btnPlay");
const btnPause = document.getElementById("btnPause");
const btnSpeed = document.getElementById("btnSpeed");
const btnReplay = document.getElementById("btnReplay");
const btnReset = document.getElementById("reset");

const gameboard = document.getElementById("gameboard");
const btnCreateTbl = document.getElementById("btnCreateTbl");
const inputNbRow = document.getElementById("inputNbrRow");
const inputNbColumns = document.getElementById("inputNbrCel");
const baseDivWidth = 25;

let cells = document.getElementsByClassName("cellule");
let aliveCells;
let deadCells;


btnPlay.addEventListener("click", function(event) {
    event.preventDefault();
    startChrono();
});
btnPause.addEventListener("click", pauseChrono);
btnSpeed.addEventListener("click", speedChrono);
btnReplay.addEventListener("click", replayChrono);
btnReset.addEventListener("click", resetChrono);
btnCreateTbl.addEventListener("click", function(event) { 
    event.preventDefault();
    init();
    makeGameboard(baseDivWidth, inputNbRow.value, inputNbColumns.value, allowColoring);
    allowColoring();

});



function allowColoring(){
    for (let index = 0; index < cells.length; index++) {
        const cell = cells[index];
        cell.addEventListener("click", function () {
            cell.classList.toggle("vivant");       
        })
    }

}

function checkCells() {
    for(let cell of cells) {
        if (cell.classList.contains('vivant')){
            aliveCells.push(cell);
        } else {
            deadCells.push(cell);
        }
    }
}

function scanNeighbor(type){
    let aliveCellsCounter = 0;
    let arrayToUse;
    if(type === 'dead') {
        arrayToUse = deadCells;
    } else if(type === 'alive') {
        arrayToUse = aliveCells;
    }

    for(let i = 0; i < arrayToUse.length; i++){

        const referenceCellIndex = parseInt(arrayToUse[i].id);
        console.log('INDEX => ',arrayToUse[i].id);
        cells[referenceCellIndex - 1]?.classList.contains('vivant') && aliveCellsCounter++;
        console.log('(1) =>', aliveCellsCounter); 
        cells[referenceCellIndex + 1]?.classList.contains('vivant') && aliveCellsCounter++;
        console.log('(2) =>', aliveCellsCounter); 
        cells[referenceCellIndex - (inputNbColumns.value + 1)]?.classList.contains('vivant') && aliveCellsCounter++;
        console.log('(3) =>', aliveCellsCounter); 
        cells[referenceCellIndex - inputNbColumns.value]?.classList.contains('vivant') && aliveCellsCounter++;
        console.log('(4) =>', aliveCellsCounter); 
        cells[referenceCellIndex - (inputNbColumns.value - 1)]?.classList.contains('vivant') && aliveCellsCounter++;
        console.log('(5) =>', aliveCellsCounter); 
        cells[referenceCellIndex + (inputNbColumns.value + 1)]?.classList.contains('vivant') && aliveCellsCounter++;
        console.log('(6) =>', aliveCellsCounter); 
        cells[referenceCellIndex + inputNbColumns.value]?.classList.contains('vivant') && aliveCellsCounter++;
        console.log('(7) =>', aliveCellsCounter); 
        cells[referenceCellIndex + (inputNbColumns.value - 1)]?.classList.contains('vivant') && aliveCellsCounter++;
        console.log('(8) =>', aliveCellsCounter); 

        defineCellUpdate(type, referenceCellIndex, aliveCellsCounter);
        aliveCellsCounter = 0;
    }
}


let deadCellsToUpdate = [];// cellule mort à rendre vivante au prochain cycle
let aliveCellsToKill = []; // cellule vivante à tuer au prochain cycle

function defineCellUpdate(type, cellIndex, aliveCounter) {
    console.log('COMPTEUR =>', aliveCounter);
    if(type === 'dead' && aliveCounter === 3 ){
        deadCellsToUpdate.push( cells[cellIndex]);
    } else if(type === 'alive' && (aliveCounter > 2 || aliveCounter < 3) ) {
        aliveCellsToKill.push( cells[cellIndex]);
    }
}


function updateCells() {
    for (const cellDeadBorn of deadCellsToUpdate) {
        cellDeadBorn.classList.toggle("vivant");
    }
    for (const cellAliveKill of aliveCellsToKill) {
        cellAliveKill.classList.toggle("vivant");
    }

    deadCellsToUpdate = [];
    aliveCellsToKill = [];
}

function init() {
    aliveCells = [];
    deadCells = [];
    gameboardContainer.innerHTML="";
}























