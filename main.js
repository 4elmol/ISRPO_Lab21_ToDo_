const hoursCh = document.getElementById("hours");
const minutesMin = document.getElementById("minutes");
const secondsSec = document.getElementById("seconds");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

let h = 0;
let m = 0;
let s = 0;
let timerInterval = null;
let isRunning = false;

function updateDisplay() {
    hoursCh.textContent = h.toString().padStart(2, "0");
    minutesMin.textContent = m.toString().padStart(2, "0");
    secondsSec.textContent = s.toString().padStart(2, "0");
}

function incrementTime() {
    s++;
    if (s === 60) {
        s = 0;
        m++;  
        if (m === 60) {
            m = 0;
            h++;
        }
    } 
    updateDisplay();
}

function startTimer() {
    if (isRunning) return;   
    isRunning = true;
    timerInterval = setInterval(incrementTime, 1000);
}

function stopTimer() {
    if (!isRunning) return;
    isRunning = false;
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    h = 0;
    m = 0;
    s = 0;  
    updateDisplay();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
updateDisplay();