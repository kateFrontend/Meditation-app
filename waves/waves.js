let timerId

const audio = document.querySelector("#player");
const video = document.querySelector("#myVideo")

const buttonPlay = document.querySelector("#play");
buttonPlay.addEventListener("click", function(){
    timerID = setInterval(timerS, 1000);
    audio.play();
    video.play();
});

const buttonStop = document.querySelector("#stop");
buttonStop.addEventListener("click", function(){
    stopTimer();
});

const timer = 5;
let amountTime = timer * 60;

function timerS(){
    const countdown = document.querySelector("#countdown");
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;

    if(seconds < 10) {
        seconds = "0" + seconds;
    }

    countdown.textContent = `${minutes} : ${seconds}`;
    amountTime--;

    if(amountTime < 0) {
        amountTime = 0;
        stopTimer();
    }


}


function stopTimer() {
    clearInterval(timerID);
    audio.pause();
    video.pause();
}



