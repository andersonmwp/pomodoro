const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');
const btnIniciar = document.querySelector('.btnIniciar');
const btnPausar = document.querySelector('.btnPausar');
const ciclos = document.querySelector('.ciclos');
const container = document.querySelector('.container');
const body = document.querySelector('body');
const descritivoCiclo = document.querySelector('.descritivo');

let minuto = 0;
let segundo = 10;
let relogio;

function iniciarRelogio(){
  relogio = setInterval(() => {
    timer();
    stopCiclos();
  }, 1000);

  btnIniciar.setAttribute('disabled', '');
}

btnIniciar.addEventListener('click', iniciarRelogio);

function timer() {
  segundo = segundo - 1;

  if(segundo < 0) {
    segundo = 59;
    minuto = minuto - 1;
  }

  if(minuto >= 10){
    minutos.innerText = minuto;
  } else {
    minutos.innerText = '0' + minuto;
  }

  if(segundo < 10) {
    segundos.innerText = '0' + segundo;
  } else {
    segundos.innerText = segundo;
  }
}

function stopTimer() {
  clearInterval(relogio);
  btnIniciar.removeAttribute('disabled');
}

btnPausar.addEventListener('click', stopTimer)

let ciclo = 1;
let count = 0;
let changeCycle = 0;

function stopCiclos() {
  if(minuto === 0 && segundo === 0) {
    clearInterval(relogio);

    if(count === 3) {
      longBreak();
    } else if(changeCycle === 0) {
      shortBreak(); 
    } else {
      returnTimer();
    }
  }
}

function shortBreak() {
  container.classList.add('active');
  body.classList.add('active');
  btnIniciar.removeAttribute('disabled');

  descritivoCiclo.innerText = 'Faça uma pausa!';
  minutos.innerText = '05';
  minuto = 0;
  segundo = 10;
  changeCycle = 1;
}

function returnTimer() {
  container.classList.remove('active');
  body.classList.remove('active');
  btnIniciar.removeAttribute('disabled');

  descritivoCiclo.innerText = 'Mantenha o foco!';
  minutos.innerText = '25';
  minuto = 0;
  segundo = 10;  
  
  ciclo++;
  ciclos.innerText = '#' + ciclo;
  changeCycle = 0;
  count++;
}

function longBreak() {
  container.classList.add('active');
  body.classList.add('active');
  btnIniciar.removeAttribute('disabled');

  descritivoCiclo.innerText = 'Faça uma pausa!';
  minutos.innerText = '15';
  minuto = 0;
  segundo = 10;

  count = 0;
}