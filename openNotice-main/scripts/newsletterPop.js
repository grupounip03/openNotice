var popUpState = false;
var isBlocking = false;

var btnLoginNewsletter = document.querySelector('.btn-login-newsletter');
if (btnLoginNewsletter) {
   btnLoginNewsletter.addEventListener('click', () => {
      isBlocking = true;
      setTimeout(() => {
         isBlocking = false;
      }, 1500);
   });
}

var checkboxNewsletter = document.querySelector('#checkbox-newsletter');
if (checkboxNewsletter) {
   checkboxNewsletter.addEventListener('blur', () => {
      if (popUpState == true && !isBlocking) {
         popUpState = false;
         var loginPopUp = document.querySelector('.login-pop-up');
         if (loginPopUp) {
            loginPopUp.classList.remove('open-popup');
         }
      }
   });
}

if (btnLoginNewsletter) {
   btnLoginNewsletter.addEventListener('click', () => {
      var loginPopUp = document.querySelector('.login-pop-up');
      if (loginPopUp) {
         if (popUpState == false) {
            popUpState = true;
            loginPopUp.classList.add('open-popup');
            var checkboxNewsletter = document.querySelector('#checkbox-newsletter');
            if (checkboxNewsletter) {
               checkboxNewsletter.focus();
            }
         } else {
            popUpState = false;
            loginPopUp.classList.remove('open-popup');
            var checkboxNewsletter = document.querySelector('#checkbox-newsletter');
            if (checkboxNewsletter) {
               checkboxNewsletter.blur();
            }
         }
      }
   });
}

var specialElements = document.querySelectorAll('.special');
if (specialElements) {
   Array.from(specialElements).forEach(item => {
      item.addEventListener('click', () => {
         isBlocking = true;
         setTimeout(() => {
            isBlocking = false;
         }, 1500);
      });
   });
}

var inputElement = document.querySelector('.input');
if (inputElement) {
   let placeholderState = false;
   inputElement.addEventListener('focus', function () {
      if (placeholderState == false) {
         placeholderState = true;
         inputElement.placeholder = '';
      } else {
         placeholderState = false;
         inputElement.placeholder = 'Buscar';
      }
   });

   inputElement.addEventListener('blur', function () {
      if (placeholderState == false) {
         placeholderState = true;
         inputElement.placeholder = '';
      } else {
         placeholderState = false;
         inputElement.placeholder = 'Buscar';
      }
   });
}
