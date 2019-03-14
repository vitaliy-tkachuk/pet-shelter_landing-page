class PetModal {
  constructor(petsUrl, petId, renderContainer) {
    fetch(petsUrl)
      .then(result => result.json())
      .then(pets => {
        console.log(pets);
        const pet = pets.find(pet => pet.id === petId);
        this.renderModalContent(renderContainer, pet);
      });
  }

  renderModalContent(renderContainer, pet) {
    const modalContentHtml = `
    <img class="modal__photo" id="pet-photo" src="images/pets/${pet.photo}" alt="${pet.name} photo">
    <div class="modal__text-content">
      <h4 class="modal__header" id="pet-name">${pet.name}</h4>
      <h5 class="modal__sub-header" id="pet-breed">${pet.breed}</h5>
      <p class="modal__description" id="pet-description">${pet.description}</p>
      <ul class="modal__list">
      <li class="modal__list-item"><b>Age:</b> <span id="pet-age">${pet.age}</span></li>
      <li class="modal__list-item"><b>Sex:</b> <span id="pet-sex">${pet.sex}</span></li>
        <li class="modal__list-item"><b>Vaccination:</b> <span id="pet-vaccination">${pet.vaccination}</span></li>
        <li class="modal__list-item"><b>Diseases:</b> <span id="pet-diseases">${pet.diseases}</span></li>
        <li class="modal__list-item"><b>Parasites:</b> <span id="pet-parasites">${pet.parasites}</span></li>
      </ul>
    </div>
    `;
    renderContainer.innerHTML = modalContentHtml;
  }
}
