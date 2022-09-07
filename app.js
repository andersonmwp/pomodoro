const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');
const btnIniciar = document.querySelector('.btnIniciar');
const btnPausar = document.querySelector('.btnPausar');
const ciclos = document.querySelector('.ciclos');

let minuto = 24;
let segundo = 0;
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

function stopCiclos() {
  if(minuto === 0 && segundo === 0) {
    clearInterval(relogio);

    ciclo++;
    ciclos.innerText = '#' + ciclo;
  }
}