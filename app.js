const minutes = document.querySelector('.minutos');
const seconds = document.querySelector('.segundos');
const btnInit = document.querySelector('.btnIniciar');
const btnAudio = new Audio('./audio/audio-button.mp3');

let minute = 25;
let second = 0;
let clock;

function initClock(){
  clock = setInterval(() => {
    timer();
    stopCycle();
  }, 1000);
  btnAudio.play();
  btnInit.setAttribute('disabled', '');
}

btnInit.addEventListener('click', initClock);

function timer() {
  second = second - 1;

  if(second < 0) {
    second = 59;
    minute = minute - 1;
  } if(minute >= 10){
      minutes.innerText = minute;
  } else {
    minutes.innerText = '0' + minute;
  } if(second < 10) {
      seconds.innerText = '0' + second;
  } else {
      seconds.innerText = second;
  }  
}

const btnPause = document.querySelector('.btnPausar');

function stopTimer() {
  clearInterval(clock);
  btnAudio.play();
  btnInit.removeAttribute('disabled');
}

btnPause.addEventListener('click', stopTimer);

function stopCycle() {
  if(minute === 0 && second === 0) {
    clearInterval(clock);

    if(changeCycle === false) {
      timeBreak(); 
    } else {
      resetTimer();
    }
  }
}

const cycles = document.querySelector('.ciclos');
const container = document.querySelector('.container');
const body = document.querySelector('body');
const description = document.querySelector('.descritivo');
const finishAudio = new Audio('./audio/audio_bell.mp3');
let cycle = 1;
let count = 0;
let changeCycle = false;

function timeBreak() {
  container.classList.add('active');
  body.classList.add('active');
  btnInit.removeAttribute('disabled');
  description.innerText = 'Tempo para uma pausa!';

  if(count === 3) {
    minutes.innerText = '15';
    minute = 15;
    count = 0;
  } else {
    minutes.innerText = '05';
    minute = 5;
    count++;
  }

  finishAudio.play();
  changeCycle = true;
}

function resetTimer() {
  container.classList.remove('active');
  body.classList.remove('active');
  btnInit.removeAttribute('disabled');

  description.innerText = 'Hora de focar!';
  minutes.innerText = '25';
  minute = 25;
  finishAudio.play();
  cycle++;
  cycles.innerText = '#' + cycle;
  changeCycle = false;
}