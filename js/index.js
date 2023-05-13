let formBuscador = document.querySelector('form');
let inputBuscador = document.getElementById('inputBuscador');
let crearCard = document.getElementById('crearCard')

formBuscador.addEventListener('keyup', buscarPelicula);

function buscarPelicula(e){
    e.preventDefault();
    let aside = document.querySelectorAll('aside')
    aside.forEach((asideJuego, indice) => {
        if(asideJuego.textContent.toLocaleLowerCase().includes(inputBuscador.value)){
            aside[indice].classList.remove('displayNone');
        }else{
            aside[indice].classList.add('displayNone');
        }
    });
}