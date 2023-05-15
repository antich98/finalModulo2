import VideoJuego from "./classVideoJuego.js";
import { sumarioValidaciones } from "./helpers.js";

// Variables globales
let formJuego = document.getElementById("formJuego");
let codigo = document.getElementById("codigo"),
nombre = document.getElementById("nombre"),
descripcion = document.getElementById("descripcion"),
imagenUno = document.getElementById("imagenUno"),
imagenDos = document.getElementById("imagenDos"),
imagenTres = document.getElementById("imagenTres"),
imagenCuatro = document.getElementById("imagenCuatro"),
imagenCinco = document.getElementById("imagenCinco"),
imagenSeis = document.getElementById("imagenSeis"),
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

let modalJuego = new bootstrap.Modal(document.getElementById("Modal"));
let verificarCrearJuego = true; // verificarCrearJuego = true entonces se crea el juego, cuando sea false se edita
const btnAgregarJuego = document.getElementById("btnAgregarJuego");


let listaJuegos = localStorage.getItem("listaJuegos");

// Si listaJuegos está vacía
if(!listaJuegos){
  listaJuegos = [];
} else {
  listaJuegos = JSON.parse(listaJuegos).map((videoJuego) => new VideoJuego(
    videoJuego.nombre, 
    videoJuego.descripcion, 
    videoJuego.imagenUno, 
    videoJuego.imagenDos, 
    videoJuego.imagenTres, 
    videoJuego.imagenCuatro, 
    videoJuego.imagenCinco, 
    videoJuego.imagenSeis,
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
btnAgregarJuego.addEventListener("click", mostrarModalJuego);

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
      ${juego.precio}
    </td>
    <td>${juego.categoria}</td>
    <td>
      <button
        type="button"
        class="btn btn-warning mx-1"
        onclick="prepararJuego('${juego.codigo}')"
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
  if(verificarCrearJuego){
  crearJuego();
}else{
  editarJuego();
}
}

function crearJuego(){
  // Validar el formulario
  let resumenErrores = sumarioValidaciones(nombre.value, descripcion.value, imagenUno.value, imagenDos.value, imagenTres.value, imagenCuatro.value, imagenCinco.value, imagenSeis.value, categoria.value, precio.value, desarrollador.value, anio.value, plataforma.value, sistemaOperativo.value, procesadorAmd.value, procesadorIntel.value, memoria.value, tGraficaAmd.value, tGraficaNvidia.value);
  console.log(plataforma.value)
  if(resumenErrores.length === 0){
    // Creo el juego
    mostrarAlert(false, '');
  let nuevoJuego = new VideoJuego(nombre.value, descripcion.value, imagenUno.value, imagenDos.value, imagenTres.value, imagenCuatro.value, imagenCinco.value, imagenSeis.value, categoria.value, precio.value, desarrollador.value, anio.value, plataforma.value, sistemaOperativo.value, procesadorAmd.value, procesadorIntel.value, memoria.value, tGraficaAmd.value, tGraficaNvidia.value);
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

function mostrarAlert(estado, resumenErrores){("alertMsjError");
  if(estado){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      html: `<p class = "text-lg-start text-danger">${resumenErrores}</p>`,
      footer: '<p>RocketPower 2023</p>',
      confirmButtonColor: "#bf01d3",
    })
  }
}
function limpiarFormulario(){
  formJuego.reset();
}

// juego
window.borrarJuego = (codigo) => {
  Swal.fire({
    title: "¿Esta seguro de eliminar el video juego?",
    text: "Recuerda que no puedes recuperar el juego cuando lo borras",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#bf01d3",
    cancelButtonColor: "#d33",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      let posicionVideoJuego = listaJuegos.findIndex((videoJuego)=> videoJuego.codigo === codigo);
      listaJuegos.splice(posicionVideoJuego, 1);
      localStorage.setItem("listaJuegos", JSON.stringify(listaJuegos));
      let tablaJuego = document.querySelector("tbody");
      tablaJuego.removeChild(tablaJuego.children[posicionVideoJuego]);
      window.location.reload();
      Swal.fire("Juego eliminada", "El juego seleccionado fue eliminado correctamente", "success");
    }
  });
};
window.prepararJuego = (codigoBuscado) => {
  console.log(codigo, 'desde preparar juego');
  // Mostrar la ventana modal con los datos de la película
  modalJuego.show();
  // Buscar el juego y cargarlo en el formulario
  let juegoBuscado = listaJuegos.find((juego) => juego.codigo === codigoBuscado);
  console.log(juegoBuscado);
  codigo.value = juegoBuscado.codigo;
  nombre.value = juegoBuscado.nombre;
  descripcion.value = juegoBuscado.descripcion;
  imagenUno.value = juegoBuscado.imagenUno;
  imagenDos.value = juegoBuscado.imagenDos;
  imagenTres.value = juegoBuscado.imagenTres;
  imagenCuatro.value = juegoBuscado.imagenCuatro;
  imagenCinco.value = juegoBuscado.imagenCinco;
  imagenSeis.value = juegoBuscado.imagenSeis;
  categoria.value = juegoBuscado.categoria;
  precio.value = juegoBuscado.precio;
  desarrollador.value = juegoBuscado.desarrollador;
  anio.value = juegoBuscado.anio;
  plataforma.value = juegoBuscado.plataforma;
  sistemaOperativo.value = juegoBuscado.sistemaOperativo;
  procesadorAmd.value = juegoBuscado.procesadorAmd;
  procesadorIntel.value = juegoBuscado.procesadorIntel;
  memoria.value = juegoBuscado.memoria;
  tGraficaAmd.value = juegoBuscado.tGraficaAmd;
  tGraficaNvidia.value = juegoBuscado.tGraficaNvidia;
  // Cambio la variable para editar el juego en el submit
  verificarCrearJuego = false;
}
function editarJuego(){
  console.log('Aquí tengo que editar el juego')
  // Buscar la posición en el array de juegos, del juego que coincida con el código
  let posicionJuego = listaJuegos.findIndex((juego) => juego.codigo === codigo.value);
  console.log(posicionJuego);
  listaJuegos[posicionJuego].nombre = nombre.value;
  listaJuegos[posicionJuego].descripcion = descripcion.value;
  listaJuegos[posicionJuego].imagenUno = imagenUno.value;
  listaJuegos[posicionJuego].imagenDos = imagenDos.value;
  listaJuegos[posicionJuego].imagenTres = imagenTres.value;
  listaJuegos[posicionJuego].imagenCuatro = imagenCuatro.value;
  listaJuegos[posicionJuego].imagenCinco = imagenCinco.value;
  listaJuegos[posicionJuego].imagenSeis = imagenSeis.value;
  listaJuegos[posicionJuego].categoria = categoria.value;
  listaJuegos[posicionJuego].precio = precio.value;
  listaJuegos[posicionJuego].desarrollador = desarrollador.value;
  listaJuegos[posicionJuego].anio = anio.value;
  listaJuegos[posicionJuego].plataforma = plataforma.value;
  listaJuegos[posicionJuego].sistemaOperativo = sistemaOperativo.value;
  listaJuegos[posicionJuego].procesadorAmd = procesadorAmd.value;
  listaJuegos[posicionJuego].procesadorIntel = procesadorIntel.value;
  listaJuegos[posicionJuego].memoria = memoria.value;
  listaJuegos[posicionJuego].tGraficaAmd = tGraficaAmd.value;
  listaJuegos[posicionJuego].tGraficaNvidia = tGraficaNvidia.value;
  // Actualizar el local storage
  localStorage.setItem("listaJuegos", JSON.stringify(listaJuegos));
  // Actualizar los datos de la tabla
  let tablaJuego = document.querySelector("tbody");
  tablaJuego.children[posicionJuego].children[1].innerHTML = nombre.value;
  tablaJuego.children[posicionJuego].children[2].innerHTML = descripcion.value;
  tablaJuego.children[posicionJuego].children[3].innerHTML = precio.value;
  tablaJuego.children[posicionJuego].children[4].innerHTML = categoria.value;
    // Mostrar cartel
    Swal.fire(
      'Juego editado',
      'El juego fue editado correctamente',
      'success'
    )
  // Limpiar el formulario
  limpiarFormulario();
  // Cerrar ventana modal
  modalJuego.hide(); 
}
function mostrarModalJuego(){
  // Limpiar el formulario
  limpiarFormulario();
  // Mostrar ventana modal
  modalJuego.show();
  // Cambiar la variable booleana
  verificarCrearJuego = true;
}