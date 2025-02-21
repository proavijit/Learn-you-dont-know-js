let timeLeft;
let timerInterval;
let isRunning = false;

let timerDisplay = document.getElementById('timmer');
const startBtn = document.getElementById('start_btn');
const stopBtn = document.getElementById('stop_btn');

const startTimer = (duration) => {
  let timer = duration;
  
  timerInterval = setInterval(() => {
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;

    const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    const displaySecond = seconds < 10 ? "0" + seconds : seconds;

    timerDisplay.textContent = `${displayMinutes} : ${displaySecond}`;

    if (--timer < 0) {
      clearInterval(timerInterval);
      timerDisplay.textContent = 'Breath Out';

      setTimeout(() => {
        timerDisplay.textContent = 'Breath In';
        startTimer(timeLeft);
      }, 3000);
    }
  }, 1000);
};

const stopTimer = () => {
  clearInterval(timerInterval);
  isRunning = false;
};

startBtn.addEventListener('click', () => {
  if (!isRunning) {
    timeLeft = 90;
    startTimer(timeLeft);
    isRunning = true;
  }
});

stopBtn.addEventListener('click', () => {
  stopTimer();
  timerDisplay.textContent = 'Breath In';
});
