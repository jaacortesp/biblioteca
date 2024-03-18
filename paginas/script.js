$(document).ready(function() { // Espera a que el documento esté completamente cargado
    $('#contactForm').submit(function(e) { // Selecciona el formulario con el ID 'contactForm' y se suscribe al evento de envío del formulario
        event.preventDefault(); // Evita que el formulario se envíe de manera predeterminada (recarga la página)

        var nombreCompleto = document.getElementById('nombre-completo').value;
        var usuario = document.getElementById('usuario').value;
        var correo = document.getElementById('correo').value;
        var contrasena = document.getElementById('contrasena').value;
        var repetirContrasena = document.getElementById('repetir-contrasena').value;
        var fechaNacimiento = document.getElementById('fecha-nacimiento').value;
        var direccion = document.getElementById('direccion').value;

        if (!nombreCompleto || !usuario || !correo || !contrasena || !repetirContrasena || !fechaNacimiento) {
            alert('Estos campos son obligatorios');
            return;
        }
    
        if (correo.indexOf('@') === -1) {
            alert('El correo electrónico debe seguir el formato de un email');
            return;
        }
    
        if (contrasena !== repetirContrasena) {
            alert('Las contraseñas no coinciden');
            return;
        }

        if (!/(?=.*\d)(?=.*[A-Z])/.test(contrasena)) {
            alert('La contraseña debe contener al menos un número y una letra en mayúscula');
            return;
        }
    
        var fechaNacimientoDate = new Date(fechaNacimiento);
        var fechaActual = new Date();
        var edad = fechaActual.getFullYear() - fechaNacimientoDate.getFullYear();
        if (edad < 13) {
            alert('Debes tener al menos 13 años para registrarte');
            return;
        }

        if (contrasena.length < 6 || contrasena.length > 18) {
            alert('La contraseña debe tener entre 6 y 18 caracteres');
            return;
        }

        if (!direccion) {
            alert('Opcional');
        }

        alert('Formulario enviado correctamente');
        formulario.submit();
    });
});