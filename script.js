/*  JavaScript puro
const navLinks = document.querySelectorAll("nav-links a");

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntroView({
            behavior: 'smooth',
            block: 'start'
        });
    });
})
*/


// jquery
$(document).ready(function() {
    // Al hacer clic en cualquier enlace de la navegación
    $('.nav-links a').on('click', function(event) {
      // Evitar el comportamiento predeterminado del enlace
      event.preventDefault();

      // Obtener el destino del enlace
      var target = $(this.getAttribute('href'));

      // Si el destino existe
      if (target) {
        // Hacer scroll suave al destino
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000); // 1000 milisegundos = 1 segundo
      }
    });
  });