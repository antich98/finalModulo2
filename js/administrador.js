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
desarrollador = document.getElementById("desarrollador"),
anio = document.getElementById("anio"),
plataforma = document.getElementById("plataforma"),
sistemaOperativo = document.getElementById("sistemaOperativo"),
procesadorAmd = document.getElementById("procesadorAmd"),
procesadorIntel = document.getElementById("procesadorIntel"),
memoria = document.getElementById("memoria"),
tGraficaAmd = document.getElementById("tGraficaAmd"),
tGraficaNvidia = document.getElementById("tGraficaNvidia")

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
    videoJuego.desarrollador, 
    videoJuego.anio, 
    videoJuego.plataforma,
    videoJuego.sistemaOperativo,
    videoJuego.procesadorAmd,
    videoJuego.procesadorIntel,
    videoJuego.memoria,
    videoJuego.tGraficaAmd,
    videoJuego.tGraficaNvidia)
  );
}
console.log(listaJuegos);

// Manejadores de eventos
formJuego.addEventListener("submit", prepararFormulario);

// Invoco carga inicial para leer lo que ya hay en local storage y pintarlo en el navegador
cargaInicial()

// Bien se carga la página se ejecuta esta función, si hay juegos en LS los renderizo
function cargaInicial() {
  let bodyTablaJuegos = document.querySelector("#body-tabla-admin")
  if (listaJuegos.length > 0) {
    listaJuegos.map(( (juego, indice) => crearFila(juego, indice + 1) ))
  } else {
    // mostrar un mensaje que diga que no hay juegos aun
    bodyTablaJuegos.innerHTML = `<tr><td colspan="6">No hay juegos cargados aun.</td></tr>`
  }
}

function crearFila(juego, indiceCorregido) {
    let bodyTablaJuegos = document.querySelector("#body-tabla-admin")
    bodyTablaJuegos.innerHTML += `<tr>
    <th scope="row">${indiceCorregido}</th>
    <td>${juego.nombre}</td>
    <td class="text-truncate ancho pe-5">
      ${juego.descripcion}
    </td>
    <td class="text-truncate ancho pe-5">
      ${juego.imagen}
    </td>
    <td>${juego.categoria}</td>
    <td>
      <button
        type="button"
        class="btn btn-warning mx-1"
        data-bs-toggle="modal"
        data-bs-target="#Modal"
      >
        <i class="bi bi-pencil-square"></i></button
      ><button type="button" class="btn btn-danger mx-1" onclick="borrarJuego('${juego.codigo}')">
        <i class="bi bi-x-square"></i>
      </button>
    </td>
  </tr>`
}


function prepararFormulario(e){
  e.preventDefault();
  crearJuego();
}

function crearJuego(){
  // Validar el formulario
  let resumenErrores = sumarioValidaciones(nombre.value, descripcion.value, imagen.value, categoria.value, precio.value, desarrollador.value, anio.value, plataforma.value, sistemaOperativo.value, procesadorAmd.value, procesadorIntel.value, memoria.value, tGraficaAmd.value, tGraficaNvidia.value);
  console.log(plataforma.value)
  if(resumenErrores.length === 0){
    // Creo el juego
    mostrarAlert(false, '');
  let nuevoJuego = new VideoJuego(nombre.value, descripcion.value, imagen.value, categoria.value, precio.value, desarrollador.value, anio.value, plataforma.value, sistemaOperativo.value, procesadorAmd.value, procesadorIntel.value, memoria.value, tGraficaAmd.value, tGraficaNvidia.value);
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
  if (listaJuegos.length > 1) {
    crearFila(nuevoJuego, listaJuegos.length)
  } else {
    let bodyTablaJuegos = document.querySelector("#body-tabla-admin")
    bodyTablaJuegos.innerHTML = ""
    crearFila(nuevoJuego, listaJuegos.length)
  }
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