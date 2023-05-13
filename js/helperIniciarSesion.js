//EXPRESIONES REGULARES PARA VALIDAR MAIL:
//^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$
//PARA VALIDAR CONTRASEÑA:
//^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$
// Espera a que el documento HTML se cargue completamente antes de ejecutar el código
window.onload = function () {
    // Selecciona el botón de iniciar sesión por su clase CSS
    const botonIniciarSesion = document.querySelector(".btn-primary");
  
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
  
        // Redirige al usuario a la página de administrador.html
        window.location.href = "administrador.html";
      } else {
        // Muestra un mensaje de error
        alert("Correo electrónico o contraseña incorrectos");
      }
    });
  };
  