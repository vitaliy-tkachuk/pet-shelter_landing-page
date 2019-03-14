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
    pets.forEach(pet => {
      petsListHtml += `<div class="friends__card">
      <img class="friends__photo" src="images/pets/${pet.photo}" alt="${pet.name} photo">
      <h4 class="friends__card-title">${pet.name}</h4>
      <div class="friends__card-button button" data-id="${pet.id}">Learn More</div>
    </div>`;
    });
    container.innerHTML = petsListHtml;
  }

  addEventListeners() {
    const modalElements = document.querySelectorAll('.modal-overlay, .modal');
    const modalContentContainer = document.querySelector('.modal__content');
    const modalOpenButtons = document.querySelectorAll('.friends__card-button');
    const modalCloseButton = document.querySelector('.modal__close');

    modalOpenButtons.forEach(button => {
      button.addEventListener('click', e => {
        const petId = e.target.dataset.id;
        const petModal = new PetModal('data/pets.json', petId, modalContentContainer);
        modalElements.forEach(modalElement => {
          modalElement.classList.add('active');
        });
      });
    });
    modalCloseButton.addEventListener('click', e => {
      modalElements.forEach(modalElement => {
        modalElement.classList.remove('active');
      });
    });
  }
}
