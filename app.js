//Grab elements

const display = document.getElementById("display");
const startPauseBtn = document.getElementById("start-pause");
const resetBtn = document.getElementById("reset");

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerInterval = null;
let timerStatus = "stopped";

function stopWatch() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes = 1;
    minutes++;
    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }

  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }

  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }

  display.innerText =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

function startPause() {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1000);

    startPauseBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;

    timerStatus = "started";
    console.log(timerStatus);
  } else {
    window.clearInterval(timerInterval);

    startPauseBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    timerStatus = "stopped";
    console.log(timerStatus);
  }
}

function reset() {
  window.clearInterval(timerInterval);
  timerStatus = "stopped";
  seconds = 0;
  minutes = 0;
  hours = 0;
  display.innerHTML = "00:00:00";
  startPauseBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
  console.log(timerStatus);
}

startPauseBtn.addEventListener("click", startPause);
resetBtn.addEventListener("click", reset);
