const parametroCodigo = new URLSearchParams(window.location.search);
const codigoJuego = parametroCodigo.get("codigo");

const listaJuegos = JSON.parse(localStorage.getItem(`listaJuegos`)) || [];

const juego = listaJuegos.find((juego) => juego.codigo === codigoJuego);

function cargarDetalleJuego(juego) {
    const contenedorDetalle = 
}
