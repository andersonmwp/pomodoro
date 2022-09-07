const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');
const btn = document.querySelector('.btn');

let minuto = 25;
let segundo = 60;
let relogio;

function iniciarRelogio(){
  relogio = setInterval(() => {
    timer();
  }, 1000);
}

btn.addEventListener('click', iniciarRelogio);

function timer() {
  segundo = segundo - 1;
  minutos.innerText = minuto - 1;

  if(segundo === 0) {
    minuto = minuto - 1;
    minutos.innerText = minuto;
  }
  if(segundo < 0) {
    segundo = 59;
  }
  
  if(segundo < 10) {
    segundos.innerText = '0' + segundo;
  } else {
    segundos.innerText = segundo;
  }
}