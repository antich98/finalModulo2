//EXPRESIONES REGULARES PARA VALIDAR MAIL:
//^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$
//PARA VALIDAR CONTRASEÑA:
//^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$

// Espera a que el documento HTML se cargue completamente antes de ejecutar el código
window.addEventListener("load", function () {
  const botonIniciarSesion = document.getElementById("botonIniciarSesion");
  const enlaceIniciarSesion = document.getElementById("enlaceIniciarSesion");
  const modalIniciarSesion = document.getElementById("modalIniciarSesion");

  // Obtiene la información de sesión guardada en el sessionStorage
  const sesionIniciada = sessionStorage.getItem("sesionIniciada");

  // Si la sesión está iniciada, muestra el enlace de Administrador en el navbar
  if (sesionIniciada) {
    document.getElementById("enlaceAdministrador").classList.remove("d-none");
    enlaceIniciarSesion.textContent = "Cerrar sesión";
  }
  // Asigna un evento 'click' al botón de iniciar sesión
  botonIniciarSesion.addEventListener("click", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores de correo electrónico y contraseña ingresados por el usuario
    const correoElectronico = document.getElementById("inputEmail4").value;
    const contrasena = document.getElementById("inputPassword4").value;

    // Comprueba si el correo electrónico y la contraseña son válidos
    if (
      correoElectronico === "admin@admin.administrador.com" &&
      contrasena === "Administrador1."
    ) {
      Swal.fire(
        '¡Bienvenido!',
        'Presiona Ok para continuar',
        'success'
      );
      //alert("¡Bienvenido!");

      // Oculta el modal de iniciar sesión
      modalIniciarSesion.classList.remove("show");
      modalIniciarSesion.style.display = "none";
      document.querySelector(".modal-backdrop").remove();

      // Muestra el enlace de Administrador en el navbar
      document.getElementById("enlaceAdministrador").classList.remove("d-none");

      // Cambia el texto del enlace "Iniciar sesión" a "Cerrar sesión"
      enlaceIniciarSesion.textContent = "Cerrar sesión";

      // Guarda la información de sesión en el sessionStorage
      sessionStorage.setItem("sesionIniciada", true);
    } else {
      alert("Correo electrónico o contraseña incorrectos");
    }
  });

  // Asigna un evento 'click' al enlace de cerrar sesión
  enlaceIniciarSesion.addEventListener("click", function (event) {
    event.preventDefault();

    // Si la sesión está iniciada, elimina la información de sesión del sessionStorage
    if (sessionStorage.getItem("sesionIniciada")) {
      sessionStorage.removeItem("sesionIniciada");

      // Oculta el enlace de Administrador en el navbar
      document.getElementById("enlaceAdministrador").classList.add("d-none");

      // Cambia el texto del enlace "Cerrar sesión" a "Iniciar sesión"
      enlaceIniciarSesion.textContent = "Iniciar sesión";
      // Muestra una alerta informando que la sesión se ha cerrado
      alert("Sesión cerrada");
      window.location.href = "../index.html";
    }
  });
});


