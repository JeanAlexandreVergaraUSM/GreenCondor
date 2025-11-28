# 🦅 Green Condor - Landing Page

Bienvenido al repositorio de **Green Condor**, una Landing Page moderna y funcional diseñada para una empresa de servicios de jardinería profesional y mantención de parcelas.

Este proyecto se centra en ofrecer una interfaz limpia, responsiva y con una **integración real de formularios de contacto** sin necesidad de un backend complejo, utilizando EmailJS.

![Estado del Proyecto](https://img.shields.io/badge/Estado-Terminado-success)
![Licencia](https://img.shields.io/badge/Licencia-MIT-blue)

## 💻 Tecnologías Utilizadas

El proyecto fue construido utilizando tecnologías web estándar y librerías modernas:

* ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) **HTML5:** Estructura semántica del sitio.
* ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) **CSS3:** Estilos personalizados, gradientes y efectos visuales.
* ![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white) **Bootstrap 5:** Para el sistema de grillas, responsividad y componentes de UI.
* ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) **JavaScript (Vanilla):** Lógica del cliente y manejo del DOM.
* 📧 **EmailJS:** Servicio para el envío de correos electrónicos directamente desde el frontend.

## ✨ Características Principales

1.  **Diseño Responsivo:** Se adapta perfectamente a móviles, tablets y escritorio.
2.  **Formularios Funcionales:**
    * **Formulario Rápido (Banner):** Captura nombre y teléfono.
    * **Formulario Detallado:** Captura datos completos para cotizaciones.
    * *Ambos envían una notificación automática al correo del administrador.*
3.  **Botón Flotante de WhatsApp:** Acceso directo para chatear con la empresa.
4.  **Feedback Visual:** Alertas y cambios de estado en los botones ("Enviando...", "¡Recibido!") para mejorar la experiencia de usuario (UX).
5.  **Secciones Informativas:** Inicio (Hero), Sobre Nosotros, Servicios y Contacto.

## ⚙️ Configuración de EmailJS

Para que los formularios funcionen correctamente en tu propio entorno, debes configurar tus credenciales en el archivo `logica.js`.

1.  Crea una cuenta gratuita en [EmailJS](https://www.emailjs.com/).
2.  Crea un **Email Service** (ej: Gmail) y un **Email Template**.
3.  Obtén tus claves: `Service ID`, `Template ID` y `Public Key`.
4.  Abre el archivo `logica.js` y reemplaza los valores:

```javascript
// logica.js
const SERVICE_ID = "TU_SERVICE_ID";
const TEMPLATE_ID = "TU_TEMPLATE_ID";
const PUBLIC_KEY = "TU_PUBLIC_KEY";
