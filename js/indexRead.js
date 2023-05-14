import VideoJuego from "./classVideoJuego.js";

let listaJuegos = JSON.parse(localStorage.getItem("listaJuegos")) || [];
console.log(listaJuegos)

function cargaInicial() {
    let contenedorCards = document.querySelector("#crearCard")
    if (listaJuegos.length > 0) {
      listaJuegos.map(( juego => crearCardDelJuego(juego) ))
    } else {
      // mostrar un mensaje que diga que no hay juegos aun
      contenedorCards.innerHTML = `<aside>No hay juegos para mostrar.</aside>`
    }
  }

  cargaInicial()

  function crearCardDelJuego(juego) {
    let contenedorCards = document.querySelector("#crearCard")
      contenedorCards.innerHTML += `<aside class="col-md-5 col-lg-4">
      <article class="card h-100">
        <img src=${juego.imagen} alt="nfs" class="card-img-top" />
        <div
          class="card-body text-white d-flex flex-column justify-content-center align-items-center"
        >
          <div class="text-center">
            <h5>${juego.nombre}</h5>
            <ul class="list-unstyled">
              <li>
                Valoraciones: 10 <i class="bi bi-hand-thumbs-up-fill"></i>
              </li>
              <li></li>
            </ul>
            <button
              class="btn btn-morado"
              type="button"
              href="./pages/detalleJuego.html"
            >
              Ver más
            </button>
            <div class="mt-5 mt-md-4 mt-lg-5">
              <i class="bi bi-windows mx-1"></i
              ><i class="bi bi-apple mx-1"></i>
            </div>
          </div>
        </div>
      </article>
    </aside>`
  }