class PetsList {
  constructor(petsUrl, renderContainer) {
    fetch(petsUrl)
      .then(result => result.json())
      .then(pets => {
        this.pets = pets;
        this.renderPetsCards(renderContainer, pets);
        this.addEventListeners();
      });
  }
  getPetById(id) {
    return this.pets.find(el => el.id === id);
  }
  renderPetsCards(container, pets) {
    let petsListHtml = '';
    const carousel = $(container);

    carousel.trigger('destroy.owl.carousel');
    carousel
      .find('.owl-stage-outer')
      .children()
      .unwrap();
    carousel.removeClass('owl-center owl-loaded owl-text-select-on');

    pets.forEach(pet => {
      petsListHtml += `<div class="pets__card">
      <img class="pets__photo" src="images/pets/${pet.photo}" alt="${pet.name} photo">
      <h4 class="pets__card-title">${pet.name}</h4>
      <div class="pets__card-button button" data-id="${pet.id}">Learn More</div>
    </div>`;
    });
    container.innerHTML = petsListHtml;
    /* Initialization of Owl.Carousel */
    carousel.owlCarousel({
      loop: false,
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
        1200: {
          items: 4,
          nav: true,
        },
      },
    });
    /* END: Initialization of Owl.Carousel */
  }

  addEventListeners() {
    const modalElements = document.querySelectorAll('.modal-overlay, .modal');
    const modalContentContainer = document.querySelector('.modal__content');
    const modalOpenButtons = document.querySelectorAll('.pets__card-button');
    const modalCloseButton = document.querySelector('.modal__close');

    modalOpenButtons.forEach(button => {
      button.addEventListener('click', e => {
        const petId = e.target.dataset.id;
        const petModal = new PetModal('data/pets.json', petId, modalContentContainer);
        modalElements.forEach(modalElement => {
          modalElement.classList.add('active');
        });
        document.querySelector('body').classList.toggle('lock-scroll');
      });
    });
    modalCloseButton.addEventListener('click', e => {
      document.querySelector('body').classList.toggle('lock-scroll');
      modalElements.forEach(modalElement => {
        modalElement.classList.remove('active');
      });
    });
  }
}
