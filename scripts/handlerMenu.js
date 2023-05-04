var isOpen = false;
document.querySelector('.hamburguer-menu').addEventListener('click', () => {
   if (isOpen) {
      document.querySelector('.navbar').classList.remove('open');
      isOpen = false;
   } else {
      document.querySelector('.navbar').classList.add('open');
      isOpen = true;
   }
});

document.querySelector('.navbar').addEventListener('click', close);

function close() {
   document.querySelector('.navbar').classList.remove('open');
   isOpen = false;
   console.log('ok');
}
