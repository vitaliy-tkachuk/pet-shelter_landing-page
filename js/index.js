/* Owl.Carousel */
$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: false,
    nav: true,
    dots: true,
    mouseDrag: false,
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
      1200: {
        items: 4,
        nav: true,
      },
    },
  });
});

/* END: Owl.Carousel */

/* Pets List Render */
const petsListContainer = document.querySelector('.pets-carousel');
const petsList = new PetsList('data/pets.json', petsListContainer);
/* END: Pets List Render */

/* Mobile Navbar */

const hamburger = document.getElementById('menu-button');
const menuMobile = document.getElementsByClassName('menu-mobile')[0];
const menuMobileItems = document.querySelectorAll('.menu-mobile__item');

hamburger.onclick = () => {
  hamburger.classList.toggle('active');
  menuMobile.classList.toggle('menu-mobile--active');
  menuMobileItems.forEach(menuMobileItem => menuMobileItem.classList.toggle('menu-mobile__item--active'));
};

/* END: Mobile Navbar */
