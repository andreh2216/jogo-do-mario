const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameO = document.querySelector('.go');
const trayG = document.querySelector('.tentar');
const mens = document.querySelector('.dica');

const jump = () =>{
    mario.classList.add('jump');

   setTimeout(()=>{ 
    mario.classList.remove('jump');  
   }, 500);
}

   
const loop = setInterval(()=>{ 


    console.log('loop')

    const pipePosition = pipe.offsetLeft;

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition)
 
    if(pipePosition <= 120  && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        pipe.style.animation = 'none';
        pipe.style.bottom = `${marioPosition}px`

        mario.src = '/IMAGE/game-over.png';

        mario.style.width  = '75px';
        mario.style.marginLeft = '50px';

        gameO.innerHTML = "FIM DE JOGO !";
        trayG.innerHTML = "TENTAR NOVAMENTE"

        mens.innerHTML = "";

        clearInterval(loop);
    }  


  
},10)


document.addEventListener('keydown', jump);