let nombre = document.getElementById('nombre').value;
let apellido = document.getElementById('apellido').value;
let email = document.getElementById('email').value;
let contrasena = document.getElementById('contrasena').value;
let repetirContrasena = document.getElementById('repetir-contrasena').value;
let terminos = document.getElementById('terminos').checked;


if (nombre && apellido && email && contrasena && repetirContrasena && 
   contrasena.length >= 6 && contrasena === repetirContrasena && terminos) {
   showAlertSuccess();
} else {
   showAlertError();
}