// declare variables 
let startBtn = document.getElementById('start'),
    stopBtn = document.getElementById('stop'),
    pauseBtn = document.getElementById('pause'),
    hour = document.getElementById('h'),
    minute = document.getElementById('m'),
    second = document.getElementById('s');

// add event listeners 
startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
pauseBtn.addEventListener('click', togglePause);

// initialize stop and pause
let stopTimer = false;
let pauseTimer = false;

// start function
function start() {
    // extract integer values from times
    let h = parseInt(hour.innerText),
        m = parseInt(minute.innerText),
        s = parseInt(second.innerText);

    // increment seconds
    s = s + 1;

    // if it's 60 seconds then set it to 0 and increase minutes
    if (s == 60) {
        s = 0;
        m = m + 1;
        if (m == 60) {
            m = 0;
            h = h + 1;
        }
        minute.innerText = m + " m";
        hour.innerText = h + " h";
    }
    second.innerText = s + " s";

    // continue only if stop isn't pressed and pause isn't toggled
    if (!stopTimer && !pauseTimer) {
        setTimeout(start, 1000);
    }
}

// stop function
function stop() {
    stopTimer = true;
    hour.innerText = "0 h";
    minute.innerText = "0 m";
    second.innerText = "0 s";
}

// toggle pause function
function togglePause() {
    pauseTimer = !pauseTimer;
}
