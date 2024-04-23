function relogio(){
function getSeconds(segundos){
    let data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
    
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = getSeconds(segundos);
    }, 1000);
}


iniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    iniciaRelogio();
});

pausar.addEventListener('click', function(event){
    clearInterval(timer);
    if(segundos !== 0){
        relogio.classList.add('pausado');
    }
});

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
    relogio.classList.remove('pausado');
});
}

relogio();

