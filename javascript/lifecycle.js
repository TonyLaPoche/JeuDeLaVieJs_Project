function addOneSecondToTimer() {
    timerElement.innerHTML = timer; 
    timer++; 
}

function startChrono(event) {
    btnPlay.setAttribute("disabled", true);
    btnSpeed.removeAttribute("disabled");
    event.preventDefault();
    if (intervalTime) {
        clearInterval(intervalTime);
    }
    intervalTime = setInterval(addOneSecondToTimer, 1000)
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
    createTbl.innerHTML="";
}