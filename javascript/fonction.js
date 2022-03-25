                    // Principe d'un Timer//
// ###########################################################//
let timer = 0; // on part de zéro seconde
const timerElement = document.getElementById("cycle"); // on récupère l'élément qui va afficher les cycles
let chrono = clearInterval() ; // le Nom du Chrono
function upTime() {
    timerElement.innerHTML = timer; // on lui dit d'afficher un cycle
    timer++; // on incrémente de 1
}
//setInterval(upTime, 1000) // toutes les 1000ms = une seconde
// ###########################################################//

const btnPlay = document.getElementById("btnPlay"); // Activer le Timer //* Ok
const btnPause = document.getElementById("btnPause"); // Pause du Timer //* OK
const btnSpeed = document.getElementById("btnSpeed"); // Accélération du Timer //* Ok
const btnReplay = document.getElementById("btnReplay"); // Replay du Timer //* OK
const btnReset = document.getElementById("reset"); // restart la session //* Ok

// ###########################################################//
                    // Play le chrono // 
// ###########################################################//
let limitPlay = 0;  // moncul sert de limitateur à l'utilisation du bouton play 
console.log(limitPlay +" %cNombre de click au démarrage de la page", 'color:blue;');

function topChrono(e) {
    console.log(cellCheck);
    e.preventDefault();
    limitPlay++; // à chaque click on incrémente de 1 moncul
    console.log(limitPlay +" %cNombre de click actuel ", 'color:green; font-weight:bold;' ); 
    if (limitPlay === 1 ) { // si moncul est égale à 1 alors on lance le chrono !
        clearInterval(chrono); // on s'assure qu'il soit bien à l'arrêt
        chrono = setInterval(upTime, 1000); //  Puis on lance le chrono ce lance
        
    } else { // Sinon 
        console.log(`%cLe Nombre de click est à ${limitPlay} donc n'est plus correspondant à 1, il ne cumulera pas un nouveau compteur de "play"`, 'color:red; font-weight:bold;background-color:yellow; padding:.5rem; border:.5rem dashed black;'); //! ce console.log n'est EXISTENTIEL ;) hein loïc Maurin (⌐■_■) mais c'est marrant
    }

    checkCell();
}
btnPlay.addEventListener("click", topChrono);
// ###########################################################//
                    // STOP le chrono // 
//############################################################//
function stopChrono(e) {
    e.preventDefault();
    clearInterval(chrono)
    limitPlay = 0;
    limitSpeed = 0;
    limitReplay = 0;
}
btnPause.addEventListener("click", stopChrono);

const nouvelleFeature =() => {
    console.log('nouvelle feature')
}
//############################################################//
                    // Play x2 le chrono // 
//############################################################//

let limitSpeed = 0;  // moncul sert de limitateur à l'utilisation du bouton Avance Rapide 
console.log(limitSpeed +" %cNombre de clickSpeed au démarrage de la page", 'color:blue;');

function speedChrono(e) {
    e.preventDefault();
    limitSpeed ++;
    if (limitSpeed === 1 ) { // si monculSpeed est égale à 1 alors on lance le chrono !
        console.log(`c'est nul`)
        clearInterval(chrono);
        chrono = setInterval(upTime, 500); // le chrono changera sont accélèration.
    } else { // Sinon 
        console.log(`%cLe Nombre de click est à ${limitSpeed} donc n'est plus correspondant à 1, il ne cumulera pas un nouveau compteur "d'avance rapide"`, 'color:red; font-weight:bold;background-color:yellow; padding:.5rem; border:.5rem dashed black;'); //! ce console.log n'est EXISTENTIEL ;) hein loïc Maurin (⌐■_■) mais c'est marrant
    }
}

btnSpeed.addEventListener("click", speedChrono);

//############################################################//
                    // Replay le chrono // 
//############################################################//

let limitReplay = 0;  // moncul sert de limitateur à l'utilisation du bouton Replay 
console.log(limitReplay +" %cNombre de clickReplay au démarrage de la page", 'color:blue;');

function replayChrono(e) {
    e.preventDefault();
    limitReplay ++;
    if (limitReplay === 1 ) { // si monculreplay est égale à 1 alors on restart le chrono !
        timer = 0;
        clearInterval(chrono);
        chrono = setInterval(upTime, 1000); // le chrono changera sont accélèration en vitesse normale.
        limitReplay = 0;
        
    } else { // Sinon 
        console.log(`%cLe Nombre de click est à ${limitReplay} donc n'est plus correspondant à 1, il ne cumulera pas un nouveau compteur "replay"`, 'color:red; font-weight:bold;background-color:yellow; padding:.5rem; border:.5rem dashed black;'); //! ce console.log n'est EXISTENTIEL ;) hein loïc Maurin (⌐■_■) mais c'est marrant
    }
}

btnReplay.addEventListener("click", replayChrono);

//############################################################//
                // Reset le chrono & le Tableau //
//############################################################//
function resetChrono(e) {
    e.preventDefault();
    clearInterval(chrono)
    limitPlay = 0;
    limitSpeed = 0;
    limitReplay = 0;
    timer = 0;
    timerElement.innerHTML = timer;
    createTbl.innerHTML="";
    console.log("%cVous avez Reset le tableau", 'border: 1px dashed red; font-size:.8rem; padding:.5rem; background-color:yellow;')

}
btnReset.addEventListener("click", resetChrono);
//############################################################//
                    // Generate Table // 
//############################################################//

const createTbl = document.getElementById("createTbl");
const btnCreateTbl = document.getElementById("btnCreateTbl");
const inputNbrRow = document.getElementById("inputNbrRow");
const inputNbCells = document.getElementById("inputNbrCel");

function makeTbl(e) {
    e.preventDefault();
    createTbl.innerHTML="";
    for (let i = 0; i < inputNbrRow.value; i++){
        let maLigne = document.createElement("tr");
        maLigne.id = `ligne ${i}`;

        createTbl.appendChild(maLigne);
        let ligne = document.getElementById(`ligne ${i}`);

        for (let j = 0; j < inputNbCells.value; j++){
            let cellule = document.createElement("td");
            cellule.className = `cellule`;
            cellule.id = `${j}${i}`;
            ligne.appendChild(cellule);
        }
    }
    toColor();
}

btnCreateTbl.addEventListener("click", makeTbl);
//############################################################//
                    // Color Table // 
//############################################################//
const cellColor = document.getElementsByClassName("cellule");
//console.log(cellColor);

function toColor(){
   for (let index = 0; index < cellColor.length; index++) {
    const cell = cellColor[index];
    
    cell.addEventListener("click", function () {
        //console.log(`Nombre de cellules colorié`);
        cell.classList.toggle("vivant");        
    })
} 
}

//############################################################//
                    // Check début règle // 
//############################################################//

// Verifier les cellules est vivante ou non 
// puis appliquer cette vérification au lancement du timer à chaque seconde
const cellCheck = document.getElementsByClassName("cellule");

function checkCell() {
    for (let i = 0; i < cellCheck.length; i++) {
        const cell = cellCheck[i];
        const isAlive = cell.classList.contains("vivant");
        checkNeighbors(cell.parentNode.rowIndex , cell.cellIndex,);
        //console.table(isaLive);
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

// function checkNeighborsIf(x,y){
//     //const cellPos = document.getElementById(`${x}${y}`);
//     //console.log(cellPos);
//     const topLeftNeighbor = document.getElementById(`${x-1}${y-1}`); 
//     const topNeighbor = document.getElementById(`${x}${y-1}`);
//     const topRightNeighbor = document.getElementById(`${x+1}${y-1}`);
//     const rightNeighbor = document.getElementById(`${x+1}${y}`);
//     const bottomRightNeighbor = document.getElementById(`${x+1}${y+1}`);
//     const bottomNeighbor = document.getElementById(`${x+1}${y}`);
//     const bottomLeftNeighbor = document.getElementById(`${x-1}${y+1}`);
//     const leftNeighbor = document.getElementById(`${x}${y--}`);
//     console.log(topLeftNeighbor)
//     let nbAliveNeighbor = 0;

//     if ( topLeftNeighbor?.classList.contains("vivant")) {
//         nbAliveNeighbor++;
       
//     }
    
//     console.log("Nombre de cellule vivante via sitch : " , nbAliveNeighbor);
//     return nbAliveNeighbor;
    
// }


















//! Rappelle des règles :
/* 
* Cellule vivante : 
    Si cellules est vivant et qu'elle à pour voisin 2 ou 3 //! Maximum
    Elle reste en vie SINON meurt.
* Cellule morte : 
    Si cellules est morte et qu'elle à pour voisin 3 vivant
    Elle prend vie SINON reste mort.
*/

function rule1(bool) {
    
}

function rule2(bool) {
    
}