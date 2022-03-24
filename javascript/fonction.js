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
let moncul = 0;  // moncul sert de limitateur à l'utilisation du bouton play 
console.log(moncul +" %cNombre de click au démarrage de la page", 'color:blue;');

function topChrono(e) {
    e.preventDefault();
    moncul++; // à chaque click on incrémente de 1 moncul
    console.log(moncul +" %cNombre de click actuel ", 'color:green; font-weight:bold;' ); 
    if (moncul === 1 ) { // si moncul est égale à 1 alors on lance le chrono !
        clearInterval(chrono); // on s'assure qu'il soit bien à l'arrêt
        chrono = setInterval(upTime, 1000); //  Puis on lance le chrono ce lance
        
    } else { // Sinon 
        console.log(`%cLe Nombre de click est à ${moncul} donc n'est plus correspondant à 1, il ne cumulera pas un nouveau compteur de "play"`, 'color:red; font-weight:bold;background-color:yellow; padding:.5rem; border:.5rem dashed black;'); //! ce console.log n'est EXISTENTIEL ;) hein loïc Maurin (⌐■_■) mais c'est marrant
    }
}
btnPlay.addEventListener("click", topChrono);
// ###########################################################//
                    // STOP le chrono // 
//############################################################//
function stopChrono(e) {
    e.preventDefault();
    clearInterval(chrono)
    moncul = 0;
    monculSpeed = 0;
    monculReplay = 0;
}
btnPause.addEventListener("click", stopChrono);

const nouvelleFeature =() => {
    console.log('nouvelle feature')
}
//############################################################//
                    // Play x2 le chrono // 
//############################################################//

let monculSpeed = 0;  // moncul sert de limitateur à l'utilisation du bouton Avance Rapide 
console.log(monculSpeed +" %cNombre de clickSpeed au démarrage de la page", 'color:blue;');

function speedChrono(e) {
    e.preventDefault();
    monculSpeed ++;
    if (monculSpeed === 1 ) { // si monculSpeed est égale à 1 alors on lance le chrono !
        console.log(`c'est nul`)
        clearInterval(chrono);
        chrono = setInterval(upTime, 500); // le chrono changera sont accélèration.
    } else { // Sinon 
        console.log(`%cLe Nombre de click est à ${monculSpeed} donc n'est plus correspondant à 1, il ne cumulera pas un nouveau compteur "d'avance rapide"`, 'color:red; font-weight:bold;background-color:yellow; padding:.5rem; border:.5rem dashed black;'); //! ce console.log n'est EXISTENTIEL ;) hein loïc Maurin (⌐■_■) mais c'est marrant
    }
}

btnSpeed.addEventListener("click", speedChrono);

//############################################################//
                    // Replay le chrono // 
//############################################################//

let monculReplay = 0;  // moncul sert de limitateur à l'utilisation du bouton Replay 
console.log(monculReplay +" %cNombre de clickReplay au démarrage de la page", 'color:blue;');

function replayChrono(e) {
    e.preventDefault();
    monculReplay ++;
    if (monculReplay === 1 ) { // si monculreplay est égale à 1 alors on restart le chrono !
        timer = 0;
        clearInterval(chrono);
        chrono = setInterval(upTime, 1000); // le chrono changera sont accélèration en vitesse normale.
        monculReplay = 0;
        
    } else { // Sinon 
        console.log(`%cLe Nombre de click est à ${monculReplay} donc n'est plus correspondant à 1, il ne cumulera pas un nouveau compteur "replay"`, 'color:red; font-weight:bold;background-color:yellow; padding:.5rem; border:.5rem dashed black;'); //! ce console.log n'est EXISTENTIEL ;) hein loïc Maurin (⌐■_■) mais c'est marrant
    }
}

btnReplay.addEventListener("click", replayChrono);

//############################################################//
                // Reset le chrono & le Tableau //
//############################################################//
function resetChrono(e) {
    e.preventDefault();
    clearInterval(chrono)
    moncul = 0;
    monculSpeed = 0;
    monculReplay = 0;
    timer = 0;
    timerElement.innerHTML = timer;
    tbl.innerHTML="";

}
btnReset.addEventListener("click", resetChrono);
//############################################################//
                    // Generate Table // 
//############################################################//

const tbl = document.getElementById("createTbl");
const btnCreateTbl = document.getElementById("generateTbl");
let inputLigne = document.getElementById("inputNbrRow");
let inputColonne = document.getElementById("inputNbrCel");

function makeTbl(e) {
    e.preventDefault();
    tbl.innerHTML="";
    for (let i = 0; i < inputLigne.value; i++){
        let maLigne = document.createElement("tr");
        maLigne.id = `ligne ${i}`;

        tbl.appendChild(maLigne);
        let ligne = document.getElementById(`ligne ${i}`);

        for (let j = 0; j < inputColonne.value; j++){
            let cellule = document.createElement("td");
            cellule.className = `cellule pos${i}${j} mort`;
            ligne.appendChild(cellule);
        }
    }
    check();
}

btnCreateTbl.addEventListener("click", makeTbl);
//############################################################//
                    // Color Table // 
//############################################################//
const cellColor = document.getElementsByClassName("cellule");
console.log(cellColor);

function check(){
   for (let index = 0; index < cellColor.length; index++) {
    const cell = cellColor[index];
    
    cell.addEventListener("click", function () {
        console.log(`cellule colorié`)
        let etatCell = cell.classList;
        let bornCell = etatCell.toggle("vivant")
        let killCell = etatCell.toggle("mort")
        if (bornCell) {
            killCell;
        } else {
            bornCell;
        }
    })
} 
}

//############################################################//
                    // Check début règle // 
//############################################################//


