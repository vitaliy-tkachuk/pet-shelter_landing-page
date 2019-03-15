/* Pets List Render */
const petsListContainer = document.querySelector('.pets-carousel');
const petsList = new PetsList('data/pets.json', petsListContainer);
/* END: Pets List Render */

/* Mobile Navbar */

const hamburger = document.getElementById('menu-button');
const menuMobile = document.getElementsByClassName('menu-mobile')[0];
const menuMobileItems = document.querySelectorAll('.menu-mobile__item');

hamburger.onclick = () => {
  document.querySelector('body').classList.toggle('lock-scroll');
  hamburger.classList.toggle('active');
  menuMobile.classList.toggle('menu-mobile--active');
  menuMobileItems.forEach(menuMobileItem => menuMobileItem.classList.toggle('menu-mobile__item--active'));
};

/* END: Mobile Navbar */
