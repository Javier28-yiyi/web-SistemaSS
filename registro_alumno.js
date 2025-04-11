// registro_alumno.js
document.getElementById('registroButton').addEventListener('click', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;

    if (!nombre || !email) {
        alert('Por favor complete todos los campos');
    } else {
        alert('Formulario completado correctamente');
        // Aquí puedes enviar el formulario o realizar alguna acción adicional
    }
});
