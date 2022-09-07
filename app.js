const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');
const btn = document.querySelector('.btn');
const ciclos = document.querySelector('.ciclos');

let minuto = 1;
let segundo = 0;
let relogio;

function iniciarRelogio(){
  relogio = setInterval(() => {
    timer();
    stopCiclos();
  }, 1000);
}

btn.addEventListener('click', iniciarRelogio);

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

let ciclo = 1;

function stopCiclos() {
  if(minuto === 0 && segundo === 0) {
    clearInterval(relogio);

    ciclo++;
    ciclos.innerText = '#' + ciclo;
  }
}