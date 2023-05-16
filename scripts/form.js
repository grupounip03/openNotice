const form = document.getElementById('some-form');
const emailPopup = document.querySelector('.pop-up-email');
const submitButton = document.querySelector('.email-submit');
const closeEmailPopup = document.querySelector('.email-pop-up-close-button');
var isOpen = false;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailInput = document.getElementById('input-email');
  const email = emailInput.value;
  console.log(email);
});

submitButton.addEventListener('click', () => {
  const emailInput = document.getElementById('input-email');
  const email = emailInput.value.trim();
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  if (emailRegex.test(email)) {
    if (isOpen == false) {
      emailPopup.classList.add('open-email');
      emailPopup.classList.remove('close-email');
      isOpen = true;
    }
  } else {
    window.alert('Email inválido');
  }
});

closeEmailPopup.addEventListener('click', () => {
  if (isOpen) {
    emailPopup.classList.remove('open-email');
    emailPopup.classList.add('close-email');
    isOpen = false;
  }
});
