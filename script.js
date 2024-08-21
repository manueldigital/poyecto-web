document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío real del formulario para demostración

    // Mostrar el mensaje de agradecimiento
    var thankYouMessage = document.getElementById('thank-you-message');
    thankYouMessage.textContent = "Gracias por enviar el formulario. Me pondré en contacto contigo pronto.";
    thankYouMessage.style.display = 'block';

    // Aquí podrías agregar código para enviar el formulario usando AJAX, si es necesario

    // Opcionalmente, limpiar el formulario
    this.reset();
});
