var popUpState = false;
var isBlocking = false;

document
   .querySelector('.btn-login-newsletter')
   .addEventListener('click', () => {
      isBlocking = true;
      setTimeout(() => {
         isBlocking = false;
      }, 1500);
   });

document.querySelector('#checkbox-newsletter').addEventListener('blur', () => {
   if (popUpState == true && !isBlocking) {
      popUpState = false;
      document.querySelector('.login-pop-up').classList.remove('open-popup');
   }
});

document
   .querySelector('.btn-login-newsletter')
   .addEventListener('click', () => {
      if (popUpState == false) {
         popUpState = true;
         document.querySelector('.login-pop-up').classList.add('open-popup');
         document.querySelector('#checkbox-newsletter').focus();
      } else {
         popUpState = false;
         document.querySelector('.login-pop-up').classList.remove('open-popup');
         document.querySelector('#checkbox-newsletter').blur();
      }
   });

Array.from(document.querySelectorAll('.special')).forEach(item => {
   item.addEventListener('click', () => {
      isBlocking = true;
      setTimeout(() => {
         isBlocking = false;
      }, 1500);
   });
});

let placeholderState = false;
document.querySelector('.input').addEventListener('focus', function () {
   if (placeholderState == false) {
      placeholderState = true;
      document.querySelector('.input').placeholder = '';
   } else {
      placeholderState = false;
      document.querySelector('.input').placeholder = 'Buscar';
   }
});

document.querySelector('.input').addEventListener('blur', function () {
   if (placeholderState == false) {
      placeholderState = true;
      document.querySelector('.input').placeholder = '';
   } else {
      placeholderState = false;
      document.querySelector('.input').placeholder = 'Buscar';
   }
});
