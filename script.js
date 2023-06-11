// Obtener referencia al formulario y al campo de entrada de correo electrónico
var form = document.getElementById('subscribe-form');
var emailInput = document.getElementById('email-input');

// Agregar un event listener al formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  var email = emailInput.value; // Obtener el valor del campo de entrada de correo electrónico

  if (email) {
    alert('¡Gracias por suscribirte! Te llegarán las novedades a: ' + email);
    emailInput.value = ''; // Limpiar el campo de entrada después de enviar
  } else {
    alert('Por favor, ingresa tu correo electrónico.');
  }
});