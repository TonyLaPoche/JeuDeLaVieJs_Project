                    // Principe d'un Timer//
// ###########################################################//
let timer = 0; // on part de zéro seconde
const timerElement = document.getElementById("cycle"); // on récupère l'élément qui va afficher les cycles

function upTime() {
    timerElement.innerHTML = timer; // on lui dit d'afficher un cycle
    timer++; // on incrémente de 1
}
//setInterval(upTime, 1000) // toutes les 1000ms = une seconde
// ###########################################################//

const btnPlay = document.getElementById("btnPlay"); // Activer le Timer
const btnPause = document.getElementById("btnPause"); // Pause du Timer
const btnSpeed = document.getElementById("btnSpeed"); // Accélération du Timer
const btnReplay = document.getElementById("btnReplay"); // Replay du Timer
const Reset = document.getElementById("reset"); // restart la session



// ###########################################################//
let moncul = 0;  // moncul sert de limitateur à l'utilisation du bouton play 
console.log(moncul +" %cNombre de click au démarrage de la page", 'color:blue;');

function topChrono(e) {
    e.preventDefault();
    moncul++; // à chaque click on incrémente de 1 moncul
    console.log(moncul +" %cNombre de click actuel ", 'color:green; font-weight:bold;' ); 
    if (moncul === 1 ) { // si moncul est égale à 1 alors on lance le chrono !
        setInterval(upTime, 1000); // le chrono ce lance
        
    } else { // Sinon 
        console.log(`%c ${moncul}  Le Nombre de click n'est plus correspondant à 1, il ne lancera pas un nouveau compteur"`, 'color:red; font-weight:bold;background-color:yellow; padding:.5rem; border:.5rem dashed black;'); //! ce console.log n'est EXISTENTIEL ;) hein loïc Maurin (⌐■_■) mais c'est marrant
    }
}
btnPlay.addEventListener("click", topChrono);
// ###########################################################//

