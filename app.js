const nameInput = document.querySelector('input[name="name"]');

const form = document.querySelector('.contact-left');

let isFormValid = false;

const validateInputs = () => {
  // nameInput.nextElementSibling.classList.add('error-text');

  if (nameInput.value === '') {
    nameInput.nextElementSibling.classList.toggle('visible');
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validateInputs();
});

nameInput.addEventListener('input', () => {
  validateInputs();
});
