
let timer = 0; 
let intervalTime;
let intervalByCycle = 5000;

function addOneSecondToTimer() {
    timerElement.innerHTML = timer; 
    timer++;
    checkCells();
    scanNeighbor('alive');
    scanNeighbor('dead');
    updateCells();
}

function startChrono() {
    btnPlay.setAttribute("disabled", true);
    btnSpeed.removeAttribute("disabled");
    if (intervalTime) {
        clearInterval(intervalTime);
    }
    intervalTime = setInterval(addOneSecondToTimer, intervalByCycle);
}

function pauseChrono(event) {
    event.preventDefault();
    clearInterval(intervalTime);
    btnPlay.removeAttribute("disabled");
    btnSpeed.removeAttribute("disabled");
    // limitSpeed = 0;
    // limitReplay = 0;
}

function speedChrono(event) {
    event.preventDefault();
    btnSpeed.setAttribute("disabled", true);
    btnPlay.removeAttribute("disabled");
    clearInterval(intervalTime);
    intervalTime = setInterval(addOneSecondToTimer, 500);
}

function replayChrono(event) {
    event.preventDefault();
    timer = 0;
    timerElement.innerHTML = timer;
    btnPlay.removeAttribute("disabled");
    btnSpeed.removeAttribute("disabled");
    clearInterval(intervalTime);
    setInterval(intervalTime, 1000);
}

function resetChrono(event) {
    event.preventDefault();
    replayChrono(event);
    gameboard.innerHTML="";
}