$(document).ready(function() { // Espera a que el documento esté completamente cargado
    $('#contactForm').submit(function(e) { // Selecciona el formulario con el ID 'contactForm' y se suscribe al evento de envío del formulario
        e.preventDefault(); // Evita que el formulario se envíe de manera predeterminada (recarga la página)

        var name = $('#name').val(); // Obtiene el valor del campo de entrada de nombre
        var email = $('#email').val(); // Obtiene el valor del campo de entrada de correo electrónico
        var message = $('#message').val(); // Obtiene el valor del campo de entrada de mensaje

        // Validación simple para asegurarse de que los campos no estén vacíos
        if (name === '' || email === '' || message === '') {
            alert('Por favor, complete todos los campos.'); // Muestra una alerta si algún campo está vacío
            return; // Sale de la función sin enviar el formulario
        }

        // PROXIMA SEMANA.

        $('#contactForm')[0].reset(); // Reinicia el formulario después de enviarlo, borrando los valores de los campos
    });
});
