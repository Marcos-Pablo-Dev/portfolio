    /*-- Conectando o Emailjs --*/

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const serviceId = "service_e76pzeo";
    const templateId = "template_r8ue21q";

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }

    emailjs.send(serviceId, templateId, formData).then(() => {
        alert('Sua mensagem foi enviada');
    }).catch((error) => {
        console.log('erro no envio', error);
    }).finally();
})