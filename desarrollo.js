// Agrega esta porción de JavaScript después de tu elemento .logo en el HTML o en un archivo .js

document.addEventListener("DOMContentLoaded", function() {
    const logo = document.querySelector(".logo");
    setTimeout(function() {
        logo.classList.add("show");
    }, 3000);
});
// Agrega esta porción de JavaScript después de tu elemento .img en el HTML o en un archivo .js

document.addEventListener("DOMContentLoaded", function() {
    const img = document.querySelector(".img");
    setTimeout(function() {
        img.classList.add("show");
    }, 4000);
});


window.onload = function() {
    const title = document.querySelector('.title');
    setTimeout(function() {
        title.classList.add('show-title');
    }, 3500); // 3 segundos de retraso
};


document.getElementById("subscribe-btn").addEventListener("click", function() {
    const email = document.getElementById("email").value;

    // Simulación: Enviar el correo electrónico a tu backend para manejar la suscripción
    if (email !== "") {
        alert(`¡Gracias por suscribirte con el correo: ${email}!`);
    } else {
        alert("Por favor, ingresa un correo electrónico válido.");
    }
});