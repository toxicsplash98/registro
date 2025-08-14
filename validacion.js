function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById('regBtn').addEventListener('click', function () {
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const email = document.getElementById('email').value;
  const contrasena = document.getElementById('password1').value;
  const repetirContrasena = document.getElementById('password2').value;
  const terminos = document.getElementById('terminos').checked;

  if (nombre && apellido && email && contrasena && repetirContrasena && contrasena.length >= 6 && contrasena === repetirContrasena && terminos) {
    showAlertSuccess();
  } else {
    showAlertError();
  }
});