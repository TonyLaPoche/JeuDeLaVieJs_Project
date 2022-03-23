                    // Principe d'un Timer//
// ###########################################################//
let timer = 0; // on part de zéro seconde
const timerElement = document.getElementById("cycle"); // on récupère l'élément qui va afficher les cycles

function upTime() {
    timerElement.innerHTML = timer; // on lui dit d'afficher un cycle
    timer++; // on incrémente de 1
}
setInterval(upTime, 1000) // toutes les 1000ms = une seconde
// ###########################################################//

const btnPlay = document.getElementById("btnPlay");
const btnPause = document.getElementById("btnPause");