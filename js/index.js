let formBuscador = document.querySelector('form');
let inputBuscador = document.getElementById('inputBuscador');
let crearCard = document.getElementById('crearCard');
let noEncontrado = document.createElement('p');

formBuscador.addEventListener('submit', buscarPelicula);
formBuscador.addEventListener('keyup', buscarPelicula);

function buscarPelicula(e){
    e.preventDefault();
    let aside = document.querySelectorAll('aside')
    aside.forEach((asideJuego, indice) => {
        if(asideJuego.textContent.toLocaleLowerCase().includes(inputBuscador.value)){
            noEncontrado.innerHTML = '';
            aside[indice].classList.remove('displayNone');
        }else if(crearCard.children[indice].classList[2] === 'displayNone'){
            noEncontrado.innerHTML = `
            <aside class="text-center juegoNoEncontrado">
                <h3>Juego no encontrado</h3>
                <p><span class="border border-1 border-secondary-subtle px-2">${inputBuscador.value}<i class="bi bi-exclamation-triangle-fill text-secondary"></i></span></p>
            </aside>
            `
            crearCard.appendChild(noEncontrado)
        }else{
            aside[indice].classList.add('displayNone');
        }
        
    });
}