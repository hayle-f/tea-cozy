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
    $('.nav-links a').on('click', function(event) {      
      event.preventDefault()
  
      var target = $(this.getAttribute('href'));

      if (target) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000); 
      }
    });
  });