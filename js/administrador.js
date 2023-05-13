import VideoJuego from "./classVideoJuego.js";

// Variables globales
let formJuego = document.getElementById("formJuego");
let listaJuegos = [];

// Manejadores de eventos
formJuego.addEventListener("submit", prepararFormulario);

function prepararFormulario(e){
  e.preventDefault();
  crearJuego();
}

function crearJuego(){
// Validar el formulario
  let nuevoJuego = new VideoJuego("GTA", "1.99", "Rockstar", "Accion", "1", "2", "3", "4", "5");

  console.log(nuevoJuego);
// Guardar juego en el array
  listaJuegos.push(nuevoJuego);
  console.log(listaJuegos);
// Guardar el array en el local storage
  localStorage.setItem("listaJuegos", JSON.stringify(listaJuegos));
// Limpiar el formulario
}
