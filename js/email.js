// Inicializar el SDK de EmailJS
emailjs.init("XzPx6OegDsizKVycm4QIH");

// Configurar el formulario para enviar el correo electrónico
const form = document.getElementById("contact-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Obtener los datos del formulario
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  // Enviar el correo electrónico a través de EmailJS
  const templateParams = {
    from_name: name,
    from_email: email,
    message: message,
  };
  emailjs.send("service_68aft0t", "template_pjno36a", templateParams).then(
    (response) => {
      console.log("Correo electrónico enviado", response);
    },
    (error) => {
      console.error("Error al enviar el correo electrónico", error);
    }
  );
});
