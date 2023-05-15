const parametroCodigo = new URLSearchParams(window.location.search);
const codigoJuego = parametroCodigo.get("codigo");

const listaJuegos = JSON.parse(localStorage.getItem(`listaJuegos`)) || [];

const juego = listaJuegos.find((juego) => juego.codigo === codigoJuego);

function cargarDetalleJuego(juego) {
    const contenedorDetalle = document.querySelector("#contenedor-detalle")
    contenedorDetalle.innerHTML = `<h1>${juego.nombre}</h1>
    <section class="d-grid gap-2 d-sm-block mb-3">
      <a class="btn btn-primary" role="button" href="#about-the-game"
        >Acerca del Juego</a
      >
      <a class="btn btn-primary" role="button" href="#game-description"
        >Descripción</a
      >
      <a class="btn btn-primary" role="button" href="#system-requirements"
        >Requisitos del Sistema</a
      >
    </section>
    <section class="container text-center">
      <article class="row mb-3">
        <aside class="col-12 col-md-6 cube-gallery">
          <div>
            <button class="cube-button" id="cube-btn-1">
              <img
                class="cube-button-img"
                src="${juego.imagenUno}"
                alt="imagen del juego"
                id="btn-img-1"
              />
            </button>
            <button class="cube-button" id="cube-btn-2">
              <img
                class="cube-button-img"
                src="${juego.imagenDos}"
                alt="imagen del juego"
                id="btn-img-2"
              />
            </button>
            <button class="cube-button" id="cube-btn-3">
              <img
                class="cube-button-img"
                src="${juego.imagenTres}"
                alt="imagen del juego"
                id="btn-img-3"
              />
            </button>
            <button class="cube-button" id="cube-btn-4">
              <img
                class="cube-button-img"
                src="${juego.imagenCuatro}"
                alt="imagen del juego"
                id="btn-img-4"
              />
            </button>
            <button class="cube-button" id="cube-btn-5">
              <img
                class="cube-button-img"
                src="${juego.imagenCinco}"
                alt="imagen del juego"
                id="btn-img-5"
              />
            </button>
            <button class="cube-button" id="cube-btn-6">
              <img
                class="cube-button-img"
                src="${juego.imagenSeis}"
                alt="imagen del juego"
                id="btn-img-6"
              />
            </button>
          </div>
          <div class="scene">
            <div class="cube" id="cube">
              <div class="cube-face front">
              <img
                class="w-100"
                src="${juego.imagenUno}"
                alt="imagen del juego"
                id="btn-img-1"
              />
              </div>
              <div class="cube-face back">
              <img
                class="w-100"
                src="${juego.imagenDos}"
                alt="imagen del juego"
                id="btn-img-1"
              />
              </div>
              <div class="cube-face left">
              <img
                class="w-100"
                src="${juego.imagenTres}"
                alt="imagen del juego"
                id="btn-img-1"
              />
              </div>
              <div class="cube-face right">
              <img
                class="w-100"
                src="${juego.imagenCuatro}"
                alt="imagen del juego"
                id="btn-img-1"
              />
              </div>
              <div class="cube-face top">
              <img
                class="w-100"
                src="${juego.imagenCinco}"
                alt="imagen del juego"
                id="btn-img-1"
              />
              </div>
              <div class="cube-face bottom">
              <img
                class="w-100"
                src="${juego.imagenSeis}"
                alt="imagen del juego"
                id="btn-img-1"
              />
              </div>
            </div>
          </div>
        </aside>
        <aside class="col-12 col-md-6">
          <h2>Get ${juego.nombre}</h2>
          <p>¡Estás a un paso de conseguirlo!</p>
          <hr />
          <span class="align-self-start">${juego.precio},00 ARS</span>
            <div class="d-flex flex-column gap-2">
            <button type="button" class="btn btn-primary w-100">Comprar</button>
            <button type="button" class="btn btn-primary w-100">Agregar a favoritos</button>
            </div>
        </aside>
      </article>
    </section>
    <section class="mb-3" id="about-the-game">
      <h2>Acerca del Juego</h2>
      <ul class="list-group list-group-flush">
        <li class="list-group-item text-start text-sm-center">
          <div class="row justify-content-md-center">
            <div class="col-12 col-sm-3">Desarrollador</div>
            <div class="col-12 col-sm-9 text-uppercase">${juego.desarrollador}</div>
          </div>
        </li>
        <li class="list-group-item text-start text-sm-center">
          <div class="row justify-content-md-center">
            <div class="col-12 col-sm-3">Categorías</div>
            <div class="col-12 col-sm-9">
              <span class="badge text-bg-primary">${juego.categoria}</span>
            </div>
          </div>
        </li>
        <li class="list-group-item text-start text-sm-center">
          <div class="row justify-content-md-center">
            <div class="col-12 col-sm-3">Plataforma</div>
            <div class="col-12 col-sm-9">${juego.plataforma}</div>
          </div>
        </li>
        <li class="list-group-item text-start text-sm-center">
          <div class="row justify-content-md-center">
            <div class="col-12 col-sm-3">Lenguajes</div>
            <div class="col-12 col-sm-9">
              <span class="badge text-bg-primary">Inglés</span>
              <span class="badge text-bg-primary">Español</span>
            </div>
          </div>
        </li>
        <li class="list-group-item text-start text-sm-center">
          <div class="row justify-content-md-center">
            <div class="col-12 col-sm-3">Año de Lanzamiento</div>
            <div class="col-12 col-sm-9">${juego.anio}</div>
          </div>
        </li>
      </ul>
    </section>
    <section class="mb-3" id="game-description">
      <h2>Descripción</h2>
      <p>
        ${juego.descripcion}
      </p>
    </section>
    <section class="mb-3" id="system-requirements">
      <h2>Requerimientos mínimos para Windows</h2>
      <ul class="list-group list-group-flush">
        <li class="list-group-item text-start text-sm-center">
          <div class="row justify-content-md-center">
            <div class="col-12 col-sm-3">Sistema Operativo</div>
            <div class="col-12 col-sm-9">
              ${juego.sistemaOperativo}
            </div>
          </div>
        </li>
        <li class="list-group-item text-start text-sm-center">
          <div class="row justify-content-md-center">
            <div class="col-12 col-sm-3">Procesador AMD</div>
            <div class="col-12 col-sm-9">${juego.procesadorAmd}</div>
          </div>
        </li>
        <li class="list-group-item text-start text-sm-center">
          <div class="row justify-content-md-center">
            <div class="col-12 col-sm-3">Procesador Intel</div>
            <div class="col-12 col-sm-9">${juego.procesadorIntel}</div>
          </div>
        </li>
        <li class="list-group-item text-start text-sm-center">
          <div class="row justify-content-md-center">
            <div class="col-12 col-sm-3">Memoria</div>
            <div class="col-12 col-sm-9">${juego.memoria}GB RAM</div>
          </div>
        </li>
        <li class="list-group-item text-start text-sm-center">
          <div class="row justify-content-md-center">
            <div class="col-12 col-sm-3">Tarjeta Gráfica AMD</div>
            <div class="col-12 col-sm-9">AMD ${juego.tGraficaAmd}</div>
          </div>
        </li>
        <li class="list-group-item text-start text-sm-center">
          <div class="row justify-content-md-center">
            <div class="col-12 col-sm-3">Tarjeta Gráfica NVIDIA</div>
            <div class="col-12 col-sm-9">NVIDIA ${juego.tGraficaNvidia}</div>
          </div>
        </li>
      </ul>
    </section>`
}

cargarDetalleJuego(juego)