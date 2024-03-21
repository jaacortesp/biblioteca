// script.js

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm_password').value;
    var emailError = document.getElementById('emailError');
    var passwordError = document.getElementById('passwordError');
    var isValid = true;
  
    // Validar el formato del correo electrónico
    if (!email.includes('@')) {
      emailError.textContent = 'El correo electrónico debe contener "@"';
      isValid = false;
    } else {
      emailError.textContent = '';
    }
  
    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      passwordError.textContent = 'Las contraseñas no coinciden';
      isValid = false;
    } else {
      passwordError.textContent = '';
    }
  
    // Evitar que el formulario se envíe si alguna validación falla
    if (!isValid) {
      event.preventDefault();
    }
  });  