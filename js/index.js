/* Owl.Carousel */
$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ['🠨', '🠪'],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: true,
      },
      800: {
        items: 3,
        nav: true,
      },
    },
  });
});

/* END: Owl.Carousel */

/* Modal */

const modalElements = document.querySelectorAll('.modal-overlay, .modal');
const modalButtons = document.querySelectorAll('.friends__card-button, .modal__close');

modalButtons.forEach(button => {
  button.addEventListener('click', () => {
    modalElements.forEach(modalElement => {
      modalElement.classList.toggle('active');
    });
  });
});

/* END: Modal */
