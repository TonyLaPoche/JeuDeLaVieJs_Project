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

const btnPlay = document.getElementById("btnPlay"); // Activer le Timer //! Ok
const btnPause = document.getElementById("btnPause"); // Pause du Timer //! OK
const btnSpeed = document.getElementById("btnSpeed"); // Accélération du Timer 
const btnReplay = document.getElementById("btnReplay"); // Replay du Timer
const Reset = document.getElementById("reset"); // restart la session


                    // Play le chrono // 
// ###########################################################//
let moncul = 0;  // moncul sert de limitateur à l'utilisation du bouton play 
console.log(moncul +" %cNombre de click au démarrage de la page", 'color:blue;');

function topChrono(e) {
    e.preventDefault();
    moncul++; // à chaque click on incrémente de 1 moncul
    console.log(moncul +" %cNombre de click actuel ", 'color:green; font-weight:bold;' ); 
    if (moncul === 1 ) { // si moncul est égale à 1 alors on lance le chrono !
        chrono = clearInterval() // on s'assure qu'il soit bien à l'arrêt
        chrono = setInterval(upTime, 1000); //  Puis on lance le chrono ce lance
        
    } else { // Sinon 
        console.log(`%c ${moncul}  Le Nombre de click n'est plus correspondant à 1, il ne lancera pas un nouveau compteur"`, 'color:red; font-weight:bold;background-color:yellow; padding:.5rem; border:.5rem dashed black;'); //! ce console.log n'est EXISTENTIEL ;) hein loïc Maurin (⌐■_■) mais c'est marrant
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
}
btnPause.addEventListener("click", stopChrono);
//############################################################//
                    // Play x2 le chrono // 
// ###########################################################//

let monculSpeed = 0;  // moncul sert de limitateur à l'utilisation du bouton Avance Rapide 
console.log(monculSpeed +" %cNombre de clickSpeed au démarrage de la page", 'color:blue;');

function speedChrono(e) {
    e.preventDefault();
    monculSpeed ++;
    if (monculSpeed === 1 ) { // si monculSpeed est égale à 1 alors on lance le chrono !
        chrono = clearInterval()
        chrono = setInterval(upTime, 500); // le chrono changera sont accélèration.
        
    } else { // Sinon 
        console.log(`%c ${monculSpeed}  Le Nombre de clickSpeed n'est plus correspondant à 1, il ne lancera pas un nouveau compteur"`, 'color:red; font-weight:bold;background-color:yellow; padding:.5rem; border:.5rem dashed black;'); //! ce console.log n'est EXISTENTIEL ;) hein loïc Maurin (⌐■_■) mais c'est marrant
    }
}

btnSpeed.addEventListener("click", speedChrono);


//! PROBLEME ACTUELLE !!
//* LE PASSAGE DE PLAY À PLAY ACCÉLÉRÉ INCRÉMENTE LE SET INTERVAL ALORS QU'ON VEUT PAS
//* chercher une solution[...]
