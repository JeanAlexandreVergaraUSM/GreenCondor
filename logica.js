/* LOGICA.JS - Envío silencioso con EmailJS */

// --- CONFIGURACIÓN (Rellena esto con tus datos de EmailJS) ---
// Como no tengo tus claves reales, pongo marcadores. Tienes que reemplazarlos.
const SERVICE_ID = "service_253zu15"; 
const TEMPLATE_ID = "template_5a2zmd9"; // Pega aquí tu Template ID
const PUBLIC_KEY = "tNF1isIZRL8eNaKnw";    // Pega aquí tu Public Key

// Inicializamos EmailJS
(function() {
    emailjs.init(PUBLIC_KEY);
})();


// --- 1. LÓGICA FORMULARIO RÁPIDO (Banner) ---
const quickForm = document.getElementById('quickForm');

if (quickForm) {
    quickForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que se recargue la página

        // Cambiar texto del botón para que el usuario sepa que está cargando
        const btn = quickForm.querySelector('button');
        const textoOriginal = btn.innerText;
        btn.innerText = 'Enviando...';

        // Preparamos los datos para enviar
        const templateParams = {
            from_name: document.getElementById('quickName').value,
            phone: document.getElementById('quickPhone').value,
            message: "SOLICITUD RÁPIDA: El cliente quiere que lo contactes a este número/whatsapp.",
            // Estos campos extra ayudan a organizar tu correo
            reply_to: document.getElementById('quickPhone').value 
        };

        // Enviar el correo
        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
            .then(function() {
                // Si sale bien:
                alert('¡Recibido! Nos pondremos en contacto contigo pronto.');
                quickForm.reset(); // Limpia el formulario
                btn.innerText = textoOriginal;
            }, function(error) {
                // Si falla:
                alert('Hubo un error al enviar. Por favor contáctanos al WhatsApp.');
                console.log('FAILED...', error);
                btn.innerText = textoOriginal;
            });
    });
}


// --- 2. LÓGICA FORMULARIO COMPLETO (Abajo) ---
const fullForm = document.getElementById('fullContactForm');

if (fullForm) {
    fullForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const btn = fullForm.querySelector('button');
        const textoOriginal = btn.innerText;
        btn.innerText = 'Enviando...';

        // Recopilamos todos los datos
        const nombre = document.getElementById('fullName').value;
        const email = document.getElementById('fullEmail').value;
        const telefono = document.getElementById('fullPhone').value;
        const servicio = document.getElementById('fullService').value;
        const mensajeUsuario = document.getElementById('fullMessage').value;

        // Armamos el mensaje completo
        const mensajeFinal = `Servicio: ${servicio} \n Email: ${email} \n Mensaje: ${mensajeUsuario}`;

        const templateParams = {
            from_name: nombre,
            phone: telefono,
            message: mensajeFinal
        };

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
            .then(function() {
                alert('¡Gracias! Hemos recibido tu cotización detallada.');
                fullForm.reset();
                btn.innerText = textoOriginal;
            }, function(error) {
                alert('Error al enviar. Intenta por WhatsApp.');
                console.log('FAILED...', error);
                btn.innerText = textoOriginal;
            });
    });

}
