
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

        let referenceCellIndex = parseInt(arrayToUse[i].id);

        let rowsNB = parseInt(inputNbRow.value);
        let columnsNB = parseInt(inputNbColumns.value);


        // 1- En haut: si l'index est compris entre 0 et le nombre de columns-1
        // 2- A gauche: si l'index est divisible par NbDeColumn et retourne un reste supérieur à 0
        //! 3- En bas: si l'index est compris entre (nombre de columns FOIS nombre de lignes - 1) ET la même chose - nombre de colummns 
        // 4- A Droite : si l'index divisé par NBDeColummn te retourne un reste de 2;

        console.log('ID SELECT => ',cells[referenceCellIndex].id, ' ETAT (class) => ', cells[referenceCellIndex].classList);
        // console.log('INDEX id voisin haut => ',cells[referenceCellIndex - columnsNB ]?.id, ' CLASS =>  ', cells[referenceCellIndex - columnsNB]?.classList);
        // console.log('INDEX id voisin haut droite => ',cells[referenceCellIndex - (columnsNB - 1)]?.id, ' CLASS =>  ', cells[referenceCellIndex - (columnsNB - 1)]?.classList);
        // console.log('INDEX id voisin droite => ',cells[referenceCellIndex + 1]?.id, ' CLASS =>  ', cells[referenceCellIndex + 1]?.classList);
        // console.log('INDEX id voisin bas droite => ',cells[referenceCellIndex + (columnsNB + 1)]?.id, ' CLASS =>  ', cells[referenceCellIndex + (columnsNB + 1)]?.classList);
        // console.log('INDEX id voisin bas => ',cells[referenceCellIndex + columnsNB]?.id, ' CLASS =>  ', cells[referenceCellIndex + columnsNB]?.classList);
        // console.log('INDEX id voisin bas gauche => ',cells[referenceCellIndex + (columnsNB - 1)]?.id, ' CLASS =>  ', cells[referenceCellIndex + (columnsNB - 1)]?.classList);
        // console.log('INDEX id voisin gauche => ',cells[referenceCellIndex - 1]?.id, ' CLASS =>  ', cells[referenceCellIndex - 1]?.classList);
        // console.log('INDEX id voisin haut gauche => ',cells[referenceCellIndex - (columnsNB + 1)]?.id, ' CLASS =>  ', cells[referenceCellIndex - (columnsNB + 1)]?.classList);


        
        
        // 1- En haut: si l'index est compris entre 0 et le nombre de columns-1
        // Haut
       
        
            cells[referenceCellIndex - columnsNB]?.classList.contains('vivant') && aliveCellsCounter++;
            console.log('(haut) =>', aliveCellsCounter, 'id voisin tester =>',cells[referenceCellIndex - columnsNB] );
        
        if (cells[referenceCellIndex] % columnsNB != (columnsNB-1)) {
            cells[referenceCellIndex - (columnsNB + 1)]?.classList.contains('vivant') && aliveCellsCounter++;
            console.log('(haut droite) =>', aliveCellsCounter, 'id voisin tester  => ', cells[referenceCellIndex - (columnsNB - 1)]?.id);
        }

        // 4- A Droite : si l'index divisé par NBDeColummn te retourne un reste de plus petit que 2;
        if (cells[referenceCellIndex] % columnsNB != (columnsNB-1)) {
            cells[referenceCellIndex + 1]?.classList.contains('vivant') && aliveCellsCounter++;
            console.log('(droite) =>', aliveCellsCounter, 'id voisin tester  => ',cells[referenceCellIndex + 1]?.id ); 
        }

        if (cells[referenceCellIndex] % columnsNB != (columnsNB-1)) {
            cells[referenceCellIndex + (columnsNB + 1)]?.classList.contains('vivant') && aliveCellsCounter++;
            console.log('(bas droite) =>', aliveCellsCounter, 'id voisin tester  => ',cells[referenceCellIndex + (columnsNB + 1)]?.id );   
        }
        

        // 2- A gauche: si l'index est divisible par NbDeColumn et retourne un reste < 0
        if (cells[referenceCellIndex] % columnsNB != 0){
            cells[referenceCellIndex - 1]?.classList.contains('vivant') && aliveCellsCounter++;
            console.log('(gauche) =>', aliveCellsCounter, 'id voisin tester  =>',cells[referenceCellIndex - 1]?.id ); 
        }
        
        
        if (cells[referenceCellIndex] % columnsNB != 0) {
            cells[referenceCellIndex - (columnsNB - 1)]?.classList.contains('vivant') && aliveCellsCounter++;
            console.log('(haut gauche) =>', aliveCellsCounter, 'id voisin tester  => ',cells[referenceCellIndex - (columnsNB - 1)]?.id );
        }
        
        if (cells[referenceCellIndex] % columnsNB != 0) {
            cells[referenceCellIndex + columnsNB - 1]?.classList.contains('vivant') && aliveCellsCounter++;
            console.log('(bas gauche) =>', aliveCellsCounter, 'id voisin tester => ', cells[referenceCellIndex + columnsNB - 1]?.id); 
            
        }
        
        
        cells[referenceCellIndex + columnsNB]?.classList.contains('vivant') && aliveCellsCounter++;
        console.log('(bas) =>', aliveCellsCounter); 
            
        
        

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






















