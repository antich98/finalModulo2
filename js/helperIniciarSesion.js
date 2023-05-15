//EXPRESIONES REGULARES PARA VALIDAR MAIL:
//^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$
//PARA VALIDAR CONTRASEÑA:
//^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$

// Espera a que el documento HTML se cargue completamente antes de ejecutar el código
window.onload = function () {
  const botonIniciarSesion = document.getElementById("botonIniciarSesion");
  const botonCerrarSesion = document.getElementById("botonCerrarSesion");
  const enlaceIniciarSesion = document.getElementById("enlaceIniciarSesion");
  const enlaceAdministrador = document.getElementById("enlaceAdministrador");

  // Asigna un evento 'click' al botón de iniciar sesión
  botonIniciarSesion.addEventListener("click", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtén los valores de correo electrónico y contraseña ingresados por el usuario
    const correoElectronico = document.getElementById("inputEmail4").value;
    const contrasena = document.getElementById("inputPassword4").value;

    // Comprueba si el correo electrónico y la contraseña son válidos
    if (
      correoElectronico === "admin@admin.administrador.com" &&
      contrasena === "Administrador1."
    ) {
      // Muestra una alerta de bienvenida
      alert("¡Bienvenido!");

      // Cierra la ventana modal
      const modalIniciarSesion = document.getElementById("modalIniciarSesion");
      const modalBootstrap = bootstrap.Modal.getInstance(modalIniciarSesion);
      modalBootstrap.hide();

      // Muestra el enlace de Administrador en el navbar
      enlaceAdministrador.classList.remove("d-none");

      // Cambia el texto del enlace "Iniciar sesión" a "Cerrar sesión"
      enlaceIniciarSesion.textContent = "Cerrar sesión";
    } else {
      // Muestra un mensaje de error
      alert("Correo electrónico o contraseña incorrectos");
    }
  });

  // Asigna un evento 'click' al botón de cerrar sesión
  botonCerrarSesion.addEventListener("click", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Oculta el enlace de Administrador en el navbar
    enlaceAdministrador.classList.add("d-none");

    // Cambia el texto del enlace "Cerrar sesión" a "Iniciar sesión"
    enlaceIniciarSesion.textContent = "Iniciar sesión";

    // Muestra una alerta de cierre de sesión
    alert("Sesión cerrada correctamente");
  });
};

