let formBuscador = document.querySelector('form');
let inputBuscador = document.getElementById('inputBuscador');
let crearCard = document.getElementById('crearCard');
let noEncontrado = document.createElement('p');

formBuscador.addEventListener('keyup', buscarPelicula);

function buscarPelicula(e){
    e.preventDefault();
    let aside = document.querySelectorAll('aside')
    aside.forEach((asideJuego, indice) => {
        if(asideJuego.textContent.toLocaleLowerCase().includes(inputBuscador.value)){
            aside[indice].classList.remove('displayNone');
            noEncontrado.innerHTML = '';
        }else{
            aside[indice].classList.add('displayNone');
            noEncontrado.innerHTML = '';
        }

        if(crearCard.children[indice].classList[2] === 'displayNone'){
            noEncontrado.innerHTML += 'no hya juego'
            crearCard.appendChild(noEncontrado)
        }
    });
}