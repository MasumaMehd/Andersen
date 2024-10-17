let stopwatchInterval;
let stopwatchTime = 0;
let stopwatchRunning = false;

function startStopwatch() {
  if (!stopwatchRunning) {
    stopwatchRunning = true;
    stopwatchInterval = setInterval(() => {
      stopwatchTime++;
      document.getElementById("stopwatchDisplay").textContent =
        formatTime(stopwatchTime);
    }, 1000);
  }
}

function pauseStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
}

function resetStopwatch() {
  pauseStopwatch();
  stopwatchTime = 0;
  document.getElementById("stopwatchDisplay").textContent = "00:00:00";
}

let timerInterval;
let timerTime = 0;
let timerRunning = false;

function setTimer() {
  timerTime = parseInt(document.getElementById("timerInput").value) || 0;
  updateTimerDisplay();
}

function startTimer() {
  if (!timerRunning && timerTime > 0) {
    timerRunning = true;
    timerInterval = setInterval(() => {
      if (timerTime > 0) {
        timerTime--;
        updateTimerDisplay();
      } else {
        pauseTimer();
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
}

function resetTimer() {
  pauseTimer();
  timerTime = 0;
  updateTimerDisplay();
}

function adjustTimer(seconds) {
  timerTime += seconds;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  document.getElementById("timerDisplay").textContent = formatTime(timerTime);
}

function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600)
    .toString()
    .padStart(2, "0");

  const mins = Math.floor((seconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  
  return `${hrs}:${mins}:${secs}`;
}
