const showImageBtn = document.getElementById('show-image');
showImageBtn.addEventListener('click', () => {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  const image = document.createElement('img');
  image.src = '../images/psycholog-removebg.png';
  image.classList.add('floating-image');

  const logo = document.createElement('p');
  logo.textContent = 'Psycho-Log';
  logo.classList.add('floating-text');

  const text = document.createElement('p');
  text.textContent = 'Psycho-Log';
  text.classList.add('floating-text');

  overlay.appendChild(logo);
  overlay.appendChild(image);

  const spacer = document.createElement('div');
  spacer.classList.add('spacer');
  overlay.appendChild(spacer);

  overlay.appendChild(text);

  document.body.appendChild(overlay);

  overlay.addEventListener('click', function() {
    document.body.removeChild(overlay);
  });
});

