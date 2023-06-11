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

const encabezados = document.querySelectorAll('.contenedor .encabezado');
const enlaces = document.querySelectorAll('#enlaces a');

const observer = new IntersectionObserver((entradas, observador) => {
entradas.forEach(entrada => {
    if(entrada.isIntersecting) {
        const id = '#' + entrada.target.id;
        history.pushState({}, '', id);

        enlaces.forEach(enlace => {
            enlace.classList.remove('activo');
            
            const href = enlace.attributes.href.nodeValue;
            if(href == id){
                enlace.classList.add('activo');
            }
        });
    }
});
}, {
    threshold: 1,
    rootMargin: '0px 0px -50% 0px'
});

encabezados.forEach(encabezado => {
    observer.observe(encabezado);
});