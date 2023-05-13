import VideoJuego from "./classVideoJuego.js";
import { sumarioValidaciones } from "./helpers.js";

// Variables globales
let formJuego = document.getElementById("formJuego");
let codigo = document.getElementById("codigo"),
nombre = document.getElementById("nombre"),
descripcion = document.getElementById("descripcion"),
imagen = document.getElementById("imagen"),
categoria = document.getElementById("categoria"),
precio = document.getElementById("precio"),
requisitos = document.getElementById("requisitos"),
desarrollador = document.getElementById("desarrollador"),
anio = document.getElementById("anio"),
resenias = document.getElementById("resenias");

let listaJuegos = localStorage.getItem("listaJuegos");

// Si listaJuegos está vacía
if(!listaJuegos){
  listaJuegos = [];
} else {
  listaJuegos = JSON.parse(listaJuegos).map((videoJuego) => new VideoJuego(
    videoJuego.nombre, 
    videoJuego.descripcion, 
    videoJuego.imagen, 
    videoJuego.categoria, 
    videoJuego.precio, 
    videoJuego.requisitos, 
    videoJuego.desarrollador, 
    videoJuego.anio, 
    videoJuego.resenias)
  );
}
console.log(listaJuegos);

// Manejadores de eventos
formJuego.addEventListener("submit", prepararFormulario);

function prepararFormulario(e){
  e.preventDefault();
  crearJuego();
}

function crearJuego(){
  // Validar el formulario
  let resumenErrores = sumarioValidaciones(nombre.value, descripcion.value, imagen.value, categoria.value, precio.value, requisitos.value, desarrollador.value, anio.value, resenias.value);
  if(resumenErrores.length === 0){
    // Creo el juego
    mostrarAlert(false, '');
  let nuevoJuego = new VideoJuego(nombre.value, descripcion.value, imagen.value, categoria.value, precio.value, requisitos.value, desarrollador.value, anio.value, resenias.value);
  console.log(nuevoJuego);
  // Guardar juego en el array
  listaJuegos.push(nuevoJuego);
  console.log(listaJuegos);
  // Guardar el array en el local storage
  localStorage.setItem("listaJuegos", JSON.stringify(listaJuegos));
  // Limpiar el formulario
  limpiarFormulario();
  // Mostrar un mensaje
  Swal.fire(
    '¡Juego cargado!',
    'Presiona ok para continuar',
    'success'
  )
  } else {
    //Falla la validación
    mostrarAlert(true, resumenErrores)
  }
}
function mostrarAlert(estado, resumenErrores){
    // Estado = true muestro el alert, caso contrario lo oculto
  let alertMsjError = document.getElementById("alertMsjError");
  if(estado){
    alertMsjError.className = "alert alert-danger";
    alertMsjError.innerHTML = resumenErrores
  }else{
    alertMsjError.className = "alert alert-success d-none";
  }
}
function limpiarFormulario(){
  formJuego.reset();
}

// borrar pelicula
window.borrarPelicula = () => {
  
};