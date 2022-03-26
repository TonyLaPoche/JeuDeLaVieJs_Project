
let timer = 0; 
let intervalTime;

const timerElement = document.getElementById("cycle");
const btnPlay = document.getElementById("btnPlay");
const btnPause = document.getElementById("btnPause");
const btnSpeed = document.getElementById("btnSpeed");
const btnReplay = document.getElementById("btnReplay");
const btnReset = document.getElementById("reset");

const createTbl = document.getElementById("createTbl");
const btnCreateTbl = document.getElementById("btnCreateTbl");
const inputNbRow = document.getElementById("inputNbrRow");
const inputNbColumns = document.getElementById("inputNbrCel");
const baseDivWidth = 25;

const cells = document.getElementsByClassName("cellule");
let aliveCells;
let deadCells;


btnPlay.addEventListener("click", function() {
    checkCell();
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

function checkCell() {
    for(let cell of cells) {
        if (cell.classList.contains('vivant')){
            aliveCells += cell;
        } else {
            deadCells += cell;
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

        // TODO : formater id sinon ça marche pas
        const referenceCellIndex = arrayToUse[i].id;

        cells[referenceCellIndex - 1]?.contains('vivant') && aliveCellsCounter++;
        cells[referenceCellIndex + 1]?.contains('vivant') && aliveCellsCounter++;
        cells[referenceCellIndex - (inputNbColumns.value + 1)]?.contains('vivant') && aliveCellsCounter++;
        cells[referenceCellIndex - inputNbColumns.value]?.contains('vivant') && aliveCellsCounter++;
        cells[referenceCellIndex - (inputNbColumns.value - 1)]?.contains('vivant') && aliveCellsCounter++;
        cells[referenceCellIndex + (inputNbColumns.value + 1)]?.contains('vivant') && aliveCellsCounter++;
        cells[referenceCellIndex + inputNbColumns.value]?.contains('vivant') && aliveCellsCounter++;
        cells[referenceCellIndex + (inputNbColumns.value - 1)]?.contains('vivant') && aliveCellsCounter++;


        defineCellUpdate(type, referenceCellIndex, aliveCellsCounter);
    }
}


let deadCellsToUpdate = [];
let aliveCellsToKill = [];

function defineCellUpdate(type, cellIndex, aliveCounter) {
    if(type === 'dead' && aliveCounter === 3 ){
        deadCellsToUpdate += cells[cellIndex];
    } else if(type === 'alive' && (aliveCounter === 2 || aliveCounter === 3) ) {
        aliveCellsToUpdate += cells[cellindex];
    }
}

function updateCells() {
}

function init() {
    deadCellsToUpdate = [];
    aliveCellsToKill = [];
    aliveCells = [];
    deadCells = [];
    gameboardContainer.innerHTML="";
}








const cellCheck = document.getElementsByClassName("cellule");

function checkCell() {
    for (let i = 0; i < cellCheck.length; i++) {
        const cell = cellCheck[i];
        const isAlive = cell.classList.contains("vivant");
        checkNeighbors(cell.parentNode.rowIndex , cell.cellIndex,);
        if ( isAlive ) {
            //console.log(`%cCellule VIVANTE en position => ${cell.parentNode.rowIndex}X - ${cell.cellIndex}Y`, 'color: green;');
            // rule1(isaLive);
           
        } else {
            //console.log(`%cCellule MORTE en position => ${cell.parentNode.rowIndex}X - ${cell.cellIndex}Y` , 'color: red;');
            // rule2(isaLive);
            //checkNeighbor(cell);
        }
    }
}


function rule1(bool) {
    
}

function rule2(bool) {
    
}


//##############################################//

/**
 * check voisins d'une cellules
 * @param {*} elm 
 */
function checkNeighbors(x,y) {
    /*check celle droite*/
    
    console.log('POSITION X', x);
    console.log('POSITION Y', y);
    const cellPos = document.getElementById(`${x}${y}`);
    //console.log(cellPos);
    const topLeftNeighbor = document.getElementById(`${x-1}${y-1}`); 
    const topNeighbor = document.getElementById(`${x}${y-1}`);
    const topRightNeighbor = document.getElementById(`${x+1}${y-1}`);
    const rightNeighbor = document.getElementById(`${x+1}${y}`);
    const bottomRightNeighbor = document.getElementById(`${x+1}${y+1}`);
    const bottomNeighbor = document.getElementById(`${x+1}${y}`);
    const bottomLeftNeighbor = document.getElementById(`${x-1}${y+1}`);
    const leftNeighbor = document.getElementById(`${x}${y-1}`);
    console.log(topLeftNeighbor?.classList);
    
    
    let nbAliveNeighbor = 0;
    switch (true) {
        
        //* SI la cellules en haut à gauche est vivante
        //? On ajoute 1 à nbAliveNeighbor

        case topLeftNeighbor?.classList.contains('vivant'):
            nbAliveNeighbor+= 1;            
        case topNeighbor?.classList.contains('vivant'):   
            nbAliveNeighbor+= 1;
        case topRightNeighbor?.classList.contains('vivant'):
            nbAliveNeighbor+= 1;            
        case rightNeighbor?.classList.contains('vivant'):   
            nbAliveNeighbor+= 1;
        case bottomRightNeighbor?.classList.contains('vivant'):
            nbAliveNeighbor+= 1;            
        case bottomNeighbor?.classList.contains('vivant'):   
            nbAliveNeighbor+= 1;
        case bottomLeftNeighbor?.classList.contains('vivant'):
            nbAliveNeighbor+= 1;            
        case leftNeighbor?.classList.contains('vivant'):   
            nbAliveNeighbor+= 1;
            break;
        default:
            break;
    }
    console.log("Nombre de cellule voisine vivante (via switch) : " , nbAliveNeighbor);
}






















