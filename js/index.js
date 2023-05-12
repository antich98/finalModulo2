let formBuscador = document.querySelector('form');
let inputBuscador = document.getElementById('inputBuscador');

formBuscador.addEventListener('submit', buscarPelicula);
formBuscador.addEventListener('keyup', buscarPelicula);
formBuscador.addEventListener('focus', limpiarForm);

function buscarPelicula(e){
    e.preventDefault();
    let aside = document.querySelectorAll('aside')
    aside.forEach((asideJuego, indice) => {
        asideJuego.textContent.toLocaleLowerCase().includes(inputBuscador.value) ? aside[indice].classList.remove('displayNone') : aside[indice].classList.add('displayNone');
    });
}

function limpiarForm(){
    formBuscador.reset()
}