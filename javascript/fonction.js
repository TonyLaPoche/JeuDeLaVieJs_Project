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
const Reset = document.getElementById("reset"); // restart la session //? Pas encore test

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
        console.log(`%cLe Nombre de click est à ${moncul} donc n'est plus correspondant à 1, il ne lancera pas un nouveau compteur de "play"`, 'color:red; font-weight:bold;background-color:yellow; padding:.5rem; border:.5rem dashed black;'); //! ce console.log n'est EXISTENTIEL ;) hein loïc Maurin (⌐■_■) mais c'est marrant
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
//############################################################//
                    // Play x2 le chrono // 
//############################################################//

let monculSpeed = 0;  // moncul sert de limitateur à l'utilisation du bouton Avance Rapide 
console.log(monculSpeed +" %cNombre de clickSpeed au démarrage de la page", 'color:blue;');

function speedChrono(e) {
    e.preventDefault();
    monculSpeed ++;
    if (monculSpeed === 1 ) { // si monculSpeed est égale à 1 alors on lance le chrono !
        clearInterval(chrono);
        chrono = setInterval(upTime, 500); // le chrono changera sont accélèration.
        
    } else { // Sinon 
        console.log(`%cLe Nombre de click est à ${monculSpeed} donc n'est plus correspondant à 1, il ne lancera pas un nouveau compteur "d'avance rapide"`, 'color:red; font-weight:bold;background-color:yellow; padding:.5rem; border:.5rem dashed black;'); //! ce console.log n'est EXISTENTIEL ;) hein loïc Maurin (⌐■_■) mais c'est marrant
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
        console.log(`%cLe Nombre de click est à ${monculReplay} donc n'est plus correspondant à 1, il ne lancera pas un nouveau compteur "replay"`, 'color:red; font-weight:bold;background-color:yellow; padding:.5rem; border:.5rem dashed black;'); //! ce console.log n'est EXISTENTIEL ;) hein loïc Maurin (⌐■_■) mais c'est marrant
    }
}

btnReplay.addEventListener("click", replayChrono);
